import { useEffect, useState } from "react";
import {
  ChevronRightIcon,
  BarChart3,
  AlertTriangleIcon,
  Siren,
  ShieldCheck,
  Flag,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { fetchCountries } from "../../../utils/Requests/EmployeeRequests";
import { useForm, useWatch } from "react-hook-form";
import { fetchIncidentReportsAnalytics } from "../../../utils/Requests/IncidentRequests";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

interface IncidentChartData {
  month: string;
  totalReports: number;
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

interface IncidentTypeGroup {
  incidentType: string;
  totalReport: number;
  percentage: number;
}

interface IncidentCountryGroup {
  country: string;
  totalReport: number;
  percentage: number;
}

interface IncidentStateGroup {
  state: string;
  totalReport: number;
  percentage: number;
}

interface IncidentAccussedGroup {
  accusedEmplyeerF: string;
  accusedEmplyeerL: string;
  totalReport: number;
  percentage: number;
}

interface IncidentOrgGroup {
  organization: string;
  totalReport: number;
  percentage: number;
}

interface IncidentOrgGroup {
  organization: string;
  totalReport: number;
  percentage: number;
}

interface ReportData {
  reported: number;
  convicted: number;
  vindicated: number;
  inReview: number;
  firstIncident: string;
  incidentThusFar: IncidentChartData[];
  lastFourIncidents: IncidentReport[];
  incidentTypeGroup: IncidentTypeGroup[];
  incidentCountryGroup: IncidentCountryGroup;
  incidentStateGroup: IncidentStateGroup;
  incidentAccussedGroup: IncidentAccussedGroup;
  incidentOrgGroup: IncidentOrgGroup;
  incidentTypeConvictGroup: IncidentTypeGroup;
}

interface CountryData {
  countryId: number;
  name: string;
  code: string;
}

interface DateData {
  value: string;
  key: string;
}

interface FilterData {
  CountryId: string;
  EndDate: string;
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

export default function InvestigationPortal() {
  const [report, setReport] = useState<ReportData | null>(null);
  const [countries, setCountries] = useState<CountryData[]>([]);
  const [activeTab, setActiveTab] = useState("overview");
  const [dates, setDates] = useState<DateData[]>([]);
  const { register, control } = useForm<FilterData>();
  const filters = useWatch({ control });
  const colors = ["#5d009bff", "#ff8800ff", "#ff0000", "#003000ff", "#00006dff"];

  useEffect(() => {
    fetchCountries()
    .then(res => {
      if (res.status === 200) {
        res.json()
        .then(data => {
          setCountries(data);
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

  useEffect(() => {
    fetchIncidentReportsAnalytics(filters)
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
  }, [filters]);

  useEffect(() => {
    const today = new Date();
    const month = today.toLocaleDateString("en-GB", { month: "short" });
    const lastMonth = new Date(today.getFullYear(), today.getMonth() + 1).toLocaleDateString("en-GB", { month: "short" });
    if (report && report.firstIncident) {
      const firstReport = new Date(report.firstIncident);
      const years: DateData[] = [];
      for (let i = today.getFullYear(); i >= firstReport.getFullYear(); i--){
        years.push({ value: `${lastMonth} ${i - 1} - ${month} ${i}`, key: new Date(i, today.getMonth(), today.getDate()).toISOString() })
      }
      setDates(years);
    } else {
      const years: DateData[] = [
        { value: `${lastMonth} ${today.getFullYear() - 1} - ${month} ${today.getFullYear()}`, key: today.toISOString() }
      ];
      setDates(years);
    }
  }, [report])

  return (
    <div
      className="p-6 lg:p-8 footer-inner mx-auto main-container container"
      x-bind:className="setting.page_layout"
    >
      {/* Header */}
      <div className="flex flex-wrap mb-8 items-center justify-between">
        <div className="flex">
          <BarChart3 className="text-[rgb(112_22_208/0.9)] mr-2 " size={36} />
          <div>
            <h3 className="mb-0 text-black">Reports & Analytics</h3>
            <p className="text-secondary-600 text-black">
              <NavLink to="/Dashboard">Dashboard</NavLink>{" "}
              <ChevronRightIcon size={14} />{" "}
              <NavLink to="/Reports">Report & Analytics</NavLink>{" "}
            </p>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            {
              ...register('CountryId')
            }
          >
            <option value="">All Countries</option>
            {
              countries.map((data, index) => (
                <option key={index} value={data.countryId}>{data.name}</option>
              ))
            }
          </select>
        </div>
      </div>
      {
        report && (
          <main className="max-w-7xl mx-auto py-8">
            {/* Tabs */}
            <div className="flex gap-1 bg-white p-1 rounded-lg border border-slate-200 mb-8 w-fit">
              {["overview", "analytics"].map((tab) => (
                <a
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                    activeTab === tab
                      ? "bg-[rgb(112_22_208/0.9)] text-white"
                      : "text-slate-600 hover:text-white hover:bg-black cursor-pointer"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </a>
              ))}
            </div>

            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div
                    className='bg-gradient-to-r from-green-600 to-green-500 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow'
                  >
                    <div className="flex items-start justify-end mb-4">
                      <div className="py-3 px-3 bg-white rounded-full border-2">
                        <Siren className="w-6 h-5 text-green-600" />
                      </div>
                    </div>
                    <div>
                      <p className="text-3xl font-semibold text-white mb-1">
                        {report.reported}
                      </p>
                      <p className="text-sm text-white">Reported Cases</p>
                    </div>
                  </div>
                  <div
                    className='bg-gradient-to-r from-red-600 to-red-500 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow'
                  >
                    <div className="flex items-start justify-end mb-4">
                      <div className="py-3 px-3 bg-white rounded-full border-2">
                        <AlertTriangleIcon className="w-6 h-5 text-red-600" />
                      </div>
                    </div>
                    <div>
                      <p className="text-3xl font-semibold text-white mb-1">
                        {report.convicted}
                      </p>
                      <p className="text-sm text-white">Convicted Cases</p>
                    </div>
                  </div>
                  <div
                    className='bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow'
                  >
                    <div className="flex items-start justify-end mb-4">
                      <div className="py-3 px-3 bg-white rounded-full border-2">
                        <ShieldCheck className="w-6 h-5 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <p className="text-3xl font-semibold text-white mb-1">
                        {report.vindicated}
                      </p>
                      <p className="text-sm text-white">Vindicated Cases</p>
                    </div>
                  </div>
                  <div
                    className='bg-gradient-to-r from-amber-600 to-amber-500 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow'
                  >
                    <div className="flex items-start justify-end mb-4">
                      <div className="py-3 px-3 bg-white rounded-full border-2">
                        <Flag className="w-6 h-5 text-amber-600" />
                      </div>
                    </div>
                    <div>
                      <p className="text-3xl font-semibold text-white mb-1">
                        {report.inReview}
                      </p>
                      <p className="text-sm text-white">Cases Under Review</p>
                    </div>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Case Status Chart */}
                  <div className="h-100 lg:col-span-2 bg-white rounded-md p-6 border border-slate-200">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-lg font-semibold text-slate-900">
                        Reported Case Trend
                      </h2>
                      <div className="flex justify-end items-center">
                        <select
                          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          {
                            ...register('EndDate')
                          }
                        >
                          {
                            dates.map((data, index) => (
                              <option key={index} value={data.key}>{data.value}</option>
                            ))
                          }
                        </select>
                      </div>
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

                  {/* Recent Activity */}
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
                </div>
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === "analytics" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  {/* Case Distribution */}
                  <div className="relative flex flex-col mb-8 bg-white rounded shadow-lg dark:bg-dark-card grid gird-cols-1">
                    <div className="flex flex-col overflow-hidden bg-white rounded-2xl shadow-md dark:bg-gray-900 dark:text-gray-300">
                      {/* Header */}
                      <div className="flex items-center justify-between px-5 py-4 border-b dark:border-gray-700">
                        <h4 className="text-lg font-semibold dark:text-white">
                          Case Type Distribution
                        </h4>
                      </div>

                      {/* Body */}
                      <div className="space-y-3 p-4">
                        {
                        report.incidentTypeGroup.map((item, idx) => (
                          <div key={idx}>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-slate-700">
                                {item.incidentType}
                              </span>
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-slate-500">
                                  {item.totalReport} cases
                                </span>
                                <span className="text-sm font-semibold text-slate-900">
                                  {item.percentage}%
                                </span>
                              </div>
                            </div>
                            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full transition-all duration-500`}
                                style={{ width: `${item.percentage}%`, backgroundColor: colors[idx % 4] }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Geographic Distribution */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-md p-6 border border-slate-200">
                  <h2 className="text-lg font-semibold text-white mb-4">
                    Resolution & Top Case Metrics
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div
                        className="p-4 bg-slate-50 rounded-lg text-center"
                      >
                      <p className="text-sm text-slate-600 mb-1">Conviction Rate</p>
                      <p className="text-2xl font-bold text-slate-900">
                        {(report.reported !== 0 && report.convicted !== 0) ? (Math.ceil((report.convicted / report.reported) * 100 * 100) / 100) : 0} %
                      </p>
                    </div>
                    <div
                        className="p-4 bg-slate-50 rounded-lg text-center"
                      >
                      <p className="text-sm text-slate-600 mb-1">Vindication Rate</p>
                      <p className="text-2xl font-bold text-slate-900">
                        {(report.reported !== 0 || report.vindicated !== 0) ? (Math.ceil((report.vindicated / report.reported) * 100 * 100) / 100) : 0} %
                      </p>
                    </div>
                    {
                      (filters.CountryId === undefined || filters.CountryId === "") && (
                        <div
                            className="p-4 bg-slate-50 rounded-lg text-center"
                          >
                          <p className="text-sm text-slate-600 mb-1">Country With Most Cases</p>
                          <p className="text-2xl font-bold text-slate-900">
                            {report.incidentCountryGroup ? report.incidentCountryGroup.country : 'None Specified'}
                          </p>
                          <p className="text-sm font-bold text-slate-900">
                            {report.incidentCountryGroup ? `${report.incidentCountryGroup.percentage}%` : '0%'}
                          </p>
                        </div>
                      )
                    }
                    {
                      (filters.CountryId !== undefined && filters.CountryId !== "") && (
                        <div
                            className="p-4 bg-slate-50 rounded-lg text-center"
                          >
                          <p className="text-sm text-slate-600 mb-1">State With Most Cases</p>
                          <p className="text-2xl font-bold text-slate-900">
                            {report.incidentStateGroup ? report.incidentStateGroup.state : 'None Specified'}
                          </p>
                          <p className="text-sm font-bold text-slate-900">
                            {report.incidentStateGroup ? `${report.incidentStateGroup.percentage}%` : '0%'}
                          </p>
                        </div>
                      )
                    }
                    
                    <div
                        className="p-4 bg-slate-50 rounded-lg text-center"
                      >
                      <p className="text-sm text-slate-600 mb-1">Organization With Most Cases</p>
                      <p className="text-2xl font-bold text-slate-900">
                        {report.incidentOrgGroup ? report.incidentOrgGroup.organization : 'None Specified'}
                      </p>
                      <p className="text-sm font-bold text-slate-900">
                        {report.incidentOrgGroup ? `${report.incidentOrgGroup.percentage}%` : '0%'}
                      </p>
                    </div>
                    <div
                        className="p-4 bg-slate-50 rounded-lg text-center"
                      >
                      <p className="text-sm text-slate-600 mb-1">Applicants with Most Reports</p>
                      <p className="text-2xl font-bold text-slate-900">
                        {report.incidentAccussedGroup ? `${report.incidentAccussedGroup.accusedEmplyeerF} ${report.incidentAccussedGroup.accusedEmplyeerL}` : 'None Specified'}
                      </p>
                      <p className="text-sm font-bold text-slate-900">
                        {report.incidentAccussedGroup ? `${report.incidentAccussedGroup.percentage}%` : '0%'}
                      </p>
                    </div>
                    <div
                        className="p-4 bg-slate-50 rounded-lg text-center"
                      >
                      <p className="text-sm text-slate-600 mb-1">Incident Type with most convictions</p>
                      <p className="text-2xl font-bold text-slate-900">
                        {report.incidentTypeConvictGroup ? report.incidentTypeConvictGroup.incidentType : 'None Specified'}
                      </p>
                      <p className="text-sm font-bold text-slate-900">
                        {report.incidentTypeConvictGroup ? `${report.incidentTypeConvictGroup.percentage}%` : '0%'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
        </main>
        )
      }
        
    </div>
  );
}
