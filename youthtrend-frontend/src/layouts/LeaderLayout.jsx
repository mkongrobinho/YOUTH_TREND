import { Outlet } from "react-router-dom";

import LeaderSidebar from "../components/leader/LeaderSidebar";
import LeaderNavbar from "../components/leader/LeaderNavbar";


function LeaderLayout() {

  return (

    <div className="
      flex
      min-h-screen
      bg-gray-100
    ">


      {/* Sidebar */}

      <LeaderSidebar />




      {/* Main Area */}

      <div className="
        flex-1
      ">


        {/* Navbar */}

        <LeaderNavbar />




        {/* Page Content */}

        <main className="
          p-6
        ">

          <Outlet />

        </main>



      </div>



    </div>

  );

}


export default LeaderLayout;