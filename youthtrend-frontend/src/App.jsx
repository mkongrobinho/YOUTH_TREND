import { Routes, Route, Navigate } from "react-router-dom";


// Auth Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";


// Student Layout
import MainLayout from "./layouts/MainLayout";


// Student Pages
import Home from "./pages/student/Home";
import Discover from "./pages/student/Discover";
import Communities from "./pages/student/Communities";
import CommunityDetails from "./pages/student/CommunityDetails";
import Messages from "./pages/student/Messages";
import Events from "./pages/student/Events";
import Projects from "./pages/student/Projects";
import Profile from "./pages/student/Profile";
import Notifications from "./pages/student/Notifications";
import Settings from "./pages/student/Settings";
import PostDetails from "./pages/student/PostDetails";



// Leader Layout
import LeaderLayout from "./layouts/LeaderLayout";


// Leader Pages
import Dashboard from "./pages/leader/Dashboard";
import MemberManagement from "./pages/leader/MemberManagement";
import LeaderMessages from "./pages/leader/LeaderMessages";
import Announcements from "./pages/leader/Announcements";
import Moderation from "./pages/leader/Moderation";
import LeaderEvents from "./pages/leader/Events";
import EventDetails from "./pages/leader/EventDetails";

// Admin pages
import AdminDashboard from "./pages/admin/Dashboard";
import UserManagement from "./pages/admin/UserManagement";
import UniversityManagement from "./pages/admin/UniversityManagement";
import UniversityDetails from "./pages/admin/UniversityDetails";
function App() {

  return (

    <Routes>


      {/* Default */}

      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />





      {/* Authentication */}

      <Route
        path="/login"
        element={<Login />}
      />


      <Route
        path="/register"
        element={<Register />}
      />


      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />


      <Route
        path="/reset-password"
        element={<ResetPassword />}
      />







      {/* Student Area */}

      <Route element={<MainLayout />}>

        <Route
          path="/home"
          element={<Home />}
        />

        <Route
          path="/discover"
          element={<Discover />}
        />

        <Route
          path="/communities"
          element={<Communities />}
        />


        <Route
          path="/community/:id"
          element={<CommunityDetails />}
        />


        <Route
          path="/messages"
          element={<Messages />}
        />


        <Route
          path="/events"
          element={<Events />}
        />


        <Route
          path="/projects"
          element={<Projects />}
        />


        <Route
          path="/profile"
          element={<Profile />}
        />


        <Route
          path="/notifications"
          element={<Notifications />}
        />


        <Route
          path="/settings"
          element={<Settings />}
        />


        <Route
          path="/post/:id"
          element={<PostDetails />}
        />


      </Route>








      {/* Leader Mode */}

      <Route element={<LeaderLayout />}>

        <Route
          path="/leader/dashboard"
          element={<Dashboard />}
        />
        <Route
        path="/leader/members"
        element={<MemberManagement/>}
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
<Route path="/leader/events" element={<LeaderEvents />} />
<Route 
  path="/leader/events/:id" 
  element={<EventDetails />} 
/>
    {/* Admin Mode */}
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



      </Route>







      {/* Not Found */}

      <Route
        path="*"
        element={<Navigate to="/home" replace />}
      />


    </Routes>

  );

}


export default App;