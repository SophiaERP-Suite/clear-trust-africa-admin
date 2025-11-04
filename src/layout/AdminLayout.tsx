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
      path: "/Dashboard",
      icon: <LayoutDashboard size={25} />,
      label: "Dashboard",
    },
    {
      path: "/ApplicantsMgt",
      icon: <Users size={25} />,
      label: "Applicant Mgt",
    },
    {
      path: "/EmployersMgt",
      icon: <Briefcase size={25} />,
      label: "Employers Mgt",
    },
    {
      path: "/Tracker",
      icon: <ClipboardList size={25} />,
      label: "DBS Tracker",
    },
    {
      path: "/IncidentMgt",
      icon: <AlertTriangle size={25} />,
      label: "Incident Mgt",
    },

    {
      path: "/FinanceMgt",
      icon: <Wallet size={25} />,
      label: "Finance Mgt",
    },
    {
      path: "/Reports",
      icon: <BarChart3 size={25} />,
      label: "Reports & Analytics",
    },

    {
      path: "/Communication",
      icon: <MessageSquare size={25} />,
      label: "Communication",
    },

    {
      path: "/ControlPanel",
      icon: <Settings size={25} />,
      label: "Control Panel",
    },

    {
      path: "/LogOut",
      icon: <LogOut size={25} />,
      label: "Logout",
    },
  ];

  return <BaseDashboardLayout navItems={navItems} title={"ADMIN"} />;
}

export default AdminLayout;
