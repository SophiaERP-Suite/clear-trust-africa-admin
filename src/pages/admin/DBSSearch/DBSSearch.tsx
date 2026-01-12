import { useState } from "react";
import {
  Shield,
  AlertTriangle,
  Clock,
  ChevronRightIcon,
  FileText,
  XCircle,
  ClipboardPaste,
} from "lucide-react";
import { NavLink } from "react-router-dom";

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

export default function DBSSearchModule() {
  const [activeView, setActiveView] = useState("nimc");

  const dbsChecks = [
    {
      id: "DBS-2024-001",
      employeeName: "Sarah Oriaku",
      employeeId: "EMP-1001",
      department: "Healthcare",
      position: "Senior Nurse",
      checkType: "Enhanced",
      status: "Valid",
      applicationDate: "2024-01-05",
      issueDate: "2024-01-20",
      expiryDate: "2025-01-20",
      certificateNumber: "DBS-001234567890",
      result: "Clear",
      updateService: true,
      lastUpdated: "2024-01-28",
      daysUntilExpiry: 357,
      photo:
        "https://ui-avatars.com/api/?name=Sarah+Johnson&background=10b981&color=fff",
    },
    {
      id: "DBS-2024-002",
      employeeName: "Michael Adebayo",
      employeeId: "EMP-1002",
      department: "Education",
      position: "Teacher",
      checkType: "Enhanced with Barred List",
      status: "Expiring Soon",
      applicationDate: "2023-11-10",
      issueDate: "2023-11-25",
      expiryDate: "2024-11-25",
      certificateNumber: "DBS-001234567891",
      result: "Clear",
      updateService: true,
      lastUpdated: "2024-01-15",
      daysUntilExpiry: 30,
      photo:
        "https://ui-avatars.com/api/?name=Michael+Chen&background=3b82f6&color=fff",
    },
    {
      id: "DBS-2024-003",
      employeeName: "Emmanuella Williams",
      employeeId: "EMP-1003",
      department: "Social Care",
      position: "Care Worker",
      checkType: "Enhanced",
      status: "Expired",
      applicationDate: "2022-12-01",
      issueDate: "2022-12-18",
      expiryDate: "2023-12-18",
      certificateNumber: "DBS-001234567892",
      result: "Clear",
      updateService: false,
      lastUpdated: "2023-06-10",
      daysUntilExpiry: -41,
      photo:
        "https://ui-avatars.com/api/?name=Emma+Williams&background=ef4444&color=fff",
    },
    {
      id: "DBS-2024-004",
      employeeName: "Femi Anderson",
      employeeId: "EMP-1004",
      department: "Administration",
      position: "Office Manager",
      checkType: "Standard",
      status: "Pending",
      applicationDate: "2024-01-22",
      issueDate: null,
      expiryDate: null,
      certificateNumber: null,
      result: "Pending",
      updateService: false,
      lastUpdated: "2024-01-22",
      daysUntilExpiry: null,
      photo:
        "https://ui-avatars.com/api/?name=James+Anderson&background=f59e0b&color=fff",
    },
    {
      id: "DBS-2024-005",
      employeeName: "Lisa Abdul",
      employeeId: "EMP-1005",
      department: "Healthcare",
      position: "Junior Doctor",
      checkType: "Enhanced",
      status: "Under Review",
      applicationDate: "2024-01-18",
      issueDate: null,
      expiryDate: null,
      certificateNumber: null,
      result: "Under Review",
      updateService: true,
      lastUpdated: "2024-01-26",
      daysUntilExpiry: null,
      photo:
        "https://ui-avatars.com/api/?name=Lisa+Martinez&background=8b5cf6&color=fff",
    },
    {
      id: "DBS-2024-006",
      employeeName: "David Thompson",
      employeeId: "EMP-1006",
      department: "Education",
      position: "Teaching Assistant",
      checkType: "Enhanced with Barred List",
      status: "Valid",
      applicationDate: "2023-09-15",
      issueDate: "2023-10-02",
      expiryDate: "2024-10-02",
      certificateNumber: "DBS-001234567893",
      result: "Clear",
      updateService: true,
      lastUpdated: "2024-01-10",
      daysUntilExpiry: 247,
      photo:
        "https://ui-avatars.com/api/?name=David+Thompson&background=10b981&color=fff",
    },
  ];

  const searchTypes = [
    { id: "nimc", label: "NIMC", icon: Shield },
    { id: "checks", label: "NPF", icon: FileText },
  ]

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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Expiring Soon */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-yellow-700">
              <Clock className="text-yellow-500" />
              Expiring Soon (30 Days)
            </h3>
            <div className="space-y-3">
              {dbsChecks
                .filter((c) => c.status === "Expiring Soon")
                .map((check) => (
                  <div
                    key={check.id}
                    className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={check.photo}
                        alt={check.employeeName}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-sm">
                          {check.employeeName}
                        </div>
                        <div className="text-xs text-gray-600">
                          {check.department} • {check.position}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 text-xs text-yellow-700 font-semibold">
                      Expires in {check.daysUntilExpiry} days
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Expired */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-red-700">
              <XCircle className="text-red-500" />
              Expired Checks
            </h3>
            <div className="space-y-3">
              {dbsChecks
                .filter((c) => c.status === "Expired")
                .map((check) => (
                  <div
                    key={check.id}
                    className="p-3 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={check.photo}
                        alt={check.employeeName}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-sm">
                          {check.employeeName}
                        </div>
                        <div className="text-xs text-gray-600">
                          {check.department} • {check.position}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 text-xs text-red-700 font-semibold">
                      Expired 2 days ago
                    </div>
                    <button className="mt-2 w-full bg-red-600 text-white text-xs py-1 rounded hover:bg-red-700">
                      Urgent: Renew Now
                    </button>
                  </div>
                ))}
            </div>
          </div>

          {/* Pending Reviews */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-purple-700">
              <AlertTriangle className="text-purple-500" />
              Pending Reviews
            </h3>
            <div className="space-y-3">
              {dbsChecks
                .filter(
                  (c) => c.status === "Pending" || c.status === "Under Review"
                )
                .map((check) => (
                  <div
                    key={check.id}
                    className="p-3 bg-purple-50 border border-purple-200 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={check.photo}
                        alt={check.employeeName}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-sm">
                          {check.employeeName}
                        </div>
                        <div className="text-xs text-gray-600">
                          {check.department} • {check.position}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span
                        className={`text-xs px-2 py-1 rounded`}
                      >
                        {check.status}
                      </span>
                      <span className="text-xs text-gray-500">
                        Applied: {check.applicationDate}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
