import {
    AlertTriangleIcon,
  Building,
  Cake,
  CalendarCheck2Icon,
  ChevronRightIcon,
  Eye,
  FileIcon,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  User,
  Users,
  Venus,
} from "lucide-react";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  fetchApplicantById,
  fetchApplicantDocsById,
  fetchApplicantsPastAddresses,
} from "../../../utils/Requests/EmployeeRequests.js";
import Hashids from "hashids";
import {
  fetchDbsChecksByUserId,
} from "../../../utils/Requests/DbsRequests.js";
import Tippy from "@tippyjs/react";
import { calculateAge } from "../../../utils/extraFunctions.js";

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
  organisationName: string;
  dateCreated: string;
}

interface DbsChecks {
  dbsApplicationId: number;
  userId: number;
  requestedById: number;
  dbsTypeId: number;
  status: number;
  statusName: string;
  submittedAt: string;
  completedAt: string;
  dateCreated: string;
  user: string;
  requestedBy: string;
  dbsApplicationType: string;
  dbsType: string;
  dbsTypeCost: number;
}

interface UserDocumentValues {
  userDocumentId: number;
  fileUrl: string;
  userDocumentType: string;
  status: number;
  dateCreated: string;
}

interface FormerAddressData {
  formerAddressId: number;
  countryId: string;
  countryName: string;
  stateId: string;
  stateName: string;
  cityId: string;
  cityName: string;
  address: string;
  evidence: string;
  movedIn: string;
  movedOut: string;
}

interface Stats {
  completedChecks: string;
  involvedIncidents: string;
}

