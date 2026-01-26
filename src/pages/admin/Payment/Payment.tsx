import { useForm, useWatch } from "react-hook-form";
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
  CreditCard,
  BanknoteArrowDown,
  Search,
  HandCoins,
  Eye,
} from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { fetchPayments } from "../../../utils/Requests/PaymentRequests.js";
import Tippy from "@tippyjs/react";
import Hashids from "hashids";

interface PaymentData {
  paymentId: number;
  userId: string;
  userFirstName: string;
  userLastName: string;
  amount: number;
  currency: string;
  txRef: string;
  status: number;
  dateCreated: string;
}

interface FilterForm {
  UserName: string;
  StartDate: string;
  EndDate: string;
}

const statusStyles: Record<number, string> = {
  1: 'bg-orange-200/50',
  2: 'bg-green-200/50',
  3: 'bg-red-200/50',
  4: 'bg-purple-200/50',
};

const statusTextStyles: Record<number, string> = {
  1: 'text-orange-500',
  2: 'text-green-500',
  3: 'text-red-500',
  4: 'text-purple-500',
};

const statusName: Record<number, string> = {
  1: 'Pending',
  2: 'Success',
  3: 'Failed',
  4: 'Reversed',
};

interface PaymentStats {
  totalAmount: number;
  yearTotal: number;
  monthTotal: number;
}

