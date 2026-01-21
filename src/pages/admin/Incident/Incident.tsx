import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  List,
  ListChecks,
  ClockAlert,
  ChevronRightIcon,
  AlertTriangleIcon,
  Eye,
  RefreshCcw,
  Search,
} from "lucide-react";
import { fetchAllIncidentReports, fetchIncidentType } from "../../../utils/Requests/IncidentRequests";
import Loading from "../../utils/Loading";
import Hashids from "hashids";
import Tippy from "@tippyjs/react";
import { useForm, useWatch } from "react-hook-form";
import { fetchCitiesByStateId, fetchCountries, fetchStatesByCountryId } from "../../../utils/Requests/EmployeeRequests";

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

interface CountryData {
  countryId: number;
  name: string;
  code: string;
}

interface StateData {
  stateId: number;
  name: string;
  code: string;
}

interface CityData {
  cityId: number;
  name: string;
  code: string;
}

interface IncidentType {
  incidentTypeId: number;
  name: string;
}

interface FilterForm {
  CountryId: string;
  StateId: string;
  CityId: string;
  IncidentTypeId: string;
  AccusedName: string;
}

export default function Incidents() {
  const hashIds = new Hashids('ClearTrustAfricaEncode', 10);
  const [incidentReport, setIncidentReport] = useState<IncidentReport[]>([]);
  const [totalIncidents, setTotalIncidents] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [incidentType, setIncidentType] = useState<IncidentType[]>([]);
  const [countries, setCountries] = useState<CountryData[]>([]);
  const [states, setStates] = useState<StateData[]>([]);
  const [cities, setCities] = useState<CityData[]>([]);
  const { register, control, watch, setValue, reset } = useForm<FilterForm>();
  const filters = useWatch({ control });
  const selectedCountry = watch('CountryId');
  const selectedState = watch('StateId');
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
    if (!selectedCountry || selectedCountry == '') {
      setStates([]);
      setValue('StateId', '');
      setValue('CityId', '')
      return;
    }
    fetchStatesByCountryId(Number(selectedCountry))
    .then(res => {
      if (res.status === 200) {
        res.json()
        .then(data => {
          setStates(data);
        })
      } else {
        res.text()
        .then(data => {
          console.log(JSON.parse(data));
        })
      }
    })
    .catch((err) => console.log(err))
  }, [selectedCountry, setValue]);
  
  useEffect(() => {
    if (!selectedState || selectedState == '') {
      setCities([]);
      setValue('CityId', '')
      return;
    }
    fetchCitiesByStateId(Number(selectedState))
    .then(res => {
      if (res.status === 200) {
        res.json()
        .then(data => {
          setCities(data);
        })
      } else {
        res.text()
        .then(data => {
          console.log(JSON.parse(data));
        })
      }
    })
    .catch((err) => console.log(err))
  }, [selectedState, setValue]);
  
  useEffect(() => {
    fetchIncidentType()
    .then(res => {
    if (res.status === 200) {
        res.json()
        .then(data => {
        console.log(data);
        setIncidentType(data.data);
        })
    } else {
        res.text()
        .then(data => {
        console.log(JSON.parse(data));
        })
    }
    })
  }, []);
  
  useEffect(() => {
    fetchAllIncidentReports({ pageNumber: page, limit: limit, ...filters })
    .then(res => {
      if (res.status === 200) {
        res.json()
        .then(data => {
          console.log(data);
          setIncidentReport(data.data.incidentReports);
          setTotalIncidents(data.data.totalCount);
        })
      } else {
        res.text()
        .then(data => {
          console.log(JSON.parse(data));
        })
      }
    })
    .catch((err) => console.log(err))
    .finally(() => {
      setLoading(false);
      setError(null);
    })
   }, [page, limit, filters]);


  const refetchData = async () => {
    setError(null);

    try {
      setLoading(true);
      reset();
      setPage(1)
      const response = await fetchAllIncidentReports({pageNumber: page, limit });

      if (response.status === 200) {
        const data = await response.json();
        setIncidentReport(data.data.incidentReports);
        setTotalIncidents(data.data.totalCount);
        console.log("incident fetching", data);
      }
    } catch (error) {
      console.error("Failed to refetch incident reports:", error);
      setError("Could not fetch incident reports. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6 lg:p-8 footer-inner mx-auto main-container container">
        <div className="flex items-center justify-center h-64">
          <Loading />
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-8 footer-inner mx-auto main-container container">
      {/* Header */}
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
                    <h3 className="mb-0 text-black">Incident/Offence Management</h3>
                    <p className="text-secondary-600 text-black">
                      <NavLink to="/Dashboard">Dashboard</NavLink>{" "}
                      <ChevronRightIcon size={14} />{" "}
                      <NavLink to="/IncidentMgt">Incident/Offence Management</NavLink>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats - Only show if not error */}
        {!error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-10">
            {/* Total Incidents */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg shadow-md border border-blue-600 p-5 hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-full">
                  <List className="text-blue-600 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-white">Total Incidents</p>
                  <h2 className="text-3xl font-bold text-white">
                    {totalIncidents}
                  </h2>
                </div>
              </div>
            </div>

            {/* Resolved */}
            <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-lg shadow-md border border-green-600 p-5 hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 w-12 h-12 flex items-center justify-center rounded-full">
                  <ListChecks className="text-green-600 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-white">Resolved</p>
                  <h2 className="text-3xl font-bold text-white">
                    0
                  </h2>
                </div>
              </div>
            </div>

            {/* Under Investigation */}
            <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-lg shadow-md border border-yellow-500 p-5 hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-100 w-12 h-12 flex items-center justify-center rounded-full">
                  <ClockAlert className="text-yellow-500 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-white">Under Investigation</p>
                  <h2 className="text-3xl font-bold text-white">
                    0
                  </h2>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        {!error && (
            <div className="relative flex flex-col mb-8 bg-white rounded-lg shadow-lg dark:bg-dark-card">
              <div className="flex flex-col overflow-hidden bg-white rounded-lg dark:bg-dark-card dark:text-secondary-600">
                <div className="relative flex flex-wrap justify-between p-5">
                  <h4 className="mb-2 sm:mb-0 text-xl font-bold">
                    Incident/Offence Reports
                  </h4>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">
                        Show entries
                      </span>
                      <select
                        value={limit}
                        onChange={(e) =>
                          setLimit(Number(e.target.value))
                        }
                        className="border rounded px-2 py-1 text-sm"
                      >
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                      </select>
                      <span className="text-sm text-gray-600"></span>
                    </div>
                    <button
                      onClick={refetchData}
                      className="btn btn-secondary btn-sm"
                      title="Refresh"
                    >
                      <RefreshCcw className="mr-2 w-5" /> Reset Filters
                    </button>
                  </div>
                </div>
                {/* Filters */}
                <div className="p-6 border-b">
                  <div className="flex flex-wrap gap-4">
                    <div className="flex-1 min-w-[150px]">
                      <div className="relative">
                        <Search
                          className="absolute left-3 top-7 transform -translate-y-1/2 text-gray-400"
                          size={20}
                        />
                        <input
                          type="text"
                          placeholder="Search by accused name..."
                          {...register('AccusedName')}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <select
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        {
                            ...register('IncidentTypeId')
                        }
                    >
                        <option value="">Select Incident Type</option>
                        {incidentType.map((data, index) => (
                            <option key={data.incidentTypeId ?? index} value={data.incidentTypeId}>
                                {data.name}
                            </option>
                        ))}
                    </select>
                    <select
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      {
                        ...register('CountryId')
                      }
                    >
                      <option value="">Select Country</option>
                      {
                        countries.map((data, index) => (
                          <option key={index} value={data.countryId}>{data.name}</option>
                        ))
                      }
                      </select>
                      <select
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        {
                          ...register('StateId')
                        }
                        disabled={!states.length}
                      >
                        <option value="">Select State</option>
                        {
                          states.map((data, index) => (
                            <option key={index} value={data.stateId}>{data.name}</option>
                          ))
                        }
                      </select>
                      <select
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        {
                          ...register('CityId')
                        }
                        disabled={!states.length}
                      >
                        <option value="">Select City</option>
                        {
                          cities.map((data, index) => (
                            <option key={index} value={data.cityId}>{data.name}</option>
                          ))
                        }
                      </select>
                  </div>
                </div>
                <hr className="m-0" />
                <div className="flex-auto p-5">
                  <div className="border dark:border-secondary-800 rounded-lg overflow-x-auto">
                    <table
                      id="basic-table"
                      className="min-w-full overflow-hidden divide-y divide-secondary-200 dark:divide-secondary-800"
                    >
                      {/* Table headers and rows remain the same */}
                      <thead>
                        <tr className="bg-secondary-200 dark:bg-dark-bg">
                          <th className="px-6 py-3 text-left rtl:text-right text-black text-md whitespace-nowrap font-semibold dark:text-white">
                            S/N
                          </th>
                          <th className="px-6 py-3 text-left rtl:text-right text-black text-md whitespace-nowrap font-semibold dark:text-white">
                            Accused
                          </th>
                          <th className="px-6 py-3 text-left rtl:text-right text-black text-md whitespace-nowrap font-semibold dark:text-white">
                            Type
                          </th>
                          <th className="px-6 py-3 text-left rtl:text-right text-black text-md whitespace-nowrap font-semibold dark:text-white">
                            Title
                          </th>
                          <th className="px-6 py-3 text-left rtl:text-right text-black text-md whitespace-nowrap font-semibold dark:text-white">
                            Location
                          </th>
                          <th className="px-6 py-3 text-left rtl:text-right text-black text-md whitespace-nowrap font-semibold dark:text-white">
                            Incident Date
                          </th>
                          <th className="px-6 py-3 text-left rtl:text-right text-black text-md whitespace-nowrap font-semibold dark:text-white">
                            Action
                          </th>
                        </tr>
                      </thead>

                      <tbody className="divide-y divide-secondary-200 dark:divide-secondary-800 dark:bg-dark-card dark:text-white">
                        {incidentReport.map((ir, index) => (
                          <tr key={ir.incidentReportId}>
                            {/* Table rows remain the same */}
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="iq-media-group iq-media-group-1">
                                <h6 className="font-bold dark:text-white">
                                  #{(index + (limit * (page - 1))) + 1}
                                </h6>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex w-50 items-center gap-3">
                                <div className="h-12 w-12 border rounded-full" style={{ backgroundColor: colors[index % 4], display: "flex", justifyContent: "center", alignItems: "center", color: "#ffffff"}}>
                                  { `${ir.accusedFirstName[0]} ${ir.accusedLastName[0]}` }
                                </div>
                                <div>
                                  <div className="font-semibold text-gray-900">
                                    {`${ir.accusedFirstName} ${ir.accusedLastName}`}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                              {ir.incidentType || "_"}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                              {ir.incidentTitle || "_"}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                              <p>{ir.incidentLocation}</p>
                              <p className="text-sm">{`${ir.cityName && ir.cityName + ', '}${ir.stateName && ir.stateName + ', '}${ir.countryName && ir.countryName + '.'}`}</p>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center mb-2">
                                <h6 className="font-medium dark:text-white">
                                  {ir.incidentDate
                                    ? new Date(
                                        ir.incidentDate
                                      ).toLocaleDateString("en-US", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                      })
                                    : "—"}
                                </h6>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap  text-gray-900">
                              <div className="flex items-center list-user-action">
                                <Tippy content='Preview Incident Report'>
                                  <NavLink  to={`/IncidentMgt/Report/${hashIds.encode(ir.incidentReportId)}`}
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
                    {
                      incidentReport.length === 0 ?
                        <div className="py-4 whitespace-nowrap w-full">
                              <span className="px-6 py-4 text-left font-medium text-black dark:text-white">There hasn't been any reported incidents</span>
                        </div> : <></>
                    }
                  </div>
                  <div className="flex flex-wrap justify-between my-6">
                    <div className="flex justify-center items-center mb-1">
                      <p className="text-black">
                        Showing { incidentReport.length > 0 ? ((page * limit) - limit) + 1 : 0 } to { incidentReport.length > 0 ? (((page * limit) - limit) + 1) + (incidentReport.length - 1) : 0 } of { totalIncidents } entries
                      </p>
                    </div>
                    <div className="inline-flex flex-wrap">
                      {
                        page > 1 && <a
                        href="#"
                        onClick={() => { if (page > 1) {setPage(page - 1);} }}
                        className="border-t border-b border-l text-primary-500 border-secondary-500 px-2 py-1 rounded-l dark:border-secondary-800"
                      >
                        Previous
                      </a>
                      }
                      <a
                        href="#"
                        className="border text-white border-secondary-500 cursor-pointer bg-primary-500 px-4 py-1 dark:border-secondary-800"
                      >
                        { page }
                      </a>
                      {
                        (page * limit) < totalIncidents && <a
                        href="#"
                        onClick={() => { setPage(page + 1); }}
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
          )
        }
      </div>
    </div>
  );
}