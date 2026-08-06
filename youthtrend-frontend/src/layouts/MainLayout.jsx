import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import RightSidebar from "../components/layout/RightSidebar";
import Footer from "../components/layout/Footer";

<<<<<<< HEAD
function MainLayout({ children }) {
=======

function MainLayout() {

>>>>>>> 91aadaf (Complete YouthTrend frontend updates: student features, events, leader and admin dashboards)
  return (

    <div className="min-h-screen bg-gray-100">
<<<<<<< HEAD
      <Navbar />
      <div className="flex w-full">
        <Sidebar />
        <main className="flex-1 p-6 min-w-0">
          {children}
        </main>
        <RightSidebar />
      </div>
      <Footer />
=======


      <Navbar />


      <div className="flex w-full pt-16">


        {/* Left Sidebar */}

        <Sidebar />



        {/* Main Content */}

        <main className="
          flex-1
          p-6
          min-w-0
        ">

          <Outlet />

        </main>




        {/* Right Sidebar */}

        <RightSidebar />


      </div>




      <Footer />


>>>>>>> 91aadaf (Complete YouthTrend frontend updates: student features, events, leader and admin dashboards)
    </div>

  );

}


export default MainLayout;