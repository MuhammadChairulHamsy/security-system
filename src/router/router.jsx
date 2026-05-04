import { createBrowserRouter, Navigate } from "react-router-dom";
// import LoginPage from "../pages/auth/login/LoginPage";
// import RegisterPage from "../pages/auth/register/RegisterPage";
import DashboardLayout from "../components/dashboard-layout";
import DashboardPages from "../pages/Dashboard";
import LogActivityPages from "../pages/Log-Activity";
import NoticationPages from "../pages/Notication";
import SettingPages from "../pages/Setting";
import NotFound from "../pages/NotFound";
// import ProtectedRoute from "../components/auth/ProtectedRoute";

const router = createBrowserRouter([
  // { path: "/login", element: <LoginPage /> },
  // { path: "/register", element: <RegisterPage /> },
  // { path: "/auth/callback", element: <AuthCallback /> },
  { path: "/", element: <Navigate to="/dashboard" replace /> },

  {
    element: (
      // <ProtectedRoute>
        <DashboardLayout />
      // </ProtectedRoute>
    ),
    errorElement: <NotFound />,
    children: [
      { path: "dashboard", element: <DashboardPages /> },
      { path: "log-aktivitas", element: <LogActivityPages /> },
      { path: "notifikasi", element: <NoticationPages /> },
      { path: "pengaturan", element: <SettingPages /> },

      { path: "*", element: <NotFound /> },
    ],
  },

  { path: "*", element: <NotFound /> },
]);

export default router;
