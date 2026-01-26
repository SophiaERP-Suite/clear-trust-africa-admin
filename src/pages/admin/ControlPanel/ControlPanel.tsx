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
  MapPin,
  BookKey,
  FolderKey,
  IdCard,
  ShieldCheck,
  AlertTriangleIcon,
  OctagonAlertIcon,
  AlertCircleIcon,
} from "lucide-react";
import { Link, useLocation, Routes, Route } from "react-router-dom";

import Overview from "./Overview";
import Roles from "./Roles";
import Permissions from "./Permissions";
import OrganisationType from "./OrganisationType";
import RolePermissions from "./RolePermissions";
import NotificationSettings from "./NotificationSettings";
import LocationManagement from "./LocationManagement";
import CountryMgt from "./CountryMgt";
import StatesManagement from "./StateMgt";
import CitiesManagement from "./CityMgt";
import AuditLog from "./AuditLog";
import DBSStatus from "./DBSStatus";
import DBSType from "./DBSTypes";
import DBSStages from "./DBSStages";
import CTASettings from "./CTASettings";
import IncidentType from "./IncidentType";
import IncidentActionType from "./IncidentActionType";
import CTAPartnerType from "./CTAPartners";

const sidebarItems = [
  {
    id: "overview",
    label: "Overview",
    icon: <LayoutDashboard size={20} />,
    path: "/ControlPanel",
    component: Overview,
  },
  {
    id: "roles",
    label: "Roles",
    icon: <Shield size={20} />,
    path: "/ControlPanel/roles",
    component: Roles,
  },
  {
    id: "permissions",
    label: "Permissions",
    icon: <Key size={20} />,
    path: "/ControlPanel/permissions",
    component: Permissions,
  },
  {
    id: "permissionsAssign",
    label: "Assign Permissions",
    icon: <Tag size={20} />,
    path: "/ControlPanel/assign-permissions",
    component: RolePermissions,
  },
  {
    id: "organisationType",
    label: "Organisation Type",
    icon: <Building size={20} />,
    path: "/ControlPanel/organisation-types",
    component: OrganisationType,
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: <Bell size={20} />,
    path: "/ControlPanel/notifications",
    component: NotificationSettings,
  },
  {
    id: "location",
    label: "Location",
    icon: <MapPin size={20} />,
    path: "/ControlPanel/locationMgt",
    component: LocationManagement,
    children: [
      {
        id: "countries",
        label: "Countries",
        path: "/ControlPanel/locationMgt/countries",
        component: CountryMgt,
      },
      {
        id: "states",
        label: "States",
        path: "/ControlPanel/locationMgt/states",
        component: StatesManagement,
      },
      {
        id: "cities",
        label: "Cities",
        path: "/ControlPanel/locationMgt/cities",
        component: CitiesManagement,
      },
    ],
  },
  {
    id: "incident-type",
    label: "Incident Type",
    icon: <AlertTriangleIcon size={20} />,
    path: "/ControlPanel/Incident-Type",
    component: IncidentType,
  },
  {
    id: "action-type",
    label: "Action Type",
    icon: <OctagonAlertIcon size={20} />,
    path: "/ControlPanel/Incident-Action-Type",
    component: IncidentActionType,
  },
  {
    id: "third-party",
    label: "Third Party",
    icon: <AlertCircleIcon size={20} />,
    path: "/ControlPanel/Third-Party",
    component: CTAPartnerType,
  },
  {
    id: "check-status",
    label: "Check Status",
    icon: <BookKey size={20} />,
    path: "/ControlPanel/Check-Status",
    component: DBSStatus,
  },
  {
    id: "check-type",
    label: "Check Type",
    icon: <FolderKey size={20} />,
    path: "/ControlPanel/Check-Type",
    component: DBSType,
  },
  {
    id: "check-stage",
    label: "Check Stage & SLA",
    icon: <IdCard size={20} />,
    path: "/ControlPanel/Check-Stage",
    component: DBSStages,
  },
  {
    id: "cta-certificate",
    label: "CTA Certificate Settings",
    icon: <ShieldCheck size={20} />,
    path: "/ControlPanel/CTA-Certificate",
    component: CTASettings,
  },
  {
    id: "audit",
    label: "Audit Logs",
    icon: <Activity size={20} />,
    path: "/ControlPanel/audit-logs",
    component: AuditLog,
  },
];

export default function ControlPanel() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  // const navigate = useNavigate();

  const getCurrentSectionId = () => {
    const currentItem = sidebarItems.find(
      (item) => item.path === location.pathname
    );
    return currentItem ? currentItem.id : "overview";
  };

  const selectedSection = getCurrentSectionId();

  return (
    <div className="p-6 lg:p-8 footer-inner mx-auto main-container container">
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
        {/* Sidebar */}
        <aside
          className={`
            w-64 bg-white rounded-sm text-black shadow-md p-4 lg:h-fit
            lg:sticky lg:top-6
            transition-all duration-300
            ${
              sidebarOpen
                ? "fixed inset-0 z-50 lg:relative overflow-y-auto"
                : "hidden lg:block"
            }
          `}
        >
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

          <nav className="space-y-2">
            {sidebarItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() =>
                  window.innerWidth < 1024 && setSidebarOpen(false)
                }
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-sm text-sm transition-all ${
                  selectedSection === item.id
                    ? "bg-white text-black font-medium shadow-sm"
                    : "text-black hover:bg-gray-100"
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
              </Link>
            ))}
          </nav>
        </aside>

        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}

        {/* Main Content Area with Routes */}
        <main className="flex-1 min-h-[500px]">
          <Routes>
            {/* Parent routes */}
            {sidebarItems.map((item) => (
              <Route
                key={item.id}
                path={item.path.replace("/ControlPanel", "")}
                element={
                  item.component ? (
                    <item.component />
                  ) : (
                    <div>Coming soon...</div>
                  )
                }
              />
            ))}

            {/* Child routes */}
            {sidebarItems.map((item) =>
              item.children?.map((child) => (
                <Route
                  key={child.id}
                  path={child.path.replace("/ControlPanel", "")}
                  element={<child.component />}
                />
              ))
            )}

            <Route index element={<Overview />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
