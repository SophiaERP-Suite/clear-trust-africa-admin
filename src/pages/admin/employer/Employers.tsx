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
import { ChevronRightIcon, Plus, Briefcase, UserPlus, PenSquare, Trash2 } from "lucide-react";
import { NavLink } from "react-router-dom";

const data = [
  {
    name: "Little Nest Nursery",
    contact: "+2349089812359",
    email: "contact@littlenestnursery.com",
    address: "2, Osolo Way, Off Iyana Isolo, Lagos",
    status: "verified",
    joined: "2019-12-01",
    reg: "RC-45219"
  },
  {
    name: "Bright Future Academy",
    contact: "+2348164729381",
    email: "info@brightfutureacademy.com",
    address: "14, Awolowo Road, Ikeja, Lagos",
    status: "verified",
    joined: "2020-03-15",
    reg: "RC-51872"
  },
  {
    name: "Royal Gate International School",
    contact: "+2348057263145",
    email: "admin@royalgateschool.com",
    address: "8, Aminu Kano Crescent, Wuse 2, Abuja",
    status: "verified",
    joined: "2018-09-20",
    reg: "RC-60341"
  },
  {
    name: "Cedar Heights Nursery & Primary",
    contact: "+2348137720945",
    email: "contact@cedarheights.com",
    address: "10, Aba Road, Port Harcourt, Rivers",
    status: "unverified",
    joined: "2021-02-09",
    reg: "RC-72954"
  },
  {
    name: "Prime Scholars Academy",
    contact: "+2348075326710",
    email: "hello@primescholarsacademy.com",
    address: "17, Okpara Avenue, GRA, Enugu",
    status: "verified",
    joined: "2022-01-12",
    reg: "RC-85162"
  },
  {
    name: "Gracefield Model School",
    contact: "+2348124439087",
    email: "info@gracefieldmodel.com",
    address: "9, Aka Road, Uyo, Akwa Ibom",
    status: "verified",
    joined: "2020-10-05",
    reg: "RC-68217"
  },
  {
    name: "Unity Comprehensive College",
    contact: "+2347019938452",
    email: "contact@unitycomprehensivecollege.com",
    address: "22, Ahmadu Bello Way, Kaduna",
    status: "unverified",
    joined: "2021-09-10",
    reg: "RC-55902"
  },
  {
    name: "Faith Builders College",
    contact: "+2349061182734",
    email: "info@faithbuilderscollege.com",
    address: "3, Fajuyi Street, Ado-Ekiti, Ekiti State",
    status: "verified",
    joined: "2017-08-18",
    reg: "RC-41089"
  },
  {
    name: "City Crest College",
    contact: "+2349056348790",
    email: "support@citycrestcollege.com",
    address: "23, Ring Road, Ibadan, Oyo State",
    status: "verified",
    joined: "2019-11-30",
    reg: "RC-69473"
  },
  {
    name: "Divine Wisdom Academy",
    contact: "+2348145623971",
    email: "admin@divinewisdomacademy.com",
    address: "6, High Level, Makurdi, Benue State",
    status: "unverified",
    joined: "2018-07-23",
    reg: "RC-73421"
  },
  {
    name: "Sunbeam International School",
    contact: "+2348104452893",
    email: "info@sunbeaminternationalschool.com",
    address: "11, Opebi Road, Ikeja, Lagos",
    status: "verified",
    joined: "2023-05-12",
    reg: "RC-87254"
  }
]

