import {
    AlertCircleIcon,
  AlertTriangleIcon,
  Cake,
  ChevronDown,
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
  User,
  Venus,
} from "lucide-react";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Hashids from "hashids";
import { calculateAge } from "../../../utils/extraFunctions.js";
import HtmlRenderer from "../../../layout/HTMLRenderer.js";
import { fetchIncidentAttachments, fetchIncidentReportById } from "../../../utils/Requests/IncidentRequests.js";
import { ToastContainer } from "react-toastify";

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
  countryName: string;
  stateName: string;
  cityName: string;
  accusedFirstName: string;
  accusedLastName: string;
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

export default function IncidentReport() {
  const { id } = useParams();
  const hashIds = new Hashids('ClearTrustAfricaEncode', 10);
  const hashedId = id ? Number(hashIds.decode(id)[0]) : 0;
  const [accused, setAccused] = useState<EmployeeData | null>(null);
  const [incident, setIncident] = useState<IncidentReport | null>(null);
  const [openMoreAction, setOpenMoreAction] = useState(false);
  const [attachments, setAttachments] = useState<IncidentAttachment[]>([]);

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

  return (
   <>
      <ToastContainer />
      <div
        className="p-6 lg:p-8 footer-inner mx-auto main-container container"
        x-bind:className="setting.page_layout"
      >
        <div className="flex flex-wrap mb-8 items-center justify-between">
          <div className="flex">
            <AlertTriangleIcon className="text-blue-600 mr-2" size={36} />
            <div>
            <h3 className="mb-0 text-black">
              Incident Report Details
            </h3>
            <p className="text-secondary-600 text-black">
                <NavLink to="/">Dashboard</NavLink>
                <ChevronRightIcon size={14} />
                <NavLink to="/IncidentMgt">Incident Management </NavLink>
                <ChevronRightIcon size={14} />
                <NavLink to={`/IncidentMgt/Report/${id}`}>Report Details</NavLink>{" "}
            </p>
            </div>
          </div>
          
            {accused && incident && (
              <div className="flex flex-wrap">
                {
                    <div className="relative">
                      <button className="btn btn-info mr-2 mb-2" onClick={() => setOpenMoreAction(!openMoreAction)}>
                        More Actions
                        <ChevronDown size={18} className="ml-2" />
                      </button>
                      {openMoreAction && (
                        <div className="absolute mt-2 top-8 right-2 w-60 bg-white border shadow-lg z-1">
                          <button className="block w-full px-4 py-2 hover:bg-secondary-200 text-left text-black" onClick={() => { setOpenMoreAction(!openMoreAction); }}>
                                <Pen size={18} className="mr-2" /> Update Status
                            </button>
                          
                        </div>
                      )}
                    </div>
                }
                
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
                                    Incident Details
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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="col-span-2 border-b dark:border-secondary-800 dark:border-secondary-800 flex flex-wrap justify-between items-center">
                                <div className="flex items-center">
                                    <ClipboardClock size={30} className="mr-2" />
                                    <h4 className="card-title mb-0 dark:text-white font-bold">
                                        Actions Log
                                    </h4>
                                </div>
                               <button className="btn btn-success mr-2 mb-2">
                                    <Plus size={18} className="mr-2" />
                                    Log New Action
                                </button>
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
