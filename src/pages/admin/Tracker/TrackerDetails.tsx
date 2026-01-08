import { CheckCheck, ChevronDown, ChevronRightIcon, Eye, Plus, Shield, UserCog, UserLock, Users, UserStar, X } from "lucide-react";
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
      console.log(user);
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
          <div>
            <NavLink to="/Tracker" className="btn btn-primary">
              <Users size={18} className="mr-2" />
              All DBS Requests
            </NavLink>
          </div>
        </div>
        {
          dbsDetails && (
            <div className="flex flex-wrap contet-inner" x-data="{ openTab: 1 }">
            <div className="flex-auto w-full mt-6 md:mt-0">
              <div className="relative flex flex-col mb-8 text-secondary-500 bg-white shadow rounded dark:bg-dark-card">
                <div className="flex-auto p-6 ">
                  <div className="flex flex-wrap items-center justify-between">
                    <div className="flex flex-wrap items-center">
                      <div className=" lg:mb-0 profile-logo profile-logo1">
                        <img
                          src={dbsDetails.profile.profileImage}
                          className="w-24 h-24 border-4 border-white mb-3 rounded-full mr-4"
                          style={{ objectFit: "cover" }}
                          alt="profile-image"
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center mb-4 md:mb-0">
                            <h4 className="mr-2  font-medium mb-0 dark:text-white">
                            {`${dbsDetails.profile.firstName} ${dbsDetails.profile.lastName}`}
                            </h4>
                            <span className="mb-0 mr-3 text-secondary-600 dark:text-white">
                            {" "}
                            {/* - Web Developer */}
                            </span>
                        </div>
                        <div className="flex flex-wrap items-center mt-2 mb-4 md:mb-0">
                            <span className="mb-0 mr-3 text-black dark:text-white">
                                DBS Type - {dbsDetails.dbsType}
                            </span>
                        </div>
                        <div className="flex flex-wrap items-center mt-2 mb-4 md:mb-0">
                            <span className="mb-0 mr-3 text-black dark:text-white">
                                DBS Status - 
                            </span>
                            <p
                            className={`p-1 px-2 text-black text-center rounded-lg ${
                              statusStyles[dbsDetails.status] ?? 'bg-gray-200'
                            }`}
                          >
                            {dbsDetails.status}
                          </p>
                        </div>
                      </div>
                    </div>
                    <ul className="flex flex-wrap mb-0 text-center items-start">
                      <li className="nav-item gap-2 relative">
                        <button className="btn btn-info mr-2 mb-2" onClick={() => setOpenMoreAction(!openMoreAction)}>
                          More Actions
                          <ChevronDown size={18} className="ml-2" />
                        </button>
                        {openMoreAction && (<div className="absolute top-8 right-1 mt-2 w-60 bg-white border shadow-lg z-1">
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
                        </div>)}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
              <div className="col lg:col-span-1">
                <div x-show="openTab === 4">
                  <div className="h-120 overflow-y-auto relative flex flex-col mb-8  bg-white shadow rounded-xl dark:bg-dark-card">
                    <div className="p-5 border-b dark:border-secondary-800 dark:border-secondary-800">
                      <h4 className="card-title mb-0 dark:text-white">
                        About Applicant
                      </h4>
                    </div>
                    <div className="p-6">
                      <div className="mt-2">
                        <h6 className="mb-1 dark:text-white">Email:</h6>
                        <p className="mb-3 dark:text-secondary-600">
                          <a href="#">{dbsDetails.profile.email}</a>
                        </p>
                      </div>
                      <div className="mt-2">
                        <h6 className="mb-1 dark:text-white">Contact:</h6>
                        <p className="mb-3 dark:text-secondary-600">
                          <a href="#">{dbsDetails.profile.phone}</a>
                        </p>
                      </div>
                      <div className="mt-2">
                        <h6 className="mb-1 dark:text-white">Gender:</h6>
                        <p className="mb-3 dark:text-secondary-600">
                          <a href="#">{dbsDetails.profile.gender}</a>
                        </p>
                      </div>
                      <div className="mt-2">
                        <h6 className="mb-1 dark:text-white">Date of Birth:</h6>
                        <p className="mb-3 dark:text-secondary-600">
                          <a href="#">{(new Date(dbsDetails.profile.dateOfBirth)).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</a>
                        </p>
                      </div>
                      <div className="mt-2">
                        <h6 className="mb-1 dark:text-white">Identification Number:</h6>
                        <p className="mb-3 dark:text-secondary-600">
                          <a href="#">{dbsDetails.profile.identificationNumber}</a>
                        </p>
                      </div>
                      <div className="mt-2">
                        <h6 className="mb-1 dark:text-white">Address:</h6>
                        <p className="mb-3 dark:text-secondary-600">
                          <a href="#">{dbsDetails.profile.address}</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col lg:col-span-1">
                <div x-show="openTab === 4">
                  <div className="h-120 overflow-y-auto relative flex flex-col mb-8  bg-white shadow rounded-xl dark:bg-dark-card">
                    <div className="p-5 border-b dark:border-secondary-800 dark:border-secondary-800">
                      <h4 className="card-title mb-0 dark:text-white">
                        Application Details
                      </h4>
                    </div>
                    <div className="p-6">
                      <div className="mt-2">
                        <h6 className="mb-1 dark:text-white">Application Administrator:</h6>
                        <p className="mb-3 dark:text-secondary-600">
                          <a href="#">{dbsDetails.adminId ? (`${dbsDetails.adminFirstName} ${dbsDetails.adminLastName}`) : 'None Assigned'}</a>
                        </p>
                      </div>
                      <div className="mt-2">
                        <h6 className="mb-1 dark:text-white">Staff In Charge:</h6>
                        <p className="mb-3 dark:text-secondary-600">
                          <a href="#">{dbsDetails.staffInChargeId ? (`${dbsDetails.staffInChargeFirstName} ${dbsDetails.staffInChargeLastName}`) : 'None Assigned'}</a>
                        </p>
                      </div>
                      <div className="mt-2">
                        <h6 className="mb-1 dark:text-white">Requested By:</h6>
                        <p className="mb-3 dark:text-secondary-600">
                          <a href="#">{dbsDetails.requestedBy}</a>
                        </p>
                      </div>
                      <div className="mt-2">
                        <h6 className="mb-1 dark:text-white">Organisation:</h6>
                        <p className="mb-3 dark:text-secondary-600">
                          <a href="#">{dbsDetails.organisationName}</a>
                        </p>
                      </div>
                      <div className="mt-2">
                        <h6 className="mb-1 dark:text-white">Request Created On:</h6>
                        <p className="mb-3 dark:text-secondary-600">
                          <a href="#">{(new Date(dbsDetails.dateCreated)).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</a>
                        </p>
                      </div>
                      <div className="mt-2">
                        <h6 className="mb-1 dark:text-white">Request Submitted On:</h6>
                        <p className="mb-3 dark:text-secondary-600">
                          <a href="#">{dbsDetails.submittedAt ? (new Date(dbsDetails.submittedAt)).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : ('Not Submitted')}</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col lg:col-span-1">
                <div x-show="openTab === 4">
                  <div className="h-120 overflow-y-auto relative flex flex-col mb-8  bg-white shadow rounded-xl dark:bg-dark-card">
                    <div className="p-5 border-b dark:border-secondary-800 dark:border-secondary-800">
                      <h4 className="card-title mb-0 dark:text-white">
                        Applicant Documents
                      </h4>
                    </div>
                    <div className="p-6">
                      <div className="mt-2">
                        {
                          userDocuments.length === 0 &&
                            <div className="py-4 whitespace-nowrap">
                                  <span className="px-6 py-4 text-left font-medium text-black dark:text-white">There are no uploaded document for { dbsDetails.profile.firstName }</span>
                            </div>
                        }
                        {
                            userDocuments.length > 0 && (
                                userDocuments.map((data: UserDocumentValues, index) => (
                                  <div className="mt-2 p-2 border-2" key={index}>
                                    <h6 className="mb-1 dark:text-white flex items-center gap-3 font-bold">
                                        {
                                            Number(data.userDocumentType) === 1 && 'InternationalPassport'
                                        }
                                        {
                                            Number(data.userDocumentType) === 2 && 'Identification Document'
                                        }
                                        {
                                            Number(data.userDocumentType) === 3 && 'PoliceCertificate'
                                        }
                                        {" "}
                                        {
                                            Number(data.status) === 1 && <p className="w-15 text-sm font-light p-1 bg-orange-200 text-center rounded-lg">Pending</p>
                                        }
                                        {
                                            Number(data.status) === 2 && <p className="w-15 text-sm font-light p-1 bg-green-200 text-center rounded-lg">Verified</p>
                                        }
                                        {
                                            Number(data.status) === 3 && <p className="w-15 text-sm font-light p-1 bg-red-200 text-center rounded-lg">Rejected</p>
                                        }
                                    </h6>
                                    <div className="mb-1">
                                        <a className="btn btn-info mr-2 mb-2" href={data.fileUrl} target="_blank">
                                            <Eye size={18} className="mr-2" />
                                            View Document
                                        </a>
                                    </div>
                                    <p className="mb-1 dark:text-secondary-600 text-sm">
                                        <span>Uploaded On - {(new Date(data.dateCreated)).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                                    </p>
                                </div>  
                                ))
                            )
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col lg:col-span-3">
                <div x-show="openTab === 4">
                  <div className="relative flex flex-col mb-8  bg-white shadow rounded-xl dark:bg-dark-card">
                    <div className="p-5 border-b dark:border-secondary-800 dark:border-secondary-800 flex justify-between items-center">
                      <h4 className="card-title mb-0 dark:text-white">
                        Activity Log
                      </h4>
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