function Employers() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full mb-8">
        <div className="row">
          <div className="col-md-12">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex">
                <Briefcase className="text-blue-600 mr-2" size={36} />
                <div>
                  <h3 className="mb-0 text-black">
                    Employers Management
                  </h3>
                  <p className="text-secondary-600 text-black">
                    <NavLink to="/Dashboard">Dashboard</NavLink>{" "}
                    <ChevronRightIcon size={14} />{" "}
                    <NavLink to="/EmployersMgt">Employers</NavLink>{" "}
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <NavLink
                    to="EmployerNew" style={{ backgroundColor: "rgb(112 22 208 / 1)" }}
                    className="text-white btn shadow-md btn-soft-light hover:shadow-xl hover:bg-glass focus:bg-gray-200"
                  >
                    <Plus size={18} className="mr-2" />
                    Add New
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="footer-inner mx-auto main-container container"
        x-bind:className="setting.page_layout"
      >
        <div className="flex flex-wrap contet-inner">
          <div className="flex-auto w-full">
            <div className="relative flex flex-col mb-8  bg-white dark:bg-dark-card shadow rounded">
              <div className="flex justify-between flex-auto p-5 border-b dark:border-secondary-800 rounded">
                <h4 className="mb-0 dark:text-secondary-200">
                  Employers List
                </h4>
                <a href="/ApplicantNew"></a>
              </div>
              <div className="pb-6 pt-2 px-0">
                <div className="overflow-x-auto">
                  <div className=" overflow-x-auto p-5">
                    <div className="flex flex-wrap justify-between my-6 mx-5">
                      <div className="flex justify-center items-center mb-1">
                        <label
                          className="inline-block text-secondary-600 dark:text-white"
                          htmlFor="show"
                        >
                          Show
                        </label>
                        <div className="flex">
                          <select
                            className="block w-full px-2 py-1 ml-2 text-base font-normal rounded text-secondary-500 dark:bg-dark-card dark:border-secondary-800 bg-white border outline-none focus:border-primary-500 focus:shadow"
                            aria-label=".form-select-sm example"
                            id="show"
                          >
                            <option selected={true}>10</option>
                            <option value="1">25</option>
                            <option value="2">50</option>
                            <option value="3">100</option>
                          </select>
                          <span className="text-secondary-600 ml-1 dark:text-white">
                            entries
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-center items-center mb-1">
                        <label
                          className="inline-block mb-2 text-secondary-600 dark:text-white"
                          htmlFor="email"
                        >
                          Search:
                        </label>
                        <input
                          type="email"
                          className="block w-full px-4 py-1 ml-2 text-base font-normal dark:bg-dark-card dark:border-secondary-800 bg-white border rounded outline-none focus:border-primary-500 focus:shadow"
                          id="email"
                        />
                      </div>
                    </div>
                    <table className="min-w-full overflow-hidden divide-y divide-secondary-200 dark:divide-secondary-800 border dark:border-secondary-800">
                      <thead>
                        <tr className="bg-secondary-100 dark:bg-dark-bg">
                          <th className="px-6 py-4 text-left font-medium text-secondary-600 dark:text-white">
                            Profile
                          </th>
                          <th className="px-6 py-4 text-left font-medium text-secondary-600 dark:text-white">
                            Name
                          </th>
                          <th className="px-6 py-4 text-left font-medium text-secondary-600 dark:text-white">
                            Contact
                          </th>
                          <th className="px-6 py-4 text-left font-medium text-secondary-600 dark:text-white">
                            Email
                          </th>
                          <th className="px-6 py-4 text-left font-medium text-secondary-600 dark:text-white">
                            Address
                          </th>
                          <th className="px-6 py-4 text-left font-medium text-secondary-600 dark:text-white">
                            Status
                          </th>
                          <th className="px-6 py-4 text-left font-medium text-secondary-600 dark:text-white">
                            Registration
                          </th>
                          <th className="px-6 py-4 text-left font-medium text-secondary-600 dark:text-white">
                            Join Date
                          </th>
                          <th className="px-6 py-4 text-left font-medium text-secondary-600 dark:text-white">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-secondary-200 dark:divide-secondary-800">
                        {
                          data.map((schoolData) => {
                            return (
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <a href="employerProfile">
                                  <img
                                    className="w-10 h-10 mr-3 text-primary-400 bg-primary-500/10 rounded-xl"
                                    src="/logo-test.png"
                                    style={{ objectFit: "cover" }}
                                    alt="profile"
                                  /></a>
                                </td>
                            
                                <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">
                                  {schoolData.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">
                                  { schoolData.contact }
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">
                                  { schoolData.email }
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">
                                  { schoolData.address }
                                </td>
                                <td className="px-6 py-4">
                                  <span className={`
                                    ${schoolData.status == 'verified' ? 'bg-success-500' : ''}
                                    ${schoolData.status == 'unverified' ? 'bg-warning-500' : ''}
                                    inline-block whitespace-nowrap px-2 py-1 text-xs text-center font-bold leading-none text-white rounded`}>
                                    { schoolData.status }
                                  </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">
                                  { schoolData.reg }
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">
                                  { schoolData.joined }
                                </td>
                                <td className="px-6 py-4">
                                  <div className="flex items-center list-user-action">
                                    <a
                                      className="btn btn-success btn-icon btn-sm mr-1"
                                      href="#"
                                      type="button"
                                      data-tp-toggle="tooltip"
                                      data-tp-placement="top"
                                      data-tp-title="Add"
                                    >
                                      <span className="btn-inner">
                                        <UserPlus />
                                      </span>
                                    </a>
                                    <a
                                      className="btn btn-warning btn-icon btn-sm mr-1"
                                      href="#"
                                      type="button"
                                      data-tp-toggle="tooltip"
                                      data-tp-placement="top"
                                      data-tp-title="Edit"
                                    >
                                      <span className="btn-inner">
                                        <PenSquare />
                                      </span>
                                    </a>
                                    <a
                                      className="btn btn-danger btn-icon btn-sm mr-1"
                                      href="#"
                                      type="button"
                                      data-tp-toggle="tooltip"
                                      data-tp-placement="top"
                                      data-tp-title="Delet"
                                    >
                                      <span className="btn-inner">
                                        <Trash2 />
                                      </span>
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            )
                          })
                        }
                      </tbody>
                    </table>
                    <div className="border dark:border-secondary-800">
                      <div className="flex flex-wrap justify-between my-6 mx-5">
                        <div className="flex justify-center items-center mb-1">
                          <p className="text-secondary-600">
                            Showing 1 to 9 of 9 entries
                          </p>
                        </div>
                        <div className="inline-flex flex-wrap">
                          <a
                            href="#"
                            className="border-t border-b border-l text-primary-500 border-secondary-500 px-2 py-1 rounded-l dark:border-secondary-800"
                          >
                            Previous
                          </a>
                          <a
                            href="#"
                            className="border text-white border-secondary-500 cursor-pointer bg-primary-500 px-4 py-1 dark:border-secondary-800"
                          >
                            1
                          </a>
                          <a
                            href="#"
                            className="border-r border-t border-b text-primary-500 border-secondary-500 px-4 py-1 rounded-r dark:border-secondary-800"
                          >
                            Next
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employers;
