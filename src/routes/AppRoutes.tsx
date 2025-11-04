import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import AdminLayout from "../layout/AdminLayout";
import ApplicantNew from "../pages/admin/applicant/ApplicantNew";
import Applicants from "../pages/admin/applicant/Applicants";
import ApplicantProfile from "../pages/admin/applicant/ApplicantProfile";
import EmployersNew from "../pages/admin/employer/EmployerNew";
import Employers from "../pages/admin/employer/Employers";
import EmployerProfile from "../pages/admin/employer/EmployerProfile";
import DbsTracker from "../pages/admin/Tracker/DbsTracker";

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<AdminLayout/>}>
        <Route index element={<Dashboard />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="ApplicantsMgt" element={<Applicants />} />
        <Route path="ApplicantsMgt/ApplicantNew" element={<ApplicantNew />} />
        <Route path="ApplicantsMgt/ApplicantProfile" element={<ApplicantProfile />} />
        <Route path="EmployersMgt" element={<Employers />} />
        <Route path="EmployersMgt/EmployerNew" element={<EmployersNew />} />
        <Route path="EmployersMgt/EmployerProfile" element={<EmployerProfile />} />
        <Route path="Tracker" element={<DbsTracker />} />
        <Route path="IncidentMgt" element={<Dashboard />} />
        <Route path="FinanceMgt" element={<Dashboard />} />
        <Route path="Reports" element={<Dashboard />} />
        <Route path="Communication" element={<Dashboard />} />
        <Route path="ControlPanel" element={<Dashboard />} />

      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