function PaymentDashboard() {
  const [payment, setPayment] = useState<PaymentData[]>([]);
  const { register, control } = useForm<FilterForm>();
  const [paymentStats, setPaymentStats] = useState<PaymentStats | null>(null);
  const filters = useWatch({ control });
  const [paymentPage, setPaymentPage] = useState(1);
  const [totalPayments, setTotalPaymnets] = useState(0);
  const colors = ["#5d009bff", "#ff8800ff", "#ff0000", "#003000ff", "#00006dff"];
  const paymentLimit = 10;
  const hashIds = new Hashids('ClearTrustAfricaEncode', 10);

  useEffect(() => {
    fetchPayments({ pageNumber: paymentPage, limit: paymentLimit, ...filters })
    .then(res => {
      if (res.status === 200) {
        res.json()
        .then(data => {
          console.log(data);
          setPayment(data.data.payments);
          setTotalPaymnets(data.data.totalCount);
          setPaymentStats(data.data.stats);
        })
      } else {
        res.text()
        .then(data => {
          console.log(JSON.parse(data));
        })
      }
    })
    .catch((err) => console.log(err))
}, [paymentPage, paymentLimit, filters]);

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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        <div
          className={`bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow`}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="py-3 px-3 bg-slate-100/50 rounded-full">
              <CreditCard className="w-6 h-5 text-white" />
            </div>
          </div>
          <div>
            <p className="text-3xl font-semibold text-white mb-1">
              { `NGN ${(paymentStats ? paymentStats.totalAmount : 0).toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2})}` }
            </p>
            <p className="text-sm text-white">All Payments So Far</p>
          </div>
        </div>
        <div
          className={`bg-gradient-to-r from-green-600 to-green-500 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow`}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="py-3 px-3 bg-slate-100/50 rounded-full">
              <BanknoteArrowDown className="w-6 h-5 text-white" />
            </div>
          </div>
          <div>
            <p className="text-3xl font-semibold text-white mb-1">
              { `NGN ${(paymentStats ? paymentStats.yearTotal : 0).toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2})}` }
            </p>
            <p className="text-sm text-white">Payments This Year</p>
          </div>
        </div>
        <div
          className={`bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow`}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="py-3 px-3 bg-slate-100/50 rounded-full">
              <HandCoins className="w-6 h-5 text-white" />
            </div>
          </div>
          <div>
            <p className="text-3xl font-semibold text-white mb-1">
              { `NGN ${(paymentStats ? paymentStats.monthTotal : 0).toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2})}` }
            </p>
            <p className="text-sm text-white">Payments This Month</p>
          </div>
        </div>
      </div>
      <div>
        <div className="relative flex flex-col mb-8 bg-white rounded shadow-lg dark:bg-dark-card grid gird-cols-1 lg:col-span-2">
          <div className="flex flex-col overflow-hidden bg-white rounded-lg dark:bg-dark-card dark:text-secondary-600">
            <div className="relative p-5 ">
              <h4 className="mb-2 sm:mb-0 text-xl font-bold">Payment Log</h4>
              <div className="mt-3">
                <div className="flex flex-wrap gap-4">
                  <div className="flex-1 min-w-[250px]">
                    <div className="relative">
                      <Search
                        className="absolute left-3 top-7 transform -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                      <input
                        type="text"
                        placeholder="Search by user name..."
                        {...register('UserName')}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <Tippy content="Filter From Start Date">
                      <div className="relative">
                        <input
                          type="date"
                          placeholder="Search by start date..."
                          {...register('StartDate')}
                          className="w-full pl-2 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </Tippy>
                  </div>
                  <div className="flex-1">
                    <Tippy content="Filter To Date Limit">
                      <div className="relative">
                        <input
                          type="date"
                          placeholder="Search by end date..."
                          {...register('EndDate')}
                          className="w-full pl-2 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </Tippy>
                  </div>
                </div>
              </div>
            </div>
            <hr className="overflow-x-auto" />
            <div className="p-5">
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
                          User
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
                      <th className="px-6 py-3 text-left rtl:text-right text-secondary-600 whitespace-nowrap font-semibold dark:text-white">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-secondary-200 dark:divide-secondary-800 dark:bg-dark-card dark:text-white">
                    {payment.map((data, index) => {
                      return (<tr className={ `${index % 2 === 1 ? 'bg-secondary-200 dark:bg-dark-strip' : ''}` }>
                          <td className="px-6 py-4 whitespace-nowrap">
                              <div className="iq-media-group iq-media-group-1">
                              <h6 className="font-bold dark:text-white">{ index + 1 }</h6>
                              </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center gap-3">
                                <div className="h-12 w-12 border rounded-full" style={{ backgroundColor: colors[index % 4], display: "flex", justifyContent: "center", alignItems: "center", color: "#ffffff"}}>
                                  { `${data.userFirstName[0]} ${data.userLastName[0]}` }
                                </div>
                                <div>
                                  <div className="font-semibold text-gray-900">
                                    {`${data.userFirstName} ${data.userLastName}`}
                                  </div>
                                </div>
                              </div>
                          </td>
                          <td className="px-6 font-bold py-4 whitespace-nowrap text-gray-900">
                              { `${data.currency} ${data.amount.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2})}` }
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                            <p
                              className={`p-1 px-2 text-center rounded-lg ${
                                statusStyles[data.status] ?? 'bg-gray-200'
                              } ${statusTextStyles[data.status] ?? 'text-black'} font-bold`}
                            >
                              {statusName[data.status]}
                            </p>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center mb-2">
                                <h6 className="font-medium dark:text-white">
                                    {(new Date(data.dateCreated)).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                                </h6>
                              </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap  text-gray-900">
                            <div className="flex items-center list-user-action">
                              <Tippy content='Preview Receipt'>
                                <NavLink  to={`/FinanceMgt/Receipt/${hashIds.encode(String(data.paymentId))}`}
                                  className="btn btn-info btn-icon btn-sm mr-1"
                                >
                                  <span className="btn-inner">
                                    <Eye />
                                  </span>
                                </NavLink>
                              </Tippy>
                            </div>
                          </td>
                      </tr>)
                    })}
                  </tbody>
                </table>
                {
                  payment.length === 0 ?
                    <div className="py-4 whitespace-nowrap w-full">
                      <span className="px-6 py-4 text-left font-medium text-black dark:text-white">There hasn't been any payments made</span>
                    </div> : <></>
                }
              </div>
              <div className="flex flex-wrap justify-between my-6 mx-5">
              <div className="flex justify-center items-center mb-1">
                <p className="text-black">
                  Showing { payment.length > 0 ? ((paymentPage * paymentLimit) - paymentLimit) + 1 : 0 } to { payment.length > 0 ? (((paymentPage * paymentLimit) - paymentLimit) + 1) + (payment.length - 1) : 0 } of { totalPayments } entries
                </p>
              </div>
              <div className="inline-flex flex-wrap">
                {
                  paymentPage > 1 && <a
                  href="#"
                  onClick={() => { if (paymentPage > 1) {setPaymentPage(paymentPage - 1);} }}
                  className="border-t border-b border-l text-primary-500 border-secondary-500 px-2 py-1 rounded-l dark:border-secondary-800"
                >
                  Previous
                </a>
                }
                <a
                  href="#"
                  className="border text-white border-secondary-500 cursor-pointer bg-primary-500 px-4 py-1 dark:border-secondary-800"
                >
                  { paymentPage }
                </a>
                {
                  (paymentPage * paymentLimit) < totalPayments && <a
                  href="#"
                  onClick={() => { setPaymentPage(paymentPage + 1); }}
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
      </div>
    </div>
  );
}

export default PaymentDashboard;
