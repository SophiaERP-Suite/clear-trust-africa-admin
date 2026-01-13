import {
    BookUser,
  Cake,
  Check,
  CheckCheck,
  ChevronRightIcon,
  ClipboardList,
  Contact,
  Mail,
  MapPin,
  Phone,
  Shield,
  SquareUser,
  User,
  Venus,
  X,
} from "lucide-react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Hashids from "hashids";
import { toast, ToastContainer } from "react-toastify";
import { calculateAge } from "../../../utils/extraFunctions.js";
import { type NIMCData, type NPFData } from "./DBSSearch.js";
import { fetchDbsSearchData, matchDbsSearchData, removeDbsSearchData } from "../../../utils/Requests/DbsRequests.js";
import { handleCreateEmployee } from "../../../utils/ResponseHandlers/EmployeeResponse.js";

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
  UserName: string;
  OrganisationName: string;
  Status: number;
  Type: number;
}

interface AplicantData {
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
}

interface DBSSearchData {
  dbsSearchId: number;
  dateCreated: string;
  searchedBy: number;
  searchType: number;
}

export default function DBSSearchCompare() {
  const { id } = useParams();
  const hashIds = new Hashids('ClearTrustAfricaEncode', 10);
  const hashedId = id ? Number(hashIds.decode(id)[0]) : 0;
  const [searchData, setSearchData] = useState<DBSSearchData | null>(null);
  const [applicantDetails, setApplicantData] = useState<AplicantData | null>(null);
  const [npfData, setNPFData] = useState<NPFData | null>(null);
  const [nimcData, setNIMCData] = useState<NIMCData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
      fetchDbsSearchData(hashedId)
      .then(res => {
        if (res.status === 200) {
          res.json()
          .then(data => {
            console.log(data)
            setSearchData(data.data);
            setApplicantData(data.data.applicant);
            setNIMCData(data.data.nimcRecord);
            setNPFData(data.data.npfProfileRecord);
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
    
  const removeDBSSearcMatch = async () => {
    const loader = document.getElementById('query-loader-1');
    const text = document.getElementById('query-text-1');
    if (loader) {
      loader.style.display = 'flex';
    }
    if (text) {
      text.style.display = 'none';
    }
    const res = await removeDbsSearchData(hashedId);
    handleCreateEmployee(res, loader, text, { toast }, null)
    .finally(() => navigate('/DBSSearch'));
  }
  
  const approveDBSSearcMatch = async () => {
    const loader = document.getElementById('query-loader');
    const text = document.getElementById('query-text');
    if (loader) {
      loader.style.display = 'flex';
    }
    if (text) {
      text.style.display = 'none';
    }
    const res = await matchDbsSearchData(hashedId);
    handleCreateEmployee(res, loader, text, { toast }, null)
    .finally(() => navigate('/Tracker'));
  }

  const compareDates = (date1: string, date2: string) => {
    const currDate1 = new Date(date1);
    const currDate2 = new Date(date2);
    return currDate1.getFullYear() === currDate2.getFullYear()
      && currDate1.getMonth() === currDate2.getMonth()
      && currDate1.getDay() === currDate2.getDay();
  }

  return (
   <>
      <ToastContainer />
      <div
        className="p-6 lg:p-8 footer-inner mx-auto main-container container"
        x-bind:className="setting.page_layout"
      >
        <div className="flex flex-wrap mb-8 items-center justify-between">
          <div className="flex">
            <ClipboardList className="text-blue-600 mr-2" size={36} />
            <div>
                <h3 className="mb-0 text-black">
                    DBS Search Match
                </h3>
                <p className="text-secondary-600 text-black">
                    <NavLink to="/Dashboard">Dashboard</NavLink>{" "}
                    <ChevronRightIcon size={14} />{" "}
                    <NavLink to="/DBSSearch">DBS Search</NavLink>{" "}
                    <ChevronRightIcon size={14} />{" "}
                    <NavLink to={`/DBSSearch/Compare/${id}`}>DBS Search Match</NavLink>{" "}
                </p>
            </div>
          </div>
          
            {searchData && (
              <div className="flex flex-wrap">
                <div>
                  <button className="btn btn-danger mr-2 mb-2" onClick={() => removeDBSSearcMatch()}>
                    <div className="dots hidden" id="query-loader-1">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                    <span id="query-text-1">
                        <X size={18} className="mr-2" />
                        Cancel Match
                    </span>
                  </button>
                </div>
                <div>
                  <button className="btn btn-success mr-2 mb-2" onClick={() => approveDBSSearcMatch()}>
                    <div className="dots hidden" id="query-loader">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                    <span id="query-text">
                        <CheckCheck size={18} className="mr-2" />
                        Proceed With Match
                    </span>
                  </button>
                </div>
              </div>
            )}
        </div>
            <div className="flex flex-wrap contet-inner" x-data="{ openTab: 1 }">
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-20">
                {
                    applicantDetails && (
                        <div className="col lg:col-span-1">
                            <div x-show="openTab === 4">
                                <div className="h-fit overflow-y-auto relative flex flex-col mb-4 bg-white shadow rounded-xl dark:bg-dark-card">
                                    <div className="bg-[#7016d0] p-5 border-b dark:border-secondary-800 dark:border-secondary-800">
                                        <div className="lg:mb-0 profile-logo profile-logo1 flex justify-center">
                                        <img
                                            src={applicantDetails.profileImage}
                                            className="w-24 h-24 border-4 border-white mb-3 rounded-full mr-4"
                                            style={{ objectFit: "cover" }}
                                            alt="profile-image"
                                        />
                                        </div>
                                        <h4 className="card-title mb-2 text-white text-center">
                                            Applicant Profile Details
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
                                            <Contact size={20} className="mr-2" />
                                            {applicantDetails.firstName ?? "None provided"}
                                            {
                                                npfData && (npfData.firstName == applicantDetails.firstName ? (<Check size={20} className="ml-2 text-green-500" />) : (<X size={20} className="ml-2 text-red-500" />))
                                            }
                                            {
                                                nimcData && (nimcData.firstName == applicantDetails.firstName ? (<Check size={20} className="ml-2 text-green-500" />) : (<X size={20} className="ml-2 text-red-500" />))
                                            }
                                        </div>
                                        <div className="pl-1 mt-2 flex justify-start items-center">
                                            <SquareUser size={20} className="mr-2" />
                                            {applicantDetails.lastName ?? "None provided"}
                                            {
                                                npfData && (npfData.lastName == applicantDetails.lastName ? (<Check size={20} className="ml-2 text-green-500" />) : (<X size={20} className="ml-2 text-red-500" />))
                                            }
                                            {
                                                nimcData && (nimcData.lastName == applicantDetails.lastName ? (<Check size={20} className="ml-2 text-green-500" />) : (<X size={20} className="ml-2 text-red-500" />))
                                            }
                                        </div>
                                        <div className="pl-1 mt-2 flex justify-start items-center">
                                            <BookUser size={20} className="mr-2" />
                                            {applicantDetails.otherNames ?? "None provided"}
                                            {
                                                npfData && (npfData.otherNames == applicantDetails.otherNames ? (<Check size={20} className="ml-2 text-green-500" />) : (<X size={20} className="ml-2 text-red-500" />))
                                            }
                                            {
                                                nimcData && (nimcData.middleName == applicantDetails.otherNames ? (<Check size={20} className="ml-2 text-green-500" />) : (<X size={20} className="ml-2 text-red-500" />))
                                            }
                                        </div>
                                        <div className="pl-1 mt-2 flex justify-start items-center">
                                            <Shield size={20} className="mr-2" />
                                            {applicantDetails.identificationNumber ?? "None provided"}
                                            {
                                                npfData && (npfData.nin == applicantDetails.identificationNumber ? (<Check size={20} className="ml-2 text-green-500" />) : (<X size={20} className="ml-2 text-red-500" />))
                                            }
                                            {
                                                nimcData && (nimcData.nin == applicantDetails.identificationNumber ? (<Check size={20} className="ml-2 text-green-500" />) : (<X size={20} className="ml-2 text-red-500" />))
                                            }
                                        </div>
                                        <div className="pl-1 mt-2 flex justify-start items-center">
                                            <Mail size={20} className="mr-2" />
                                            {applicantDetails.email ?? "None provided"}
                                            {
                                                npfData && (npfData.email == applicantDetails.email ? (<Check size={20} className="ml-2 text-green-500" />) : (<X size={20} className="ml-2 text-red-500" />))
                                            }
                                            {
                                                nimcData && (nimcData.email == applicantDetails.email ? (<Check size={20} className="ml-2 text-green-500" />) : (<X size={20} className="ml-2 text-red-500" />))
                                            }
                                        </div>
                                        <div className="pl-1 mt-2 flex justify-start items-center">
                                            <Phone size={20} className="mr-2" />
                                            {applicantDetails.phone ?? "None provided"}
                                            {
                                                npfData && (npfData.email == applicantDetails.email ? (<Check size={20} className="ml-2 text-green-500" />) : (<X size={20} className="ml-2 text-red-500" />))
                                            }
                                            {
                                                nimcData && (nimcData.email == applicantDetails.email ? (<Check size={20} className="ml-2 text-green-500" />) : (<X size={20} className="ml-2 text-red-500" />))
                                            }
                                        </div>
                                        <div className="pl-1 mt-2 flex justify-start items-center">
                                            <Venus size={20} className="mr-2" />
                                            {applicantDetails.gender ?? "None provided"}
                                            {
                                                npfData && (npfData.gender == applicantDetails.gender ? (<Check size={20} className="ml-2 text-green-500" />) : (<X size={20} className="ml-2 text-red-500" />))
                                            }
                                            {
                                                nimcData && (nimcData.gender == applicantDetails.gender ? (<Check size={20} className="ml-2 text-green-500" />) : (<X size={20} className="ml-2 text-red-500" />))
                                            }
                                        </div>
                                        <div className="pl-1 mt-2 flex justify-start items-center">
                                            <Cake size={20} className="mr-2" />
                                            {applicantDetails.dateOfBirth && (new Date(applicantDetails.dateOfBirth)).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}
                                            {applicantDetails.dateOfBirth && `  (${calculateAge(new Date(applicantDetails.dateOfBirth))})`}
                                            {
                                                npfData && (compareDates(applicantDetails.dateOfBirth, npfData.dateOfBirth) ? (<Check size={20} className="ml-2 text-green-500" />) : (<X size={20} className="ml-2 text-red-500" />))
                                            }
                                            {
                                                nimcData && (compareDates(applicantDetails.dateOfBirth, nimcData.dateOfBirth) ? (<Check size={20} className="ml-2 text-green-500" />) : (<X size={20} className="ml-2 text-red-500" />))
                                            }
                                        </div>
                                        <div className="pl-1 mt-2 flex justify-start items-center">
                                            <MapPin size={20} className="mr-2" />
                                            {applicantDetails.address ?? "None provided"}
                                            {
                                                npfData && (npfData.residentialAddress == applicantDetails.address ? (<Check size={20} className="ml-2 text-green-500" />) : (<X size={20} className="ml-2 text-red-500" />))
                                            }
                                            {
                                                nimcData && (nimcData.residentialAddress == applicantDetails.address ? (<Check size={20} className="ml-2 text-green-500" />) : (<X size={20} className="ml-2 text-red-500" />))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                {
                    npfData && (
                        <div className="col lg:col-span-1">
                            <div x-show="openTab === 4">
                                <div className="h-fit overflow-y-auto relative flex flex-col mb-4 bg-white shadow rounded-xl dark:bg-dark-card">
                                    <div className="bg-orange-500 p-5 border-b dark:border-secondary-800 dark:border-secondary-800">
                                        <div className="lg:mb-0 profile-logo profile-logo1 flex justify-center">
                                        <img
                                            src={npfData.photoURL}
                                            className="w-24 h-24 border-4 border-white mb-3 rounded-full mr-4"
                                            style={{ objectFit: "cover" }}
                                            alt="profile-image"
                                        />
                                        </div>
                                        <h4 className="card-title mb-2 text-white text-center">
                                            NPF Search Details
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
                                            <Contact size={20} className="mr-2" />
                                            {npfData.firstName ?? "None provided"}
                                            {
                                                applicantDetails && (applicantDetails.firstName == npfData.firstName ? (<Check size={20} className="ml-2 text-green-500" />) : (<X size={20} className="ml-2 text-red-500" />))
                                            }
                                        </div>
                                        <div className="pl-1 mt-2 flex justify-start items-center">
                                            <SquareUser size={20} className="mr-2" />
                                            {npfData.lastName ?? "None provided"}
                                            {
                                                applicantDetails && (applicantDetails.lastName == npfData.lastName ? (<Check size={20} className="ml-2 text-green-500" />) : (<X size={20} className="ml-2 text-red-500" />))
                                            }
                                        </div>
                                        <div className="pl-1 mt-2 flex justify-start items-center">
                                            <BookUser size={20} className="mr-2" />
                                            {npfData.otherNames ?? "None provided"}
                                            {
                                                applicantDetails && (applicantDetails.otherNames == npfData.otherNames ? (<Check size={20} className="ml-2 text-green-500" />) : (<X size={20} className="ml-2 text-red-500" />))
                                            }
                                        </div>
                                        <div className="pl-1 mt-2 flex justify-start items-center">
                                            <Shield size={20} className="mr-2" />
                                            {npfData.nin ?? "None provided"}
                                            {
                                                applicantDetails && (applicantDetails.identificationNumber == npfData.nin ? (<Check size={20} className="ml-2 text-green-500" />) : (<X size={20} className="ml-2 text-red-500" />))
                                            }
                                        </div>
                                        <div className="pl-1 mt-2 flex justify-start items-center">
                                            <Mail size={20} className="mr-2" />
                                            {npfData.email ?? "None provided"}
                                            {
                                                applicantDetails && (applicantDetails.email == npfData.email ? (<Check size={20} className="ml-2 text-green-500" />) : (<X size={20} className="ml-2 text-red-500" />))
                                            }
                                        </div>
                                        <div className="pl-1 mt-2 flex justify-start items-center">
                                            <Phone size={20} className="mr-2" />
                                            {npfData.phone ?? "None provided"}
                                            {
                                                applicantDetails && (applicantDetails.phone == npfData.phone ? (<Check size={20} className="ml-2 text-green-500" />) : (<X size={20} className="ml-2 text-red-500" />))
                                            }
                                        </div>
                                        <div className="pl-1 mt-2 flex justify-start items-center">
                                            <Venus size={20} className="mr-2" />
                                            {npfData.gender ?? "None provided"}
                                            {
                                                applicantDetails && (applicantDetails.gender == npfData.gender ? (<Check size={20} className="ml-2 text-green-500" />) : (<X size={20} className="ml-2 text-red-500" />))
                                            }
                                        </div>
                                        <div className="pl-1 mt-2 flex justify-start items-center">
                                            <Cake size={20} className="mr-2" />
                                            {(new Date(npfData.dateOfBirth)).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}
                                            {`  (${calculateAge(new Date(npfData.dateOfBirth))})`}
                                            {
                                                applicantDetails && (compareDates(applicantDetails.dateOfBirth, npfData.dateOfBirth) ? (<Check size={20} className="ml-2 text-green-500" />) : (<X size={20} className="ml-2 text-red-500" />))
                                            }
                                        </div>
                                        <div className="pl-1 mt-2 flex justify-start items-center">
                                            <MapPin size={20} className="mr-2" />
                                            {npfData.residentialAddress ?? "None provided"}
                                            {
                                                applicantDetails && (applicantDetails.address == npfData.residentialAddress ? (<Check size={20} className="ml-2 text-green-500" />) : (<X size={20} className="ml-2 text-red-500" />))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                {
                    nimcData && (
                        <div className="col lg:col-span-1">
                            <div x-show="openTab === 4">
                                <div className="h-fit overflow-y-auto relative flex flex-col mb-4 bg-white shadow rounded-xl dark:bg-dark-card">
                                    <div className="bg-orange-300 p-5 border-b dark:border-secondary-800 dark:border-secondary-800">
                                        <div className="lg:mb-0 profile-logo profile-logo1 flex justify-center">
                                        <img
                                            src={nimcData.photoURL}
                                            className="w-24 h-24 border-4 border-white mb-3 rounded-full mr-4"
                                            style={{ objectFit: "cover" }}
                                            alt="profile-image"
                                        />
                                        </div>
                                        <h4 className="card-title mb-2 text-black text-center">
                                            NIMC Search Details
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
                                            <Contact size={20} className="mr-2" />
                                            {nimcData.firstName ?? "None provided"}
                                            {
                                                applicantDetails && (applicantDetails.firstName == nimcData.firstName ? (<Check size={20} className="ml-2 text-green-500" />) : (<X size={20} className="ml-2 text-red-500" />))
                                            }
                                        </div>
                                        <div className="pl-1 mt-2 flex justify-start items-center">
                                            <SquareUser size={20} className="mr-2" />
                                            {nimcData.lastName ?? "None provided"}
                                            {
                                                applicantDetails && (applicantDetails.lastName == nimcData.lastName ? (<Check size={20} className="ml-2 text-green-500" />) : (<X size={20} className="ml-2 text-red-500" />))
                                            }
                                        </div>
                                        <div className="pl-1 mt-2 flex justify-start items-center">
                                            <BookUser size={20} className="mr-2" />
                                            {nimcData.middleName ?? "None provided"}
                                            {
                                                applicantDetails && (applicantDetails.otherNames == nimcData.middleName ? (<Check size={20} className="ml-2 text-green-500" />) : (<X size={20} className="ml-2 text-red-500" />))
                                            }
                                        </div>
                                        <div className="pl-1 mt-2 flex justify-start items-center">
                                            <Shield size={20} className="mr-2" />
                                            {nimcData.nin ?? "None provided"}
                                            {
                                                applicantDetails && (applicantDetails.identificationNumber == nimcData.nin ? (<Check size={20} className="ml-2 text-green-500" />) : (<X size={20} className="ml-2 text-red-500" />))
                                            }
                                        </div>
                                        <div className="pl-1 mt-2 flex justify-start items-center">
                                            <Mail size={20} className="mr-2" />
                                            {nimcData.email ?? "None provided"}
                                            {
                                                applicantDetails && (applicantDetails.email == nimcData.email ? (<Check size={20} className="ml-2 text-green-500" />) : (<X size={20} className="ml-2 text-red-500" />))
                                            }
                                        </div>
                                        <div className="pl-1 mt-2 flex justify-start items-center">
                                            <Phone size={20} className="mr-2" />
                                            {nimcData.phone ?? "None provided"}
                                            {
                                                applicantDetails && (applicantDetails.phone == nimcData.phone ? (<Check size={20} className="ml-2 text-green-500" />) : (<X size={20} className="ml-2 text-red-500" />))
                                            }
                                        </div>
                                        <div className="pl-1 mt-2 flex justify-start items-center">
                                            <Venus size={20} className="mr-2" />
                                            {nimcData.gender ?? "None provided"}
                                            {
                                                applicantDetails && (applicantDetails.gender == nimcData.gender ? (<Check size={20} className="ml-2 text-green-500" />) : (<X size={20} className="ml-2 text-red-500" />))
                                            }
                                        </div>
                                        <div className="pl-1 mt-2 flex justify-start items-center">
                                            <Cake size={20} className="mr-2" />
                                            {(new Date(nimcData.dateOfBirth)).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}
                                            {`  (${calculateAge(new Date(nimcData.dateOfBirth))})`}
                                            {
                                                applicantDetails && (compareDates(applicantDetails.dateOfBirth, nimcData.dateOfBirth) ? (<Check size={20} className="ml-2 text-green-500" />) : (<X size={20} className="ml-2 text-red-500" />))
                                            }
                                        </div>
                                        <div className="pl-1 mt-2 flex justify-start items-center">
                                            <MapPin size={20} className="mr-2" />
                                            {nimcData.residentialAddress ?? "None provided"}
                                            {
                                                applicantDetails && (applicantDetails.address == nimcData.residentialAddress ? (<Check size={20} className="ml-2 text-green-300" />) : (<X size={20} className="ml-2 text-red-500" />))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
              </div>
          </div>
      </div>
    </>
  );
}
