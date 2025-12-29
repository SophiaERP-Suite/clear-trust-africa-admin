import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Modal from "../../utils/modal";
import Loading from "../../utils/Loading";
import { Bell, Shield, Check, Pen, Trash2Icon } from "lucide-react";
import {
  createRole,
  deleteRole,
  getAllRoles,
  updateRole,
} from "../../../api/roleApi";
import type { RolesDto } from "../../../types/roles";

// Modal types
type ModalType = "add" | "edit" | "delete" | null;

// Notification types
interface NotificationChannel {
  id: number;
  name: string;
}

interface NotificationSettingDto {
  eventId: number;
  eventName: string;
  channels: { [channelName: string]: boolean };
}

function NotificationSettings() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const channels: NotificationChannel[] = [
    { id: 1, name: "Email" },
    { id: 2, name: "InApp" },
    { id: 3, name: "SMS" },
    // { id: 4, name: "Push" },
  ];

  // Example events, replace with API fetch if needed
  const [settings, setSettings] = useState<NotificationSettingDto[]>([
    {
      eventId: 1,
      eventName: "On Registration",
      channels: { Email: true, InApp: true, SMS: false, Push: false },
    },
    {
      eventId: 2,
      eventName: "On DBS Check Approval",
      channels: { Email: true, InApp: true, SMS: true, Push: false },
    },
  ]);

  useEffect(() => {
    // fetchRoles();
  }, []);

  // const fetchRoles = async () => {
  //   try {
  //     setLoading(true);
  //     const data = await getAllRoles();
  //     setRoles(data);
  //   } catch (err: any) {
  //     console.error(err);
  //     setError("Failed to fetch Roles");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // Toast
  const notifySuccess = () => toast.success("Action successful");
  const notifyError = () => toast.error("Action Failed");

  // const openEditModal = (roleId: number) => {
  //   setSelectedRoleId(roleId);
  //   setSelectedRole(roles.find((r) => r.roleId === roleId) || null);
  //   setModalType("edit");
  // };

  // const handleUpdateRole = async (roleInput?: string) => {
  //   if (!selectedRoleId || !roleInput)
  //     return toast.error("Please fill all fields");
  //   try {
  //     setLoading(true);
  //     await updateRole(selectedRoleId, { name: roleInput });
  //     notifySuccess();
  //     closeModal();
  //     fetchRoles();
  //   } catch {
  //     notifyError();
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // Fixed toggle handler
  const handleToggle = (eventId: number, channelName: string) => {
    setSettings((prevSettings) => {
      return prevSettings.map((setting) => {
        if (setting.eventId === eventId) {
          const currentValue = setting.channels[channelName] || false;
          const updatedChannels = {
            ...setting.channels,
            [channelName]: !currentValue,
          };

          console.log(
            `Toggled: Event ${eventId}, Channel ${channelName} from ${currentValue} to ${!currentValue}`
          );

          return {
            ...setting,
            channels: updatedChannels,
          };
        }
        return setting;
      });
    });
  };

  return (
    <div>
      {/* <ToastContainer /> */}

      <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
        <Bell /> Notification Settings
      </h3>

      {/* Notification settings table */}
      <div className="overflow-x-auto w-full">
        <table className="min-w-full divide-y divide-gray-200 bg-white rounded-lg shadow">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left font-medium">Event</th>
              {channels.map((channel) => (
                <th
                  key={channel.id}
                  className="px-6 py-3 text-left font-medium"
                >
                  {channel.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {settings.map((setting) => (
              <tr
                key={setting.eventId}
                className="hover:bg-gray-50 text-sm transition"
              >
                <td className="px-6 py-4 font-medium">{setting.eventName}</td>
                {channels.map((channel) => (
                  <td key={channel.id} className="px-6 py-4">
                    <div className="flex items-center">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={setting.channels[channel.name] || false}
                          onChange={() =>
                            handleToggle(setting.eventId, channel.name)
                          }
                        />
                        {/* Background */}
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:bg-blue-600 transition-colors duration-300"></div>
                        {/* Knob */}
                        <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-300 peer-checked:translate-x-5"></div>
                      </label>
                      {/* On/Off text */}
                      <span
                        className={`ml-3 text-sm font-medium ${
                          setting.channels[channel.name]
                            ? "text-blue-600"
                            : "text-gray-900"
                        }`}
                      >
                        {setting.channels[channel.name] ? "On" : "Off"}
                      </span>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* {loading && <Loading />}
      {error && (
        <div className="error flex justify-center text-center mt-[25%]">
          Error: {error}
        </div>
      )}
      {!loading && !error && roles.length === 0 && (
        <div className="no-roles flex justify-center text-center mt-[25%]">
          No Roles found.
        </div>
      )} */}
    </div>
  );
}

export default NotificationSettings;
