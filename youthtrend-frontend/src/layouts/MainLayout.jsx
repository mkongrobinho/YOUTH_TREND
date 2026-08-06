import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import RightSidebar from "../components/layout/RightSidebar";
import Footer from "../components/layout/Footer";

function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex w-full pt-16">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 min-w-0">
          <Outlet />
        </main>

        {/* Right Sidebar */}
        <RightSidebar />
      </div>

      <Footer />
    </div>
  );
}

export default MainLayout;