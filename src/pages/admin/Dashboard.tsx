import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchOrganizationAnalytics } from "../../utils/Requests/EmployeeRequests.js";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import Hashids from "hashids";

interface OrganizationRequests {
  organisation: string;
  totalRequests: number;
}

interface IncidentChartData {
  month: string;
  totalReports: number;
}

interface PaymentChartData {
  month: string;
  totalAmount: number;
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
  severityLevel: number;
  incidentStatus: number;
  dateCreated: string;
  countryName: string;
  stateName: string;
  cityName: string;
  accusedFirstName: string;
  accusedLastName: string;
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
  dbsStageName: string;
  dbsStageId: number;
  dbsStageLevel: string;
  dbsStageAdminId: number;
  dbsStageAdminName: string;
}

interface ReportData {
  incidentThusFar: IncidentChartData[];
  paymentsThusFar: PaymentChartData[];
  lastFourIncidents: IncidentReport[];
  topOrganizationRequests: OrganizationRequests[];
  lastFourSubmissions: DbsChecks[];
  currentFourSubmissions: DbsChecks[];
}

const statusStyles: Record<number, string> = {
  1: 'bg-blue-200/50',
  2: 'bg-purple-200/50',
  3: 'bg-orange-200/50',
  4: 'bg-green-200/50',
  5: 'bg-red-200/50',
};

const statusTextStyles: Record<number, string> = {
  1: 'text-blue-500',
  2: 'text-purple-500',
  3: 'text-orange-500',
  4: 'text-green-500',
  5: 'text-red-500',
};

const bgStyles: Record<number, string> = {
  1: 'bg-blue-500',
  2: 'bg-purple-500',
  3: 'bg-orange-500',
  4: 'bg-green-500',
  5: 'bg-red-500',
};

const statuses = [
  'Submitted', 'Under Review', 'Awaiting Information', 'Vindicated', 'Convicted'
]

const dbsStatusStyles: Record<number, string> = {
  1: 'bg-orange-200/50',
  2: 'bg-blue-200/50',
  3: 'bg-purple-200/50',
  4: 'bg-green-200/50',
  5: 'bg-red-200/50',
};

const dbsStatusTextStyles: Record<number, string> = {
  1: 'text-orange-500',
  2: 'text-blue-500',
  3: 'text-purple-500',
  4: 'text-green-500',
  5: 'text-red-500',
};

