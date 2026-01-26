import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import AdminLayout from "../layout/AdminLayout";
import Applicants from "../pages/admin/Applicant/Applicants";
import EmployersNew from "../pages/admin/Employer/EmployerNew";
import Employers from "../pages/admin/Employer/Employers";
import EmployerProfile from "../pages/admin/Employer/EmployerProfile";
import DbsTracker from "../pages/admin/Tracker/DbsTracker";
import PaymentDashboard from "../pages/admin/Payment/Payment";
import InvestigationPortal from "../pages/admin/Report/Report";
import CommunicationsPage from "../pages/admin/Communication/Communication2";
import ControlPanel from "../pages/admin/ControlPanel/ControlPanel";
import TrackerDetails from "../pages/admin/Tracker/TrackerDetails";
import DBSSearchModule from "../pages/admin/DBSSearch/DBSSearch";
import Incidents from "../pages/admin/Incident/incident";
import IncidentReportDetails from "../pages/admin/Incident/IncidentReportDetails";
import ApplicantsDetails from "../pages/admin/Applicant/ApplicantDetails";
import DBSCertificate from "../pages/admin/Tracker/DBSCertificate";
import PaymentReceipt from "../pages/admin/Payment/PaymentReceipt";
import DBSSearchCompare from "../pages/admin/DBSSearch/DBSSearchCompare";
import NPFProfileDetails from "../pages/admin/DBSSearch/NPFProfileDetails";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="ApplicantsMgt" element={<Applicants />} />
        <Route path="ApplicantsMgt/:id" element={<ApplicantsDetails />} />
        <Route path="EmployersMgt" element={<Employers />} />
        <Route path="EmployersMgt/EmployerNew" element={<EmployersNew />} />
        <Route
          path="EmployersMgt/EmployerProfile"
          element={<EmployerProfile />}
        />
        <Route path="Tracker" element={<DbsTracker />} />
        <Route path="Tracker/:id" element={<TrackerDetails />} />
        <Route path="Tracker/Certificate/:id" element={<DBSCertificate />} />
        <Route path="CTASearch" element={<DBSSearchModule />} />
        <Route path="CTASearch/Compare/:id" element={<DBSSearchCompare />} />
        <Route path="CTASearch/NPF/:id" element={<NPFProfileDetails />} />
        <Route path="IncidentMgt" element={<Incidents />} />
        <Route
          path="IncidentReportDetails/:irid"
          element={<IncidentReportDetails />}
        />
        <Route path="FinanceMgt" element={<PaymentDashboard />} />
        <Route path="FinanceMgt/Receipt/:id" element={<PaymentReceipt />} />
        <Route path="Reports" element={<InvestigationPortal />} />
        <Route path="Communication" element={<CommunicationsPage />} />
        <Route path="ControlPanel/*" element={<ControlPanel />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
