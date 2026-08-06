import { Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import ProtectedRoute from "./protectedRoute";
import AdminLayout from "../layouts/AdminLayout";
import LeaderLayout from "../layouts/LeaderLayout";
import AdminDashboard from "../pages/admin/Dashboard";
import LeaderDashboard from "../pages/leader/Dashboard";

import Home from "../pages/student/Home";
import Discover from "../pages/student/Discover";
import Communities from "../pages/student/Communities";
import Projects from "../pages/student/Projects";
import Events from "../pages/student/Events";
import Messages from "../pages/student/Messages";
import Profile from "../pages/student/Profile";

import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Home />
            </MainLayout>
          </ProtectedRoute>
        }
      />
<<<<<<< HEAD
      <Route
        path="/discover"
=======


      {/* Leader routes protected by role */}
      <Route
        path="/leader/*"
        element={
          <ProtectedRoute allowedRoles={["leader"]}>
            <LeaderLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<LeaderDashboard />} />
      </Route>


      {/* Admin routes protected by role */}
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<AdminDashboard />} />
      </Route>


      <Route 
        path="/discover" 
>>>>>>> 91aadaf (Complete YouthTrend frontend updates: student features, events, leader and admin dashboards)
        element={
          <ProtectedRoute>
            <MainLayout>
              <Discover />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/communities"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Communities />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/projects"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Projects />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/events"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Events />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/messages"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Messages />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Profile />
            </MainLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;