import { useEffect, useState } from "react";
import {
  Shield,
  ChevronRightIcon,
  FileText,
  ClipboardPaste,
  Eye,
  Calendar,
  Search,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import Tippy from "@tippyjs/react";
import Hashids from "hashids";
import { useForm, useWatch } from "react-hook-form";
import { fetchNIMCSearch } from "../../../utils/Requests/NIMCRequests";

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
  maritalStatus: string;
  biometricVerified: string;
  status: string;
  lastVerifiedAt: string;
  dateCreated: string;
}

type NIMCFilterForm = {
  NIN: string;
  UserName: string;
  DateOfBirth: string;
}

export default function DBSSearchModule() {
  const [activeView, setActiveView] = useState("nimc");
  const [nimcSearch, setNimcSearch] = useState<NIMCData[]>([]);
  const [dbsPage, setDbsPage] = useState(1);
  const dbsLimit = 5;
  const [totalNimcSearch, setTotalNimcSearch] = useState(0);
  const hashIds = new Hashids('ClearTrustAfricaEncode', 10);
  const { register, control } = useForm<NIMCFilterForm>();
  const filters = useWatch({ control });
  const searchTypes = [
    { id: "nimc", label: "NIMC", icon: Shield },
    { id: "checks", label: "NPF", icon: FileText },
  ]

  useEffect(() => {
    fetchNIMCSearch({ pageNumber: dbsPage, limit: dbsLimit, ...filters })
    .then(res => {
      if (res.status === 200) {
        res.json()
        .then(data => {
          console.log(data);
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

  return (
    <div className="min-h-screen bg-gray-50 p-6">

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
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <div className="p-6">
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
                        Phone
                      </th>
                      <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                        Email
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
                                {`${data.firstName} ${data.lastName}`}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-gray-900">
                          {data.nin}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-gray-900">
                          {data.phone}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-gray-900">
                          {data.email}
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
                              <NavLink  to={`/DBSSearch/${hashIds.encode(String(data.nimcRecordId))}`}
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
    </div>
  );
}
