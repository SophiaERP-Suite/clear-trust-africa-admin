import { useEffect, useState } from "react";
import { Activity, ChevronLeft, ChevronRight } from "lucide-react";
import { getAllAuditTrails } from "../../../api/auditTrailApi";
import type { AuditDto } from "../../../types/controlPanel/audit";
import Loading from "../../utils/Loading";

function AuditLog() {
  const [loading, setLoading] = useState(true);
  const [auditTrails, setAuditTrails] = useState<AuditDto[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAudit();
  }, []);

  const fetchAudit = async () => {
    try {
      setLoading(true);
      const data = await getAllAuditTrails();
      setAuditTrails(data);
      console.log(data);
    } catch (err: any) {
      setError("Failed to fetch auditTrails");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="footer-inner mx-auto main-container container"
      x-bind:className="setting.page_layout"
    >
      <div className="flex flex-wrap contet-inner">
        <div className="flex-auto w-50">
          <div className="relative flex flex-col mb-8  bg-white dark:bg-dark-card shadow rounded">
            <div className="flex justify-between flex-auto p-5 border-b dark:border-secondary-800 rounded">
              <h4 className="mb-0 dark:text-secondary-200">
                <Activity className="mr-1" />
                Audit Log
              </h4>
            </div>
            <div className="p-5">
              <div className="bg-gray-50">
                {/* Main Table */}
                <div className="overflow-x-auto max-w-full">
                  <table className="min-w-full divide-y divide-secondary-200 dark:divide-secondary-800 border dark:border-secondary-800">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left  font-medium text-gray-500">
                          {/* <button className="flex items-center gap-1 hover:text-gray-700"> */}
                          Timestamp
                          {/* <ArrowUpDown className="h-3 w-3" />  uppercase tracking-wider*/}
                          {/* </button> */}
                        </th>
                        <th className="px-6 py-3 text-left  font-medium text-gray-500">
                          User
                        </th>
                        <th className="px-6 py-3 text-left  font-medium text-gray-500">
                          Organisation
                        </th>
                        <th className="px-6 py-3 text-left  font-medium text-gray-500">
                          Action & Description
                        </th>
                        <th className="px-6 py-3 text-left  font-medium text-gray-500">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left  font-medium text-gray-500">
                          GeoLong
                        </th>
                        <th className="px-6 py-3 text-left  font-medium text-gray-500">
                          GeoLat
                        </th>
                        <th className="px-6 py-3 text-left  font-medium text-gray-500">
                          Location
                        </th>
                      </tr>
                    </thead>
                    {loading && <Loading />}
                    {error && (
                      <div className="error flex justify-center text-center mt-[25%]">
                        Error: {error}
                      </div>
                    )}
                    {!loading && !error && auditTrails.length === 0 && (
                      <div className="no-countrys flex justify-center text-center mt-[25%]">
                        No records found.
                      </div>
                    )}
                    <tbody className="bg-white divide-y divide-gray-200">
                      {/* Row 1 */}
                      {!loading &&
                        !error &&
                        auditTrails.length > 0 &&
                        auditTrails.map((audit) => (
                          <tr
                            key={audit.auditTrailId}
                            className="hover:bg-gray-50"
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm">
                                {audit.actionDateFormatted}
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center">
                                {/* <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                                        J
                                      </div> */}
                                <div className="ml-3">
                                  <div className="text-sm font-medium text-gray-900">
                                    {audit.userName}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="text-sm text-gray-900">
                                {audit.organisationName}
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex flex-col gap-1">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border text-green-600 bg-green-50 border-green-200">
                                  {audit.actionName.toUpperCase()}
                                </span>
                                <div className="text-sm text-gray-900">
                                  {audit.description}
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border bg-green-100 text-green-800 border-green-200">
                                {audit.statusName.toUpperCase()}
                              </span>
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm">{audit.longitude}</div>
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm">{audit.latitude}</div>
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm">
                                {audit.city}, {audit.country} (
                                {audit.countryCode})
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                {/* Pagination */}
                {/* <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
                        <div className="text-sm text-gray-700">Page 1 of 1</div>
                        <div className="flex gap-2">
                          <button className="btn btn-outline btn-sm flex items-center gap-1 opacity-50 cursor-not-allowed">
                            <ChevronLeft className="h-4 w-4" />
                            Previous
                          </button>
                          <button className="btn btn-primary btn-sm">1</button>
                          <button className="btn btn-outline btn-sm flex items-center gap-1">
                            Next
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div> */}
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuditLog;
