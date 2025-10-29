import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import AdminLayout from "../layout/AdminLayout";
import ApplicantNew from "../pages/admin/applicant/ApplicantNew";
import Applicants from "../pages/admin/applicant/Applicants";
import ApplicantProfile from "../pages/admin/applicant/ApplicantProfile";
import EmployersNew from "../pages/admin/employer/EmployerNew";
import Employers from "../pages/admin/employer/Employers";
import EmployerProfile from "../pages/admin/employer/EmployerProfile";

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<AdminLayout/>}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="applicantsMgt" element={<Applicants />} />
        <Route path="applicantNew" element={<ApplicantNew />} />
        <Route path="applicantProfile" element={<ApplicantProfile />} />
        <Route path="employersMgt" element={<Employers />} />
        <Route path="employerNew" element={<EmployersNew />} />
        <Route path="employerProfile" element={<EmployerProfile />} />
        {/* <Route path="tracker" element={<DBSTrackerModule />} /> */}
        <Route path="tracker" element={<Dashboard />} />
        <Route path="incidentMgt" element={<Dashboard />} />
        <Route path="financeMgt" element={<Dashboard />} />
        <Route path="reports" element={<Dashboard />} />
        <Route path="communication" element={<Dashboard />} />
        <Route path="control-panel" element={<Dashboard />} />

      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
