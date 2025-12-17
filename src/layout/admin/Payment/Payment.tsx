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
  Wallet,
  BanknoteArrowUp,
  CreditCard,
  BanknoteArrowDown,
  BanknoteX,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function PaymentDashboard() {
  const [filter, setFilter] = useState("month");
  const [active, setActive] = useState("Payment");
  const stats = [
    {
      label: "Total Revenue",
      id: "Revenue",
      value: "#3,750,000",
      trend: "up",
      icon: BanknoteArrowUp,
      styling: "bg-gradient-to-r from-blue-600 to-blue-500",
      },
      {
        label: "Payments",
        id: "Payment",
        value: "#4,850,000",
        trend: "up",
        icon: CreditCard,
        styling: "bg-gradient-to-r from-green-600 to-green-500",
      },
      {
        label: "Accrued Costs",
        id: "Costs",
        value: "#1,100,000",
        trend: "up",
        icon: BanknoteArrowDown,
        styling: "bg-gradient-to-r from-yellow-600 to-yellow-500",
      },
      {
        label: "Losses",
        id: "Costs",
        value: "#120,000",
        trend: "up",
        icon: BanknoteX,
        styling: "bg-gradient-to-r from-red-600 to-red-500",
      },
  ];
  
  const paymentData = [
    {
      sn: 1,
      employer: "Little Nest Nursery",
      status: "Confirmed",
      amount: "120,000",
      date: "20-10-2025"
    },
    {
      sn: 2,
      employer: "Alpha Global Schools",
      status: "Unconfirmed",
      amount: "180,000",
      date: "20-10-2025"
    },
    {
      sn: 2,
      employer: "Bright Future Academy",
      status: "Confirmed",
      amount: "95,000",
      date: "18-10-2025"
    },
    {
      sn: 3,
      employer: "Royal Gate International School",
      status: "Unconfirmed",
      amount: "150,000",
      date: "22-10-2025"
    },
    {
      sn: 4,
      employer: "Cedar Heights Nursery & Primary",
      status: "Confirmed",
      amount: "110,500",
      date: "19-10-2025"
    },
    {
      sn: 5,
      employer: "Prime Scholars Academy",
      status: "Confirmed",
      amount: "130,000",
      date: "21-10-2025"
    },
    {
      sn: 6,
      employer: "Gracefield Model School",
      status: "Unconfirmed",
      amount: "87,000",
      date: "23-10-2025"
    },
    {
      sn: 7,
      employer: "Unity Comprehensive College",
      status: "Confirmed",
      amount: "140,000",
      date: "17-10-2025"
    },
    {
      sn: 8,
      employer: "Faith Builders College",
      status: "Unconfirmed",
      amount: "125,000",
      date: "20-10-2025"
    },
    {
      sn: 9,
      employer: "City Crest College",
      status: "Confirmed",
      amount: "160,000",
      date: "24-10-2025"
    },
    {
      sn: 10,
      employer: "Divine Wisdom Academy",
      status: "Unconfirmed",
      amount: "102,000",
      date: "19-10-2025"
    },
    {
      sn: 11,
      employer: "Sunbeam International School",
      status: "Confirmed",
      amount: "118,000",
      date: "25-10-2025"
    }
  ];
  
  const costData = [
    {
      recipient: "DB Check on Applicant",
      amount: "#15,000",
      date: "20-10-2025"
    },
    {
      recipient: "Background Verification Service",
      amount: "#12,500",
      date: "18-10-2025"
    },
    {
      recipient: "NPF Criminal Record Check",
      amount: "#15,000",
      date: "19-10-2025"
    },
    {
      recipient: "Academic Certificate Authentication",
      amount: "#10,000",
      date: "20-10-2025"
    },
    {
      recipient: "Identity Verification (NIN Portal)",
      amount: "#8,500",
      date: "21-10-2025"
    },
    {
      recipient: "Previous Employer Reference Call",
      amount: "#5,000",
      date: "22-10-2025"
    },
    {
      recipient: "Guarantor Form Validation",
      amount: "#7,500",
      date: "23-10-2025"
    },
    {
      recipient: "Court Affidavit Verification",
      amount: "#6,000",
      date: "24-10-2025"
    },
    {
      recipient: "Local Government Certificate Check",
      amount: "#9,000",
      date: "25-10-2025"
    },
    {
      recipient: "Police Clearance Certificate Request",
      amount: "#14,000",
      date: "26-10-2025"
    },
    {
      recipient: "Professional License Confirmation",
      amount: "#11,000",
      date: "27-10-2025"
    }
  ]

  return (
    <div
      className="p-6 lg:p-8 footer-inner mx-auto main-container container"
      x-bind:className="setting.page_layout"
    >
      <div className="flex flex-wrap justify-between mb-6 gap-4">
        <div className="col-md-12">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex">
              <Wallet className="text-blue-600 mr-2" size={36} />
              <div>
                <h3 className="mb-0 text-black">Finance Management</h3>
                <p className="text-secondary-600 text-black">
                  <NavLink to="/Dashboard">Dashboard</NavLink>{" "}
                  <ChevronRightIcon size={14} />{" "}
                  <NavLink to="/FinanceMgt">Finance Management</NavLink>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              onClick={() => setActive(stat.id)}
              className={`${stat.styling} rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow ${stat.styling}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="py-3 px-3 bg-slate-100/50 rounded-full">
                  <Icon className="w-6 h-5 text-white" />
                </div>
              </div>
              <div>
                <p className="text-3xl font-semibold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-white">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>
      {active === 'Payment' && (
        <div>
          <div className="relative flex flex-col mb-8 bg-white rounded shadow-lg dark:bg-dark-card grid gird-cols-1 lg:col-span-2">
            <div className="flex flex-col overflow-hidden bg-white rounded-lg dark:bg-dark-card dark:text-secondary-600">
              <div className="relative flex flex-wrap justify-between p-5 ">
                <h4 className="mb-2 sm:mb-0 text-xl font-bold">Payment Log</h4>
                <div className="flex">
                  <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                    <option value="today">Today</option>
                    <option value="week">This Week</option>
                    <option value="month">This Month</option>
                    <option value="quarter">This Quarter</option>
                    <option value="year">This Year</option>
                    <option value="custom">Custom Range</option>
                  </select>
                </div>
                </div>
                  <hr className="m-0" />
                  <div className="flex-auto p-5">
                    <div className="border dark:border-secondary-800 rounded overflow-x-auto">
                      <table
                        id="basic-table"
                        className="min-w-full overflow-hidden divide-y divide-secondary-200 dark:divide-secondary-800"
                        >
                        <thead>
                          <tr className="bg-secondary-200 dark:bg-dark-bg">
                            <th className="px-6 py-3 text-left rtl:text-right text-secondary-600 whitespace-nowrap font-semibold dark:text-white">
                                SN
                            </th>
                            <th className="px-6 py-3 text-left rtl:text-right text-secondary-600 whitespace-nowrap font-semibold dark:text-white">
                                Employee
                            </th>
                            <th className="px-6 py-3 text-left rtl:text-right text-secondary-600 whitespace-nowrap font-semibold dark:text-white">
                                Amount Paid
                            </th>
                            <th className="px-6 py-3 text-left rtl:text-right text-secondary-600 whitespace-nowrap font-semibold dark:text-white">
                                Status
                            </th>
                            <th className="px-6 py-3 text-left rtl:text-right text-secondary-600 whitespace-nowrap font-semibold dark:text-white">
                                Date
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-secondary-200 dark:divide-secondary-800 dark:bg-dark-card dark:text-white">
                          {paymentData.map((data, index) => {
                            return (<tr className={ `${index % 2 === 1 ? 'bg-secondary-200 dark:bg-dark-strip' : ''}` }>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="iq-media-group iq-media-group-1">
                                    <h6 className="font-bold dark:text-white">{ index + 1 }</h6>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                    <img
                                        className="w-10 h-10 p-1 mr-3 rtl:mr-0 rtl:ml-3 text-primary-400 bg-primary-500/10 rounded-xl"
                                        src="/logo-test.png"
                                        alt="profile"
                                    />
                                    <h6 className="font-medium pl-1 mt-2 dark:text-white">
                                        { data.employer }
                                    </h6>
                                    </div>
                                </td>
                                <td className="px-6 font-bold py-4 whitespace-nowrap text-gray-900">
                                    { `#${data.amount}` }
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap  text-gray-900">
                                    { data.status }
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center mb-2">
                                    <h6 className="font-medium dark:text-white">
                                        { data.date }
                                    </h6>
                                    </div>
                                </td>
                            </tr>)
                          })}
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
          </div>
        </div>
      )}
      
      {active === 'Revenue' && (
        <div>
          <div className="relative flex flex-col mb-8 bg-white rounded shadow-lg dark:bg-dark-card grid gird-cols-1 lg:col-span-2">
            <div className="flex flex-col overflow-hidden bg-white rounded-lg dark:bg-dark-card dark:text-secondary-600">
              <div className="relative flex flex-wrap justify-between p-5 ">
                <h4 className="mb-2 sm:mb-0 text-xl font-bold">Payment Log</h4>
                <div className="flex">
                  <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                    <option value="today">Today</option>
                    <option value="week">This Week</option>
                    <option value="month">This Month</option>
                    <option value="quarter">This Quarter</option>
                    <option value="year">This Year</option>
                    <option value="custom">Custom Range</option>
                  </select>
                </div>
                </div>
                  <hr className="m-0" />
                  <div className="flex-auto p-5">
                    <div className="border dark:border-secondary-800 rounded overflow-x-auto">
                      <table
                        id="basic-table"
                        className="min-w-full overflow-hidden divide-y divide-secondary-200 dark:divide-secondary-800"
                        >
                        <thead>
                          <tr className="bg-secondary-200 dark:bg-dark-bg">
                            <th className="px-6 py-3 text-left rtl:text-right text-secondary-600 whitespace-nowrap font-semibold dark:text-white">
                                SN
                            </th>
                            <th className="px-6 py-3 text-left rtl:text-right text-secondary-600 whitespace-nowrap font-semibold dark:text-white">
                                Employee
                            </th>
                            <th className="px-6 py-3 text-left rtl:text-right text-secondary-600 whitespace-nowrap font-semibold dark:text-white">
                                Amount Paid
                            </th>
                            <th className="px-6 py-3 text-left rtl:text-right text-secondary-600 whitespace-nowrap font-semibold dark:text-white">
                                Date
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-secondary-200 dark:divide-secondary-800 dark:bg-dark-card dark:text-white">
                          {paymentData.filter(data => data.status === 'Confirmed').map((data, index) => {
                            return (<tr className={ `${index % 2 === 1 ? 'bg-secondary-200 dark:bg-dark-strip' : ''}` }>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="iq-media-group iq-media-group-1">
                                    <h6 className="font-bold dark:text-white">{ index + 1 }</h6>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                    <img
                                        className="w-10 h-10 p-1 mr-3 rtl:mr-0 rtl:ml-3 text-primary-400 bg-primary-500/10 rounded-xl"
                                        src="/logo-test.png"
                                        alt="profile"
                                    />
                                    <h6 className="font-medium pl-1 mt-2 dark:text-white">
                                        { data.employer }
                                    </h6>
                                    </div>
                                </td>
                                <td className="px-6 font-bold py-4 whitespace-nowrap text-gray-900">
                                    { `#${data.amount}` }
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center mb-2">
                                    <h6 className="font-medium dark:text-white">
                                        { data.date }
                                    </h6>
                                    </div>
                                </td>
                            </tr>)
                          })}
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
          </div>
        </div>
      )}
      
      {active === 'Costs' && (
        <div>
          <div className="relative flex flex-col mb-8 bg-white rounded shadow-lg dark:bg-dark-card grid gird-cols-1 lg:col-span-2">
            <div className="flex flex-col overflow-hidden bg-white rounded-lg dark:bg-dark-card dark:text-secondary-600">
              <div className="relative flex flex-wrap justify-between p-5 ">
                <h4 className="mb-2 sm:mb-0 text-xl font-bold">Costs Log</h4>
                <div className="flex">
                  <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                    <option value="today">Today</option>
                    <option value="week">This Week</option>
                    <option value="month">This Month</option>
                    <option value="quarter">This Quarter</option>
                    <option value="year">This Year</option>
                    <option value="custom">Custom Range</option>
                  </select>
                </div>
                </div>
                  <hr className="m-0" />
                  <div className="flex-auto p-5">
                    <div className="border dark:border-secondary-800 rounded overflow-x-auto">
                      <table
                        id="basic-table"
                        className="min-w-full overflow-hidden divide-y divide-secondary-200 dark:divide-secondary-800"
                        >
                        <thead>
                          <tr className="bg-secondary-200 dark:bg-dark-bg">
                            <th className="px-6 py-3 text-left rtl:text-right text-secondary-600 whitespace-nowrap font-semibold dark:text-white">
                                SN
                            </th>
                            <th className="px-6 py-3 text-left rtl:text-right text-secondary-600 whitespace-nowrap font-semibold dark:text-white">
                                Recipient
                            </th>
                            <th className="px-6 py-3 text-left rtl:text-right text-secondary-600 whitespace-nowrap font-semibold dark:text-white">
                                Amount Paid
                            </th>
                            <th className="px-6 py-3 text-left rtl:text-right text-secondary-600 whitespace-nowrap font-semibold dark:text-white">
                                Date
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-secondary-200 dark:divide-secondary-800 dark:bg-dark-card dark:text-white">
                          {costData.map((data, index) => {
                            return (<tr className={ `${index % 2 === 1 ? 'bg-secondary-200 dark:bg-dark-strip' : ''}` }>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="iq-media-group iq-media-group-1">
                                    <h6 className="font-bold dark:text-white">{ index + 1 }</h6>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                    <img
                                        className="w-10 h-10 p-1 mr-3 rtl:mr-0 rtl:ml-3 text-primary-400 bg-primary-500/10 rounded-xl"
                                        src="/logo-test.png"
                                        alt="profile"
                                    />
                                    <h6 className="font-medium pl-1 mt-2 dark:text-white">
                                        { data.recipient }
                                    </h6>
                                    </div>
                                </td>
                                <td className="px-6 font-bold py-4 whitespace-nowrap text-gray-900">
                                    { data.amount }
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center mb-2">
                                    <h6 className="font-medium dark:text-white">
                                        { data.date }
                                    </h6>
                                    </div>
                                </td>
                            </tr>)
                          })}
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
}

export default PaymentDashboard;
