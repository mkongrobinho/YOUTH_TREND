import { Outlet } from "react-router-dom";

import LeaderNavbar from "../components/leader/LeaderNavbar";
import LeaderSidebar from "../components/leader/LeaderSidebar";

function LeaderLayout() {
  return (
    <div className="min-h-screen bg-gray-100">

      <LeaderNavbar />

      <div className="flex pt-16">

        <LeaderSidebar />

        <main className="flex-1 p-6 min-w-0">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default LeaderLayout;