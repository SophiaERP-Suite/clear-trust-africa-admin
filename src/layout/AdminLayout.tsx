import BaseDashboardLayout from "./BaseDashboardLayout";
import {
  LayoutDashboard,
  ClipboardList,
  BarChart3,
  Users,
  AlertTriangle,
  MessageSquare,
  Briefcase,
  Wallet,
  Settings,
  LogOut,
} from "lucide-react";

function AdminLayout() {
  const navItems = [
    {
      path: "/dashboard",
      icon: <LayoutDashboard size={18} />,
      label: "Dashboard",
    },
    {
      path: "/applicantsMgt",
      icon: <Users size={18} />,
      label: "Applicant Mgt",
    },
    {
      path: "/employersMgt",
      icon: <Briefcase size={18} />,
      label: "Employers Mgt",
    },
    {
      path: "/tracker",
      icon: <ClipboardList size={18} />,
      label: "DBS Tracker",
    },
    {
      path: "/incidentMgt",
      icon: <AlertTriangle size={18} />,
      label: "Incident Mgt",
    },

    {
      path: "/financeMgt",
      icon: <Wallet size={18} />,
      label: "Finance Mgt",
    },
    {
      path: "/reports",
      icon: <BarChart3 size={18} />,
      label: "Reports & Analytics",
    },

    {
      path: "/communication",
      icon: <MessageSquare size={18} />,
      label: "Communication",
    },

    {
      path: "/control-panel",
      icon: <Settings size={18} />,
      label: "Control Panel",
    },

    {
      path: "/control-panel",
      icon: <LogOut size={18} />,
      label: "Logout",
    },
  ];

  return <BaseDashboardLayout navItems={navItems} title="Admin Panel" />;
}

export default AdminLayout;
