import { useEffect, useState } from "react";
import {
  Shield,
  ChevronRightIcon,
  FileText,
  ClipboardPaste,
  Eye,
  Search,
  User,
  Mail,
  Phone,
  Venus,
  Cake,
  MapPin,
  MapPinned,
  MapPinHouse,
  BriefcaseBusiness,
  Gem,
  Activity,
  X,
  CheckCheck,
  UserLock,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import Tippy from "@tippyjs/react";
import Hashids from "hashids";
import { useForm, useWatch } from "react-hook-form";
import { fetchNIMCSearch, matchNIMCSearchToApplication } from "../../../utils/Requests/NIMCRequests";
import { fetchNPFSearch } from "../../../utils/Requests/NPFRequests";
import Modal from 'react-modal';
import { calculateAge } from "../../../utils/extraFunctions.js";
import type { FilterForm } from "./NPFProfileDetails.js";
import { fetchDbsChecks, fetchDbsStatus, fetchDbsTypes } from "../../../utils/Requests/DbsRequests.js";
import type { DbsChecks } from "../Tracker/DbsTracker.js";
import { toast } from "react-toastify";
import { handleSearchMatch } from "../../../utils/ResponseHandlers/EmployeeResponse.js";

export interface DBSStatus {
  statusId: number;
  statusName: string;
}

export interface DBSTypes {
  dbsTypeId: number;
  typeName: string;
  typeCost: number;
  description: string;
}

export interface NIMCData {
  nimcRecordId: string;
  nin: string;
  firstName: string;
  lastName: string;
  middleName: string;
  dateOfBirth: string;
  gender: string;
  phone: string;
  email: string;
  residentialAddress: string;
  state: string;
  lga: string;
  nationality: string;
  photoURL: string;
  occupation: string;
  maritalStatus: number;
  biometricVerified: boolean;
  status: number;
  lastVerifiedAt: string;
  dateCreated: string;
}

export interface NPFData {
  npfProfileRecordId: string;
  firstName: string;
  lastName: string;
  otherNames: string;
  dateOfBirth: string;
  gender: string;
  phone: string;
  email: string;
  nin: string;
  residentialAddress: string;
  state: string;
  lga: string;
  nationality: string;
  photoURL: string;
  occupation: string;
  maritalStatus: number;
  hasCriminalRecord: boolean;
  wanted: boolean;
  riskLevel: number;
  dateCreated: string;
}

type NIMCFilterForm = {
  NIN: string;
  UserName: string;
  DateOfBirth: string;
}

type NPFFilterForm = {
  Gender: string;
  UserName: string;
  DateOfBirth: string;
}

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

const nimcStatus: Record<number, string> = {
  3: 'Deceased',
  2: 'InActive',
  1: 'Active',
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

export default function DBSSearchModule() {
  const [activeView, setActiveView] = useState("nimc");
  const [nimcSearch, setNimcSearch] = useState<NIMCData[]>([]);
  const [nimcDetails, setNimcDetails] = useState<NIMCData>();
  const [dbsPage, setDbsPage] = useState(1);
  const dbsLimit = 5;
  const [totalNimcSearch, setTotalNimcSearch] = useState(0);
  const [npfSearch, setNPFSearch] = useState<NPFData[]>([]);
  const [dbsPageNPF, setDbsPageNPF] = useState(1);
  const dbsLimitNPF = 5;
  const [totalNPFSearch, setTotalNPFSearch] = useState(0);
  const hashIds = new Hashids('ClearTrustAfricaEncode', 10);
  const { register, control } = useForm<NIMCFilterForm>();
  const [nimcModalState, setNIMCModalState] = useState(false);
  const filters = useWatch({ control });
  const { register: npfRegister, control: npfControl } = useForm<NPFFilterForm>();
  const npfFilters = useWatch({ control: npfControl });
  const searchTypes = [
    { id: "nimc", label: "NIMC", icon: Shield },
    { id: "npf", label: "NPF", icon: FileText },
  ]
  const [attachModalState, setAttachModalState] = useState(false);
  const { register: dbsRegister, control: dbsControl } = useForm<FilterForm>();
  const dbsFilters = useWatch({ control: dbsControl });
  const [dbsChecks, setDbsChecks] = useState<DbsChecks[]>([]);
  const colors = ["#5d009bff", "#ff8800ff", "#ff0000", "#003000ff", "#00006dff"];
  const [dbsStatus, setDbsStatus] = useState<DBSStatus[]>([]);
  const [dbsType, setDbsType] = useState<DBSTypes[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchNIMCSearch({ pageNumber: dbsPage, limit: dbsLimit, ...filters })
    .then(res => {
      if (res.status === 200) {
        res.json()
        .then(data => {
          console.log("NIMC", data);
          setNimcSearch(data.data.search);
          setTotalNimcSearch(data.data.totalCount);
        })
      } else {
        res.text()
        .then(data => {
          console.log(JSON.parse(data));
        })
      }
    })
    .catch((err) => console.log(err))
  }, [dbsPage, dbsLimit, filters]);

  useEffect(() => {
    fetchNPFSearch({ pageNumber: dbsPageNPF, limit: dbsLimitNPF, ...npfFilters })
    .then(res => {
      if (res.status === 200) {
        res.json()
        .then(data => {
          console.log(data);
          setNPFSearch(data.data.search);
          setTotalNPFSearch(data.data.totalCount);
        })
      } else {
        res.text()
        .then(data => {
          console.log(JSON.parse(data));
        })
      }
    })
    .catch((err) => console.log(err))
  }, [dbsPageNPF, dbsLimitNPF, npfFilters]);

  useEffect(() => {
    fetchDbsChecks({ pageNumber: 1, limit: 10, ...dbsFilters })
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
  }, [dbsFilters]);
      
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

  const matchDataToApplication = async (applicationId: number) => {
    if (nimcDetails) {
      const formData = new FormData();
      formData.append('DBSApplicationId', String(applicationId));
      formData.append('NIMCRecordId', String(nimcDetails.nimcRecordId));
      formData.append('SearchType', String(1));
      const res = await matchNIMCSearchToApplication(formData);
      const data = await handleSearchMatch(res, { toast }, null);
      setAttachModalState(false);
      if (data) {
        const dbsSearchId = data.data.dbsSearchId;
        if (dbsSearchId) {
          navigate(`/DBSSearch/Compare/${hashIds.encode(dbsSearchId)}`);
        }
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Modal isOpen={nimcModalState} onRequestClose={() => { setNIMCModalState(false); }}
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
        {nimcDetails &&
          <div className="h-fit max-h-[70vh] overflow-y-auto  w-70 md:w-100">
            <div className="flex justify-start">
              <p className="font-semibold text-black py-1 text-lg"><Shield size={20} className="mr-2" /> Details for {`NIN-${nimcDetails.nin}`} </p>
            </div>
            <div className="mt-4 h-fit overflow-y-auto relative flex flex-col mb-4 bg-white shadow rounded-xl dark:bg-dark-card">
              <div className="bg-[#7016d0] p-5 border-b dark:border-secondary-800 dark:border-secondary-800">
                <div className="lg:mb-0 profile-logo profile-logo1 flex justify-center">
                  <img
                    src={nimcDetails.photoURL}
                    className="w-24 h-24 border-4 border-white mb-3 rounded-full mr-4"
                    style={{ objectFit: "cover" }}
                    alt="profile-image"
                  />
                </div>
                <h4 className="card-title mb-2 text-white text-center">
                  {`${nimcDetails.firstName} ${nimcDetails.lastName}`}
                </h4>
                <h4 className="card-title mb-0 text-white text-center">
                  {nimcDetails.middleName}
                </h4>
              </div>
              <div className="py-4">
                <div className="border-b dark:border-secondary-800 dark:border-secondary-800 flex items-center pb-1">
                  <User size={30} className="mr-2" />
                  <h4 className="card-title mb-0 dark:text-white font-bold">
                    Profile Details
                  </h4>
                </div>
                <div className="pl-1 mt-2 flex justify-start items-center">
                  <Mail size={20} className="mr-2" />
                  {nimcDetails.email}
                </div>
                <div className="pl-1 mt-2 flex justify-start items-center">
                  <Phone size={20} className="mr-2" />
                  {nimcDetails.phone}
                </div>
                <div className="pl-1 mt-2 flex justify-start items-center">
                  <Venus size={20} className="mr-2" />
                  {nimcDetails.gender}
                </div>
                <div className="pl-1 mt-2 flex justify-start items-center">
                  <Cake size={20} className="mr-2" />
                  {(new Date(nimcDetails.dateOfBirth)).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}
                  {`  (${calculateAge(new Date(nimcDetails.dateOfBirth))})`}
                </div>
                <div className="pl-1 mt-2 flex justify-start items-center">
                  <MapPin size={20} className="mr-2" />
                  {nimcDetails.residentialAddress}
                </div>
                <div className="pl-1 mt-2 flex justify-start items-center">
                  <MapPinned size={20} className="mr-2" />
                  {`${nimcDetails.lga}, ${nimcDetails.state}`}
                </div>
                <div className="pl-1 mt-2 flex justify-start items-center">
                  <MapPinHouse size={20} className="mr-2" />
                  {nimcDetails.nationality}
                </div>
                <div className="pl-1 mt-2 flex justify-start items-center">
                  <BriefcaseBusiness size={20} className="mr-2" />
                  {nimcDetails.occupation}
                </div>
                <div className="pl-1 mt-2 flex justify-start items-center">
                  <Gem size={20} className="mr-2" />
                  {maritalStatus[nimcDetails.maritalStatus]}
                </div>
                <div className="pl-1 mt-2 flex justify-start items-center">
                  <Activity size={20} className="mr-2" />
                  {nimcStatus[nimcDetails.status]}
                </div>
                <hr className="mt-5" />
                <div className="flex justify-end my-2 gap-2">
                  <button className="btn text-white bg-black" onClick={() => setNIMCModalState(false) }>
                    <X size={18} className="mr-2" />
                    Cancel
                  </button>
                  <button className="btn btn-success" onClick={() => { setNIMCModalState(false);  setAttachModalState(true); } }>
                    <CheckCheck size={18} className="mr-2" />
                    Match to Application
                  </button>
                </div>
              </div>
            </div>
          </div>
        }
      </Modal>
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
                            {...dbsRegister('UserName')}
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
                            {...dbsRegister('OrganisationName')}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        </div>
                    </div>
                    <select
                        {...dbsRegister('Status')}
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
                        {...dbsRegister('Type')}
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
      {/* Header */}
      <div className="mb-6">
        <div className="w-full mb-8">
          <div className="row">
            <div className="col-md-12">
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex">
                  <ClipboardPaste className="text-blue-600 mr-2" size={36} />
                  <div>
                    <h3 className="mb-0 text-black">
                      DBS Search
                    </h3>
                    <p className="text-secondary-600 text-black">
                      <NavLink to="/Dashboard">Dashboard</NavLink>{" "}
                      <ChevronRightIcon size={14} />{" "}
                      <NavLink to="/DBSSearch">DBS Search</NavLink>{" "}
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <select
                    className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  >
                    <option value="Nigeria">Nigeria</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto">
        {searchTypes.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveView(tab.id)}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeView === tab.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Icon size={18} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Main Content */}
      {activeView === "nimc" && (
        <div className="bg-white rounded-lg shadow-lg">
          {/* Filters */}
          <div className="p-6 border-b">
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[250px]">
                <div className="relative">
                  <Search
                    className="absolute left-3 top-7 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Search by NIN..."
                    {...register('NIN')}
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
                    placeholder="Search by Names..."
                    {...register('UserName')}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <Tippy content="Search By Birth Date">
                <div className="flex-1 min-w-[250px]">
                  <div className="relative">
                    <input
                      type="date"
                      placeholder="Search by Date Of Birth..."
                      {...register('DateOfBirth')}
                      className="w-full pl-2 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </Tippy>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <div className="py-3">
              <div className="flex flex-wrap justify-between mx-5 overflow-x-auto">
                <table className="min-w-full divide-y divide-secondary-200 dark:divide-secondary-800 border dark:border-secondary-800">
                  <thead>
                    <tr className="bg-secondary-100 dark:bg-dark-bg">
                      <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                        S/N
                      </th>
                      <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                        Name
                      </th>
                      <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                        NIN
                      </th>
                      <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                        Contact
                      </th>
                      <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                        Gender
                      </th>
                      <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                        Birth Date
                      </th>
                      <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-secondary-200 dark:divide-secondary-800">
                    {
                      nimcSearch.map((data, index) => (
                      <tr key={data.nimcRecordId ?? index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="iq-media-group iq-media-group-1">
                            <h6 className="font-bold dark:text-white">
                              {" "}
                              #{(index + (dbsLimit * (dbsPage - 1))) + 1}
                            </h6>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex w-50 items-center gap-3">
                            <img
                              src={data.photoURL}
                              className="h-12 w-12 rounded-full border-4 border-white mr-4"
                              style={{ objectFit: "cover" }}
                              alt="profile-image"
                            />
                            <div>
                              <div className="font-semibold text-gray-900">
                                {`${data.firstName} ${data.middleName} ${data.lastName}`}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-gray-900">
                          {data.nin}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-gray-900">
                          <p>
                            Email: {data.email}
                          </p>
                          <p>
                            Phone: {data.phone}
                          </p>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                          {data.gender}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-gray-900">
                          {(new Date(data.dateOfBirth)).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-gray-900">
                          <div className="flex items-center list-user-action">
                            <Tippy content='Preview NIMC Details'>
                                <button onClick={() => { setNimcDetails(data); setNIMCModalState(true); }}
                                className="btn btn-info btn-icon btn-sm mr-1"
                              >
                                <span className="btn-inner">
                                  <Eye />
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
                {
                  nimcSearch.length === 0 ?
                    <div className="py-4 whitespace-nowrap w-full">
                          <span className="px-6 py-4 text-left font-medium text-black dark:text-white">Your search hasn't produced any result</span>
                    </div> : <></>
                }
              </div>
              <div className="flex flex-wrap justify-between my-6 mx-5">
                <div className="flex justify-center items-center mb-1">
                  <p className="text-black">
                    Showing { nimcSearch.length > 0 ? ((dbsPage * dbsLimit) - dbsLimit) + 1 : 0 } to { nimcSearch.length > 0 ? (((dbsPage * dbsLimit) - dbsLimit) + 1) + (nimcSearch.length - 1) : 0 } of { totalNimcSearch } entries
                  </p>
                </div>
                <div className="inline-flex flex-wrap">
                  {
                    dbsPage > 1 && <a
                    href="#"
                    onClick={() => { if (dbsPage > 1) {setDbsPage(dbsPage - 1);} }}
                    className="border-t border-b border-l text-primary-500 border-secondary-500 px-2 py-1 rounded-l dark:border-secondary-800"
                  >
                    Previous
                  </a>
                  }
                  <a
                    href="#"
                    className="border text-white border-secondary-500 cursor-pointer bg-primary-500 px-4 py-1 dark:border-secondary-800"
                  >
                    { dbsPage }
                  </a>
                  {
                    (dbsPage * dbsLimit) < totalNimcSearch && <a
                    href="#"
                    onClick={() => { setDbsPage(dbsPage + 1); }}
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
      )}

      {activeView === "npf" && (
        <div className="bg-white rounded-lg shadow-lg">
          {/* Filters */}
          <div className="p-6 border-b">
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[250px]">
                <div className="relative">
                  <Search
                    className="absolute left-3 top-7 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Search by Names..."
                    {...npfRegister('UserName')}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <Tippy content="Search By Birth Date">
                <div className="flex-1 min-w-[250px]">
                  <div className="relative">
                    <input
                      type="date"
                      placeholder="Search by Date Of Birth..."
                      {...npfRegister('DateOfBirth')}
                      className="w-full pl-2 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </Tippy>
              <select
                {...npfRegister('Gender')}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Genders</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <div className="py-3">
              <div className="flex flex-wrap justify-between mx-5 overflow-x-auto">
                <table className="min-w-full divide-y divide-secondary-200 dark:divide-secondary-800 border dark:border-secondary-800">
                  <thead>
                    <tr className="bg-secondary-100 dark:bg-dark-bg">
                      <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                        S/N
                      </th>
                      <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                        Name
                      </th>
                      <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                        Contact
                      </th>
                      <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                        Gender
                      </th>
                      <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                        Birth Date
                      </th>
                      <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                        Risk Level
                      </th>
                      <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-secondary-200 dark:divide-secondary-800">
                    {
                      npfSearch.map((data, index) => (
                      <tr key={data.npfProfileRecordId ?? index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="iq-media-group iq-media-group-1">
                            <h6 className="font-bold dark:text-white">
                              {" "}
                              #{(index + (dbsLimitNPF * (dbsPageNPF - 1))) + 1}
                            </h6>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex w-50 items-center gap-3">
                            <img
                              src={data.photoURL}
                              className="h-12 w-12 rounded-full border-4 border-white mr-4"
                              style={{ objectFit: "cover" }}
                              alt="profile-image"
                            />
                            <div>
                              <div className="font-semibold text-gray-900">
                                {`${data.firstName} ${data.otherNames} ${data.lastName}`}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-gray-900">
                          <p>
                            Email: {data.email}
                          </p>
                          <p>
                            Phone: {data.phone}
                          </p>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                          {data.gender}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-gray-900">
                          {(new Date(data.dateOfBirth)).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                            <p className={`p-1 px-2 text-center rounded-lg ${riskLevels[data.riskLevel][1] ?? 'bg-gray-200'} ${riskLevels[data.riskLevel][2] ?? 'text-black'}`}>
                            {riskLevels[data.riskLevel][0]}  {data.wanted && '- Wanted'}
                          </p>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-gray-900">
                          <div className="flex items-center list-user-action">
                            <Tippy content='Preview NIMC Details'>
                              <NavLink  to={`/DBSSearch/NPF/${hashIds.encode(String(data.npfProfileRecordId))}`}
                                className="btn btn-info btn-icon btn-sm mr-1"
                              >
                                <span className="btn-inner">
                                  <Eye />
                                </span>
                              </NavLink>
                            </Tippy>
                          </div>
                        </td>
                      </tr>
                      ))
                    }
                  </tbody>
                </table>
                {
                  npfSearch.length === 0 ?
                    <div className="py-4 whitespace-nowrap w-full">
                          <span className="px-6 py-4 text-left font-medium text-black dark:text-white">Your search hasn't produced any result</span>
                    </div> : <></>
                }
              </div>
              <div className="flex flex-wrap justify-between my-6 mx-5">
                <div className="flex justify-center items-center mb-1">
                  <p className="text-black">
                    Showing { npfSearch.length > 0 ? ((dbsPageNPF * dbsLimitNPF) - dbsLimitNPF) + 1 : 0 } to { npfSearch.length > 0 ? (((dbsPageNPF * dbsLimitNPF) - dbsLimitNPF) + 1) + (npfSearch.length - 1) : 0 } of { totalNPFSearch } entries
                  </p>
                </div>
                <div className="inline-flex flex-wrap">
                  {
                    dbsPageNPF > 1 && <a
                    href="#"
                    onClick={() => { if (dbsPageNPF > 1) {setDbsPageNPF(dbsPageNPF - 1);} }}
                    className="border-t border-b border-l text-primary-500 border-secondary-500 px-2 py-1 rounded-l dark:border-secondary-800"
                  >
                    Previous
                  </a>
                  }
                  <a
                    href="#"
                    className="border text-white border-secondary-500 cursor-pointer bg-primary-500 px-4 py-1 dark:border-secondary-800"
                  >
                    { dbsPageNPF }
                  </a>
                  {
                    (dbsPageNPF * dbsLimitNPF) < totalNPFSearch && <a
                    href="#"
                    onClick={() => { setDbsPageNPF(dbsPageNPF + 1); }}
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
      )}
    </div>
  );
}
