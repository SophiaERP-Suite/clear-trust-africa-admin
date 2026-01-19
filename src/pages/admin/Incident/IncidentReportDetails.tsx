import { useState, useEffect, useRef } from "react";
import { useParams, NavLink } from "react-router-dom";
import {
  AlertTriangleIcon,
  ChevronRightIcon,
  Upload,
  FileIcon,
  ArrowLeft,
  ChevronDown,
  MessageSquareIcon,
  ArrowUpNarrowWide,
  Eye,
} from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import Hashids from "hashids";
import { fetchIncidentAttachments } from "../../../utils/Requests/IncidentRequests";
import { fetchDbsPartners } from "../../../utils/Requests/DbsRequests";

interface IncidentReport {
  incidentReportId: number;
  incidentTitle: string;
  incidentTypeId: number;
  accusedEmployee: string;
  reporterName: string;
  recorderName: string;
  incidentDate: string;
  description: string;
  incidentLocation: string;
  severityLevel: number;
  incidentStatus: number;
  dateCreated: string;
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

export interface DbsPartners {
  partnerId: number;
  partnerName: string;
}

type ModalType = "add" | "edit" | "delete" | null;

export default function IncidentDetails() {
  const { irid } = useParams<{ irid: string }>();
  const hashIds = new Hashids('ClearTrustAfricaEncode', 10);
  const decoded = hashIds.decode(irid || "");
  const originalId = decoded.length > 0 ? Number(decoded[0]) : null;
  const [attachments, setAttachments] = useState<IncidentAttachment[]>([]);
  const [dbsPartners, setDbsPartners] = useState<DbsPartners[]>([]);
  const [incident, setIncident] = useState<IncidentReport | null>(null);
  const [newFiles, setNewFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [selectedPartnerId, setSelectedPartnerId] = useState<number | null>(
    null
  );
  
  useEffect(() => {
    if (!originalId) return;

    const controller = new AbortController();

    const loadAttachments = async () => {
      try {
        setIsLoading(true);

          const res = await fetchIncidentAttachments(originalId);
          if (res.status === 200) {
              const data: IncidentAttachment[] = await res.json();
              setAttachments(data);
          }
      } catch (err) {
        console.error("Error loading attachments:", err);
      } finally {
        setIsLoading(false);
      }
    };

    loadAttachments();

    return () => controller.abort();
  }, [originalId]);

  const [currentUserId, setCurrentUserId] = useState<number | null>(null);
  const [currentUserName, setCurrentUserName] = useState<string>("");

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      const parsed = JSON.parse(userData);
      setCurrentUserId(parsed.userId);
      setCurrentUserName(parsed.userName);
    }
  }, []);

  useEffect(() => {
    fetchIncidentDetails();
    if (originalId) {
      fetchIncidentAttachments(Number(originalId));
    }
  }, [originalId]);

  const fetchIncidentDetails = async () => {
    if (!originalId) return;

    setIsLoading(true);
    try {
      const token = localStorage.getItem("accessToken");
      const response = await fetch(
        `http://localhost:5181/api/employer/IncidentReports/${originalId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Failed to fetch incident: ${response.status} - ${errorText}`
        );
      }

      const data = await response.json();
      setIncident(data);
    } catch (error) {
      console.error("Error fetching incident:", error);
      setIncident(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    getDbsPartners();
  }, []);

  const getDbsPartners = async () => {
    try {
        const res = await fetchDbsPartners();
        if (res.status === 200) {
            const data: DbsPartners[] = await res.json();
            setDbsPartners(data);
        }
      
    } catch (err) {
      console.error("Error fetching partners:", err);
      toast.error("Failed to load partners");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    setNewFiles(Array.from(files));
  };

  const getSeverityBadge = (level: number) => {
    const badges = {
      1: { label: "Low", color: "bg-green-100 text-green-800" },
      2: { label: "Medium", color: "bg-yellow-100 text-yellow-800" },
      3: { label: "High", color: "bg-orange-100 text-orange-800" },
      4: { label: "Critical", color: "bg-red-100 text-red-800" },
    };
    const badge = badges[level as keyof typeof badges] || badges[1];
    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-semibold ${badge.color}`}
      >
        {badge.label}
      </span>
    );
  };

  const openAddModal = () => {
    if (dbsPartners.length === 0) {
      toast.warning("No partners available. Please add partners first.");
      return;
    }
    setModalType("add");
  };

  const closeModal = () => {
    setModalType(null);
    setSelectedPartnerId(null);
  };

  if (isLoading && !incident) {
    return (
      <div className="p-6 text-center">
        <p>Loading incident details...</p>
      </div>
    );
  }

  if (!incident) {
    return (
      <div className="p-6 text-center">
        <p>Incident not found</p>
        <NavLink to="/incidentMgt" className="btn btn-primary mt-4">
          Back to List
        </NavLink>
      </div>
    );
  }

  return (
    <div className="p-5 lg:p-8 footer-inner mx-auto main-container container">
      {/* Header */}
      <ToastContainer />

      <div className="mb-6">
        <div className="w-full mb-8">
          <div className="row">
            <div className="col-md-12">
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex">
                  <AlertTriangleIcon
                    className="text-[rgb(112_22_208/0.9)] mr-2"
                    size={36}
                  />
                  <div>
                    <h3 className="mb-0 text-black">
                      Incident Report #{incident.incidentReportId}
                    </h3>
                    <p className="text-secondary-600 text-black">
                      Dashboard <ChevronRightIcon size={14} /> Incident
                      Management <ChevronRightIcon size={14} /> Incident Details
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 relative" ref={dropdownRef}>
                  <NavLink
                    to="/incidentMgt"
                    className="btn btn-warning flex items-center gap-2"
                  >
                    <ArrowLeft size={18} />
                    Back to List
                  </NavLink>

                  {/* Dropdown Container */}
                  <div className="relative inline-block text-left">
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="btn-primary btn flex items-center gap-2"
                    >
                      <ChevronDown size={18} />
                      More Action
                    </button>

                    {/* Dropdown Menu */}
                    {isOpen && (
                      <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                        <div className="py-1">
                          <button
                            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 gap-3"
                            onClick={() => {
                              setIsOpen(false);
                              setShowChat(true);
                            }}
                          >
                            <MessageSquareIcon size={16} />
                            Chat
                          </button>

                          <button
                            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 gap-3"
                            onClick={() => {
                              setIsOpen(false);
                              openAddModal();
                            }}
                          >
                            <ArrowUpNarrowWide size={16} />
                            Escalate Report
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Incident Details */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg mb-6">
            <div className="border-b">
              <h4 className="text-xl font-bold p-5 flex items-center justify-between">
                <span>Incident Details</span>
                {getSeverityBadge(incident.severityLevel)}
              </h4>
            </div>

            <div className="p-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-black mb-1">Title</p>
                  <p className="font-semibold text-black">
                    {incident.incidentTitle}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-black mb-1">Location</p>
                  <p className="font-semibold text-black">
                    {incident.incidentLocation}
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
                  <p className="text-sm text-black mb-1">Date Created</p>
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
                  <p className="text-black">{incident.description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Attachments Section */}
          <div className="bg-white rounded-lg shadow-lg">
            <div className="border-b">
              <div className="p-5">
                <h4 className="text-xl font-bold">
                  Attachments ({attachments.length})
                </h4>
              </div>
            </div>

            {/* Upload New Files */}
            <div className="border-t p-5">
              <div className="border-2 hidden border-dashed border-gray-300 rounded-lg p-5 text-center mb-4">
                <input
                  type="file"
                  id="fileUpload"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif"
                  disabled={isUploading}
                />
                <label
                  htmlFor="fileUpload"
                  className={`cursor-pointer ${
                    isUploading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <Upload className="mx-auto text-gray-400 mb-2" size={48} />
                  <p className="text-black">Click to upload</p>
                  <p className="text-sm text-gray-500">
                    PDF, DOC, DOCX, JPG, PNG (Max 10MB per file)
                  </p>
                </label>
              </div>
              {attachments.length > 0 ? (
                <div className="space-y-3 mt-0">
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
                          className="btn btn-success btn-sm flex items-center gap-2"
                          href={`http://localhost:5181/${att.fileUrl}`}
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
                <div className="text-center py-6 text-gray-500">
                  No attachments yet
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column - Quick Info */}
        <div>
          <div className="bg-white rounded-lg shadow-lg">
            <div className="border-b">
              <div className="p-5">
                <h4 className="text-lg font-bold">Quick Info</h4>
              </div>
            </div>

            <div className="space-y-4 p-5">
              <div>
                <p className="text-sm text-gray-600 mb-1">Reported By</p>
                <p className="font-semibold text-black">
                  {incident.reporterName || "-"}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Recorded By</p>
                <p className="font-semibold text-black">
                  {incident.recorderName || "-"}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Accused Employee</p>
                <p className="font-semibold text-black">
                  {incident.accusedEmployee || "-"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}