import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import {
  getAllNotificationSettings,
  toggleNotificationSetting,
} from "../../../api/notificationSettingsApi";
import { Bell } from "lucide-react";
import Loading from "../../utils/Loading";

function NotificationSettings() {
  const [settings, setSettings] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [togglingId, setTogglingId] = useState<number | null>(null);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const data = await getAllNotificationSettings();
      setSettings(data);
      console.log("Loaded settings:", data);
    } catch {
      toast.error("Failed to load notification settings");
    }
  };

  const handleToggle = async (item: any) => {
    setTogglingId(item.notificationSettingId);

    const updatedSettings = settings.map((setting) =>
      setting.notificationSettingId === item.notificationSettingId
        ? { ...setting, isEnabled: !item.isEnabled }
        : setting
    );
    setSettings(updatedSettings);

    try {
      await toggleNotificationSetting(item.notificationEventId, {
        notificationChannelId: item.notificationChannelId,
        isEnabled: !item.isEnabled,
      });
      loadSettings();
      toast.success("Notification setting updated");
    } catch (error: any) {
      const revertedSettings = settings.map((setting) =>
        setting.notificationSettingId === item.notificationSettingId
          ? { ...setting, isEnabled: item.isEnabled } // Revert to original
          : setting
      );
      setSettings(revertedSettings);

      console.error("Toggle failed:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Failed to update setting");
    } finally {
      setTogglingId(null);
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
                <Bell className="h-6 w-6" /> Notification Settings
              </h4>
            </div>
            <div className="py-2 px-3">
              <div className="overflow-x-auto">
                <div className=" overflow-x-auto p-5">
                  <ToastContainer />
                  {loading ? (
                    <Loading />
                  ) : settings.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      No notification settings found.
                    </div>
                  ) : (
                    <div>
                      {settings.map((item) => (
                        <div
                          key={item.notificationSettingId}
                          className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-b"
                        >
                          <div className="flex-1">
                            <p className="font-semibold text-gray-900">
                              {item.notificationEventName}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                              {item.notificationChannelName}
                            </p>
                          </div>

                          {/* Toggle Switch with loading state */}
                          <button
                            type="button"
                            role="switch"
                            aria-checked={item.isEnabled}
                            onClick={() => handleToggle(item)}
                            disabled={togglingId === item.notificationSettingId}
                            className={`
                  relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 
                  transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                  disabled:cursor-not-allowed disabled:opacity-50
                  ${item.isEnabled ? "bg-green-500" : "bg-gray-200"}
                `}
                          >
                            {togglingId === item.notificationSettingId ? (
                              <span className="absolute inset-0 flex items-center justify-center">
                                <div className="h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent" />
                              </span>
                            ) : (
                              <span
                                className={`
                      pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg 
                      ring-0 transition duration-200 ease-in-out
                      ${item.isEnabled ? "translate-x-5" : "translate-x-0"}
                    `}
                              />
                            )}
                          </button>
                        </div>
                      ))}
                    </div>
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

export default NotificationSettings;
