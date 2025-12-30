import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Modal from "../../utils/modal";
import type { OrganizationTypeDto } from "../../../types/organizationType";
import { Building, CheckCheck, Pen, Plus, Trash, X } from "lucide-react";
import {
  createOrganizationType,
  deleteOrganizationType,
  getAllOrganizationTypes,
  updateOrganizationType,
} from "../../../api/orgTypeApi";

type ModalType = "add" | "edit" | "delete" | null;

function OrganizationTypes() {
  const [loading, setLoading] = useState(true);
  const [OrganizationTypes, setOrganizationTypes] = useState<
    OrganizationTypeDto[]
  >([]);
  const [error, setError] = useState<string | null>(null);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [selectedOrganizationTypeId, setSelectedOrganizationTypeId] = useState<
    number | null
  >(null);
  const [selectedOrganizationType, setSelectedOrganizationType] =
    useState<OrganizationTypeDto | null>(null);

  useEffect(() => {
    fetchOrganizationTypes();
  }, []);

  const fetchOrganizationTypes = async () => {
    try {
      setLoading(true);
      const data = await getAllOrganizationTypes();
      setOrganizationTypes(data);
      console.log(data);
    } catch (err: any) {
      console.error(err);
      setError("Failed to fetch OrganizationTypes");
    } finally {
      setLoading(false);
    }
  };

  // Toast messages
  const notifySuccess = () => toast.success("Action successful");
  const notifyError = () => toast.error("Action Failed");

  // Call modals
  const openAddModal = () => {
    setModalType("add");
    setSelectedOrganizationType(null);
  };

  const openDeleteModal = (OrganizationTypeId: number) => {
    const organizationType = OrganizationTypes.find(
      (r) => r.organizationTypeId === OrganizationTypeId
    );
    setSelectedOrganizationTypeId(OrganizationTypeId);
    setSelectedOrganizationType(organizationType || null);
    setModalType("delete");
  };

  const openEditModal = (OrganizationTypeId: number) => {
    const organizationType = OrganizationTypes.find(
      (r) => r.organizationTypeId === OrganizationTypeId
    );
    setSelectedOrganizationTypeId(OrganizationTypeId);
    setSelectedOrganizationType(organizationType || null);
    setModalType("edit");
  };

  const closeModal = () => {
    setModalType(null);
    setSelectedOrganizationTypeId(null);
    setSelectedOrganizationType(null);
  };

  const handleNewOrganizationType = async (OrganizationTypeInput?: string) => {
    try {
      setLoading(true);
      if (!OrganizationTypeInput) {
        toast.error("Please fill all fields");
        setLoading(false);
        return;
      }

      const payload = {
        name: OrganizationTypeInput || "No OrganizationType input provided",
      };
      await createOrganizationType(payload);
      notifySuccess();
      closeModal();
      fetchOrganizationTypes();
    } catch (err: any) {
      notifyError();
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateOrganizationType = async (
    OrganizationTypeInput?: string
  ) => {
    try {
      setLoading(true);
      if (!OrganizationTypeInput) {
        toast.error("Please fill all fields");
        setLoading(false);
        return;
      }
      if (!selectedOrganizationTypeId) return;
      const OrganizationTypeId = selectedOrganizationTypeId;
      const payload = {
        name: OrganizationTypeInput || "No OrganizationType input provided",
      };
      await updateOrganizationType(OrganizationTypeId, payload);
      notifySuccess();
      closeModal();
      fetchOrganizationTypes();
    } catch (err: any) {
      notifyError();
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteOrganizationType = async () => {
    try {
      setLoading(true);
      if (!selectedOrganizationTypeId) return;
      const OrganizationTypeId = selectedOrganizationTypeId;
      await deleteOrganizationType(OrganizationTypeId);
      notifySuccess();
      closeModal();
      fetchOrganizationTypes();
    } catch (err: any) {
      notifyError();
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
                <Building /> Organization Type Settings
              </h4>
            </div>
            <div className="py-2 px-3">
              <div className="overflow-x-auto">
                <div className=" overflow-x-auto p-5">
                  <ToastContainer />
                  <Modal
                    isOpen={modalType === "add"}
                    title="Add New OrganizationType"
                    message=""
                    confirmText="Add OrganizationType"
                    confirmColor="green"
                    loading={loading}
                    headerIcon={<Building />}
                    butonIcon={<CheckCheck />}
                    inputLabel="New OrganizationType Name"
                    inputPlaceholder="Enter OrganizationType Name..."
                    onConfirm={handleNewOrganizationType}
                    onCancel={closeModal}
                  />

                  <Modal
                    isOpen={modalType === "delete"}
                    title="Delete OrganizationType"
                    message="Are you sure you want to delete this OrganizationType? This action cannot be undone."
                    confirmText="Delete OrganizationType"
                    confirmColor="red"
                    loading={loading}
                    headerIcon={<Building />}
                    butonIcon={<Trash />}
                    onConfirm={handleDeleteOrganizationType}
                    onCancel={closeModal}
                  />

                  <Modal
                    isOpen={modalType === "edit"}
                    title="Edit OrganizationType"
                    message=""
                    confirmText="Confirm Changes"
                    confirmColor="yellow"
                    loading={loading}
                    inputLabel="New OrganizationType Name"
                    inputPlaceholder="Enter OrganizationType Name..."
                    headerIcon={<Building />}
                    butonIcon={<Pen />}
                    defaultInputValue={selectedOrganizationType?.name || ""}
                    onConfirm={handleUpdateOrganizationType}
                    onCancel={closeModal}
                  />

                  <div className="flex justify-end mb-2">
                    <div className="flex justify-center gap-2 mb-4">
                      <button
                        className="btn btn-success"
                        onClick={() => openAddModal()}
                      >
                        <Plus /> Add New OrganizationType
                      </button>
                    </div>
                  </div>
                  {loading && (
                    <div
                      className="loading flex items-center justify-center gap-3 text-center mt-8"
                      aria-label="Loading OrganizationTypes"
                      // OrganizationType="status"
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
                  {!loading && !error && OrganizationTypes.length === 0 && (
                    <div className="no-OrganizationTypes flex justify-center text-center mt-[25%]">
                      No OrganizationTypes found.
                    </div>
                  )}
                  {!loading && !error && OrganizationTypes.length > 0 && (
                    <ul className="space-y-3">
                      {OrganizationTypes.map((OrganizationType) => (
                        <li
                          key={OrganizationType.organizationTypeId}
                          className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                        >
                          <span>{OrganizationType.name}</span>
                          <div>
                            <button
                              className="btn btn-danger btn-icon btn-sm mr-1"
                              type="button"
                              onClick={() =>
                                openDeleteModal(
                                  OrganizationType.organizationTypeId
                                )
                              }
                            >
                              {" "}
                              <span className="btn-inner">
                                <Trash style={{ scale: "140%" }} />
                              </span>
                            </button>
                            <button
                              className="btn btn-warning btn-icon btn-sm mr-1"
                              type="button"
                              onClick={() =>
                                openEditModal(
                                  OrganizationType.organizationTypeId
                                )
                              }
                            >
                              <Pen />
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
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

export default OrganizationTypes;