function ApplicantsDetails() {
  const { id } = useParams();
  const [employee, setEmployee] = useState<EmployeeData | null>(null);
  const [stats, setStats] = useState<Stats | null>(null);
  const [addresses, setAddresses] = useState<FormerAddressData[]>([]);
  const [totalAddress, setTotalAddress] = useState(0);
  const hashIds = new Hashids("ClearTrustAfricaEncode", 10);
  const hashedId = id ? Number(hashIds.decode(id)[0]) : 0;
  const [dbsChecks, setDbsChecks] = useState<DbsChecks[]>([]);
  const [userDocuments, setUserDocuments] = useState<UserDocumentValues[]>([]);
  const [dbsPage, setDbsPage] = useState(1);
  const dbsLimit = 3;
  const [addressPage, setAddressPage] = useState(1);
  const addressLimit = 3;
  const [totalDbsChecks, setTotalDbsChecks] = useState(0);
  const docPage = 1;
  const docLimit = 30;

  console.log("app id", hashedId);

  useEffect(() => {
    fetchApplicantById(hashedId)
      .then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
              setEmployee(data.data.user);
              setStats(data.data.stats);
          });
        } else {
          res.text().then((data) => {
            console.log(JSON.parse(data));
          });
        }
      })
      .catch((err) => console.log(err));
  }, [hashedId]);

  useEffect(() => {
      fetchDbsChecksByUserId(hashedId, dbsPage, dbsLimit)
      .then(res => {
        if (res.status === 200) {
          res.json().then((data) => {
            setDbsChecks(data.data.checks);
            setTotalDbsChecks(data.data.totalCount);
          })
        } else {
          res.text().then((data) => {
            console.log(JSON.parse(data));
          });
        }
      })
      .catch((err) => console.log(err))
  }, [hashedId, dbsPage, dbsLimit]);
  
  useEffect(() => {
      fetchApplicantsPastAddresses(hashedId, {page: addressPage, limit: addressLimit})
      .then(res => {
        if (res.status === 200) {
          res.json().then((data) => {
            console.log(data);
            setAddresses(data.data.addresses);
            setTotalAddress(data.data.totalCount);
          })
        } else {
          res.text().then((data) => {
            console.log(JSON.parse(data));
          });
        }
      })
      .catch((err) => console.log(err))
  }, [hashedId, addressPage, addressLimit]);

  useEffect(() => {
    fetchApplicantDocsById(hashedId, docPage, docLimit)
    .then(res => {
      if (res.status === 200) {
        res.json()
        .then(data => {
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
  }, [hashedId, docPage, docLimit]);

  const splitFile = (fileUrl: string) => {
    const splits = fileUrl.split('/');
    if (splits.length > 0) {
      return splits[splits.length - 1];
    }
    return "UploadedFile";
  }


  return (
    <div
        className="p-6 lg:p-8 footer-inner mx-auto main-container container"
        x-bind:className="setting.page_layout"
      >
        <div className="flex flex-wrap mb-8 items-center justify-between">
            <div className="flex">
                <Users className="text-blue-600 mr-2" size={36} />
                <div>
                    <h3 className="mb-0 text-black">Applicant Management</h3>
                    <p className="text-secondary-600 text-black">
                        <NavLink to="/Dashboard">Dashboard</NavLink>
                        <ChevronRightIcon size={14} />
                        <NavLink to="/ApplicantsMgt">Applicant Mgt </NavLink>
                        <ChevronRightIcon size={14} />
                        <NavLink to={`/ApplicantsMgt/${id}`}>
                            Applicant Profile
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
        {
            employee && (
            <div className="flex flex-wrap contet-inner" x-data="{ openTab: 1 }">
                <div className="w-full grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
                    <div className="col lg:col-span-1">
                        <div x-show="openTab === 4">
                        <div className="h-fit overflow-y-auto relative flex flex-col mb-8  bg-white shadow rounded-xl dark:bg-dark-card">
                            <div className="bg-[#7016d0] p-5 border-b dark:border-secondary-800 dark:border-secondary-800">
                            <div className="lg:mb-0 profile-logo profile-logo1 flex justify-center">
                                <img
                                src={employee.profileImage}
                                className="w-24 h-24 border-4 border-white mb-3 rounded-full mr-4"
                                style={{ objectFit: "cover" }}
                                alt="profile-image"
                                />
                            </div>
                            <h4 className="card-title mb-2 text-white text-center">
                                {`${employee.firstName} ${employee.lastName}`}
                            </h4>
                            <h4 className="card-title mb-0 text-white text-center">
                                ID: {employee.identificationNumber}
                            </h4>
                            </div>
                            <div className="p-6">
                            <div className="border-b dark:border-secondary-800 dark:border-secondary-800 flex items-center pb-1">
                                <User size={30} className="mr-2" />
                                <h4 className="card-title mb-0 dark:text-white font-bold">
                                User Details
                                </h4>
                            </div>
                            <div className="mt-2 flex justify-start items-center">
                                <Mail size={20} className="mr-2" />
                                {employee.email}
                            </div>
                            <div className="mt-2 flex justify-start items-center">
                                <Phone size={20} className="mr-2" />
                                {employee.phone}
                            </div>
                            <div className="mt-2 flex justify-start items-center">
                                <Venus size={20} className="mr-2" />
                                {employee.gender}
                            </div>
                            <div className="mt-2 flex justify-start items-center">
                                <Cake size={20} className="mr-2" />
                                {(new Date(employee.dateOfBirth)).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}
                                {`  (${calculateAge(new Date(employee.dateOfBirth))})`}
                            </div>
                            <div className="mt-2 flex justify-start items-center">
                                <MapPin size={20} className="mr-2" />
                                {employee.address}
                            </div>
                            <div className="mt-2 flex justify-start items-center">
                                <Building size={20} className="mr-2" />
                                {employee.organisationName}
                            </div>
                            <div className="mt-2 flex justify-start items-center">
                                <CalendarCheck2Icon size={20} className="mr-2" />
                                {(new Date(employee.dateCreated)).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}
                            </div>
                            </div>
                        </div>
                        </div>
                        <div x-show="openTab === 4">
                        <div className="relative flex flex-col mb-8  bg-white shadow rounded-xl dark:bg-dark-card">
                            <div className="p-5 border-b dark:border-secondary-800 dark:border-secondary-800 flex items-center">
                            <FileIcon size={30} className="mr-2" />
                            <h4 className="card-title mb-0 dark:text-white font-bold">
                                User Documents {`(${userDocuments.length})`}
                            </h4>
                            </div>
                            <div className="h-100 overflow-y-auto p-6">
                            {
                                userDocuments.length === 0 &&
                                    <div className="py-4 whitespace-nowrap">
                                    <span className="py-4 text-left font-medium text-black dark:text-white text-wrap">There are no uploaded document for { employee.firstName }</span>
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
                            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                                <div
                                    className="bg-gradient-to-r from-blue-600 to-blue-500 shadow rounded-xl p-6 border hover:shadow-lg transition-shadow"
                                >
                                    <div className="flex items-start justify-end mb-4">
                                        <div className="py-3 px-3 bg-white rounded-full border-2">
                                        <ShieldCheck className="w-6 h-5 text-blue-600" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-semibold text-white mb-1">
                                        {stats ? stats.completedChecks : 0}
                                        </p>
                                        <p className="text-xl text-white">Completed Checks</p>
                                    </div>
                                </div>
                                <div
                                    className="bg-gradient-to-r from-amber-600 to-amber-500 shadow rounded-xl p-6 border hover:shadow-lg transition-shadow"
                                >
                                    <div className="flex items-start justify-end mb-4">
                                        <div className="py-3 px-3 bg-white rounded-full border-2">
                                        <AlertTriangleIcon className="w-6 h-5 text-amber-600" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-semibold text-white mb-1">
                                        {stats ? stats.involvedIncidents : 0}
                                        </p>
                                        <p className="text-xl text-white">Involved Incidents</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex flex-col mb-8 bg-white shadow rounded-lg dark:bg-dark-card">
                                <div className="p-5 border-b dark:border-secondary-800 dark:border-secondary-800 flex items-center justify-between">
                                    <h4 className="card-title mb-0 dark:text-white">
                                        CTA Checks
                                    </h4>
                                </div>

                                <div className="p-5">
                                <div className="flex flex-wrap justify-between border rounded-md overflow-x-auto h-fit">
                                    <table className="min-w-full divide-y divide-secondary-200 dark:divide-secondary-800 border rounded-md dark:border-secondary-800">
                                    <thead>
                                        <tr className="bg-secondary-100 dark:bg-dark-bg">
                                        <th className="px-6 py-4 text-left text-sm font-medium text-black dark:text-white">
                                            S/N
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-medium text-black dark:text-white">
                                            Request Date
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-medium text-black dark:text-white">
                                            Requested By
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-medium text-black dark:text-white">
                                            Request Status
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-medium text-black dark:text-white">
                                            Request Type
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-medium text-black dark:text-white">
                                            Action
                                        </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-secondary-200 dark:divide-secondary-800">
                                        {dbsChecks.map((data: DbsChecks, index) => (
                                        <tr key={data.dbsApplicationId ?? index}>
                                            <td className="px-6 py-4 text-sm whitespace-nowrap">
                                            <div className="iq-media-group iq-media-group-1">
                                                <h6 className="font-bold dark:text-white">
                                                {" "}
                                                #{index + 1}
                                                </h6>
                                            </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm whitespace-nowrap text-black">
                                            {new Date(
                                                data.dateCreated
                                            ).toLocaleDateString("en-GB", {
                                                day: "2-digit",
                                                month: "short",
                                                year: "numeric",
                                            })}
                                            </td>
                                            <td className="px-6 py-4 text-sm whitespace-nowrap text-black">
                                            {data.requestedBy}
                                            </td>
                                            <td className="px-6 py-4 text-sm whitespace-nowrap text-black">
                                            {Number(data.status) === 1 && (
                                                <p className="p-1 bg-orange-200 text-center rounded-lg">
                                                Draft
                                                </p>
                                            )}
                                            {Number(data.status) === 2 && (
                                                <p className="p-1 bg-blue-200 text-center rounded-lg">
                                                Submitted
                                                </p>
                                            )}
                                            {Number(data.status) === 3 && (
                                                <p className="p-1 bg-purple-200 text-center rounded-lg">
                                                In Review
                                                </p>
                                            )}
                                            {Number(data.status) === 4 && (
                                                <p className="p-1 bg-green-200 text-center rounded-lg">
                                                Completed
                                                </p>
                                            )}
                                            {Number(data.status) === 5 && (
                                                <p className="p-1 bg-red-200 text-center rounded-lg">
                                                Rejected
                                                </p>
                                            )}
                                            </td>
                                            <td className="px-6 py-4 text-sm whitespace-nowrap text-black">
                                                {data.dbsType}
                                            </td>
                                            <td className="px-6 py-4 text-sm">
                                            <div className="flex items-center list-user-action">
                                                <Tippy content="Preview Dbs Check">
                                                <NavLink
                                                    to={`/Tracker/${hashIds.encode(
                                                    String(data.dbsApplicationId)
                                                    )}`}
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
                                        ))}
                                    </tbody>
                                    </table>
                                    {dbsChecks.length === 0 ? (
                                    <p className="py-4 whitespace-nowrap w-full text-center font-medium text-black dark:text-white">
                                        There hasn't been any CTA check for{" "}
                                        {employee.firstName}
                                    </p>
                                    ) : (
                                    <></>
                                    )}
                                </div>
                                <div className="flex flex-wrap justify-between my-6 mx-5">
                                    <div className="flex justify-center items-center mb-1">
                                    <p className="text-black">
                                        Showing { dbsChecks.length > 0 ? ((dbsPage * dbsLimit) - dbsLimit) + 1 : 0 } to { dbsChecks.length > 0 ? (((dbsPage * dbsLimit) - dbsLimit) + 1) + (dbsChecks.length - 1) : 0 } of { totalDbsChecks } entries
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
                                        (dbsPage * dbsLimit) < totalDbsChecks && <a
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
                            <div className="relative flex flex-col mb-8 bg-white shadow rounded-lg dark:bg-dark-card">
                                <div className="p-5 border-b dark:border-secondary-800 dark:border-secondary-800 flex items-center justify-between">
                                    <h4 className="card-title mb-0 dark:text-white">
                                        Previous Addresses
                                    </h4>
                                </div>

                                <div className="p-5">
                                    <div className="flex flex-wrap justify-between border rounded-md overflow-x-auto h-fit">
                                        <table className="min-w-full divide-y divide-secondary-200 dark:divide-secondary-800 border rounded-md dark:border-secondary-800">
                                            <thead>
                                                <tr className="bg-secondary-100 dark:bg-dark-bg">
                                                    <th className="px-6 py-4 text-left text-sm font-medium text-black dark:text-white">
                                                        S/N
                                                    </th>
                                                    <th className="px-6 py-4 text-left text-sm font-medium text-black dark:text-white">
                                                        Address
                                                    </th>
                                                    <th className="px-6 py-4 text-left text-sm font-medium text-black dark:text-white">
                                                        Duration
                                                    </th>
                                                    <th className="px-6 py-4 text-left text-sm font-medium text-black dark:text-white">
                                                        Proof of Occupancy
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-secondary-200 dark:divide-secondary-800">
                                                {addresses.map((data, index) => (
                                                    <tr key={data.formerAddressId ?? index}>
                                                        <td className="px-6 py-4 text-sm whitespace-nowrap">
                                                        <div className="iq-media-group iq-media-group-1">
                                                            <h6 className="font-bold dark:text-white">
                                                            {" "}
                                                            #{index + 1}
                                                            </h6>
                                                        </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                                                            <p>{data.address}</p>
                                                            <p className="text-sm">{`${data.cityName && data.cityName + ', '}${data.stateName && data.stateName + ', '}${data.countryName && data.countryName + '.'}`}</p>
                                                        </td>
                                                        <td className="px-6 py-4 text-sm whitespace-nowrap text-black">
                                                            {`${new Date(
                                                                data.movedIn
                                                            ).toLocaleDateString("en-GB", {
                                                                month: "short",
                                                                year: "numeric",
                                                            })} - ${new Date(
                                                                data.movedOut
                                                            ).toLocaleDateString("en-GB", {
                                                                month: "short",
                                                                year: "numeric",
                                                            })}`}
                                                        </td>
                                                        <td className="px-6 py-4 text-sm whitespace-nowrap text-black">
                                                            {data.evidence ? <a
                                                                href={data.evidence} target="_blank"
                                                                className="btn btn-info btn-icon btn-sm mr-1"
                                                            >
                                                                <span className="btn-inner">
                                                                <Eye />
                                                                </span>
                                                            </a> : 'None Provided'}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        {
                                            addresses.length === 0 ? (
                                                <p className="py-4 whitespace-nowrap w-full text-center font-medium text-black dark:text-white">
                                                    No Previous address has been added for {" "}
                                                    {employee.firstName}
                                                </p>
                                                ) : (
                                                <></>
                                                )
                                        }
                                    </div>
                                    <div className="flex flex-wrap justify-between my-6 mx-5">
                                        <div className="flex justify-center items-center mb-1">
                                        <p className="text-black">
                                            Showing { addresses.length > 0 ? ((addressPage * addressLimit) - addressLimit) + 1 : 0 } to { addresses.length > 0 ? (((addressPage * addressLimit) - addressLimit) + 1) + (addresses.length - 1) : 0 } of { totalAddress } entries
                                        </p>
                                        </div>
                                        <div className="inline-flex flex-wrap">
                                        {
                                            addressPage > 1 && <a
                                            href="#"
                                            onClick={() => { if (addressPage > 1) {setAddressPage(addressPage - 1);} }}
                                            className="border-t border-b border-l text-primary-500 border-secondary-500 px-2 py-1 rounded-l dark:border-secondary-800"
                                        >
                                            Previous
                                        </a>
                                        }
                                        <a
                                            href="#"
                                            className="border text-white border-secondary-500 cursor-pointer bg-primary-500 px-4 py-1 dark:border-secondary-800"
                                        >
                                            { addressPage }
                                        </a>
                                        {
                                            (addressPage * addressLimit) < totalAddress && <a
                                            href="#"
                                            onClick={() => { setAddressPage(addressPage + 1); }}
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
  );
}

export default ApplicantsDetails;
