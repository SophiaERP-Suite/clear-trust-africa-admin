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
  Briefcase,
  X,
  Check,
  AlertCircle,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  getAllOrganizations,
  approveOrganization,
  rejectOrganization,
  suspendOrganization,
} from "../../../api/adminApi.js";
import type { OrganizationDto } from "../../../types/organization.js";
import { ToastContainer, toast } from "react-toastify";
import Modal from "../../utils/modal.js";

type ModalType = "suspend" | "approve" | "reject" | null;

function Employers() {
  const [organizations, setOrganizations] = useState<OrganizationDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [selectedOrgId, setSelectedOrgId] = useState<number | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("Active");

  // pagination
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState<number>(20);
  const [totalCount, setTotalCount] = useState(0);

  const start = totalCount > 0 ? (page - 1) * pageSize + 1 : 0;
  const end = totalCount > 0 ? Math.min(page * pageSize, totalCount) : 0;
  const totalPages = Math.ceil(totalCount / pageSize);

  useEffect(() => {
    fetchOrganizations();
  }, [page, statusFilter, pageSize]);

  const fetchOrganizations = async () => {
    try {
      setLoading(true);
      const data = await getAllOrganizations(
        statusFilter || undefined,
        page,
        pageSize
      );
      setOrganizations(data);
      setTotalCount(data.length);
      console.log(data);
    } catch (err: any) {
      console.error(err);
      setError("Failed to fetch organizations");
    } finally {
      setLoading(false);
    }
  };

  // Toast messages
  const notifySuccess = () =>
    toast.success("Organization activated successfully");
  const notifyRejection = () =>
    toast.success("Organization rejected successfully");
  const notifySuspend = () =>
    toast.success("Organization suspended successfully");
  const notifyError = () => toast.error("Action Failed");

  // Call modals
  const openApproveModal = (organizationId: number) => {
    setSelectedOrgId(organizationId);
    setModalType("approve");
  };

  const openRejectModal = (organizationId: number) => {
    setSelectedOrgId(organizationId);
    setModalType("reject");
  };

  const openSuspendModal = (organizationId: number) => {
    setSelectedOrgId(organizationId);
    setModalType("suspend");
  };

  const closeModal = () => {
    setModalType(null);
    setSelectedOrgId(null);
  };

  const handleApprove = async () => {
    if (!selectedOrgId) return;

    try {
      setLoading(true);
      const OrganizationId = selectedOrgId;
      await approveOrganization(OrganizationId);
      notifySuccess();
      fetchOrganizations();
      closeModal();
    } catch (err: any) {
      notifyError();
    }
  };

  const handleReject = async (reasonInput?: string) => {
    if (!selectedOrgId) return;

    try {
      setLoading(true);
      const payload = {
        organizationId: selectedOrgId,
        reason: reasonInput || "Not meeting criteria",
      };
      await rejectOrganization(payload.organizationId, payload.reason);
      notifyRejection();
      closeModal();
      fetchOrganizations();
    } catch (err: any) {
      notifyError();
    }
  };

  const handleSuspend = async (reasonInput?: string) => {
    if (!selectedOrgId) return;

    try {
      setLoading(true);
      const payload = {
        organizationId: selectedOrgId,
        reason: reasonInput || "Not meeting criteria",
      };
      await suspendOrganization(payload.organizationId, payload.reason);
      notifySuspend();
      closeModal();
      fetchOrganizations();
    } catch (err: any) {
      notifyError();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer />
      <Modal
        isOpen={modalType === "approve"}
        title="Approve Organization"
        message="Are you sure you want to approve this organization?"
        confirmText="Approve"
        confirmColor="green"
        headerIcon={<Check />}
        butonIcon={<Check />}
        loading={loading}
        onConfirm={handleApprove}
        onCancel={closeModal}
      />

      <Modal
        isOpen={modalType === "reject"}
        title="Reject Organization"
        message="Are you sure you want to reject this organization?"
        confirmText="Reject"
        confirmColor="green"
        inputLabel="Reason for Rejection"
        inputPlaceholder="Enter reason..."
        headerIcon={<X />}
        butonIcon={<X />}
        loading={loading}
        onConfirm={handleReject}
        onCancel={closeModal}
      />

      <Modal
        isOpen={modalType === "suspend"}
        title="Suspend Organization"
        message="Are you sure you want to suspend this organization?"
        confirmText="Suspend"
        confirmColor="yellow"
        inputLabel="Reason for Suspension"
        inputPlaceholder="Enter reason..."
        headerIcon={<AlertCircle />}
        butonIcon={<Check />}
        loading={loading}
        onConfirm={handleSuspend}
        onCancel={closeModal}
      />
      <div
        className="p-6 lg:p-8 footer-inner mx-auto main-container container"
        x-bind:className="setting.page_layout"
      >
        <div className="flex flex-wrap mb-6 justify-between gap-4">
          <div className="flex items-center gap-4 w-full">
            <div className="flex">
              <Briefcase
                className="text-[rgb(112_22_208/0.9)] mr-2"
                size={36}
              />
              <div>
                <h3 className="mb-0 text-black text-2xl font-semibold">
                  Employers Management
                </h3>
                <p className="text-black text-sm flex items-center gap-1">
                  <NavLink to="/Dashboard">Dashboard</NavLink>{" "}
                  <ChevronRightIcon size={14} />{" "}
                  <NavLink to="/EmployersMgt">Employers Management</NavLink>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        {loading && (
          <div
            className="loading flex items-center justify-center gap-3 text-center mt-8"
            aria-label="Loading Organizations"
            role="status"
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
            <span className="text-gray-700">Loading Organizations...</span>
          </div>
        )}
        {error && (
          <div className="error flex justify-center text-center mt-[25%]">
            Error: {error}
          </div>
        )}

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
                      <div className="flex justify-between my-6 mx-0">
                        <div className="flex justify-center items-center gap-2 mb-1">
                          <label
                            className="inline-block text-black text-md dark:text-white"
                            htmlFor="status"
                          >
                            Status:
                          </label>
                          <div className="flex">
                            <select
                              id="status"
                              value={statusFilter}
                              onChange={(e) => setStatusFilter(e.target.value)}
                              className="form-control"
                            >
                              <option value="">All</option>
                              <option value="Active">Active</option>
                              <option value="Pending">Pending</option>
                              <option value="Suspended">Suspended</option>
                            </select>
                          </div>
                        </div>
                        <div className="flex  items-center mb-1 ml-4">
                          {/* <label
                            className="inline-block text-black text-md dark:text-white"
                            htmlFor="status"
                          >
                            Page-Size:
                          </label> */}

                          <select
                            id="show"
                            value={pageSize}
                            onChange={(e) =>
                              setPageSize(Number(e.target.value))
                            }
                            className="form-control"
                          >
                            <option selected={true}>Select page size</option>
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                          </select>
                        </div>

                        {/* <div className="flex justify-center items-center mb-1">
                          <label
                            className="inline-block mb-2 text-black dark:text-white"
                            htmlFor="email"
                          >
                            Search:
                          </label>
                          <input
                            type="email"
                            className="block w-full px-4 py-1 ml-2 text-base font-normal dark:bg-dark-card dark:border-secondary-800 bg-white border rounded outline-none focus:border-primary-500 focus:shadow"
                            id="email"
                          />
                        </div> */}
                      </div>
                      {!loading && !error && organizations.length > 0 ? (
                        <table className="min-w-full overflow-hidden divide-y divide-secondary-200 dark:divide-secondary-800 border text-sm dark:border-secondary-800">
                          <thead>
                            <tr className="bg-secondary-100 dark:bg-dark-bg">
                              <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                                Name
                              </th>

                              <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                                Org Type
                              </th>
                              <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                                Address
                              </th>
                              <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                                Status
                              </th>
                              <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                                Reg No
                              </th>
                              <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                                Join Date
                              </th>
                              <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-secondary-200 dark:divide-secondary-800">
                            {organizations.map((orgData) => {
                              return (
                                <tr>
                                  {/* <td className="px-6 py-4 whitespace-nowrap">
                                  <a href="employerProfile">
                                    <img
                                      className="w-10 h-10 mr-3 text-primary-400 bg-primary-500/10 rounded-xl"
                                      src="/logo-test.png"
                                      style={{ objectFit: "cover" }}
                                      alt="profile"
                                    />
                                  </a>
                                </td> */}

                                  <td className="px-6 py-4 whitespace-nowrap text-black dark:text-black">
                                    {orgData.name}
                                  </td>

                                  <td className="px-6 py-4 whitespace-nowrap text-black dark:text-black">
                                    {orgData.organizationTypeName}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-black dark:text-black">
                                    {orgData.address}
                                  </td>

                                  <td className="px-6 py-4">
                                    <span
                                      className={`
                                    ${
                                      orgData.statusDisplay == "Active"
                                        ? "bg-success-500"
                                        : ""
                                    }
                                    ${
                                      orgData.statusDisplay == "Pending"
                                        ? "bg-warning-500"
                                        : ""
                                    }
                                    ${
                                      orgData.statusDisplay == "Suspended"
                                        ? "bg-danger-500"
                                        : ""
                                    }
                                    inline-block whitespace-nowrap px-2 py-1 text-xs text-center font-bold leading-none text-white rounded`}
                                    >
                                      {orgData.statusDisplay}
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-black dark:text-black">
                                    {orgData.registrationNumber}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-black dark:text-black">
                                    {orgData.dateCreated.slice(0, 10)}
                                  </td>
                                  <td className="px-6 py-4">
                                    <div className="flex items-center list-user-action">
                                      {orgData.statusDisplay === "Pending" && (
                                        <div>
                                          <button
                                            className="btn btn-success btn-icon btn-sm mr-1"
                                            type="button"
                                            onClick={() =>
                                              openApproveModal(
                                                orgData.organizationId
                                              )
                                            }
                                            data-tp-toggle="tooltip"
                                            data-tp-placement="top"
                                            data-tp-title="Add"
                                          >
                                            <span className="btn-inner">
                                              <Check />
                                            </span>
                                          </button>

                                          <button
                                            className="btn btn-danger btn-icon btn-sm mr-1"
                                            type="button"
                                            data-tp-toggle="tooltip"
                                            data-tp-placement="top"
                                            data-tp-title="Delete"
                                            onClick={() =>
                                              openRejectModal(
                                                orgData.organizationId
                                              )
                                            }
                                          >
                                            <span className="btn-inner">
                                              <X />
                                            </span>
                                          </button>
                                        </div>
                                      )}
                                      {orgData.statusDisplay === "Active" && (
                                        <button
                                          className="btn btn-warning btn-icon btn-sm mr-1"
                                          type="button"
                                          data-tp-toggle="tooltip"
                                          data-tp-placement="top"
                                          data-tp-title="Suspend"
                                          onClick={() =>
                                            openSuspendModal(
                                              orgData.organizationId
                                            )
                                          }
                                        >
                                          <span className="btn-inner">
                                            <AlertCircle />
                                          </span>
                                        </button>
                                      )}

                                      {orgData.statusDisplay ===
                                        "Suspended" && (
                                        <button
                                          className="btn btn-success btn-icon btn-sm mr-1"
                                          type="button"
                                          onClick={() =>
                                            openApproveModal(
                                              orgData.organizationId
                                            )
                                          }
                                          data-tp-toggle="tooltip"
                                          data-tp-placement="top"
                                          data-tp-title="Add"
                                        >
                                          <span className="btn-inner">
                                            <Check />
                                          </span>
                                        </button>
                                      )}
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      ) : (
                        <div className="text-center text-black dark:text-white mt-10 mb-10">
                          No organizations found.
                        </div>
                      )}
                      <div className="border dark:border-secondary-800">
                        <div className="flex flex-wrap justify-between my-6 mx-5">
                          <div className="flex justify-center items-center mb-1">
                            <p className="text-black">
                              Showing {start} to {end} of {totalCount} entries
                            </p>
                          </div>

                          <div className="inline-flex flex-wrap">
                            <button
                              disabled={page === 1}
                              onClick={() => setPage(page - 1)}
                              className="border-t border-b border-l px-2 py-1 rounded-l disabled:opacity-50"
                            >
                              Previous
                            </button>

                            {[...Array(totalPages)].map((_, i) => (
                              <button
                                key={i}
                                onClick={() => setPage(i + 1)}
                                className={`border px-4 py-1 ${
                                  page === i + 1
                                    ? "bg-primary-500 text-white"
                                    : "text-primary-500"
                                }`}
                              >
                                {i + 1}
                              </button>
                            ))}

                            <button
                              disabled={page === totalPages}
                              onClick={() => setPage(page + 1)}
                              className="border-t border-b border-r px-2 py-1 rounded-r disabled:opacity-50"
                            >
                              Next
                            </button>
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
    </div>
  );
}

export default Employers;
