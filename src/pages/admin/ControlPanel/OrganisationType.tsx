import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Modal from "../../utils/modal";
import type { OrganisationTypeDto } from "../../../types/controlPanel/organisationType";
import { Building, CheckCheck, Pen, Plus, Trash } from "lucide-react";
import {
  createOrganisationType,
  deleteOrganisationType,
  getAllOrganisationTypes,
  updateOrganisationType,
} from "../../../api/orgTypeApi";

type ModalType = "add" | "edit" | "delete" | null;

function OrganisationTypes() {
  const [loading, setLoading] = useState(true);
  const [OrganisationTypes, setOrganisationTypes] = useState<
    OrganisationTypeDto[]
  >([]);
  const [error, setError] = useState<string | null>(null);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [selectedOrganisationTypeId, setSelectedOrganisationTypeId] = useState<
    number | null
  >(null);
  const [selectedOrganisationType, setSelectedOrganisationType] =
    useState<OrganisationTypeDto | null>(null);

  useEffect(() => {
    fetchOrganisationTypes();
  }, []);

  const fetchOrganisationTypes = async () => {
    try {
      setLoading(true);
      const data = await getAllOrganisationTypes();
      setOrganisationTypes(data);
      console.log(data);
    } catch (err: any) {
      console.error(err);
      setError("Failed to fetch OrganisationTypes");
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
    setSelectedOrganisationType(null);
  };

  const openDeleteModal = (OrganisationTypeId: number) => {
    const organisationType = OrganisationTypes.find(
      (r) => r.organisationTypeId === OrganisationTypeId
    );
    setSelectedOrganisationTypeId(OrganisationTypeId);
    setSelectedOrganisationType(organisationType || null);
    setModalType("delete");
  };

  const openEditModal = (OrganisationTypeId: number) => {
    const organisationType = OrganisationTypes.find(
      (r) => r.organisationTypeId === OrganisationTypeId
    );
    setSelectedOrganisationTypeId(OrganisationTypeId);
    setSelectedOrganisationType(organisationType || null);
    setModalType("edit");
  };

  const closeModal = () => {
    setModalType(null);
    setSelectedOrganisationTypeId(null);
    setSelectedOrganisationType(null);
  };

  const handleNewOrganisationType = async (OrganisationTypeInput?: string) => {
    try {
      setLoading(true);
      if (!OrganisationTypeInput) {
        toast.error("Please fill all fields");
        setLoading(false);
        return;
      }

      const payload = {
        name: OrganisationTypeInput || "No OrganisationType input provided",
      };
      await createOrganisationType(payload);
      notifySuccess();
      closeModal();
      fetchOrganisationTypes();
    } catch (err: any) {
      notifyError();
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateOrganisationType = async (
    OrganisationTypeInput?: string
  ) => {
    try {
      setLoading(true);
      if (!OrganisationTypeInput) {
        toast.error("Please fill all fields");
        setLoading(false);
        return;
      }
      if (!selectedOrganisationTypeId) return;
      const OrganisationTypeId = selectedOrganisationTypeId;
      const payload = {
        name: OrganisationTypeInput || "No OrganisationType input provided",
      };
      await updateOrganisationType(OrganisationTypeId, payload);
      notifySuccess();
      closeModal();
      fetchOrganisationTypes();
    } catch (err: any) {
      notifyError();
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteOrganisationType = async () => {
    try {
      setLoading(true);
      if (!selectedOrganisationTypeId) return;
      const OrganisationTypeId = selectedOrganisationTypeId;
      await deleteOrganisationType(OrganisationTypeId);
      notifySuccess();
      closeModal();
      fetchOrganisationTypes();
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
                <Building /> Organisation Type Settings
              </h4>
            </div>
            <div className="py-2 px-3">
              <div className="overflow-x-auto">
                <div className=" overflow-x-auto p-5">
                  <ToastContainer />
                  <Modal
                    isOpen={modalType === "add"}
                    title="Add New OrganisationType"
                    message=""
                    confirmText="Add OrganisationType"
                    confirmColor="green"
                    loading={loading}
                    headerIcon={<Building />}
                    butonIcon={<CheckCheck />}
                    inputLabel="New OrganisationType Name"
                    inputPlaceholder="Enter OrganisationType Name..."
                    onConfirm={handleNewOrganisationType}
                    onCancel={closeModal}
                  />

                  <Modal
                    isOpen={modalType === "delete"}
                    title="Delete OrganisationType"
                    message="Are you sure you want to delete this OrganisationType? This action cannot be undone."
                    confirmText="Delete OrganisationType"
                    confirmColor="red"
                    loading={loading}
                    headerIcon={<Building />}
                    butonIcon={<Trash />}
                    onConfirm={handleDeleteOrganisationType}
                    onCancel={closeModal}
                  />

                  <Modal
                    isOpen={modalType === "edit"}
                    title="Edit OrganisationType"
                    message=""
                    confirmText="Confirm Changes"
                    confirmColor="yellow"
                    loading={loading}
                    inputLabel="New OrganisationType Name"
                    inputPlaceholder="Enter OrganisationType Name..."
                    headerIcon={<Building />}
                    butonIcon={<Pen />}
                    defaultInputValue={selectedOrganisationType?.name || ""}
                    onConfirm={handleUpdateOrganisationType}
                    onCancel={closeModal}
                  />

                  <div className="flex justify-end mb-2">
                    <div className="flex justify-center gap-2 mb-4">
                      <button
                        className="btn btn-success"
                        onClick={() => openAddModal()}
                      >
                        <Plus /> Add New OrganisationType
                      </button>
                    </div>
                  </div>
                  {loading && (
                    <div
                      className="loading flex items-center justify-center gap-3 text-center mt-8"
                      aria-label="Loading OrganisationTypes"
                      // OrganisationType="status"
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
                  {!loading && !error && OrganisationTypes.length === 0 && (
                    <div className="no-OrganisationTypes flex justify-center text-center mt-[25%]">
                      No OrganisationTypes found.
                    </div>
                  )}
                  {!loading && !error && OrganisationTypes.length > 0 && (
                    <ul className="space-y-3">
                      {OrganisationTypes.map((OrganisationType) => (
                        <li
                          key={OrganisationType.organisationTypeId}
                          className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                        >
                          <span>{OrganisationType.name}</span>
                          <div className={`${[1, 2, 3, 4].includes(OrganisationType.organisationTypeId) && 'hidden' }`}>
                            <button
                              className="btn btn-danger btn-icon btn-sm mr-1"
                              type="button"
                              onClick={() =>
                                openDeleteModal(
                                  OrganisationType.organisationTypeId
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
                                  OrganisationType.organisationTypeId
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

export default OrganisationTypes;
