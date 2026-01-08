import {
  Building,
  Cake,
  CalendarCheck2Icon,
  CheckCheck,
  ChevronDown,
  ChevronRightIcon,
  ClipboardClock,
  FileIcon,
  FolderCog,
  Mail,
  MapPin,
  MessageSquareShare,
  Phone,
  Plus,
  Shield,
  ShieldCheck,
  User,
  UserCog,
  UserLock,
  UserSquareIcon,
  UserStar,
  Venus,
  X
} from "lucide-react";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchApplicantDocsById } from "../../../utils/Requests/EmployeeRequests.js";
import Hashids from "hashids";
import { fetchDbsCheckById, updateDbsApplications } from "../../../utils/Requests/DbsRequests.js";
import { toast, ToastContainer } from "react-toastify";
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import { fetchOrgMembers } from "../../../utils/Requests/AuthRequests.js";
import { useAuth } from "../../../utils/useAuth.js";
import { handleCreateEmployee } from "../../../utils/ResponseHandlers/EmployeeResponse.js";
import Tippy from "@tippyjs/react";

interface EmployeeData {
  userId: number;
  firstName: string;
  lastName: string;
  profileImage: string;
  phone: string;
  email: string;
  identificationNumber: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  organisationId: number;
  role: string;
}

interface DbsChecks {
  dbsApplicationId: number;
  userId: number
  requestedById: number
  dbsTypeId: number
  status: string
  submittedAt: string
  completedAt: string
  dateCreated: string
  userFirstName: string;
  userLastName: string;
  organisationName: string;
  requestedBy: string;
  staffInChargeId: number;
  staffInChargeFirstName: string;
  staffInChargeLastName: string;
  adminId: number;
  adminFirstName: string;
  adminLastName: string;
  dbsType: string;
  dbsTypeCost: number;
  profile: EmployeeData;
  dbsStageName: string;
  dbsStageId: string;
  dbsStageLevel: string;
  dbsStageAdminId: string;
  dbsStageAdminName: string;
}

interface UserDocumentValues {
  userDocumentId: number;
  fileUrl: string;
  userDocumentType: string;
  status: number;
  dateCreated: string;
}

interface AdminFormValues {
    AdminId: number;
}

interface StaffFormValues {
    StaffInChargeId: number;
}

interface UserData {
    userId: number;
    firstName: string;
    lastName: string;
}

const statusStyles: Record<string, string> = {
  Draft: 'bg-orange-200',
  Submitted: 'bg-blue-200',
  'In Review': 'bg-purple-200',
  Completed: 'bg-green-200',
  Rejected: 'bg-red-200',
};

