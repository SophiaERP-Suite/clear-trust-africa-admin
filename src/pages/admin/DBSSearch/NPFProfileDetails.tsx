import {
  BriefcaseBusiness,
  Cake,
  CheckCheck,
  ChevronRightIcon,
  ClipboardClock,
  ClipboardList,
  Gem,
  Mail,
  MapPin,
  MapPinHouse,
  MapPinned,
  Phone,
  Plus,
  Search,
  User,
  UserLock,
  Venus,
} from "lucide-react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Hashids from "hashids";
import { toast, ToastContainer } from "react-toastify";
import Modal from 'react-modal';
import { calculateAge } from "../../../utils/extraFunctions.js";
import type { DBSStatus, NPFData } from "./DBSSearch.js";
import { fetchNPFRecordsById, fetchNPFSearchById, matchNPFSearchToApplication } from "../../../utils/Requests/NPFRequests.js";
import Tippy from "@tippyjs/react";
import { useForm, useWatch } from "react-hook-form";
import { fetchDbsChecks, fetchDbsStatus, fetchDbsTypes } from "../../../utils/Requests/DbsRequests.js";
import type { DbsChecks, DBSTypes } from "../Tracker/DbsTracker.js";
import { handleSearchMatch } from "../../../utils/ResponseHandlers/EmployeeResponse.js";

const riskLevels: Record<number, string[]> = {
  3: ['High', 'bg-red-200/50', 'text-red-500'],
  2: ['Medium', 'bg-orange-200/50', 'text-orange-500'],
  1: ['Low', 'bg-yellow-200/50', 'text-yellow-500'],
  0: ['No Risk', 'bg-green-200/50', 'text-green-500']
}

const maritalStatus: Record<number, string> = {
  4: 'Widowed',
  3: 'Divorced',
  2: 'Married',
  1: 'Single',
}

const offenseCategory: Record<number, string> = {
  2: 'Misdemeanor',
  1: 'Felony',
}

const caseStatus: Record<number, string> = {
  4: 'Dismissed',
  3: 'Acquitted',
  2: 'Convicted',
  1: 'Pending',
}

export interface NPFCriminalRcords {
  npfCriminalRecordId: string;
  npfProfileRecordId: string;
  caseReferenceNumber: string;
  offenseCategory: number;
  offenseType: string;
  offenseDescription: string;
  arrestDate: string;
  caseStatus: number;
  courtName: string;
  sentence: string;
  sentenceStartDate: string;
  sentenceEndDate: string;
  dateCreated: string;
}

export type FilterForm = {
  UserId: number;
  UserName: string;
  OrganisationName: string;
  Status: number;
  Type: number;
}

const statusStyles: Record<number, string> = {
  1: 'bg-orange-200/50',
  2: 'bg-blue-200/50',
  3: 'bg-purple-200/50',
  4: 'bg-green-200/50',
  5: 'bg-red-200/50',
};

const statusTextStyles: Record<number, string> = {
  1: 'text-orange-500',
  2: 'text-blue-500',
  3: 'text-purple-500',
  4: 'text-green-500',
  5: 'text-red-500',
};

