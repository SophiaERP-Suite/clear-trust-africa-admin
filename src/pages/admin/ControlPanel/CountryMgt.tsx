import { useEffect, useState } from "react";
import { Eye, Flag } from "lucide-react";
import type { CountryDto } from "../../../types/controlPanel/location";
import { getAllCountries } from "../../../api/locationApi";
import { useNavigate } from "react-router-dom";

function CountryManagement() {
  const [loading, setLoading] = useState(true);
  const [countries, setcountries] = useState<CountryDto[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchcountries();
  }, []);

  const fetchcountries = async () => {
    try {
      setLoading(true);
      const data = await getAllCountries();
      setcountries(data);
    } catch (err: any) {
      setError("Failed to fetch countries");
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
        <div className="flex-auto w-full">
          <div className="relative flex flex-col mb-8  bg-white dark:bg-dark-card shadow rounded">
            <div className="flex justify-between flex-auto p-5 border-b dark:border-secondary-800 rounded">
              <h4 className="mb-0 dark:text-secondary-200">
                <Flag className="mr-1" />
                All countries
              </h4>
            </div>
            <div className="py-2 px-3">
              <div className="overflow-x-auto">
                <div className=" overflow-x-auto p-5">
                  <div className="flex justify-end mb-2">
                    <div className="flex justify-center gap-2 mb-4"></div>
                  </div>
                  {loading && (
                    <div
                      className="loading flex items-center justify-center gap-3 text-center"
                      aria-label="Loading countries"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 44 44"
                        stroke="currentColor"
                        aria-label="Loading"
                      >
                        <g fill="none" fillRule="evenodd" strokeWidth="4">
                          <circle cx="22" cy="22" r="9" strokeOpacity="0.2" />
                          <path
                            d="M22 3 A19 19 0 0 1 41 22"
                            stroke="currentColor"
                            strokeLinecap="round"
                          >
                            <animateTransform
                              attributeName="transform"
                              type="rotate"
                              from="0 22 22"
                              to="360 22 22"
                              dur="1s"
                              repeatCount="indefinite"
                            />
                          </path>
                        </g>
                      </svg>
                      <span className="text-gray-700">Please Wait... </span>
                    </div>
                  )}
                  {error && (
                    <div className="error flex justify-center text-center mt-[25%]">
                      Error: {error}
                    </div>
                  )}
                  {!loading && !error && countries.length === 0 && (
                    <div className="no-countrys flex justify-center text-center mt-[25%]">
                      No countrys found.
                    </div>
                  )}

                  {!loading && !error && countries.length > 0 && (
                    <div className="space-y-3 grid md:grid-cols-2">
                      {countries.map((country) => (
                        <div
                          key={country.countryId}
                          className="flex items-center justify-between bg-white border border-gray-200 p-4 rounded-sm hover:bg-gray-50 transition-colors"
                        >
                          <div>
                            <div className="font-medium text-gray-900">
                              {country.name}
                            </div>
                            {country.code && (
                              <div className="text-sm text-gray-500 mt-1">
                                Code:{" "}
                                <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                                  {country.code}
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="flex gap-2">
                            <button
                              className="btn btn-info btn-icon btn-sm"
                              onClick={() =>
                                navigate(
                                  `/ControlPanel/locationMgt/states?cd=${country.countryId}&country=${country.name}`
                                )
                              }
                            >
                              {" "}
                              <Eye size={14} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryManagement;
