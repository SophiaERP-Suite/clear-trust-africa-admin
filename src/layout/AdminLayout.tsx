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
      path: "/admin/dashboard",
      icon: <LayoutDashboard size={18} />,
      label: "Dashboard",
    },
    {
      path: "/admin/applicantsMgt",
      icon: <Users size={18} />,
      label: "Applicant Mgt",
    },
    {
      path: "/admin/employersMgt",
      icon: <Briefcase size={18} />,
      label: "Employers Mgt",
    },
    {
      path: "/admin/tracker",
      icon: <ClipboardList size={18} />,
      label: "DBS Tracker",
    },
    {
      path: "/admin/incidentMgt",
      icon: <AlertTriangle size={18} />,
      label: "Incident Mgt",
    },

    {
      path: "/admin/financeMgt",
      icon: <Wallet size={18} />,
      label: "Finance Mgt",
    },
    {
      path: "/admin/reports",
      icon: <BarChart3 size={18} />,
      label: "Reports & Analytics",
    },

    {
      path: "/admin/communication",
      icon: <MessageSquare size={18} />,
      label: "Communication",
    },

    {
      path: "/admin/control-panel",
      icon: <Settings size={18} />,
      label: "Control Panel",
    },

    {
      path: "/admin/control-panel",
      icon: <LogOut size={18} />,
      label: "Logout",
    },
  ];

  return <BaseDashboardLayout navItems={navItems} />;
}

export default AdminLayout;