export default function NPFProfileDetails() {
  const { id } = useParams();
  const [npfDetails, setNPFDetails] = useState<NPFData>();
  const [npfRecordDetails, setNPFRecordDetails] = useState<NPFCriminalRcords[]>([]);
  const [npfTotalRecord, setNPFTotalRecord] = useState(0);
  const [npfPage, setNPFPage] = useState(1);
  const npfLimit = 5;
  const hashIds = new Hashids('ClearTrustAfricaEncode', 10);
  const hashedId = id ? Number(hashIds.decode(id)[0]) : 0;
  const [attachModalState, setAttachModalState] = useState(false);
  const { register, control } = useForm<FilterForm>();
  const filters = useWatch({ control });
  const [dbsChecks, setDbsChecks] = useState<DbsChecks[]>([]);
  const colors = ["#5d009bff", "#ff8800ff", "#ff0000", "#003000ff", "#00006dff"];
  const [dbsStatus, setDbsStatus] = useState<DBSStatus[]>([]);
  const [dbsType, setDbsType] = useState<DBSTypes[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
      fetchNPFSearchById(hashedId)
      .then(res => {
        if (res.status === 200) {
          res.json()
          .then(data => {
            console.log(data)
            setNPFDetails(data.data);
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
    
  useEffect(() => {
    fetchDbsChecks({ pageNumber: 1, limit: 10, ...filters })
    .then(res => {
        if (res.status === 200) {
        res.json()
        .then(data => {
            console.log(data);
            setDbsChecks(data.data.checks);
        })
        } else {
        res.text()
        .then(data => {
            console.log(JSON.parse(data));
        })
        }
    })
    .catch((err) => console.log(err))
  }, [filters]);
    
  useEffect(() => {
    fetchDbsTypes()
    .then(res => {
    if (res.status === 200) {
        res.json()
        .then(data => {
        setDbsType(data.data);
        })
    } else {
        res.text()
        .then(data => {
        console.log(JSON.parse(data));
        })
    }
    });
  }, []);
  
  useEffect(() => {
    fetchDbsStatus()
    .then(res => {
    if (res.status === 200) {
        res.json()
        .then(data => {
        setDbsStatus(data.data);
        })
    } else {
        res.text()
        .then(data => {
        console.log(JSON.parse(data));
        })
    }
    });
  }, []);
    
  useEffect(() => {
      fetchNPFRecordsById(hashedId, { pageNumber: npfPage, limit: npfLimit})
      .then(res => {
        if (res.status === 200) {
          res.json()
          .then(data => {
            console.log("Record", data);
            setNPFRecordDetails(data.data.records);
            setNPFTotalRecord(data.data.totalCount);
          })
        } else {
          res.text()
          .then(data => {
            console.log(JSON.parse(data));
          })
        }
      })
      .catch((err) => console.log(err))
  }, [hashedId, npfPage, npfLimit]);
    
  const matchDataToApplication = async (applicationId: number) => {
    const formData = new FormData();
    formData.append('DBSApplicationId', String(applicationId));
    formData.append('NPFProfileRecordId', String(hashedId));
    formData.append('SearchType', String(2));
    const res = await matchNPFSearchToApplication(formData);
    const data = await handleSearchMatch(res, { toast }, null);
    if (data) {
        const dbsSearchId = data.data.dbsSearchId;
        if (dbsSearchId) {
            navigate(`/CTASearch/Compare/${hashIds.encode(dbsSearchId)}`);
        }
    }
  }

  return (
   <>
      <ToastContainer />
      <Modal isOpen={attachModalState} onRequestClose={() => { setAttachModalState(false); }}
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
          <div className="h-fit max-h-[70vh] overflow-y-auto overflow-x-auto w-70 max-w-70 md:w-800 md:max-w-[800px]">
              <div className="flex justify-start">
              <p className="font-semibold text-black py-1 text-lg"><UserLock size={20} className="mr-2" /> Match Record to Application</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg">
                {/* Filters */}
                <div className="py-2 border-b">
                    <div className="flex flex-wrap gap-4">
                    <div className="flex-1 min-w-[250px]">
                        <div className="relative">
                        <Search
                            className="absolute left-3 top-7 transform -translate-y-1/2 text-gray-400"
                            size={20}
                        />
                        <input
                            type="text"
                            placeholder="Search by applicant name..."
                            {...register('UserName')}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        </div>
                    </div>
                    <div className="flex-1 min-w-[250px]">
                        <div className="relative">
                        <Search
                            className="absolute left-3 top-7 transform -translate-y-1/2 text-gray-400"
                            size={20}
                        />
                        <input
                            type="text"
                            placeholder="Search by organisation name..."
                            {...register('OrganisationName')}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        </div>
                    </div>
                    <select
                        {...register('Status')}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                        <option value="">All Status</option>
                        {
                        dbsStatus.map((data, index) => (
                            <option value={data.statusId} key={index}>{data.statusName}</option>
                        ))
                        }
                    </select>
                    <select
                        {...register('Type')}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                        <option value="">All Types</option>
                        {
                        dbsType.map((data, index) => (
                            <option value={data.dbsTypeId} key={index}>{ data.typeName }</option>
                        ))
                        }
                    </select>
                    </div>
                </div>
        
                {/* Table */}
                <div className="overflow-x-auto">
                    <div className="py-2">
                    <div className="flex flex-wrap justify-between overflow-x-auto">
                        <table className="min-w-full divide-y divide-secondary-200 dark:divide-secondary-800 border dark:border-secondary-800">
                        <thead>
                            <tr className="bg-secondary-100 dark:bg-dark-bg">
                            <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                                Applicant
                            </th>
                            <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                                Status
                            </th>
                            <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                                Details
                            </th>
                            <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                                Action
                            </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-secondary-200 dark:divide-secondary-800">
                            {
                            dbsChecks.map((data, index) => (
                            <tr key={data.dbsApplicationId ?? index}>
                                <td className="px-6 py-4">
                                <div className="flex w-50 items-center gap-3">
                                    <div className="h-12 w-12 border rounded-full" style={{ backgroundColor: colors[index % 4], display: "flex", justifyContent: "center", alignItems: "center", color: "#ffffff"}}>
                                    { `${data.userFirstName[0]} ${data.userLastName[0]}` }
                                    </div>
                                    <div>
                                    <div className="font-semibold text-gray-900">
                                        {`${data.userFirstName} ${data.userLastName}`}
                                    </div>
                                    </div>
                                </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                                    <p
                                        className={`p-1 px-2 text-center rounded-lg ${
                                        statusStyles[data.status] ?? 'bg-gray-200'
                                        } ${statusTextStyles[data.status] ?? 'text-black'} font-bold`}
                                    >
                                        {data.statusName}
                                    </p>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap  text-gray-900">
                                    <p className="text-sm"><b>Type:</b> {data.dbsType}</p>
                                    <p className="text-sm"><b>Staff:</b> {data.staffInChargeId ? `${data.staffInChargeFirstName} ${data.staffInChargeLastName}` : 'None Assigned'}</p>
                                    <p className="text-sm"><b>Admin:</b> {data.adminId ? `${data.adminFirstName} ${data.adminLastName}` : 'None Assigned'}</p>
                                    <p className="text-sm"><b>Requested By:</b>{data.requestedBy}</p>
                                    <p className="text-sm"><b>Request Date:</b> {(new Date(data.dateCreated)).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap  text-gray-900">
                                <div className="flex items-center list-user-action">
                                    <Tippy content='Match Application'>
                                        <button onClick={() => matchDataToApplication(data.dbsApplicationId)}
                                            className="btn btn-success"
                                        >
                                            <span className="btn-inner">
                                            <CheckCheck />
                                            </span>
                                        </button>
                                    </Tippy>
                                </div>
                                </td>
                            </tr>
                            ))
                            }
                            
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
          </div>
            
      </Modal>
      <div
        className="p-6 lg:p-8 footer-inner mx-auto main-container container"
        x-bind:className="setting.page_layout"
      >
        <div className="flex flex-wrap mb-8 items-center justify-between">
          <div className="flex">
            <ClipboardList className="text-blue-600 mr-2" size={36} />
            <div>
                <h3 className="mb-0 text-black">
                    NPF Profile Details
                </h3>
                <p className="text-secondary-600 text-black">
                    <NavLink to="/Dashboard">Dashboard</NavLink>{" "}
                    <ChevronRightIcon size={14} />{" "}
                    <NavLink to="/CTASearch">CTA Search</NavLink>{" "}
                    <ChevronRightIcon size={14} />{" "}
                    <NavLink to={`/CTASearch/NPF/${id}`}>NPF Profile Details</NavLink>{" "}
                </p>
            </div>
          </div>
          
            {npfDetails && (
              <div className="flex flex-wrap">
                <div>
                    <Tippy content="Risk Level">
                        <p className={`btn mr-2 mb-2 ${riskLevels[npfDetails.riskLevel][1] ?? 'bg-gray-200'} ${riskLevels[npfDetails.riskLevel][2] ?? 'text-black'} font-bold`}
                            style={{ cursor: 'auto' }}>
                            {riskLevels[npfDetails.riskLevel][0]} {npfDetails.wanted && '- Wanted'}
                        </p>
                    </Tippy>
                </div>
                <div className="relative">
                  <button className="btn btn-success mr-2 mb-2" onClick={() => setAttachModalState(true)}>
                    <Plus size={18} className="mr-2" />
                    Match To Application
                  </button>
                </div>
              </div>
            )}
        </div>
        {
          npfDetails && (
            <div className="flex flex-wrap contet-inner" x-data="{ openTab: 1 }">
              <div className="w-full grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
                <div className="col lg:col-span-1">
                  <div x-show="openTab === 4">
                    <div className="h-fit overflow-y-auto relative flex flex-col mb-4 bg-white shadow rounded-xl dark:bg-dark-card">
                        <div className="bg-[#7016d0] p-5 border-b dark:border-secondary-800 dark:border-secondary-800">
                            <div className="lg:mb-0 profile-logo profile-logo1 flex justify-center">
                            <img
                                src={npfDetails.photoURL}
                                className="w-24 h-24 border-4 border-white mb-3 rounded-full mr-4"
                                style={{ objectFit: "cover" }}
                                alt="profile-image"
                            />
                            </div>
                            <h4 className="card-title mb-2 text-white text-center">
                            {`${npfDetails.firstName} ${npfDetails.lastName}`}
                            </h4>
                            <h4 className="card-title mb-0 text-white text-center">
                            {npfDetails.otherNames}
                            </h4>
                        </div>
                        <div className="p-6">
                            <div className="border-b dark:border-secondary-800 dark:border-secondary-800 flex items-center pb-1">
                                <User size={30} className="mr-2" />
                                <h4 className="card-title mb-0 dark:text-white font-bold">
                                    Profile Details
                                </h4>
                            </div>
                            <div className="pl-1 mt-2 flex justify-start items-center">
                                <Mail size={20} className="mr-2" />
                                {npfDetails.email}
                            </div>
                            <div className="pl-1 mt-2 flex justify-start items-center">
                                <Phone size={20} className="mr-2" />
                                {npfDetails.phone}
                            </div>
                            <div className="pl-1 mt-2 flex justify-start items-center">
                                <Venus size={20} className="mr-2" />
                                {npfDetails.gender}
                            </div>
                            <div className="pl-1 mt-2 flex justify-start items-center">
                                <Cake size={20} className="mr-2" />
                                {(new Date(npfDetails.dateOfBirth)).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}
                                {`  (${calculateAge(new Date(npfDetails.dateOfBirth))})`}
                            </div>
                            <div className="pl-1 mt-2 flex justify-start items-center">
                                <MapPin size={20} className="mr-2" />
                                {npfDetails.residentialAddress}
                            </div>
                            <div className="pl-1 mt-2 flex justify-start items-center">
                                <MapPinned size={20} className="mr-2" />
                                {`${npfDetails.lga}, ${npfDetails.state}`}
                            </div>
                            <div className="pl-1 mt-2 flex justify-start items-center">
                                <MapPinHouse size={20} className="mr-2" />
                                {npfDetails.nationality}
                            </div>
                            <div className="pl-1 mt-2 flex justify-start items-center">
                                <BriefcaseBusiness size={20} className="mr-2" />
                                {npfDetails.occupation}
                            </div>
                            <div className="pl-1 mt-2 flex justify-start items-center">
                                <Gem size={20} className="mr-2" />
                                {maritalStatus[npfDetails.maritalStatus]}
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="col lg:col-span-2">
                  <div x-show="openTab === 4">
                    <div className="relative flex flex-col mb-8 bg-white shadow rounded-xl dark:bg-dark-card">
                      <div className="p-5 border-b dark:border-secondary-800 dark:border-secondary-800 flex flex-wrap justify-between items-center">
                        <div className="flex items-center">
                          <ClipboardClock size={30} className="mr-2" />
                          <h4 className="card-title mb-0 dark:text-white font-bold">
                            Criminal Records
                          </h4>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex flex-wrap justify-between overflow-x-auto h-fit">
                          <table className="min-w-full divide-y divide-secondary-200 dark:divide-secondary-800 border dark:border-secondary-800">
                            <thead>
                              <tr className="bg-secondary-100 dark:bg-dark-bg">
                                <th className="px-6 py-4 text-left font-medium text-black  whitespace-nowrap dark:text-white">
                                  S/N
                                </th>
                                <th className="px-6 py-4 text-left font-medium text-black  whitespace-nowrap dark:text-white">
                                  Case Reference Number
                                </th>
                                <th className="px-6 py-4 text-left font-medium text-black  whitespace-nowrap dark:text-white">
                                  Offense Type
                                </th>
                                <th className="px-6 py-4 text-left font-medium text-black  whitespace-nowrap dark:text-white">
                                  Offense Category
                                </th>
                                <th className="px-6 py-4 text-left font-medium text-black  whitespace-nowrap dark:text-white">
                                  Offense Description
                                </th>
                                <th className="px-6 py-4 text-left font-medium text-black  whitespace-nowrap dark:text-white">
                                  Case Status
                                </th>
                              </tr>
                            </thead>
                             <tbody className="divide-y divide-secondary-200 dark:divide-secondary-800">
                                {
                                    npfRecordDetails.map((data, index) => (
                                    <tr key={data.npfCriminalRecordId ?? index}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="iq-media-group iq-media-group-1">
                                            <h6 className="font-bold dark:text-white">
                                            {" "}
                                            #{(index + (npfPage * (npfPage - 1))) + 1}
                                            </h6>
                                        </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                                            {data.caseReferenceNumber}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                                            {data.offenseType}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                                            {offenseCategory[data.offenseCategory]}
                                        </td>
                                        <td className="px-6 py-4 text-gray-900">
                                            {data.offenseDescription}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                                            {caseStatus[data.caseStatus]}
                                        </td>
                                    </tr>
                                    ))
                                }
                            </tbody>
                          </table>
                          {
                            npfRecordDetails.length === 0 && (
                                <div className="py-4 whitespace-nowrap w-full">
                                    <span className="px-6 py-4 text-left font-medium text-black dark:text-white">This profile has a clean criminal record</span>
                                </div>     
                            )
                          }
                        </div>
                        <div className="flex flex-wrap justify-between my-6 mx-5">
                            <div className="flex justify-center items-center mb-1">
                            <p className="text-black">
                                Showing { npfRecordDetails.length > 0 ? ((npfPage * npfLimit) - npfLimit) + 1 : 0 } to { npfRecordDetails.length > 0 ? (((npfPage * npfLimit) - npfLimit) + 1) + (npfRecordDetails.length - 1) : 0 } of { npfTotalRecord } entries
                            </p>
                            </div>
                            <div className="inline-flex flex-wrap">
                            {
                                npfPage > 1 && <a
                                href="#"
                                onClick={() => { if (npfPage > 1) {setNPFPage(npfPage - 1);} }}
                                className="border-t border-b border-l text-primary-500 border-secondary-500 px-2 py-1 rounded-l dark:border-secondary-800"
                            >
                                Previous
                            </a>
                            }
                            <a
                                href="#"
                                className="border text-white border-secondary-500 cursor-pointer bg-primary-500 px-4 py-1 dark:border-secondary-800"
                            >
                                { npfPage }
                            </a>
                            {
                                (npfPage * npfLimit) < npfTotalRecord && <a
                                href="#"
                                onClick={() => { setNPFPage(npfPage + 1); }}
                                className="border-r border-t border-b text-primary-500 border-secondary-500 px-4 py-1 rounded-r dark:border-secondary-800"
                            >
                                Next
                            </a>
                            }
                            
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
