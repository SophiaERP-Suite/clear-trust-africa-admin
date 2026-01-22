import {
  ChevronRightIcon,
  Eye,
  Users,
} from "lucide-react";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  fetchApplicantById,
  fetchApplicantDocsById,
} from "../../../utils/Requests/EmployeeRequests.js";
import Hashids from "hashids";
import {
  fetchDbsChecksByUserId,
} from "../../../utils/Requests/DbsRequests.js";
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

function AdminApplicantsNew() {
  const { id } = useParams();
  const [employee, setEmployee] = useState<EmployeeData | null>(null);
  const hashIds = new Hashids("ClearTrustAfricaEncode", 10);
  const hashedId = id ? Number(hashIds.decode(id)[0]) : 0;
  const [dbsChecks, setDbsChecks] = useState<DbsChecks[]>([]);
  const [userDocuments, setUserDocuments] = useState<UserDocumentValues[]>([]);
  const [dbsPage, setDbsPage] = useState(1);
  const dbsLimit = 3;
  const [totalDbsChecks, setTotalDbsChecks] = useState(0);
  const [docPage, setDocPage] = useState(1);
  const docLimit = 3;
  const [totalDocs, setTotalDocs] = useState(0);

  console.log("app id", hashedId);

  useEffect(() => {
    fetchApplicantById(hashedId)
      .then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
            console.log(data);
            setEmployee(data.data.user);
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
            console.log(data);
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
  
  const refetchDbsData = async () => {
    try {
      const res = await fetchDbsChecksByUserId(hashedId, dbsPage, dbsLimit);
      if (res.status === 200) {
        const data = await res.json()
        setDbsChecks(data.data.checks);
        setTotalDbsChecks(data.data.totalCount);
      } else {
        const resText = await res.text();
        console.log(JSON.parse(resText));
      }
    } catch (err) {
        console.log(err)
    }
  }

  useEffect(() => {
    fetchApplicantDocsById(hashedId, docPage, docLimit)
    .then(res => {
      if (res.status === 200) {
        res.json()
        .then(data => {
          console.log(data);
          setUserDocuments(data.data.docs);
          setTotalDocs(data.data.totalCount);
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

  const refetchDocData = async () => {
    try {
      const res = await fetchApplicantDocsById(hashedId, docPage, docLimit);
      if (res.status === 200) {
        const data = await res.json()
        setUserDocuments(data.data.docs);
        setTotalDocs(data.data.totalCount);
      } else {
        const resText = await res.text();
        console.log(JSON.parse(resText));
      }
    } catch (err) {
        console.log(err)
    }
  }



  return (
    <>
      <div
        className="p-6 lg:p-8 footer-inner mx-auto main-container container"
        x-bind:className="setting.page_layout"
      >
        <div className="flex flex-wrap mb-8 items-center justify-between">
          <div className="flex">
            <Users className="text-[rgb(112_22_208/0.9)] mr-2 " size={36} />
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
          <div>
            <NavLink to="/ApplicantsMgt" className="btn btn-primary">
              <Users size={18} className="mr-2" />
              All Applicants
            </NavLink>
          </div>
        </div>
        {employee && (
          <div className="flex flex-wrap contet-inner" x-data="{ openTab: 1 }">
            <div className="flex-auto w-full mt-6 md:mt-0">
              <div className="relative flex flex-col mb-8 text-secondary-500 bg-white shadow rounded-lg dark:bg-dark-card">
                <div className="flex-auto p-6 ">
                  <div className="flex flex-wrap items-center justify-between">
                    <div className="flex flex-wrap items-center">
                      <div className=" lg:mb-0 profile-logo profile-logo1">
                        <img
                          src={employee.profileImage}
                          className="w-24 h-24 border-4 border-white mb-3 rounded-full mr-4"
                          style={{ objectFit: "cover" }}
                          alt="profile-image"
                        />
                      </div>
                      <div className="flex flex-wrap items-center mb-4 md:mb-0">
                        <h4 className="mr-2  font-medium mb-0 dark:text-white">
                          {`${employee.firstName} ${employee.lastName}`}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
              <div className="col lg:col-span-1">
                <div x-show="openTab === 4">
                  <div className="relative flex flex-col mb-8  bg-white shadow rounded-xl dark:bg-dark-card">
                    <div className="p-5 border-b dark:border-secondary-800 dark:border-secondary-800">
                      <h4 className="card-title mb-0 dark:text-white">
                        About User
                      </h4>
                    </div>
                    <div className="p-5">
                      <div className="mt-2">
                        <h6 className="mb-1 dark:text-white">Other Names:</h6>
                        <p className="mb-3 dark:text-secondary-600">
                          <a href="#">{employee.otherNames ?? "None Provided"}</a>
                        </p>
                      </div>
                      <div className="mt-2">
                        <h6 className="mb-1 dark:text-white">Email:</h6>
                        <h6 className="mb-1 dark:text-white">BirthPlace:</h6>
                        <p className="mb-3 dark:text-secondary-600">
                          <a href="#">{employee.birthPlace ?? "None Provided"}</a>
                        </p>
                      </div>
                      <div className="mt-2">
                        <h6 className="mb-1 dark:text-white">Identification Number:</h6>
                        <p className="mb-3 dark:text-secondary-600">
                          <span className="font-semibold">
                            Identification Number:
                          </span>{" "}
                          <a href="#">{employee.identificationNumber}</a>
                        </p>
                      </div>
                      <div className="mt-2">
                        <h6 className="mb-1 dark:text-white">Country:</h6>
                        <p className="mb-3 dark:text-secondary-600">
                          <a href="#">{employee.countryName ?? "None Provided"}</a>
                        </p>
                      </div>
                      <div className="mt-2">
                        <h6 className="mb-1 dark:text-white">State:</h6>
                        <p className="mb-3 dark:text-secondary-600">
                          <a href="#">{employee.stateName ?? "None Provided"}</a>
                        </p>
                      </div>
                      <div className="mt-2">
                        <h6 className="mb-1 dark:text-white">City:</h6>
                        <p className="mb-3 dark:text-secondary-600">
                          <a href="#">{employee.cityName ?? "None Provided"}</a>
                        </p>
                      </div>
                      <div className="mt-2">
                        <h6 className="mb-1 dark:text-white">Address:</h6>
                        <p className="mb-3 dark:text-secondary-600">
                          <a href="#">{`${employee.address} ${employee.currentAddressDuration && `(${employee.currentAddressDuration})`}`}</a>
                        </p>
                      </div>
                      <div className="mt-2">
                        <h6 className="mb-1 dark:text-white">Last Address:</h6>
                        <p className="mb-3 dark:text-secondary-600">
                          <a href="#">{employee.lastAddress ?? "None Provided"}</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col lg:col-span-2">
                <div>
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
                                  {data.dbsApplicationType}
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
                            There hasn't been any CT check for{" "}
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
                            onClick={() => { if (dbsPage > 1) {setDbsPage(dbsPage - 1); refetchDbsData();} }}
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
                            onClick={() => { setDbsPage(dbsPage + 1); refetchDbsData(); }}
                            className="border-r border-t border-b text-primary-500 border-secondary-500 px-4 py-1 rounded-r dark:border-secondary-800"
                          >
                            Next
                          </a>
                          }
                          
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex flex-col mb-8  bg-white shadow rounded-lg dark:bg-dark-card">
                    <div className="p-5 border-b dark:border-secondary-800 dark:border-secondary-800 flex item-center justify-between">
                      <h4 className="card-title mb-0 dark:text-white">
                        Employee Document
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
                                Type
                              </th>
                              <th className="px-6 py-4 text-left text-sm font-medium text-black dark:text-white">
                                Document
                              </th>
                              <th className="px-6 py-4 text-left text-sm font-medium text-black dark:text-white">
                                Upload Date
                              </th>
                              <th className="px-6 py-4 text-left text-sm font-medium text-black dark:text-white">
                                Status
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-secondary-200 dark:divide-secondary-800">
                            {userDocuments.map(
                              (data: UserDocumentValues, index) => (
                                <tr key={data.userDocumentId ?? index}>
                                  <td className="px-6 py-4 text-sm whitespace-nowrap">
                                    <div className="iq-media-group iq-media-group-1">
                                      <h6 className="font-bold dark:text-white">
                                        {" "}
                                        #{index + 1}
                                      </h6>
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 text-sm whitespace-nowrap text-black">
                                    {Number(data.userDocumentType) === 1 &&
                                      "InternationalPassport"}
                                    {Number(data.userDocumentType) === 2 &&
                                      "Identification Document"}
                                    {Number(data.userDocumentType) === 3 &&
                                      "PoliceCertificate"}
                                  </td>
                                  <td className="px-2 py-4 text-sm whitespace-nowrap text-black">
                                    <a
                                      className="btn btn-info text-sm"
                                      href={data.fileUrl}
                                      target="_blank"
                                    >
                                      <Eye size={18} className="mr-1" />
                                      View Document
                                    </a>
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
                                    {Number(data.status) === 1 && (
                                      <p className="p-1 bg-orange-200 text-center rounded-lg">
                                        Pending
                                      </p>
                                    )}
                                    {Number(data.status) === 2 && (
                                      <p className="p-1 bg-green-200 text-center rounded-lg">
                                        Verified
                                      </p>
                                    )}
                                    {Number(data.status) === 3 && (
                                      <p className="p-1 bg-red-200 text-center rounded-lg">
                                        Rejected
                                      </p>
                                    )}
                                  </td>
                                </tr>
                              )
                            )}
                          </tbody>
                        </table>
                        {userDocuments.length === 0 ? (
                          <p className="py-4 text-center w-full font-medium text-black dark:text-white">
                            There are no uploaded document for{" "}
                            {employee.firstName}
                          </p>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div className="flex flex-wrap justify-between my-6 mx-5">
                        <div className="flex justify-center items-center mb-1">
                          <p className="text-black">
                            Showing { userDocuments.length > 0 ? ((docPage * docLimit) - docLimit) + 1 : 0 } to { userDocuments.length > 0 ? (((docPage * docLimit) - docLimit) + 1) + (userDocuments.length - 1) : 0 } of { totalDocs } entries
                          </p>
                        </div>
                        <div className="inline-flex flex-wrap">
                          {
                            docPage > 1 && <a
                            href="#"
                            onClick={() => { if (docPage > 1) {setDocPage(docPage - 1); refetchDocData();} }}
                            className="border-t border-b border-l text-primary-500 border-secondary-500 px-2 py-1 rounded-l dark:border-secondary-800"
                          >
                            Previous
                          </a>
                          }
                          <a
                            href="#"
                            className="border text-white border-secondary-500 cursor-pointer bg-primary-500 px-4 py-1 dark:border-secondary-800"
                          >
                            { docPage }
                          </a>
                          {
                            (docPage * docLimit) < totalDocs && <a
                            href="#"
                            onClick={() => { setDocPage(docPage + 1); refetchDocData(); }}
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
        )}
      </div>
    </>
  );
}

export default AdminApplicantsNew;
