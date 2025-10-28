import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import AdminLayout from "../layout/AdminLayout";
import Home from "../pages/main/Home";
import MainLayout from "../layout/MainLayout";
import ApplicantNew from "../pages/admin/ApplicantNew";
import Applicants from "../pages/admin/Applicants";
import ApplicantProfile from "../pages/admin/ApplicantProfile";

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/admin/*"
        element={<AdminLayout/>}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="applicantsMgt" element={<Applicants />} />
         <Route path="applicantNew" element={<ApplicantNew />} />
           <Route path="applicantProfile" element={<ApplicantProfile />} />
        <Route path="employersMgt" element={<div>Users Page</div>} />
        <Route path="tracker" element={<div>Analytics Page</div>} />
        <Route path="incidentMgt" element={<div>Settings Page</div>} />
        <Route path="financeMgt" element={<div>Settings Page</div>} />
        <Route path="reports" element={<div>Settings Page</div>} />
        <Route path="communication" element={<div>Settings Page</div>} />
        <Route path="control-panel" element={<div>Settings Page</div>} />
      </Route>

      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
