import { Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

import Home from "../pages/student/Home";
import Discover from "../pages/student/Discover";
import Communities from "../pages/student/Communities";
import Projects from "../pages/student/Projects";
import Events from "../pages/student/Events";
import Messages from "../pages/student/Messages";
import Profile from "../pages/student/Profile";

import MainLayout from "../layouts/MainLayout";


function AppRoutes(){

  return(
    <Routes>

      <Route path="/" element={<Login />} />

      <Route path="/signup" element={<Signup />} />


      <Route 
        path="/home" 
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        } 
      />


      <Route 
        path="/discover" 
        element={
          <MainLayout>
            <Discover />
          </MainLayout>
        } 
      />


      <Route 
        path="/communities" 
        element={
          <MainLayout>
            <Communities />
          </MainLayout>
        } 
      />


      <Route 
        path="/projects" 
        element={
          <MainLayout>
            <Projects />
          </MainLayout>
        } 
      />


      <Route 
        path="/events" 
        element={
          <MainLayout>
            <Events />
          </MainLayout>
        } 
      />


      <Route 
        path="/messages" 
        element={
          <MainLayout>
            <Messages />
          </MainLayout>
        } 
      />


      <Route 
        path="/profile" 
        element={
          <MainLayout>
            <Profile />
          </MainLayout>
        } 
      />


    </Routes>
  );

}


export default AppRoutes;