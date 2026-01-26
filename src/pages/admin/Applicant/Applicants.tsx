import { useEffect, useState } from "react";
import "../../../assets2/css/choices.min.css";
import "../../../assets2/css/flatpickr.min.css";
import "../../../assets2/css/libs.min.css";
import "../../../assets2/css/quill.snow.css";
import "../../../assets2/css/responsive.css";
import "../../../assets2/css/sheperd.css";
import "../../../assets2/css/sweetalert2.min.css";
import "../../../assets2/css/tailwind.css";
import "../../../assets2/css/uppy.min.css";
import "../../../assets2/js/choice.js";
import "../../../assets2/js/choices.min.js";
import "../../../assets2/js/dashboard.js";
import "../../../assets2/js/fslightbox.js";
import "../../../assets2/js/libs.min.js";
import "../../../assets2/js/slider-tabs.js";
import "../../../assets2/js/sweet-alert.js";
import "../../../assets2/js/swiper-slider.js";
import {
  ChevronRightIcon,
  Users,
  Eye,
  Search,
} from "lucide-react";
import { fetchAllApplicants } from "../../../utils/Requests/EmployeeRequests.js";
import Tippy from "@tippyjs/react";
import { NavLink } from "react-router-dom";
import Hashids from "hashids";
import { useForm, useWatch } from "react-hook-form";

interface EmployeeData {
  userId: number;
  firstName: string;
  lastName: string;
  profileImage: string;
  phone: string;
  email: string;
  identificationNumber: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  organisationId: number;
  role: string;
}

export interface DbsTypes {
  dbsTypeId: number;
  typeName: string;
  typeCost: number;
}

interface FilterForm {
  UserName: string;
  OrganisationName: string;
}