export default function TrackerDetails() {
  const { id } = useParams();
  const { user } = useAuth();
  const [dbsDetails, setDbsDetails] = useState<DbsChecks | null>(null);
  const [orgMembers, setOrgMembers] = useState<UserData[]>([]);
  const hashIds = new Hashids('ClearTrustAfricaEncode', 10);
  const hashedId = id ? Number(hashIds.decode(id)[0]) : 0;
  const [userDocuments, setUserDocuments] = useState<UserDocumentValues[]>([]);
  const [openMoreAction, setOpenMoreAction] = useState(false);
  const userId: number = dbsDetails?.userId ? dbsDetails.userId : 0;
  const [adminModalState, setAdminModalState] = useState(false);
  const [staffModalState, setStaffModalState] = useState(false);
  const { register, handleSubmit, reset, formState } = useForm<AdminFormValues>();
  const { errors } = formState;
  const {
    register: staffReg,
    handleSubmit: submitStaff,
    reset: resetStaff,
    formState: staffForm
  } = useForm<StaffFormValues>();
  const { errors: staffErrors } = staffForm;

  useEffect(() => {
      fetchDbsCheckById(hashedId)
      .then(res => {
        if (res.status === 200) {
          res.json()
          .then(data => {
            console.log(data);
            setDbsDetails(data.data);
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

  const refetchDbsDetails = async () => {
    const res = await fetchDbsCheckById(hashedId);
    if (res.status === 200) {
      const data = await res.json()
      console.log(data);
      setDbsDetails(data.data)
    } else {
      const resText = await res.text();
      console.log(JSON.parse(resText));
    }
  }

  const calculateAge = (dateOfBirth: Date) => {
    const today = new Date();
    const dob = new Date(dateOfBirth);

    let age = today.getFullYear() - dob.getFullYear();
    const birthdayPassed = today.getMonth() > dob.getMonth()
      || (today.getMonth() === dob.getMonth() && today.getDate() >= dob.getDate());
    if (!birthdayPassed) {
      age--;
    }
    return age;
  }
    
  useEffect(() => {
      fetchOrgMembers()
      .then(res => {
        if (res.status === 200) {
          res.json()
          .then(data => {
            console.log(data);
            setOrgMembers(data.data);
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
    fetchApplicantDocsById(userId, 1, 15)
    .then(res => {
      if (res.status === 200) {
        res.json()
        .then(data => {
          console.log(data);
          setUserDocuments(data.data.docs);
        })
      } else {
        res.text()
        .then(data => {
          console.log(JSON.parse(data));
        })
      }
    })
    .catch((err) => console.log(err))
  }, [userId]);
    
  const assignAdmin = async (data: AdminFormValues) => {
    if (!errors.AdminId) {
      const loader = document.getElementById('query-loader');
      const text = document.getElementById('query-text');
      if (loader) {
        loader.style.display = 'flex';
      }
      if (text) {
        text.style.display = 'none';
      }
      const formData = new FormData();
      formData.append('AdminId', String(data.AdminId));
      const res = await updateDbsApplications(formData, hashedId);
      handleCreateEmployee(res, loader, text, { toast }, reset)
      .finally(async () => {
        setAdminModalState(false);
        await refetchDbsDetails();
      });
    }
  };

  const assignStaff = async (data: StaffFormValues) => {
    if (!errors.AdminId) {
      const loader = document.getElementById('query-loader-1');
      const text = document.getElementById('query-text-1');
      if (loader) {
        loader.style.display = 'flex';
      }
      if (text) {
        text.style.display = 'none';
      }
      const formData = new FormData();
      formData.append('StaffInChargeId', String(data.StaffInChargeId));
      const res = await updateDbsApplications(formData, hashedId);
      handleCreateEmployee(res, loader, text, { toast }, resetStaff)
      .finally(async () => {
        setStaffModalState(false);
        await refetchDbsDetails();
      });
    }
  };

  const splitFile = (fileUrl: string) => {
    const splits = fileUrl.split('/');
    if (splits.length > 0) {
      return splits[splits.length - 1];
    }
    return "UploadedFile";
  }

  return (
   <>
      <ToastContainer />
      <Modal isOpen={adminModalState} onRequestClose={() => { setAdminModalState(false); }}
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
          <div className="h-fit max-h-[70vh] overflow-y-auto w-100">
              <div className="flex justify-start">
              <p className="font-semibold text-black py-1 text-lg"><UserLock size={20} className="mr-2" /> Assign Administrator</p>
              </div>
              <form
                  onSubmit={handleSubmit(assignAdmin)}
                  noValidate
              >
                  <div className="grid grid-cols-1 gap-x-8 gap-y-5 mt-2">
                  <div>
                      <label
                      className="inline-block mb-2 text-secondary-600 dark:text-white"
                      htmlFor="email"
                      >
                      Administrator
                      </label>
                      <div>
                      <select
                    className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    {
                      ...register('AdminId', {
                        required: 'Required',
                        pattern: {
                          value: /^(?!default$).+$/,
                          message: 'Required'
                        }
                      })
                    }
                  >
                    <option value="default">Select Administrator</option>
                    {
                      orgMembers.map((data, index) => (
                          <option value={data.userId} key={index}>{`${data.firstName} ${data.lastName}`}</option>
                      ))
                    }
                  </select>
                      <p className='error-msg'>{errors.AdminId?.message}</p>
                      </div>
                  </div>
                  </div>
                  <hr className="mt-5" />
                  <div className="flex justify-end my-2 gap-2">
                  <button className="btn text-white bg-black" onClick={() => setAdminModalState(false) }>
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
                      Assign
                      </span>
                  </button>
                  </div>
              </form>
          </div>
      </Modal>
      <Modal isOpen={staffModalState} onRequestClose={() => { setStaffModalState(false); }}
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
          <div className="h-fit max-h-[70vh] overflow-y-auto w-100">
              <div className="flex justify-start">
              <p className="font-semibold text-black py-1 text-lg"><UserLock size={20} className="mr-2" /> Re Assign Staff In Charge</p>
              </div>
              <form
                  onSubmit={submitStaff(assignStaff)}
                  noValidate
              >
                  <div className="grid grid-cols-1 gap-x-8 gap-y-5 mt-2">
                  <div>
                    <label
                    className="inline-block mb-2 text-secondary-600 dark:text-white"
                    htmlFor="email"
                    >
                     Staff In Charge
                    </label>
                    <div>
                      <select
                        className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        {
                          ...staffReg('StaffInChargeId', {
                            required: 'Required',
                            pattern: {
                              value: /^(?!default$).+$/,
                              message: 'Required'
                            }
                          })
                        }
                      >
                        <option value="default">Select Staff In Charge</option>
                        {
                          orgMembers.map((data, index) => (
                            <option value={data.userId} key={index}>{`${data.firstName} ${data.lastName}`}</option>
                          ))
                        }
                      </select>
                      <p className='error-msg'>{staffErrors.StaffInChargeId?.message}</p>
                    </div>
                  </div>
                  </div>
                  <hr className="mt-5" />
                  <div className="flex justify-end my-2 gap-2">
                    <button className="btn text-white bg-black" onClick={() => setStaffModalState(false) }>
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
                        Assign
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
            <Shield className="text-blue-600 mr-2" size={36} />
            <div>
            <h3 className="mb-0 text-black">
                DBS Application Details
            </h3>
            <p className="text-secondary-600 text-black">
                <NavLink to="/Dashboard">Dashboard</NavLink>{" "}
                <ChevronRightIcon size={14} />{" "}
                <NavLink to="/Tracker">DBS Tracker</NavLink>{" "}
                <ChevronRightIcon size={14} />{" "}
                <NavLink to={`/Tracker/${id}`}>DBS Details</NavLink>{" "}
            </p>
            </div>
          </div>
          
            {dbsDetails && (
              <div className="flex flex-wrap">
                <div>
                  <p className={`btn mr-2 mb-2 ${statusStyles[dbsDetails.status]}`} style={{ cursor: 'auto' }}>
                    {dbsDetails.status}
                  </p>
                </div>
                <div className="relative">
                  <button className="btn btn-info mr-2 mb-2" onClick={() => setOpenMoreAction(!openMoreAction)}>
                    More Actions
                    <ChevronDown size={18} className="ml-2" />
                  </button>
                  {openMoreAction && (
                    <div className="absolute mt-2 top-8 right-2 w-60 bg-white border shadow-lg z-1">
                      {
                        (user?.userId === dbsDetails.staffInChargeId || user?.userRole === "SuperAdmin") && user?.roleScope === 1 && user?.userRole.endsWith("Admin") && (
                          <button className="block w-full px-4 py-2 hover:bg-secondary-200 text-left text-black" onClick={() => { setStaffModalState(true); setOpenMoreAction(!openMoreAction); }}>
                            <UserStar size={18} className="mr-2" /> Re-Assign To Staff
                          </button>
                        )
                      }
                      {
                        user?.roleScope === 1 && user?.userRole === "SuperAdmin" && !dbsDetails.adminId && (
                          <button className="block w-full px-4 py-2 hover:bg-secondary-200 text-left text-black" onClick={() => { setAdminModalState(true); setOpenMoreAction(!openMoreAction); }}>
                            <UserCog size={18} className="mr-2" /> Assign Administrator
                          </button>
                        )
                      }
                      {
                        user?.roleScope === 1 && user?.userRole === "SuperAdmin" && dbsDetails.adminId && (
                          <button className="block w-full px-4 py-2 hover:bg-secondary-200 text-left text-black" onClick={() => { setAdminModalState(true); setOpenMoreAction(!openMoreAction); }}>
                            <UserCog size={18} className="mr-2" /> Re-Assign Administrator
                          </button>
                        )
                      }
                    </div>
                  )}
                </div>
              </div>
            )}
        </div>
        {
          dbsDetails && (
            <div className="flex flex-wrap contet-inner" x-data="{ openTab: 1 }">
              <div className="w-full grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
                <div className="col lg:col-span-1">
                  <div x-show="openTab === 4">
                    <div className="h-fit overflow-y-auto relative flex flex-col mb-8  bg-white shadow rounded-xl dark:bg-dark-card">
                      <div className="bg-[#7016d0] p-5 border-b dark:border-secondary-800 dark:border-secondary-800">
                        <div className="lg:mb-0 profile-logo profile-logo1 flex justify-center">
                          <img
                            src={dbsDetails.profile.profileImage}
                            className="w-24 h-24 border-4 border-white mb-3 rounded-full mr-4"
                            style={{ objectFit: "cover" }}
                            alt="profile-image"
                          />
                        </div>
                        <h4 className="card-title mb-2 text-white text-center">
                          {`${dbsDetails.profile.firstName} ${dbsDetails.profile.lastName}`}
                        </h4>
                        <h4 className="card-title mb-0 text-white text-center">
                          ID: {dbsDetails.profile.identificationNumber}
                        </h4>
                      </div>
                      <div className="p-6">
                        <div className="mt-2 flex justify-start items-center">
                          <Mail size={20} className="mr-2" />
                          {dbsDetails.profile.email}
                        </div>
                        <div className="mt-2 flex justify-start items-center">
                          <Phone size={20} className="mr-2" />
                          {dbsDetails.profile.phone}
                        </div>
                        <div className="mt-2 flex justify-start items-center">
                          <Venus size={20} className="mr-2" />
                          {dbsDetails.profile.gender}
                        </div>
                        <div className="mt-2 flex justify-start items-center">
                          <Cake size={20} className="mr-2" />
                          {(new Date(dbsDetails.profile.dateOfBirth)).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}
                          {`  (${calculateAge(new Date(dbsDetails.profile.dateOfBirth))})`}
                        </div>
                        <div className="mt-2 flex justify-start items-center">
                          <MapPin size={20} className="mr-2" />
                          {dbsDetails.profile.address}
                        </div>
                        <div className="mt-5 border-b dark:border-secondary-800 dark:border-secondary-800 flex items-center pb-1">
                          <UserSquareIcon size={30} className="mr-2" />
                          <h4 className="card-title mb-0 dark:text-white font-bold">
                            Employer Details
                          </h4>
                        </div>
                        <div className="mt-2 flex justify-start items-center">
                          <User size={20} className="mr-2" />
                          {dbsDetails.requestedBy}
                        </div>
                        <div className="mt-2 flex justify-start items-center">
                          <Building size={20} className="mr-2" />
                          {dbsDetails.organisationName}
                        </div>
                        <div className="mt-2 flex justify-start items-center">
                          <CalendarCheck2Icon size={20} className="mr-2" />
                          {(new Date(dbsDetails.dateCreated)).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div x-show="openTab === 4">
                    <div className="relative flex flex-col mb-8  bg-white shadow rounded-xl dark:bg-dark-card">
                      <div className="p-5 border-b dark:border-secondary-800 dark:border-secondary-800 flex items-center">
                        <FileIcon size={30} className="mr-2" />
                        <h4 className="card-title mb-0 dark:text-white font-bold">
                          Applicant Documents {`(${userDocuments.length})`}
                        </h4>
                      </div>
                      <div className="h-100 overflow-y-auto p-6">
                        {
                            userDocuments.length === 0 &&
                              <div className="py-4 whitespace-nowrap">
                                <span className="px-6 py-4 text-left font-medium text-black dark:text-white">There are no uploaded document for { dbsDetails.profile.firstName }</span>
                              </div>
                          }
                          {
                            userDocuments.length > 0 && (
                              userDocuments.map((data: UserDocumentValues, index) => (
                                <div className="p-2 border-2 rounded-xl mb-4" key={index} style={{ borderColor: '#7016d0' }}>
                                  <div className="flex justify-between items-center">
                                    <a className="mb-1 dark:text-white flex items-center gap-3 font-bold" href={data.fileUrl} target="_blank">
                                      {
                                          Number(data.userDocumentType) === 1 && 'International Passport'
                                      }
                                      {
                                          Number(data.userDocumentType) === 2 && 'Identification Document'
                                      }
                                      {
                                          Number(data.userDocumentType) === 3 && 'Police Certificate'
                                      }
                                      {" "}
                                    </a>
                                    {
                                      Number(data.status) === 1 && <p className="w-15 text-sm font-light p-1 bg-orange-200 text-center rounded-lg">Pending</p>
                                    }
                                    {
                                      Number(data.status) === 2 && <p className="w-15 text-sm font-light p-1 bg-green-200 text-center rounded-lg">Verified</p>
                                    }
                                    {
                                      Number(data.status) === 3 && <p className="w-15 text-sm font-light p-1 bg-red-200 text-center rounded-lg">Rejected</p>
                                    }
                                  </div>
                                  <div className="my-2">
                                      <a className="underline decoration-solid text-blue mr-2" href={data.fileUrl} target="_blank">
                                        {splitFile(data.fileUrl)}
                                      </a>
                                  </div>
                                  <p className="mb-1 dark:text-secondary-600 text-sm">
                                      <span>Uploaded On - {(new Date(data.dateCreated)).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                                  </p>
                                  <div className="flex justify-end items-center gap-3 my-1">
                                    <Tippy content="Mark As Rejected">
                                      <button className="btn text-white btn-danger py-1 px-2">
                                        <X size={18} />
                                      </button>
                                    </Tippy>
                                    <Tippy content="Mark As Verified">
                                      <button className="btn btn-success py-1 px-2">
                                        <div className="dots hidden" id="query-loader-2">
                                          <div className="dot"></div>
                                          <div className="dot"></div>
                                          <div className="dot"></div>
                                        </div>
                                        <span id="query-text-2">
                                          <CheckCheck size={18} />
                                        </span>
                                    </button>
                                    </Tippy>
                                  </div>
                              </div>  
                              ))
                            )
                          }
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col lg:col-span-2">
                  <div x-show="openTab === 4">
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                      <div
                        className="bg-white shadow rounded-xl p-6 border hover:shadow-lg transition-shadow"
                      >
                        <div className="flex items-start justify-end mb-4">
                          <div className="py-3 px-3 bg-blue-300/50 rounded-full border-2">
                            <UserCog className="w-6 h-5 text-black" />
                          </div>
                        </div>
                        <div>
                          <p className="text-xl font-semibold text-black mb-1">
                            {dbsDetails.adminId ? (`${dbsDetails.adminFirstName} ${dbsDetails.adminLastName}`) : 'None Assigned'}
                          </p>
                          <p className="text-sm text-black">Application Admin</p>
                        </div>
                      </div>
                      <div
                        className="bg-white shadow rounded-xl p-6 border hover:shadow-lg transition-shadow"
                      >
                        <div className="flex items-start justify-end mb-4">
                          <div className="py-3 px-3 bg-green-300/50 rounded-full border-2">
                            <UserStar className="w-6 h-5 text-black" />
                          </div>
                        </div>
                        <div>
                          <p className="text-xl font-semibold text-black mb-1">
                            {dbsDetails.staffInChargeId ? (`${dbsDetails.staffInChargeFirstName} ${dbsDetails.staffInChargeLastName}`) : 'None Assigned'}
                          </p>
                          <p className="text-sm text-black">Staff In Charge</p>
                        </div>
                      </div>
                      <div
                        className="bg-white shadow rounded-xl p-6 border hover:shadow-lg transition-shadow"
                      >
                        <div className="flex items-start justify-end mb-4">
                          <div className="py-3 px-3 bg-yellow-300/50 rounded-full border-2">
                            <ShieldCheck className="w-6 h-5 text-black" />
                          </div>
                        </div>
                        <div>
                          <p className="text-xl font-semibold text-black mb-1">
                            {`${dbsDetails.dbsType} Check`}
                          </p>
                          <p className="text-sm text-black">DBS Type</p>
                        </div>
                      </div>
                      <div
                        className="bg-gradient-to-r from-red-600 to-red-500 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow"
                      >
                        <div className="flex items-start justify-end mb-4">
                          <div className="py-3 px-3 bg-white rounded-full">
                            <FolderCog className="w-6 h-5 text-black" />
                          </div>
                        </div>
                        <div>
                          <p className="text-xl font-semibold text-white mb-1">
                            {dbsDetails.dbsStageLevel ? `${dbsDetails.dbsStageLevel} - ${dbsDetails.dbsStageName}` : 'None Assigned'}
                          </p>
                          <p className="text-sm text-white">Stage Level</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex flex-col mb-8 bg-white shadow rounded-xl dark:bg-dark-card">
                      <div className="p-5 border-b dark:border-secondary-800 dark:border-secondary-800 flex flex-wrap justify-between items-center">
                        <div className="flex items-center">
                          <ClipboardClock size={30} className="mr-2" />
                          <h4 className="card-title mb-0 dark:text-white font-bold">
                            Activity Log
                          </h4>
                        </div>
                        {
                          user?.roleScope === 1 &&
                          ( user?.userRole === 'SuperAdmin' ||
                            user?.userId === dbsDetails.adminId ||
                            user?.userId === dbsDetails.staffInChargeId
                          ) &&
                          (<button className="btn btn-success mr-2 mb-2">
                            <Plus size={18} className="mr-2" />
                            Log New Activity
                          </button>)
                        }
                      </div>
                      <div className="p-6">
                        <div className="flex flex-wrap justify-between overflow-x-auto h-fit">
                          <table className="min-w-full divide-y divide-secondary-200 dark:divide-secondary-800 border dark:border-secondary-800">
                            <thead>
                              <tr className="bg-secondary-100 dark:bg-dark-bg">
                                <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                                  S/N
                                </th>
                                <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                                  Staff
                                </th>
                                <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                                  Action
                                </th>
                                <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                                  Stage Level
                                </th>
                                <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                                  Log Date
                                </th>
                                <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                                  Approval Status
                                </th>
                              </tr>
                            </thead>
                          </table>
                          <div className="py-4 whitespace-nowrap w-full">
                            <span className="px-6 py-4 text-left font-medium text-black dark:text-white">There hasn't been any activity logged for this application</span>
                          </div> 
                        </div>
                      </div>
                    </div>
                    <div className="relative flex flex-col mb-8 bg-white shadow rounded-xl dark:bg-dark-card">
                      <div className="p-5 border-b dark:border-secondary-800 dark:border-secondary-800 flex flex-wrap justify-between items-center">
                        <div className="flex items-center">
                          <MessageSquareShare size={30} className="mr-2" />
                          <h4 className="card-title mb-0 dark:text-white font-bold">
                            Comments
                          </h4>
                        </div>
                        {
                          user?.roleScope === 1 &&
                          ( user?.userRole === 'SuperAdmin' ||
                            user?.userId === dbsDetails.adminId ||
                            user?.userId === dbsDetails.staffInChargeId
                          ) &&
                          (<button className="btn btn-success mr-2 mb-2">
                            <Plus size={18} className="mr-2" />
                            Add New Comment
                          </button>)
                        }
                      </div>
                      <div className="p-6">
                        <div className="flex flex-wrap justify-between overflow-x-auto h-fit">
                          <table className="min-w-full divide-y divide-secondary-200 dark:divide-secondary-800 border dark:border-secondary-800">
                            <thead>
                              <tr className="bg-secondary-100 dark:bg-dark-bg">
                                <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                                  S/N
                                </th>
                                <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                                  Staff
                                </th>
                                <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                                  Action
                                </th>
                                <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                                  Stage Level
                                </th>
                                <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                                  Log Date
                                </th>
                                <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                                  Approval Status
                                </th>
                              </tr>
                            </thead>
                          </table>
                          <div className="py-4 whitespace-nowrap w-full">
                            <span className="px-6 py-4 text-left font-medium text-black dark:text-white">There hasn't been any comment added for this application</span>
                          </div> 
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
