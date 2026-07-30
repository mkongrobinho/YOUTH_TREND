import { Routes, Route, Navigate } from "react-router-dom";

// Auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";

// Layouts
import MainLayout from "./layouts/MainLayout";
import LeaderLayout from "./layouts/LeaderLayout";

// Student Pages
import Home from "./pages/student/Home";
import Discover from "./pages/student/Discover";
import Communities from "./pages/student/Communities";
import Messages from "./pages/student/Messages";
import Events from "./pages/student/Events";
import Projects from "./pages/student/Projects";
import Profile from "./pages/student/Profile";
import Notifications from "./pages/student/Notifications";
import Settings from "./pages/student/Settings";
import PostDetails from "./pages/student/PostDetails";

// Leader
import LeaderDashboard from "./pages/leader/Dashboard";

function App() {
  return (
    <Routes>

      {/* Default */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* Student Layout */}
      <Route element={<MainLayout />}>

        <Route path="/home" element={<Home />} />

        <Route path="/discover" element={<Discover />} />

        <Route path="/communities" element={<Communities />} />

        <Route path="/messages" element={<Messages />} />

        <Route path="/events" element={<Events />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/notifications" element={<Notifications />} />

        {/* Old notification URL */}
        <Route path="/Notification" element={<Notifications />} />

        <Route path="/settings" element={<Settings />} />

        {/* Post Details */}
        <Route path="/post/:id" element={<PostDetails />} />

      </Route>

      {/* Leader Layout */}
      <Route path="/leader" element={<LeaderLayout />}>
        <Route index element={<LeaderDashboard />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<Navigate to="/home" replace />} />

    </Routes>
  );
}

export default App;