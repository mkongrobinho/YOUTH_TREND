import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import RightSidebar from "../components/layout/RightSidebar";


function MainLayout() {

  return (

    <div className="
      min-h-screen
      bg-gray-50
    ">


      {/* Navbar */}

      <Navbar />



      <div className="
        flex
        pt-16
      ">


        {/* Left Sidebar */}

        <aside className="
          hidden
          md:block
          fixed
          top-16
          left-0
          bottom-0
          w-64
          bg-white
          border-r
        ">

          <Sidebar />

        </aside>





        {/* Main Pages */}

        <main className="
          flex-1
          md:ml-64
          lg:mr-80
          p-6
        ">

          <Outlet />

        </main>





        {/* Right Sidebar */}

        <aside className="
          hidden
          lg:block
          fixed
          top-16
          right-0
          bottom-0
          w-80
          bg-white
          border-l
          p-5
        ">

          <RightSidebar />

        </aside>


      </div>


    </div>

  );

}


export default MainLayout;