import { useState } from "react";
import {
  Settings,
  LayoutDashboard,
  Bell,
  Shield,
  Activity,
  ChevronRight,
  Menu,
  X,
  Key,
  Tag,
  Building,
} from "lucide-react";

import Overview from "./Overview";
import Roles from "./Roles";
// import SysSettings from "./SysSettings";
import Permissions from "./Permissions";
import OrganizationType from "./OrganizationType";
import RolePermissions from "./RolePermissions";
import Notifications from "./NotificationSettings";
import NotificationSettings from "./NotificationSettings";

// Flatten the structure - no groups
const sidebarItems = [
  {
    id: "overview",
    label: "Overview",
    icon: <LayoutDashboard size={20} />,
    component: Overview,
  },
  {
    id: "roles",
    label: "Roles",
    icon: <Shield size={20} />,
    component: Roles,
  },
  {
    id: "permissions",
    label: "Permissions",
    icon: <Key size={20} />,
    component: Permissions,
  },
  {
    id: "permissionsAssign",
    label: "Assign Permissions",
    icon: <Tag size={20} />,
    component: RolePermissions,
  },
  {
    id: "organizationType",
    label: "Organization Type",
    icon: <Building size={20} />,
    component: OrganizationType,
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: <Bell size={20} />,
    component: NotificationSettings,
  },
  {
    id: "audit",
    label: "Audit Logs",
    icon: <Activity size={20} />,
    component: null,
  },
  // {
  //   id: "settings",
  //   label: "System Settings",
  //   icon: <Settings size={20} />,
  //   component: SysSettings,
  // },
];

export default function ControlPanel() {
  const [selectedSection, setSelectedSection] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const getCurrentComponent = () => {
    const item = sidebarItems.find((i) => i.id === selectedSection);
    if (item) {
      if (item.component) {
        const Component = item.component;
        return <Component />;
      }

      return (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            {item.label}
          </h3>
          <p className="text-black">This section is coming soon...</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div
      className="p-6 lg:p-8 footer-inner mx-auto main-container"
      x-bind:className="setting.page_layout"
    >
      {/* Header */}
      <div className="flex flex-wrap mb-6 justify-between gap-4">
        <div className="flex items-center gap-4 w-full">
          <div className="flex">
            <Settings className="text-[rgb(112_22_208/0.9)] mr-2" size={36} />
            <div>
              <h3 className="mb-0 text-black text-2xl font-semibold">
                Control Panel
              </h3>
              <p className="text-black text-sm flex items-center gap-1">
                Dashboard <ChevronRight size={14} /> Control Panel
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden p-3 mb-4 border-1 hover:bg-gray-100 rounded-sm transition-colors"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Main Layout */}
      <div className="flex gap-6 relative">
        {/* Sidebar - Desktop & Mobile */}
        <aside
          className={`
            w-64 bg-white rounded-sm text-black shadow-md p-4 h-fit
            lg:sticky lg:top-6
            transition-all duration-300
            ${
              sidebarOpen
                ? "fixed inset-0 z-50 lg:relative overflow-y-auto"
                : "hidden lg:block"
            }
          `}
        >
          {/* Mobile Close Button */}
          {sidebarOpen && (
            <div className="lg:hidden flex justify-between items-center mb-4 pb-4 border-b">
              <span className="font-semibold text-lg">Control Panel</span>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-sm transition-colors"
              >
                <X size={24} />
              </button>
            </div>
          )}

          {/* Simple List Navigation - No Dropdown */}
          <nav className="space-y-2">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedSection(item.id);
                  setSidebarOpen(false);
                }}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-sm text-sm transition-all ${
                  selectedSection === item.id
                    ? "bg-[rgb(112_22_208/0.9)] text-black font-medium shadow-sm"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span
                  className={
                    selectedSection === item.id ? "text-black" : "text-gray-400"
                  }
                >
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          />
        )}

        {/* Main Content Area */}
        <main className="flex-1 bg-white rounded-sm shadow-md p-6 min-h-[500px]">
          {getCurrentComponent()}
        </main>
      </div>
    </div>
  );
}