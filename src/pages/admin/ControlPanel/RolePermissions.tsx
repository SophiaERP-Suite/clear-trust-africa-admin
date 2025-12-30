import { Tag, Check, Trash2Icon } from "lucide-react";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { getAllRoles } from "../../../api/roleApi";
import type { RolesDto } from "../../../types/roles";
import { getAllPermissions } from "../../../api/permissionApi";
import type { PermissionsDto } from "../../../types/permissions";
import {
  createRolePermission,
  deleteRolePermission,
  getAllRolePermissions,
} from "../../../api/rolePermissionApi";
import type { RolePermissionsDto } from "../../../types/rolePermissions";
import Modal from "../../utils/modal";

type ModalType = "add" | "edit" | "delete" | null;

function PermissionsAssign() {
  const [rolePermissions, setRolePermissions] = useState<RolePermissionsDto[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [roles, setRoles] = useState<RolesDto[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [selectedPermissionId, setSelectedPermissionId] = useState<
    number | null
  >(null);
  const [selectedRolePermissionId, setSelectedRolePermissionId] = useState<
    number | null
  >(null);
  const [selectedRoleId, setSelectedRoleId] = useState<number | null>(null);
  const [permissions, setPermissions] = useState<PermissionsDto[]>([]);

  useEffect(() => {
    fetchRoles();
    fetchPermissions();
    fetchRolePermissions();
  }, []);

  const fetchRoles = async () => {
    try {
      setLoading(true);
      const data = await getAllRoles();
      setRoles(data);
      // console.log(data);
    } catch (err: any) {
      console.error(err);
      setError("Failed to fetch Roles");
    } finally {
      setLoading(false);
    }
  };

  const fetchPermissions = async () => {
    try {
      setLoading(true);
      const data = await getAllPermissions();
      setPermissions(data);
      // console.log(data);
    } catch (err: any) {
      console.error(err);
      setError("Failed to fetch Permissions");
    } finally {
      setLoading(false);
    }
  };

  const fetchRolePermissions = async () => {
    try {
      setLoading(true);
      const data = await getAllRolePermissions();
      setRolePermissions(data);
      console.log(data);
    } catch (err: any) {
      console.error(err);
      setError("Failed to fetch Assigned Permissions");
    } finally {
      setLoading(false);
    }
  };

  // Toast messages
  const notifySuccess = () => toast.success("Action successful");
  const notifyError = () => toast.error("Action Failed");
  const notifyFailed = () =>
    toast.error("Please select both role and permission");

  const openDeleteModal = (rolePermissionId: number) => {
    setSelectedRolePermissionId(rolePermissionId);
    setModalType("delete");
  };

  // const openEditModal = (PermissionId: number) => {
  //   setSelectedPermissionId(PermissionId);
  //   setModalType("edit");
  // };

  const closeModal = () => {
    setModalType(null);
    setSelectedRolePermissionId(null);
  };

  const handlePermissionAssignment = async () => {
    if (
      selectedRoleId == null ||
      selectedPermissionId == null ||
      !selectedRoleId ||
      !selectedPermissionId
    ) {
      notifyFailed();
      return;
    }

    try {
      setLoading(true);
      const payload = {
        RoleId: selectedRoleId,
        PermissionId: selectedPermissionId,
      };
      await createRolePermission(payload);
      notifySuccess();
      fetchRolePermissions();
      fetchRoles();
      fetchPermissions();
    } catch (err: any) {
      notifyError();
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteRolePermission = async () => {
    try {
      setLoading(true);
      if (!selectedRolePermissionId) return;
      const rolePermissionId = selectedRolePermissionId;
      await deleteRolePermission(rolePermissionId);
      notifySuccess();
      closeModal();
      fetchRoles();
      fetchPermissions();
      fetchRolePermissions();
    } catch (err: any) {
      notifyError();
    } finally {
      setLoading(false);
    }
  };

  // const handleUpdateRole = async (roleInput?: string) => {
  //   try {
  //     setLoading(true);
  //     if (!selectedRoleId) return;
  //     const roleId = selectedRoleId;
  //     const payload = {
  //       name: roleInput || "No role input provided",
  //     };
  //     await updateRole(roleId, payload);
  //     notifySuccess();
  //     closeModal();
  //     fetchRoles();
  //   } catch (err: any) {
  //     notifyError();
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleDeleteRole = async () => {
  //   try {
  //     setLoading(true);
  //     if (!selectedRoleId) return;
  //     const roleId = selectedRoleId;
  //     await deleteRole(roleId);
  //     notifySuccess();
  //     closeModal();
  //     fetchRoles();
  //   } catch (err: any) {
  //     notifyError();
  //   } finally {
  //     setLoading(false);
  //   }
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
                <Tag /> Assign Permissions
              </h4>
            </div>
            <div className="py-2 px-3">
              <div className="overflow-x-auto">
                <div className=" overflow-x-auto p-5">
                  <ToastContainer />
                  <Modal
                    isOpen={modalType === "delete"}
                    title="Delete Role"
                    message="Are you sure you want to delete this role? This action cannot be undone."
                    confirmText="Delete Role"
                    confirmColor="red"
                    loading={loading}
                    headerIcon={<Tag />}
                    butonIcon={<Trash2Icon />}
                    onConfirm={handleDeleteRolePermission}
                    onCancel={closeModal}
                  />
                  <h3 className="text-xl font-semibold mb-4"></h3>

                  {/* <h3 className="text-lg font-semibold mb-4">Assign Permissions</h3> */}

                  {/* Role Selection */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mb-6 ">
                      <label className="block mb-2 text-black">
                        Select Role
                      </label>
                      <select
                        value={selectedRoleId || ""}
                        onChange={(e) =>
                          setSelectedRoleId(Number(e.target.value))
                        }
                        className="form-control text-black text-sm"
                      >
                        <option value="">Select Roles</option>
                        {roles.map((role) => (
                          <option key={role.roleId} value={role.roleId}>
                            {role.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-6">
                      <label className="block mb-2 text-black">
                        Select Permission
                      </label>
                      <select
                        value={selectedPermissionId || ""}
                        onChange={(e) =>
                          setSelectedPermissionId(Number(e.target.value))
                        }
                        className="form-control text-black text-sm"
                      >
                        <option value="">Select Permission</option>
                        {permissions.map((permission) => (
                          <option
                            key={permission.permissionId}
                            value={permission.permissionId}
                          >
                            {permission.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-end mt-5">
                    <button
                      className="btn btn-success"
                      disabled={loading}
                      onClick={() => handlePermissionAssignment()}
                    >
                      {loading ? (
                        "Assigning..."
                      ) : (
                        <span>
                          <Check /> Assign Permission
                        </span>
                      )}
                    </button>
                  </div>

                  <section>
                    {loading && (
                      <div
                        className="loading flex items-center justify-center gap-3 text-center mt-8"
                        aria-label="Loading Roles"
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
                    )}

                    {error && (
                      <div className="error flex justify-center text-center mt-[25%]">
                        Error: {error}
                      </div>
                    )}
                    <h3 className="text-lg font-semibold mb-4 mt-6">
                      Assigned Permissions
                    </h3>
                    {!loading && !error && rolePermissions.length === 0 && (
                      <div className="no-roles flex justify-center text-center mt-[25%]">
                        No Assignments found.
                      </div>
                    )}

                    {!loading && !error && rolePermissions.length > 0 && (
                      <ul className="space-y-3 mt-6">
                        {rolePermissions.map((rolePermission) => (
                          <li
                            key={rolePermission.rolePermissionId}
                            className="flex text-sm items-center justify-between bg-gray-50 p-3 rounded-lg"
                          >
                            <span>
                              <b>Role:</b> {rolePermission.roleName} <br />{" "}
                              <b>Permission:</b> {rolePermission.permissionName}
                            </span>
                            <div>
                              <button
                                className="btn btn-danger btn-icon btn-sm mr-1"
                                type="button"
                                onClick={() =>
                                  openDeleteModal(
                                    rolePermission.rolePermissionId
                                  )
                                }
                              >
                                <Trash2Icon size={16} />
                              </button>
                              {/* <button
                    className="btn btn-warning btn-icon btn-sm mr-1"
                    type="button"
                    onClick={() =>
                      // openEditModal(rolePermission.RolePermissionId)
                      null
                    }
                  >
                    <Pen size={16} />
                  </button> */}
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PermissionsAssign;
