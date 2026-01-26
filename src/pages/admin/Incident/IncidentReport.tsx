import {
    AlertCircleIcon,
  AlertTriangleIcon,
  Cake,
  CheckCheck,
  ChevronRightIcon,
  ClipboardClock,
  Eye,
  FileArchive,
  FileIcon,
  Mail,
  MapPin,
  Pen,
  Phone,
  Plus,
  Search,
  User,
  Venus,
  X,
} from "lucide-react";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Hashids from "hashids";
import { calculateAge } from "../../../utils/extraFunctions.js";
import HtmlRenderer from "../../../layout/HTMLRenderer.js";
import { fetchDBSPartner, fetchIncidentAction, fetchIncidentActionByReport, fetchIncidentAttachments, fetchIncidentReportById, linkActionToCTAPartner, submitIncidentActionByReport, updateIncidentReportStatus } from "../../../utils/Requests/IncidentRequests.js";
import { ToastContainer, toast } from "react-toastify";
import Modal from "react-modal";
import { Controller, useForm, useWatch } from "react-hook-form";
import RichTextEditor from "../../../layout/RichTextEditor.js";
import { handleCreateEmployee } from "../../../utils/ResponseHandlers/EmployeeResponse.js";
import Tippy from "@tippyjs/react";

interface EmployeeData {
  userId: number;
  firstName: string;
  lastName: string;
  otherNames: string;
  profileImage: string;
  phone: string;
  email: string;
  identificationNumber: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  organisationId: number;
  role: string;
  countryName: string;
  stateName: string;
  cityName: string;
  birthPlace: string;
  lastAddress: string;
  currentAddressDuration: string;
}

interface IncidentReport {
  incidentReportId: number;
  incidentTitle: string;
  incidentTypeId: number;
  incidentType: string;
  incidentDate: string;
  description: string;
  incidentLocation: string;
  reportedById: number;
  accusedEmployeeId: number;
  recordedById: number;
  recorderName: string;
  reporterName: string;
  severityLevel: number;
  incidentStatus: number;
  dateCreated: string;
  countryId: string;
  countryName: string;
  stateName: string;
  cityName: string;
  accusedFirstName: string;
  accusedLastName: string;
}

interface IncidentType {
  name: string;
  actionTypeId: number;
}

export interface IncidentAttachment {
  attachmentId: number;
  incidentReportId: number;
  fileName: string;
  fileType: string;
  fileUrl: string;
  fileSize: number;
  dateCreated: string;
}

interface IncidentActionFormData {
  Description: string;
  StartDate: string;
  EndDate: string;
  ActionTypeId: string;
  AddEnd: boolean;
}

interface PartnerLinkFormData {
  PartnerId: string;
}

interface IncidentStatusFormData {
  IncidentStatus: string;
}

interface IncidentActionData {
  description: string;
  startDate: string;
  endDate: string;
  actionTypeId: string;
  actionId: string;
  actionTypeName: string;
  loggedById: string;
  loggedByFirstName: string;
  loggedByLastName: string;
  thirdParties: string[];
  dateCreated: string;
}

interface DBSPartner {
  partnerId: number;
  partnerName: string;
  countryId: string;
  countryName: string;
}

interface ActionFilterForm {
  ActionTypeId: string;
  LoggedByName: string;
}

const statusStyles: Record<number, string> = {
  1: 'bg-blue-200/50',
  2: 'bg-purple-200/50',
  3: 'bg-orange-200/50',
  4: 'bg-green-200/50',
  5: 'bg-red-200/50',
};

const statusTextStyles: Record<number, string> = {
  1: 'text-blue-500',
  2: 'text-purple-500',
  3: 'text-orange-500',
  4: 'text-green-500',
  5: 'text-red-500',
};

const statuses = [
  'Submitted', 'Under Review', 'Awaiting Information', 'Vindicated', 'Convicted'
]

