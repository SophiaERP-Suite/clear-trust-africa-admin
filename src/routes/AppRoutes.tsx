import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import AdminLayout from "../layout/AdminLayout";
import ApplicantNew from "../pages/admin/Applicant/ApplicantNew";
import Applicants from "../pages/admin/Applicant/Applicants";
import ApplicantProfile from "../pages/admin/Applicant/ApplicantProfile";
import EmployersNew from "../pages/admin/Employer/EmployerNew";
import Employers from "../pages/admin/Employer/Employers";
import EmployerProfile from "../pages/admin/Employer/EmployerProfile";
import DbsTracker from "../pages/admin/Tracker/DbsTracker";
import PaymentDashboard from "../pages/admin/Payment/Payment";
import InvestigationPortal from "../pages/admin/Report/Report";
import CommunicationsPage from "../pages/admin/Communication/Communication";
import ControlPanel from "../pages/admin/ControlPanel/ControlPanel";
import TrackerDetails from "../pages/admin/Tracker/TrackerDetails";
import DBSSearchModule from "../pages/admin/DBSSearch/DBSSearch";
import Incidents from "../pages/admin/Incident/incident";
import IncidentReportDetails from "../pages/admin/Incident/IncidentReportDetails";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="ApplicantsMgt" element={<Applicants />} />
        <Route path="ApplicantsMgt/ApplicantNew" element={<ApplicantNew />} />
        <Route
          path="ApplicantsMgt/ApplicantProfile"
          element={<ApplicantProfile />}
        />
        <Route path="EmployersMgt" element={<Employers />} />
        <Route path="EmployersMgt/EmployerNew" element={<EmployersNew />} />
        <Route
          path="EmployersMgt/EmployerProfile"
          element={<EmployerProfile />}
        />
        <Route path="Tracker" element={<DbsTracker />} />
        <Route path="Tracker/:id" element={<TrackerDetails />} />
        <Route path="DBSSearch" element={<DBSSearchModule />} />
        <Route path="IncidentMgt" element={<Incidents />} />
        <Route
          path="IncidentReportDetails/:irid"
          element={<IncidentReportDetails />}
        />
        <Route path="FinanceMgt" element={<PaymentDashboard />} />
        <Route path="Reports" element={<InvestigationPortal />} />
        <Route path="Communication" element={<CommunicationsPage />} />
        <Route path="ControlPanel/*" element={<ControlPanel />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