function AdminDashboard() {
  const [report, setReport] = useState<ReportData | null>(null);
  const currentYear = new Date().getFullYear();
  const colors = ["#5d009bff", "#ff8800ff", "#ff0000", "#003000ff", "#00006dff"];
  const orgColors = ['bg-blue-200/50', 'bg-purple-200/50', 'bg-orange-200/50', 'bg-green-200/50', 'bg-red-200/50',]
  const orgTexts = ['text-blue-500', 'text-purple-500', 'text-orange-500', 'text-green-500', 'text-red-500',]
  const hashIds = new Hashids('ClearTrustAfricaEncode', 10);

  useEffect(() => {
    fetchOrganizationAnalytics()
    .then(res => {
      if (res.status === 200) {
        res.json()
        .then(data => {
          console.log(data);
          setReport(data.data);
        })
      } else {
        res.text()
        .then(data => {
          console.log(JSON.parse(data));
        })
      }
    })
    .catch((err) => console.log(err))
  }, []);
  return (
    <div
      className="p-6 lg:p-8 footer-inner mx-auto main-container container"
      x-bind:className="setting.page_layout"
    >
      <div className="flex flex-wrap justify-between mb-6 gap-4">
        <div className="">
          <h3 className="mb-0 dark:text-white">Quick Insights</h3>
          <p className="text-secondary-600 dark:text-white">
            <NavLink to="/Dashboard">Dashboard</NavLink>
          </p>
        </div>
      </div>
      {
        report && (
          <div>
            <div className="grid gird-cols-1 lg:grid-cols-3 lg:gap-8">
              <div className="h-100 lg:col-span-2 bg-white rounded-md p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-slate-900">
                    Reported Case Trend for the year {currentYear}
                  </h2>
                </div>
                <div className="h-74 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={report.incidentThusFar} margin={{ top: 10, right: 25, bottom: 20, left: -25 }}>
                      <XAxis
                        dataKey="month"
                        interval={0}
                        angle={-30}
                        textAnchor="end"
                        tick={{ fontSize: 12, fill: '#687280' }}
                      />
                      <YAxis
                        domain={[0, (dataMax: number) => Math.max(dataMax + 3, 5)]}
                        interval={0}
                      />
                      <Tooltip
                        formatter={(value) => [value, 'Total Reports']}
                      />
                      <Line
                        type="monotone"
                        dataKey="totalReports"
                        stroke="#4F46E5"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                      <CartesianGrid strokeDasharray="3 3" stroke="#d8dde7" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="h-100 overflow-y-auto relative flex flex-col mb-8 bg-white rounded shadow-lg dark:bg-dark-card grid gird-cols-1">
                <div className="flex flex-col overflow-hidden bg-white rounded-2xl shadow-md dark:bg-gray-900 dark:text-gray-300">
                  {/* Header */}
                  <div className="flex items-center justify-between px-5 py-4 border-b dark:border-gray-700">
                    <h4 className="text-lg font-semibold dark:text-white">
                      Recent Submissions
                    </h4>
                  </div>

                  {/* Body */}
                  <div className="space-y-4 p-4">
                    {report.lastFourIncidents.map((activity, index) => (
                      <div
                        key={activity.incidentReportId ?? index}
                        className="flex items-start gap-3 pb-4 border-b border-slate-100 last:border-0 last:pb-0"
                      >
                        <div
                          className={`w-2 h-2 rounded-full mt-2 ${bgStyles[activity.incidentStatus]}`}
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-slate-900">
                            {`${activity.incidentTitle} - ${activity.incidentType}`}
                          </p>
                          <p className="text-xs text-slate-500 mt-1">
                            {new Date(activity.dateCreated).toLocaleDateString('en-GB', { month: 'short', day:'2-digit', year: 'numeric' })}
                          </p>
                        </div>
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded  ${statusStyles[activity.incidentStatus]} ${statusTextStyles[activity.incidentStatus]}`}
                        >
                          {statuses[activity.incidentStatus - 1]}
                        </span>
                      </div>
                    ))}
                    {
                      report.lastFourIncidents.length === 0 && <div
                        className="flex items-start gap-3 pb-4 border-b border-slate-100 last:border-0 last:pb-0"
                      >
                        <div
                          className={`w-2 h-2 rounded-full mt-2 bg-gray-7000`}
                        />
                        <div className="flex-1 min-w-0">
                          <p>No Submissions</p>
                        </div>
                      </div>
                    }
                  </div>
                </div>
              </div>
              <div className="h-100 lg:col-span-2 bg-white rounded-md p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-slate-900">
                    Payment Report for the year {currentYear}
                  </h2>
                </div>
                <div className="h-74 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={report.paymentsThusFar} margin={{ top: 10, right: 25, bottom: 20, left: -15 }}>
                      <XAxis
                        dataKey="month"
                        interval={0}
                        angle={-30}
                        textAnchor="end"
                        tick={{ fontSize: 12, fill: '#687280' }}
                      />
                      <YAxis
                      />
                      <Tooltip
                        formatter={(value) => [value, 'Total Amount']}
                      />
                      <Line
                        type="monotone"
                        dataKey="totalAmount"
                        stroke="#4F46E5"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                      <CartesianGrid strokeDasharray="3 3" stroke="#d8dde7" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="relative flex flex-col mb-8 lg:mb-0 bg-white rounded shadow-lg dark:bg-dark-card grid grid-cols-1">
                <div className="flex flex-col overflow-hidden bg-white rounded-lg dark:bg-dark-card dark:text-secondary-600">
                  <div className="relative flex flex-wrap justify-between p-5 border-b dark:border-secondary-800">
                    <h4 className="mb-0 dark:text-white">Recent CTA Requests</h4>
                  </div>
                  <div className="p-5">
                    {
                      report.lastFourSubmissions.map((data, index) => (
                        <NavLink
                          key={data.dbsApplicationId}
                          to={`/Tracker/${hashIds.encode(String(data.dbsApplicationId))}`}
                          className=""
                        >
                          <div key={data.dbsApplicationId ?? index} className="flex items-center gap-2 mb-8">
                            <div className="h-12 w-12 border rounded-full" style={{ backgroundColor: colors[index % 4], display: "flex", justifyContent: "center", alignItems: "center", color: "#ffffff"}}>
                              { `${data.userFirstName[0]} ${data.userLastName[0]}` }
                            </div>
                            <div className="w-70">
                              <div className="flex justify-between">
                                <h6 className="mb-0 dark:text-white">
                                  { `${data.userFirstName} ${data.userLastName}` }
                                </h6>
                                <p className="leading-tight font-medium text-secondary-600">
                                  {(new Date(data.submittedAt)).toLocaleDateString('en-GB')}
                                </p>
                              </div>
                              <small className="mt-1 text-secondary-600 dark:text-white">
                                {data.organisationName}
                              </small>
                            </div>
                          </div>
                        </NavLink>
                      ))
                    }
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col mb-8 bg-white rounded shadow-lg dark:bg-dark-card grid grid-cols-1 lg:col-span-2">
                <div className="flex flex-col overflow-hidden bg-white rounded-lg dark:bg-dark-card dark:text-white">
                  <div className="relative flex flex-wrap justify-between p-5">
                    <h4 className="mb-0 dark:text-white">Current Ongoing Requests</h4>
                  </div>
                  <div className="flex-auto p-6 pt-0">
                    <div className="border dark:border-secondary-800 rounded overflow-hidden">
                      <table
                        id="basic-table"
                        className="min-w-full overflow-auto divide-y divide-secondary-200 dark:divide-secondary-800"
                      >
                        <thead>
                          <tr className="bg-secondary-200 dark:bg-dark-bg">
                            <th className="px-6 py-3 text-left rtl:text-right text-secondary-600 whitespace-nowrap font-semibold dark:text-white">
                              Applicants
                            </th>
                            <th className="px-6 py-3 text-left rtl:text-right text-secondary-600 whitespace-nowrap font-semibold dark:text-white">
                              Stage
                            </th>
                            <th className="px-6 py-3 text-left rtl:text-right text-secondary-600 whitespace-nowrap font-semibold dark:text-white">
                              Status
                            </th>
                            <th className="px-6 py-3 text-left rtl:text-right text-secondary-600 whitespace-nowrap font-semibold dark:text-white">
                              Administrator
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-secondary-200 dark:divide-secondary-800 dark:bg-dark-card dark:text-white">
                          {
                            report.currentFourSubmissions.map((data, index) => (
                              <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <NavLink
                                    key={data.dbsApplicationId}
                                    to={`/Tracker/${hashIds.encode(String(data.dbsApplicationId))}`}
                                    className=""
                                  >
                                    <div className="flex items-center">
                                      <div className="h-12 w-12 border rounded-full" style={{ backgroundColor: colors[index % 4], display: "flex", justifyContent: "center", alignItems: "center", color: "#ffffff"}}>
                                        { `${data.userFirstName[0]} ${data.userLastName[0]}` }
                                      </div>
                                      <h6 className="text-base pl-1 mt-2 dark:text-white">
                                        {`${data.userFirstName} ${data.userLastName}`}
                                      </h6>
                                    </div>
                                  </NavLink>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {data.dbsStageName}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                                  <p
                                    className={`p-1 px-2 text-center rounded-lg ${
                                      dbsStatusStyles[data.status] ?? 'bg-gray-200'
                                    } ${dbsStatusTextStyles[data.status] ?? 'text-black'} font-bold`}
                                  >
                                    {data.statusName}
                                  </p>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <div className="h-12 w-12 border rounded-full" style={{ backgroundColor: colors[index % 4], display: "flex", justifyContent: "center", alignItems: "center", color: "#ffffff"}}>
                                      { `${data.adminFirstName[0]} ${data.adminLastName[0]}` }
                                    </div>
                                    <h6 className="text-base pl-1 mt-2 dark:text-white">
                                      {`${data.adminFirstName} ${data.adminLastName}`}
                                    </h6>
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
              <div className="relative flex flex-col mb-8 bg-white rounded shadow-lg dark:bg-dark-card grid grid-cols-1">
                <div className="flex flex-col overflow-hidden bg-white rounded-lg dark:bg-dark-card dark:text-secondary-600">
                  <div className="p-5">
                    <div className="relative flex flex-wrap justify-between border-b dark:border-secondary-800">
                      <h4 className="mb-0 dark:text-white">Most CTA Requests</h4>
                    </div>
                    <div>
                      {
                        report.topOrganizationRequests.map((data, index) => (
                          <div className="flex items-center gap-4 mb-8 mt-4" key={index}>
                            <div className={`p-3 text-xl rounded ${orgColors[index % 4]} ${orgTexts[index % 4]}`}>
                              {`${data.organisation[0]}`}
                            </div>
                            <div className="w-full">
                              <div className="flex justify-between">
                                <h6 className="mb-0 dark:text-white">{data.organisation}</h6>
                                <p className="leading-tight font-medium text-secondary-600">
                                  {data.totalRequests} Checks
                                </p>
                              </div>
                            </div>
                          </div>
                        ))
                      }
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

export default AdminDashboard;
