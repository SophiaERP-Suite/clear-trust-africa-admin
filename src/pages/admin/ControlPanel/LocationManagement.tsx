import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
// import Modal from "../../utils/modal";
// import {
//   createRole,
//   deleteRole,
//   getAllLocationManagement,
//   updateRole,
// } from "../../../api/roleApi";
// import type { LocationManagementDto } from "../../../types/LocationManagement";
import { Plus, Shield } from "lucide-react";

// type ModalType = "add" | "edit" | "delete" | null;

function LocationManagement() {
  // const [loading, setLoading] = useState(true);
  // const [LocationManagement, setLocationManagement] = useState<LocationManagementDto[]>([]);
  // const [error, setError] = useState<string | null>(null);
  // const [modalType, setModalType] = useState<ModalType>(null);
  // const [selectedRoleId, setSelectedRoleId] = useState<number | null>(null);
  // const [selectedRole, setSelectedRole] = useState<LocationManagementDto | null>(null);

  useEffect(() => {
    // fetchLocationManagement();
  }, []);

  // const fetchLocationManagement = async () => {
  //   try {
  //     setLoading(true);
  //     const data = await getAllLocationManagement();
  //     setLocationManagement(data);
  //   } catch (err: any) {
  //     console.error(err);
  //     setError("Failed to fetch LocationManagement");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // Toast messages
  // const notifySuccess = () => toast.success("Action successful");
  // const notifyError = () => toast.error("Action Failed");

  // Call modals
  // const openAddModal = () => {
  //   setSelectedRole(null);
  //   setModalType("add");
  // };

  // const openDeleteModal = (roleId: number) => {
  //   const role = LocationManagement.find((r) => r.roleId === roleId);
  //   setSelectedRoleId(roleId);
  //   setSelectedRole(role || null);
  //   setModalType("delete");
  // };

  // const openEditModal = (roleId: number) => {
  //   const role = LocationManagement.find((r) => r.roleId === roleId);
  //   setSelectedRoleId(roleId);
  //   setSelectedRole(role || null);
  //   setModalType("edit");
  // };

  // const closeModal = () => {
  //   setModalType(null);
  //   setSelectedRoleId(null);
  //   setSelectedRole(null);
  // };

  // const handleNewRole = async (roleInput?: string) => {
  //   // try {
  //   //   setLoading(true);
  //   //   if (!roleInput) {
  //   //     toast.error("Please fill all fields");
  //   //     setLoading(false);
  //   //     return;
  //   //   }
  //   //   const payload = {
  //   //     name: roleInput || "No role input provided",
  //   //   };
  //   //   await createRole(payload);
  //   //   notifySuccess();
  //   //   closeModal();
  //   //   fetchLocationManagement();
  //   // } catch (err: any) {
  //   //   notifyError();
  //   // } finally {
  //   //   setLoading(false);
  //   // }
  // };

  // const handleUpdateRole = async (roleInput?: string) => {
  //   // try {
  //   //   setLoading(true);
  //   //   if (!selectedRoleId) return;
  //   //   const roleId = selectedRoleId;
  //   //   if (!roleInput) {
  //   //     toast.error("Please fill all fields");
  //   //     setLoading(false);
  //   //     return;
  //   //   }
  //   //   const payload = {
  //   //     name: roleInput || "No role input provided",
  //   //   };
  //   //   await updateRole(roleId, payload);
  //   //   notifySuccess();
  //   //   closeModal();
  //   //   fetchLocationManagement();
  //   // } catch (err: any) {
  //   //   notifyError();
  //   // } finally {
  //   //   setLoading(false);
  //   // }
  // };

  // const handleDeleteRole = async () => {
  //   // try {
  //   //   setLoading(true);
  //   //   if (!selectedRoleId) return;
  //   //   const roleId = selectedRoleId;
  //   //   await deleteRole(roleId);
  //   //   notifySuccess();
  //   //   closeModal();
  //   //   fetchLocationManagement();
  //   // } catch (err: any) {
  //   //   notifyError();
  //   // } finally {
  //   //   setLoading(false);
  //   // }
  // };

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
                <Shield /> Location Management
              </h4>
            </div>
            <div className="py-2 px-3">
              <div className="overflow-x-auto">
                <div className=" overflow-x-auto p-5">
                  <ToastContainer />
                  {/* <Modal
                    isOpen={modalType === "add"}
                    title="Add New Role"
                    message=""
                    confirmText="Add Role"
                    confirmColor="green"
                    loading={loading}
                    inputLabel="New Role Name"
                    inputPlaceholder="Enter Role Name..."
                    headerIcon={<Shield />}
                    butonIcon={<Check />}
                    onConfirm={handleNewRole}
                    onCancel={closeModal}
                  />

                  <Modal
                    isOpen={modalType === "delete"}
                    title="Delete Role"
                    message="Are you sure you want to delete this role? This action cannot be undone."
                    confirmText="Delete Role"
                    confirmColor="red"
                    loading={loading}
                    headerIcon={<Shield />}
                    butonIcon={<Trash2Icon />}
                    onConfirm={handleDeleteRole}
                    onCancel={closeModal}
                  /> */}

                  {/* <Modal
                    isOpen={modalType === "edit"}
                    title="Edit Role"
                    message=""
                    confirmText="Confirm Changes"
                    confirmColor="yellow"
                    loading={loading}
                    inputLabel="New Role Name"
                    inputPlaceholder="Enter Role Name..."
                    defaultInputValue={selectedRole?.name || ""}
                    headerIcon={<Shield />}
                    butonIcon={<Pen />}
                    onConfirm={handleUpdateRole}
                    onCancel={closeModal}
                  /> */}
                  <div className="flex justify-between mb-2">
                    {" "}
                    <h4 className="text-sm font-bold">Country</h4>
                    <div className="flex justify-center gap-2 mb-4">
                      <button
                        className="btn btn-success"
                        // onClick={() => openAddModal()}
                      >
                        <Plus /> Add Country
                      </button>
                      {/* <NavLink className="btn btn-warning" onClick={() => openAddModal()}>
            <Tag /> Assign Permission{" "}
          </NavLink> */}
                    </div>
                  </div>
                  {/* {loading && (
                    <div
                      className="loading flex items-center justify-center gap-3 text-center mt-8"
                      aria-label="Loading LocationManagement"
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
                      <span className="text-gray-700">Please Wait... </span>
                    </div>
                  )} */}

                  <div className="flex justify-between mb-2">
                    {" "}
                    <h4 className="text-sm font-bold">State</h4>
                  </div>
                  <div className="flex justify-between align-items-end">
                    <div className="w-100">
                      <label>Select a country</label>
                      <select className="form-control">
                        <option>Select Country</option>
                      </select>
                    </div>
                    <div className="flex justify-center gap-2">
                      <button
                        className="btn btn-success"
                        // onClick={() => openAddModal()}
                      >
                        <Plus /> Add State
                      </button>
                    </div>
                  </div>
                  {/* {loading && (
                    <div
                      className="loading flex items-center justify-center gap-3 text-center mt-8"
                      aria-label="Loading LocationManagement"
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
                      <span className="text-gray-700">Please Wait... </span>
                    </div>
                  )} */}

                  <div className="flex justify-between mb-2">
                    <h4 className="text-sm font-bold">City</h4>
                  </div>
                  <div className="flex justify-between align-items-end gap-2">
                    <div className="w-100">
                      <label>Select Country</label>
                      <select className="form-control">
                        <option>Select a country</option>
                      </select>
                    </div>
                    <div className="w-100">
                      <label>Select State</label>
                      <select className="form-control">
                        <option>Select a country</option>
                      </select>
                    </div>
                    <div className="flex justify-center gap-2 mb-4">
                      <button
                        className="btn btn-success"
                        // onClick={() => openAddModal()}
                      >
                        <Plus /> Add State
                      </button>
                    </div>
                  </div>
                  {/* {loading && (
                    <div
                      className="loading flex items-center justify-center gap-3 text-center mt-8"
                      aria-label="Loading LocationManagement"
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
                      <span className="text-gray-700">Please Wait... </span>
                    </div>
                  )} */}

                 {/* {error && (
                    <div className="error flex justify-center text-center mt-[25%]">
                      Error: {error}
                    </div>
                  )}
                  {!loading && !error && LocationManagement.length === 0 && (
                    <div className="no-LocationManagement flex justify-center text-center mt-[25%]">
                      No Data found.
                    </div>
                  )} */}
                  {/* {!loading && !error && LocationManagement.length > 0 && (
                    <ul className="space-y-3">
                      {LocationManagement.map((role) => (
                        <li
                          key={role.roleId}
                          className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                        >
                          <span>{role.name}</span>
                          <div>
                            <button
                              className="btn btn-danger btn-icon btn-sm mr-1"
                              type="button"
                              onClick={() => openDeleteModal(role.roleId)}
                            >
                              {" "}
                              <span className="btn-inner">
                                <Trash style={{ scale: "140%" }} />
                              </span>
                            </button>
                            <button
                              className="btn btn-warning btn-icon btn-sm mr-1"
                              type="button"
                              onClick={() => openEditModal(role.roleId)}
                            >
                              <Pen />
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationManagement;
