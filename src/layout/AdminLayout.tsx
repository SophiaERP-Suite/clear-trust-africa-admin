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
      icon: <LayoutDashboard size={25} />,
      label: "Dashboard",
    },
    {
      path: "/applicantsMgt",
      icon: <Users size={25} />,
      label: "Applicant Mgt",
    },
    {
      path: "/employersMgt",
      icon: <Briefcase size={25} />,
      label: "Employers Mgt",
    },
    {
      path: "/tracker",
      icon: <ClipboardList size={25} />,
      label: "DBS Tracker",
    },
    {
      path: "/incidentMgt",
      icon: <AlertTriangle size={25} />,
      label: "Incident Mgt",
    },

    {
      path: "/financeMgt",
      icon: <Wallet size={25} />,
      label: "Finance Mgt",
    },
    {
      path: "/reports",
      icon: <BarChart3 size={25} />,
      label: "Reports & Analytics",
    },

    {
      path: "/communication",
      icon: <MessageSquare size={25} />,
      label: "Communication",
    },

    {
      path: "/control-panel",
      icon: <Settings size={25} />,
      label: "Control Panel",
    },

    {
      path: "/control-panel",
      icon: <LogOut size={25} />,
      label: "Logout",
    },
  ];

  return <BaseDashboardLayout navItems={navItems} title={"ADMIN"} />;
}

export default AdminLayout;
