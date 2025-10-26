import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import AdminLayout from "../layout/AdminLayout";

function AppRoutes() {
  return (
    <Routes>
      {/* Marketing/Intro Website Routes */}
      <Route
        path="/"
        element={<AdminLayout/>}
      >
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<div>Users Page</div>} />
        <Route path="analytics" element={<div>Analytics Page</div>} />
        <Route path="settings" element={<div>Settings Page</div>} />
      </Route>

      {/* Dashboard Routes - Add these later */}
      {/* <Route path="/admin/*" element={<AdminRoutes />} /> */}
      {/* <Route path="/client/*" element={<ClientRoutes />} /> */}
      {/* <Route path="/vendor/*" element={<VendorRoutes />} /> */}

      {/* Catch all - redirect to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