export default function IncidentReport() {
  const { id } = useParams();
  const hashIds = new Hashids('ClearTrustAfricaEncode', 10);
  const hashedId = id ? Number(hashIds.decode(id)[0]) : 0;
  const [accused, setAccused] = useState<EmployeeData | null>(null);
  const [incident, setIncident] = useState<IncidentReport | null>(null);
  const [incidentActionType, setIncidentActionType] = useState<IncidentType[]>([]);
  const [incidentActionTypeTotal, setIncidentActionTypeTotal] = useState(0);
  const [incidentAction, setIncidentAction] = useState<IncidentActionData[]>([]);
  const [incidentActionPage, setIncidentActionPage] = useState(1);
  const colors = ["#5d009bff", "#ff8800ff", "#ff0000", "#003000ff", "#00006dff"];
  const incidentActionLimit = 4;
  const [attachments, setAttachments] = useState<IncidentAttachment[]>([]);
  const [modalState, setModalState] = useState(false);
  const [thridPartyModal, setThirdPartyModal] = useState(false);
  const [statusModal, setStatusModal] = useState(false);
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const [showEndDate, setShowEndDate] = useState(false);
  const [ctaPartner, setCTAPartner] = useState<DBSPartner[]>([]);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState,
    control
  } = useForm<IncidentActionFormData>();
  const { errors } = formState;
  const {
    register: regPartner,
    handleSubmit: submitPartner,
    reset: resetPartner,
    formState: partnerFormState,
  } = useForm<PartnerLinkFormData>();
  const { errors: partnerErrors } = partnerFormState;
  const {
    register: regStatus,
    handleSubmit: submitStatus,
    reset: resetStatus,
    formState: statusFormState,
  } = useForm<IncidentStatusFormData>();
  const { errors: statusErrors } = statusFormState;
  const AddEndDate = watch('AddEnd');
  const {
    register: actionFilterReg,
    control: actionFilterControl,
  } = useForm<ActionFilterForm>();
  const actionFilters = useWatch({ control: actionFilterControl });

  useEffect(() => {
    fetchIncidentReportById(hashedId)
    .then(res => {
    if (res.status === 200) {
        res.json()
        .then(data => {
            setIncident(data.data.incident);
            setAccused(data.data.accussed);
        })
    } else {
        res.text()
        .then(data => {
        console.log(JSON.parse(data));
        })
    }
    })
    .catch((err) => console.log(err))
  }, [hashedId]);
    
  const refetchIncident = async () => {
    const res = await fetchIncidentReportById(hashedId);
    if (res.status === 200) {
        const data = await res.json();
        setIncident(data.data.incident);
        setAccused(data.data.accussed);
    }
    
  }

    
    useEffect(() => {
      if (incident){
        fetchDBSPartner({ pageNumber: 1, limit: 20, CountryId: incident.countryId })
        .then(res => {
            if (res.status === 200) {
            res.json()
            .then(data => {
                console.log(data);
                setCTAPartner(data.data.thirdParty);
            })
            } else {
            res.text()
            .then(data => {
                console.log(JSON.parse(data));
            })
            }
        })
      }
      
    }, [incident]);
    
  useEffect(() => {
    fetchIncidentActionByReport({ pageNumber: incidentActionPage, limit: incidentActionLimit, ...actionFilters }, hashedId)
    .then(res => {
    if (res.status === 200) {
        res.json()
        .then(data => {
            setIncidentAction(data.data.actions);
            setIncidentActionTypeTotal(data.data.totalCount);
        })
    } else {
        res.text()
        .then(data => {
        console.log(JSON.parse(data));
        })
    }
    })
    .catch((err) => console.log(err))
  }, [hashedId, incidentActionPage, incidentActionLimit, actionFilters]);
    
  const refetchActionLog = async () => {
    const res = await fetchIncidentActionByReport({ pageNumber: incidentActionPage, limit: incidentActionLimit, ...actionFilters }, hashedId);
    if (res.status === 200) {
        const data = await res.json();
        setIncidentAction(data.data.actions);
        setIncidentActionTypeTotal(data.data.totalCount);
    }
    
  }
    
  useEffect(() => {
    if (AddEndDate) {
        setShowEndDate(true);
    } else {
        setShowEndDate(false);
    }
  }, [AddEndDate])
    
  useEffect(() => {
    fetchIncidentAction()
    .then(res => {
    if (res.status === 200) {
        res.json()
        .then(data => {
            setIncidentActionType(data.data);
        })
    } else {
        res.text()
        .then(data => {
        console.log(JSON.parse(data));
        })
    }
    })
  }, []);
    
  useEffect(() => {
    fetchIncidentAttachments(hashedId)
    .then(res => {
    if (res.status === 200) {
        res.json()
        .then(data => {
            console.log(data);
            setAttachments(data);
        })
    } else {
        res.text()
        .then(data => {
        console.log(JSON.parse(data));
        })
    }
    })
    .catch((err) => console.log(err))
  }, [hashedId]);
    
  const logActivity = async (data: IncidentActionFormData) => {
    if (!errors.ActionTypeId && !errors.StartDate &&
        !errors.Description
    ) {
        const loader = document.getElementById('query-loader');
        const text = document.getElementById('query-text');
        if (loader) {
          loader.style.display = 'flex';
        }
        if (text) {
          text.style.display = 'none';
        }
        const formData = new FormData()
        formData.append('ActionTypeId', data.ActionTypeId);
        formData.append('Description', data.Description);
        formData.append('StartDate', data.StartDate);
        if (data.EndDate) {
            formData.append('EndDate', data.EndDate);
        }
        const res = await submitIncidentActionByReport(formData, hashedId);
        handleCreateEmployee(res, loader, text, { toast }, reset)
        .finally(() => {
            refetchActionLog();
            setModalState(false);
        })
    }
  }
  const linkAction = async (data: PartnerLinkFormData) => {
    if (!partnerErrors.PartnerId && selectedAction) {
        const loader = document.getElementById('query-loader-1');
        const text = document.getElementById('query-text-1');
        if (loader) {
          loader.style.display = 'flex';
        }
        if (text) {
          text.style.display = 'none';
        }
        const formData = new FormData()
        formData.append('PartnerId', data.PartnerId);
        const res = await linkActionToCTAPartner(formData, selectedAction);
        handleCreateEmployee(res, loader, text, { toast }, resetPartner)
        .finally(() => {
            refetchActionLog();
            setThirdPartyModal(false);
        })
    }
  }
  
  const statusUpdate = async (data: IncidentStatusFormData) => {
    if (!statusErrors.IncidentStatus) {
        const loader = document.getElementById('query-loader-2');
        const text = document.getElementById('query-text-2');
        if (loader) {
          loader.style.display = 'flex';
        }
        if (text) {
          text.style.display = 'none';
        }
        const formData = new FormData()
        formData.append('IncidentStatus', data.IncidentStatus);
        const res = await updateIncidentReportStatus(formData, hashedId);
        handleCreateEmployee(res, loader, text, { toast }, resetStatus)
        .finally(() => {
            refetchIncident();
            setStatusModal(false);
        })
    }
  }

  return (
   <>
      <ToastContainer />
      <Modal isOpen={modalState} onRequestClose={() => { setModalState(false); }}
            style={{
            content: {
            width: 'fit-content',
            height: 'fit-content',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgb(255 255 255)',
            borderRadius: '0.5rem',
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
            },
            overlay: {
            backgroundColor: 'rgba(255, 255, 255, 0.7)'
            }
        }}
        >
        <div className="h-fit max-h-[70vh] overflow-y-auto w-70 md:w-100">
            <div className="flex justify-start">
            <p className="font-semibold text-black py-1 text-lg"><ClipboardClock size={20} className="mr-2" /> Log New Activity</p>
            </div>
            <form
                onSubmit={handleSubmit(logActivity)}
                noValidate
            >
                <div className="grid grid-cols-1 gap-x-8 gap-y-5 mt-2">
                <div>
                    <label
                    className="inline-block mb-2 text-secondary-600 dark:text-white"
                    htmlFor="email"
                    >
                    Select Action Type
                    </label>
                    <div>
                    <select
                    className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    {
                    ...register('ActionTypeId', {
                        required: 'Required',
                        pattern: {
                        value: /^(?!default$).+$/,
                        message: 'Required'
                        }
                    })
                    }
                >
                    <option value="default">Select Action Type</option>
                    {
                        incidentActionType.map((data, index) => (
                        <option value={data.actionTypeId} key={index}>{data.name}</option>
                    ))
                    }
                </select>
                    <p className='error-msg'>{errors.ActionTypeId?.message}</p>
                    </div>
                </div>
                <div>
                    <label
                    className="inline-block mb-2 text-secondary-600 dark:text-white"
                    htmlFor="email"
                    >
                        Action Summary
                    </label>
                    <div>
                        <Controller
                            name="Description"
                            control={control}
                            rules={{ required: 'Required' }}
                            render={({ field }) => (
                            <RichTextEditor
                                value={field.value}
                                onChange={field.onChange}
                            />
                            )}
                        />
                        <p className='error-msg'>{errors.Description?.message}</p>
                    </div>
                </div>
                <div>
                    <label
                    className="inline-block mb-2 text-secondary-600 dark:text-white"
                    htmlFor="email"
                    >
                        Start Date
                    </label>
                    <div>
                        <input
                            className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                            type="datetime-local"
                            {
                                ...register('StartDate', {
                                    required: 'Required'
                                })
                            }
                        />
                        <p className='error-msg'>{errors.StartDate?.message}</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <input
                        type="checkbox"
                        className="mr-2 mt-1 ml-1"
                        {
                        ...register('AddEnd', {
                            required: false
                        })
                        }
                    ></input>
                    <label
                        className="text-secondary-600 dark:text-white"
                        htmlFor="email"
                        >
                        Add End Date
                    </label>
                </div>
                <div className={`${!showEndDate && 'hidden'}`}>
                    <label
                    className="inline-block mb-2 text-secondary-600 dark:text-white"
                    htmlFor="email"
                    >
                        End Date
                    </label>
                    <div>
                        <input
                            className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                            type="datetime-local"
                            {
                                ...register('EndDate', {
                                    required: showEndDate ? 'Required' : false
                                })
                            }
                        />
                        <p className='error-msg'>{errors.EndDate?.message}</p>
                    </div>
                </div>
                </div>
                <hr className="mt-5" />
                <div className="flex justify-end my-2 gap-2">
                    <button className="btn text-white bg-black" onClick={() => setModalState(false) }>
                    <X size={18} className="mr-2" />
                    Cancel
                    </button>
                    <button className="btn btn-success">
                    <div className="dots hidden" id="query-loader">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                    <span id="query-text">
                        <CheckCheck size={18} className="mr-2" />
                        Log Activity
                    </span>
                    </button>
                </div>
            </form>
        </div>
      </Modal>
      <Modal isOpen={thridPartyModal} onRequestClose={() => { setThirdPartyModal(false); }}
            style={{
            content: {
            width: 'fit-content',
            height: 'fit-content',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgb(255 255 255)',
            borderRadius: '0.5rem',
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
            },
            overlay: {
            backgroundColor: 'rgba(255, 255, 255, 0.7)'
            }
        }}
        >
            {
                selectedAction && (
                    <div className="h-fit max-h-[70vh] overflow-y-auto w-70 md:w-100">
                        <div className="flex justify-start">
                        <p className="font-semibold text-black py-1 text-lg"><AlertCircleIcon size={20} className="mr-2" /> Add Third Party to Action</p>
                        </div>
                        <form
                            onSubmit={submitPartner(linkAction)}
                            noValidate
                        >
                            <div className="grid grid-cols-1 gap-x-8 gap-y-5 mt-2">
                                <div>
                                    <label
                                    className="inline-block mb-2 text-secondary-600 dark:text-white"
                                    htmlFor="email"
                                    >
                                    Select Third Party
                                    </label>
                                    <div>
                                    <select
                                    className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    {
                                    ...regPartner('PartnerId', {
                                        required: 'Required',
                                        pattern: {
                                        value: /^(?!default$).+$/,
                                        message: 'Required'
                                        }
                                    })
                                    }
                                >
                                    <option value="default">Select Third Party</option>
                                    {
                                        ctaPartner.map((data, index) => (
                                        <option value={data.partnerId} key={index}>{data.partnerName}</option>
                                    ))
                                    }
                                </select>
                                    <p className='error-msg'>{partnerErrors.PartnerId?.message}</p>
                                    </div>
                                </div>
                            </div>
                            <hr className="mt-5" />
                            <div className="flex justify-end my-2 gap-2">
                                <button className="btn text-white bg-black" onClick={() => setThirdPartyModal(false) }>
                                <X size={18} className="mr-2" />
                                Cancel
                                </button>
                                <button className="btn btn-success">
                                <div className="dots hidden" id="query-loader-1">
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                </div>
                                <span id="query-text-1">
                                    <CheckCheck size={18} className="mr-2" />
                                    Add Third Party
                                </span>
                                </button>
                            </div>
                        </form>
                    </div>
                )
            }
      </Modal>
      <Modal isOpen={statusModal} onRequestClose={() => { setStatusModal(false); }}
            style={{
            content: {
            width: 'fit-content',
            height: 'fit-content',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgb(255 255 255)',
            borderRadius: '0.5rem',
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
            },
            overlay: {
            backgroundColor: 'rgba(255, 255, 255, 0.7)'
            }
        }}
        >
            <div className="h-fit max-h-[70vh] overflow-y-auto w-70 md:w-100">
                <div className="flex justify-start">
                <p className="font-semibold text-black py-1 text-lg"><AlertCircleIcon size={20} className="mr-2" /> Update Incident Status</p>
                </div>
                <form
                    onSubmit={submitStatus(statusUpdate)}
                    noValidate
                >
                    <div className="grid grid-cols-1 gap-x-8 gap-y-5 mt-2">
                        <div>
                            <label
                            className="inline-block mb-2 text-secondary-600 dark:text-white"
                            htmlFor="email"
                            >
                            Select Status
                            </label>
                            <div>
                            <select
                            className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                            {
                            ...regStatus('IncidentStatus', {
                                required: 'Required',
                                pattern: {
                                value: /^(?!default$).+$/,
                                message: 'Required'
                                }
                            })
                            }
                        >
                            <option value="default">Select Status</option>
                            {
                                statuses.map((data, index) => (
                                <option value={index + 1} key={index}>{data}</option>
                            ))
                            }
                        </select>
                            <p className='error-msg'>{statusErrors.IncidentStatus?.message}</p>
                            </div>
                        </div>
                    </div>
                    <hr className="mt-5" />
                    <div className="flex justify-end my-2 gap-2">
                        <button className="btn text-white bg-black" onClick={() => setStatusModal(false) }>
                        <X size={18} className="mr-2" />
                        Cancel
                        </button>
                        <button className="btn btn-success">
                        <div className="dots hidden" id="query-loader-2">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                        <span id="query-text-2">
                            <CheckCheck size={18} className="mr-2" />
                            Update Status
                        </span>
                        </button>
                    </div>
                </form>
            </div>
      </Modal>
      <div
        className="p-6 lg:p-8 footer-inner mx-auto main-container container"
        x-bind:className="setting.page_layout"
      >
        <div className="flex flex-wrap mb-8 items-center justify-between">
          <div className="flex">
            <AlertTriangleIcon className="text-blue-600 mr-2" size={36} />
            <div>
            <h3 className="mb-0 text-black">
              Incident/Offence Report Details
            </h3>
            <p className="text-secondary-600 text-black">
                <NavLink to="/">Dashboard</NavLink>
                <ChevronRightIcon size={14} />
                <NavLink to="/IncidentMgt">Incident/Offence Management </NavLink>
                <ChevronRightIcon size={14} />
                <NavLink to={`/IncidentMgt/Report/${id}`}>Report Details</NavLink>{" "}
            </p>
            </div>
          </div>
          
            {accused && incident && (
              <div className="flex flex-wrap">
                <div>
                    <Tippy content="Current Status">
                    <p className={`btn mr-2 mb-2 ${statusStyles[incident.incidentStatus]} ${statusTextStyles[incident.incidentStatus]} font-bold`} style={{ cursor: 'auto' }}>
                        {statuses[incident.incidentStatus - 1]}
                    </p>
                    </Tippy>
                </div>
                <button className="btn btn-warning mr-2 mb-2" onClick={() => setStatusModal(true)}>
                    <Pen size={18} className="mr-2" />
                    Update Status
                </button>
                
              </div>
            )}
        </div>
        {
          accused && incident  && (
            <div className="flex flex-wrap contet-inner" x-data="{ openTab: 1 }">
              <div className="w-full grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
                <div className="col lg:col-span-1">
                  <div x-show="openTab === 4">
                    <div className="h-fit overflow-y-auto relative flex flex-col mb-8  bg-white shadow rounded-xl dark:bg-dark-card">
                      <div className="bg-[#7016d0] p-5 border-b dark:border-secondary-800 dark:border-secondary-800">
                        <div className="lg:mb-0 profile-logo profile-logo1 flex justify-center">
                          <img
                            src={accused.profileImage}
                            className="w-24 h-24 border-4 border-white mb-3 rounded-full mr-4"
                            style={{ objectFit: "cover" }}
                            alt="profile-image"
                          />
                        </div>
                        <h4 className="card-title mb-2 text-white text-center">
                          {`${accused.firstName} ${accused.lastName}`}
                        </h4>
                        <h4 className="card-title mb-0 text-white text-center">
                          ID: {accused.identificationNumber}
                        </h4>
                      </div>
                      <div className="p-6">
                        <div className="border-b dark:border-secondary-800 dark:border-secondary-800 flex items-center pb-1">
                          <User size={30} className="mr-2" />
                          <h4 className="card-title mb-0 dark:text-white font-bold">
                            Accused Details
                          </h4>
                        </div>
                        <div className="mt-2 flex justify-start items-center">
                          <Mail size={20} className="mr-2" />
                          {accused.email}
                        </div>
                        <div className="mt-2 flex justify-start items-center">
                          <Phone size={20} className="mr-2" />
                          {accused.phone}
                        </div>
                        <div className="mt-2 flex justify-start items-center">
                          <Venus size={20} className="mr-2" />
                          {accused.gender}
                        </div>
                        <div className="mt-2 flex justify-start items-center">
                          <Cake size={20} className="mr-2" />
                          {(new Date(accused.dateOfBirth)).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}
                          {`  (${calculateAge(new Date(accused.dateOfBirth))})`}
                        </div>
                        <div className="mt-2 flex justify-start items-center">
                          <MapPin size={20} className="mr-2" />
                          {accused.address}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col lg:col-span-2">
                  <div x-show="openTab === 4">
                    <div className="relative flex flex-col mb-8 bg-white shadow rounded-xl dark:bg-dark-card">
                      <div className="p-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="col-span-2 border-b dark:border-secondary-800 dark:border-secondary-800 flex items-center pb-1">
                                <AlertCircleIcon size={30} className="mr-2" />
                                <h4 className="card-title mb-0 dark:text-white font-bold">
                                    Incident/Offence Details
                                </h4>
                            </div>
                            <div>
                                <p className="text-sm text-black mb-1">Title</p>
                                <p className="font-semibold text-black">
                                    {incident.incidentTitle}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-black mb-1">Location</p>
                                <p className="font-semibold text-black">
                                    {incident.incidentLocation} <p className="text-sm">{`${incident.cityName && incident.cityName + ', '}${incident.stateName && incident.stateName + ', '}${incident.countryName && incident.countryName + '.'}`}</p>
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-black mb-1">Reported By</p>
                                <p className="font-semibold text-black">
                                    {incident.reporterName || "Anonymous"}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Submitted By</p>
                                <p className="font-semibold text-black">
                                    {incident.recorderName || "Anonymous"}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-black mb-1">Incident Date</p>
                                <p className="font-semibold text-black">
                                    {new Date(incident.incidentDate).toLocaleDateString(
                                    "en-GB",
                                    {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                    }
                                    )}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-black mb-1">Date Submitted</p>
                                <p className="font-semibold text-black">
                                    {new Date(incident.dateCreated).toLocaleString("en-GB", {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                    })}
                                </p>
                            </div>

                            <div className="md:col-span-2">
                                <p className="text-sm text-black font-semibold mb-1">
                                    Description
                                </p>
                                <p className="text-black">
                                    <HtmlRenderer html={incident.description} />
                                </p>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex flex-col mb-8 bg-white shadow rounded-xl dark:bg-dark-card">
                        <div className="p-5">
                            <div className="border-b dark:border-secondary-800 dark:border-secondary-800 flex flex-wrap justify-between items-center">
                                <div className="flex items-center">
                                    <ClipboardClock size={30} className="mr-2" />
                                    <h4 className="card-title mb-0 dark:text-white font-bold">
                                        Actions Log
                                    </h4>
                                </div>
                                <button className="btn btn-success mr-2 mb-2" onClick={() => {setModalState(true)}}>
                                    <Plus size={18} className="mr-2" />
                                    Log New Action
                                </button>
                            </div>  
                        </div>
                        <div className="p-5">
                            <div className="flex flex-wrap gap-4">
                                <div className="flex-1 min-w-[330px]">
                                <div className="relative">
                                    <Search
                                    className="absolute left-3 top-7 transform -translate-y-1/2 text-gray-400"
                                    size={20}
                                    />
                                    <input
                                    type="text"
                                    placeholder="Search by staff name..."
                                    {...actionFilterReg('LoggedByName')}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                </div>
                                <select
                                {...actionFilterReg('ActionTypeId')}
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                <option value="">All Action Types</option>
                                {
                                    incidentActionType.map((data, index) => (
                                    <option value={data.actionTypeId} key={index}>{data.name}</option>
                                    ))
                                }
                                </select>
                            </div>
                        </div>
                        <div className="p-5">
                            <div className="flex flex-wrap justify-between overflow-x-auto h-fit">
                                <table className="min-w-full divide-y divide-secondary-200 dark:divide-secondary-800 border dark:border-secondary-800">
                                    <thead>
                                        <tr className="bg-secondary-100 dark:bg-dark-bg">
                                            <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                                                S/N
                                            </th>
                                            <th className="px-6 whitespace-nowrap py-4 text-left font-medium text-black dark:text-white">
                                                Action Type
                                            </th>
                                            <th className="px-6 whitespace-nowrap py-4 text-left font-medium text-black dark:text-white">
                                                Action
                                            </th>
                                            <th className="px-6 whitespace-nowrap py-4 text-left font-medium text-black dark:text-white">
                                                Logged By
                                            </th>
                                            <th className="px-6 whitespace-nowrap py-4 text-left font-medium text-black dark:text-white">
                                                Third Party
                                            </th>
                                            <th className="px-6 whitespace-nowrap py-4 text-left font-medium text-black dark:text-white">
                                                Date
                                            </th>
                                            <th className="px-6 whitespace-nowrap py-4 text-left font-medium text-black dark:text-white">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-secondary-200 dark:divide-secondary-800">
                                        {
                                            incidentAction.map((data, index) => (
                                            <tr key={data.actionId ?? index}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="iq-media-group iq-media-group-1">
                                                        <h6 className="font-bold dark:text-white">
                                                            {" "}
                                                            #{(index + (incidentActionLimit * (incidentActionPage - 1))) + 1}
                                                        </h6>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {data.actionTypeName}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap  text-gray-900">
                                                    <p><HtmlRenderer html={data.description} /></p>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap  text-gray-900">
                                                    <div className="flex w-50 items-center gap-3">
                                                    <div className="h-12 w-12 border rounded-full" style={{ backgroundColor: colors[index % 4], display: "flex", justifyContent: "center", alignItems: "center", color: "#ffffff"}}>
                                                        { `${data.loggedByFirstName[0]} ${data.loggedByLastName[0]}` }
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold text-gray-900">
                                                        {`${data.loggedByFirstName} ${data.loggedByLastName}`}
                                                        </div>
                                                    </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                        {data.thirdParties.length > 0 ? data.thirdParties.map((value, index) => (
                                                            <p className="text-sm">
                                                                {`${index + 1}. ${value}`}
                                                            </p>
                                                    )) : 'No Third Party' }
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap  text-gray-900">
                                                    <p>{(new Date(data.startDate)).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
                                                    <p>{data.endDate && `Ended: ${(new Date(data.endDate)).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}`}</p>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap  text-gray-900">
                                                    <Tippy content="Add Third Party">
                                                        <button className="btn btn-success py-1 px-2" onClick={() => { setSelectedAction(data.actionId); setThirdPartyModal(true); }}>
                                                            <Plus size={18} />
                                                        </button>
                                                    </Tippy>
                                                </td>
                                            </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                                {
                                    incidentAction.length === 0 ?
                                    <div className="py-4 whitespace-nowrap w-full">
                                        <span className="px-6 py-4 text-left font-medium text-black dark:text-white">There hasn't been any action logged for this incident</span>
                                    </div> : <></>
                                } 
                            </div>
                            <div className="flex flex-wrap justify-between mt-6">
                                <div className="flex justify-center items-center mb-1">
                                    <p className="text-black">
                                    Showing { incidentAction.length > 0 ? ((incidentActionPage * incidentActionLimit) - incidentActionLimit) + 1 : 0 } to { incidentAction.length > 0 ? (((incidentActionPage * incidentActionLimit) - incidentActionLimit) + 1) + (incidentAction.length - 1) : 0 } of { incidentActionTypeTotal } entries
                                    </p>
                                </div>
                                <div className="inline-flex flex-wrap">
                                    {
                                    incidentActionPage > 1 && <a
                                    href="#"
                                    onClick={() => { if (incidentActionPage > 1) {setIncidentActionPage(incidentActionPage - 1);} }}
                                    className="border-t border-b border-l text-primary-500 border-secondary-500 px-2 py-1 rounded-l dark:border-secondary-800"
                                    >
                                    Previous
                                    </a>
                                    }
                                    <a
                                    href="#"
                                    className="border text-white border-secondary-500 cursor-pointer bg-primary-500 px-4 py-1 dark:border-secondary-800"
                                    >
                                    { incidentActionPage }
                                    </a>
                                    {
                                        (incidentActionPage * incidentActionLimit) < incidentActionTypeTotal && <a
                                            href="#"
                                            onClick={() => { setIncidentActionPage(incidentActionPage + 1); }}
                                            className="border-r border-t border-b text-primary-500 border-secondary-500 px-4 py-1 rounded-r dark:border-secondary-800"
                                        >
                                        Next
                                        </a>
                                    }
                                    
                                </div>
                                </div>
                        </div>
                    </div>
                    <div className="relative flex flex-col mb-8 bg-white shadow rounded-xl dark:bg-dark-card">
                      <div className="p-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="col-span-2 border-b dark:border-secondary-800 dark:border-secondary-800 flex items-center pb-1">
                                <FileArchive size={30} className="mr-2" />
                                <h4 className="card-title mb-0 dark:text-white font-bold">
                                    Attachments
                                </h4>
                            </div>
                            {attachments.length > 0 ? (
                                <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                                {attachments.map((att) => (
                                    <div
                                        className="flex justify-between items-center border rounded-md p-4"
                                        key={att.attachmentId}
                                        >
                                        <div className="flex items-center gap-3">
                                            <FileIcon className="text-gray-600" size={20} />
                                            <div>
                                            <p className="text-sm font-medium text-black">
                                                {att.fileName}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                {new Date(att.dateCreated).toLocaleDateString(
                                                "en-GB",
                                                {
                                                    day: "2-digit",
                                                    month: "short",
                                                    year: "numeric",
                                                }
                                                )}
                                            </p>
                                            </div>
                                        </div>
                                        <div className="flex space-x-2">
                                            <a
                                            className="btn btn-info btn-sm flex items-center gap-2"
                                            href={att.fileUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >
                                            <Eye size={16} /> View
                                            </a>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            ) : (
                                <div className="py-6 text-gray-500">
                                    No attachments has been added for this incident
                                </div>
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          )
        }
      </div>
    </>
  );
}