function Applicants() {
  const [employees, setEmployees] = useState<EmployeeData[]>([]);
  const [totalEmployees, setTotalEmployees] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const hashIds = new Hashids("ClearTrustAfricaEncode", 10);
  const { register, control } = useForm<FilterForm>();
  const filters = useWatch({ control })

  useEffect(() => {
    fetchAllApplicants({ pageNumber: page, limit, ...filters })
      .then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
            console.log(data);
            setEmployees(data.data.users);
            setTotalEmployees(data.data.totalCount);
          });
        } else {
          res.text().then((data) => {
            console.log(JSON.parse(data));
          });
        }
      })
      .catch((err) => console.log(err));
  }, [page, limit, filters]);

  const refetchData = async () => {
    try {
      const res = await fetchAllApplicants({ pageNumber: page, limit, ...filters });
      if (res.status === 200) {
        const data = await res.json();
        setEmployees(data.data.users);
        setTotalEmployees(data.data.totalCount);
      } else {
        const resText = await res.text();
        console.log(JSON.parse(resText));
      }
    } catch (err) {
      console.log(err);
    }
  };
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
              <p className="text-secondary-600">
                <NavLink to="/Dashboard">Dashboard</NavLink>
                <ChevronRightIcon size={14} />
                <NavLink to="/ApplicantsMgt">Applicant Mgt </NavLink>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg">
                  {/* Filters */}
          <div className="p-6 border-b">
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[250px]">
                <div className="relative">
                  <Search
                    className="absolute left-3 top-7 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Search by applicant name..."
                    {...register('UserName')}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-[250px]">
                <div className="relative">
                  <Search
                    className="absolute left-3 top-7 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Search by organisation name..."
                    {...register('OrganisationName')}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center mb-1">
                <label
                  className="inline-block text-black dark:text-white"
                  htmlFor="show"
                >
                  Display Per Page:
                </label>
                <div className="flex">
                  <select
                    className="block w-full px-2 py-1 ml-2 text-base font-normal rounded text-black dark:bg-dark-card dark:border-secondary-800 bg-white border outline-none focus:border-primary-500 focus:shadow"
                    aria-label=".form-select-sm example"
                    id="show"
                    value={limit}
                    onChange={(e) => {
                      setLimit(Number(e.target.value));
                      refetchData();
                    }}
                  >
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <div className="p-6">
              <div className="flex flex-wrap justify-between mx-5 overflow-x-auto">
                <table className="min-w-full divide-y divide-secondary-200 dark:divide-secondary-800 border dark:border-secondary-800">
                  <thead>
                    <tr className="bg-secondary-100 dark:bg-dark-bg">
                      <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                        S/N
                      </th>
                      <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                        Name
                      </th>
                      <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                        Phone
                      </th>
                      <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                        Email
                      </th>
                      <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                        Gender
                      </th>
                      <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                        Birth Date
                      </th>
                      <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-secondary-200 dark:divide-secondary-800">
                    {employees.map((data: EmployeeData, index) => (
                      <tr key={data.userId ?? index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="iq-media-group iq-media-group-1">
                            <h6 className="font-bold dark:text-white">
                              {" "}
                              #{index + 1}
                            </h6>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <NavLink
                            to={`/EmployeeProfile/${hashIds.encode(
                              String(data.userId)
                            )}`}
                            className="flex items-center"
                          >
                            <img
                              className="w-10 h-10 p-1 mr-3 rtl:mr-0 rtl:ml-3 text-primary-400 bg-primary-500/10 rounded-xl"
                              src={data.profileImage}
                              alt="profile"
                            />
                            <h6 className="font-medium pl-1 mt-2 dark:text-white">
                              {`${data.firstName} ${data.lastName}`}
                            </h6>
                          </NavLink>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-gray-900">
                          {data.phone}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-gray-900">
                          {data.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-gray-900">
                          {data.gender}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-gray-900">
                          {new Date(data.dateOfBirth).toLocaleDateString(
                            "en-GB",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center list-user-action">
                            <Tippy content="Preview Applicant Profile">
                              <NavLink
                                to={`/ApplicantsMgt/${hashIds.encode(
                                  String(data.userId)
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
                      ))
                    }
                    {
                      employees.length === 0 ? <tr>
                        <div className="px-6 py-4 whitespace-nowrap">
                          <span  className="px-6 py-4 text-left font-medium text-black dark:text-white">There are currently no registered employees in your organisation</span>
                        </div>
                      </tr> : <></>
                    }
                  </tbody>
                </table>
                {
                  employees.length === 0 ? (
                    <p className="px-6 py-4 text-center whitespace-nowrap">
                      <span className="px-6 py-4 text-center font-medium text-black dark:text-white">
                        There are currently no registered applicants
                      </span>
                    </p>
                  ) : (
                    <></>
                )}
              </div>
              <div className="flex flex-wrap justify-between my-6 mx-5">
                <div className="flex justify-center items-center mb-1">
                  <p className="text-black">
                    Showing{" "}
                    {employees.length > 0 ? page * limit - limit + 1 : 0}{" "}
                    to{" "}
                    {employees.length > 0
                      ? page * limit - limit + 1 + (employees.length - 1)
                      : 0}{" "}
                    of {totalEmployees} entries
                  </p>
                </div>
                <div className="inline-flex flex-wrap">
                  {page > 1 && (
                    <a
                      href="#"
                      onClick={() => {
                        if (page > 1) {
                          setPage(page - 1);
                          refetchData();
                        }
                      }}
                      className="border-t border-b border-l rounded-md text-primary-500 border-secondary-500 px-2 py-1 rounded-l dark:border-secondary-800"
                    >
                      Previous
                    </a>
                  )}
                  <a
                    href="#"
                    className="border text-white border-secondary-500 rounded-md cursor-pointer bg-primary-500 px-4 py-1 dark:border-secondary-800"
                  >
                    {page}
                  </a>
                  {page * limit < totalEmployees && (
                    <a
                      href="#"
                      onClick={() => {
                        setPage(page + 1);
                        refetchData();
                      }}
                      className="border-r border-t border-b text-primary-500 border-secondary-500 px-4 py-1 rounded-md dark:border-secondary-800"
                    >
                      Next
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Applicants;
