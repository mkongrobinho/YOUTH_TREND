<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
=======
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";


// Layouts
import MainLayout from "./layouts/MainLayout";
import LeaderLayout from "./layouts/LeaderLayout";
import AdminLayout from "./layouts/AdminLayout";



// Student Pages
import Home from "./pages/student/Home";
import Discover from "./pages/student/Discover";
import Communities from "./pages/student/Communities";
import CommunityDetails from "./pages/student/CommunityDetails";
import Messages from "./pages/student/Messages";
import Events from "./pages/student/Events";
import StudentEventDetails from "./pages/student/EventDetails";
import Projects from "./pages/student/Projects";
import Profile from "./pages/student/Profile";
import Notifications from "./pages/student/Notifications";
import Settings from "./pages/student/Settings";
import PostDetails from "./pages/student/PostDetails";
import ProjectDetails from "./pages/student/ProjectDetails";


// Leader Pages
import Dashboard from "./pages/leader/Dashboard";
import MemberManagement from "./pages/leader/MemberManagement";
import LeaderMessages from "./pages/leader/LeaderMessages";
import Announcements from "./pages/leader/Announcements";
import Moderation from "./pages/leader/Moderation";
import LeaderEvents from "./pages/leader/Events";
import EventDetails from "./pages/leader/EventDetails";



// Admin Pages
import AdminDashboard from "./pages/admin/Dashboard";
import UserManagement from "./pages/admin/UserManagement";
import UniversityManagement from "./pages/admin/UniversityManagement";
import UniversityDetails from "./pages/admin/UniversityDetails";
import AddUniversity from "./pages/admin/AddUniversity";
import EditUniversity from "./pages/admin/EditUniversity";
import AnnouncementManagement from "./pages/admin/AnnouncementManagement";
import EventManagement from "./pages/admin/EventManagement";
import AdminModeration from "./pages/admin/Moderation";
import Analytics from "./pages/admin/Analytics";
import Reports from "./pages/admin/Reports";
import AdminSettings from "./pages/admin/Settings";
import AdminProfile from "./pages/admin/Profile";



function App(){

return (

<Routes>


{/* Default */}

<Route
path="/"
element={<Navigate to="/login" replace />}
/>



{/* Authentication */}


<Route path="/login" element={<Login />} />

<Route path="/register" element={<Register />} />

<Route path="/forgot-password" element={<ForgotPassword />} />

<Route path="/reset-password" element={<ResetPassword />} />






{/* Student Area */}


<Route
  element={
    <ProtectedRoute allowedRoles={["student","leader","admin"]}>
      <MainLayout />
    </ProtectedRoute>
  }
>


<Route path="/home" element={<Home />} />

<Route path="/discover" element={<Discover />} />

<Route path="/communities" element={<Communities />} />

<Route path="/community/:id" element={<CommunityDetails />} />

<Route path="/messages" element={<Messages />} />

<Route path="/events" element={<Events />} />
  <Route
    path="/events/:id"
    element={<StudentEventDetails />}
  />

<Route path="/projects" element={<Projects />} />

<Route path="/profile" element={<Profile />} />

<Route path="/notifications" element={<Notifications />} />

<Route path="/settings" element={<Settings />} />

<Route path="/post/:id" element={<PostDetails />} />
<Route
 path="/projects/:id"
 element={<ProjectDetails />}
/>

</Route>








{/* Leader Area */}


<Route
  element={
    <ProtectedRoute allowedRoles={["leader","admin"]}>
      <LeaderLayout />
    </ProtectedRoute>
  }
>


<Route
path="/leader"
element={<Navigate to="/leader/dashboard" replace />}
/>

<Route
path="/leader/dashboard"
element={<Dashboard />}
/>


<Route
path="/leader/members"
element={<MemberManagement />}
/>


<Route
path="/leader/messages"
element={<LeaderMessages />}
/>


<Route
path="/leader/announcements"
element={<Announcements />}
/>


<Route
path="/leader/moderation"
element={<Moderation />}
/>


<Route
path="/leader/events"
element={<LeaderEvents />}
/>


<Route
path="/leader/events/:id"
element={<EventDetails />}
/>


</Route>








{/* Admin Area */}


<Route
  element={
    <ProtectedRoute allowedRoles={["admin"]}>
      <AdminLayout />
    </ProtectedRoute>
  }
>


<Route
path="/admin"
element={<Navigate to="/admin/dashboard" replace />}
/>

<Route
path="/admin/dashboard"
element={<AdminDashboard />}
/>


<Route
path="/admin/users"
element={<UserManagement />}
/>


<Route
path="/admin/universities"
element={<UniversityManagement />}
/>


<Route
path="/admin/universities/:id"
element={<UniversityDetails />}
/>


<Route
path="/admin/universities/add"
element={<AddUniversity />}
/>


<Route
path="/admin/universities/edit/:id"
element={<EditUniversity />}
/>


<Route
path="/admin/announcements"
element={<AnnouncementManagement />}
/>


<Route
path="/admin/events"
element={<EventManagement />}
/>


<Route
path="/admin/moderation"
element={<AdminModeration />}
/>


<Route
path="/admin/analytics"
element={<Analytics />}
/>


<Route
path="/admin/reports"
element={<Reports />}
/>


<Route
path="/admin/settings"
element={<AdminSettings />}
/>


<Route
path="/admin/profile"
element={<AdminProfile />}
/>


</Route>







{/* Not Found */}


<Route
path="*"
element={<Navigate to="/home" replace />}
/>


</Routes>

);

>>>>>>> 91aadaf (Complete YouthTrend frontend updates: student features, events, leader and admin dashboards)
}

export default App