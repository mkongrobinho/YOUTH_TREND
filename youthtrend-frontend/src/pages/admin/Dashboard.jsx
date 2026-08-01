import {
  Users,
  Activity,
  School,
  TriangleAlert,
  Download,
} from "lucide-react";

import MetricCard from "../../components/admin/MetricCard";
import GrowthChart from "../../components/admin/GrowthChart";
import SchoolRanking from "../../components/admin/SchoolRanking";
import SystemEvents from "../../components/admin/SystemEvents";


function Dashboard() {

  return (

    <div className="space-y-8">


      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold text-gray-900">
            Ecosystem Overview
          </h1>

          <p className="text-gray-500 mt-2">
            Real-time performance metrics across all Cameroonian campus hubs.
          </p>

        </div>



        <button
          className="
          flex items-center gap-2
          bg-[#005429]
          text-white
          px-5 py-3
          rounded-xl
          hover:bg-green-800
          "
        >

          <Download size={18}/>

          Export Report

        </button>


      </div>





      {/* Statistics Cards */}


      <div className="
      grid 
      grid-cols-1 
      md:grid-cols-2 
      xl:grid-cols-4 
      gap-6
      ">


        <MetricCard
          icon={Users}
          title="Total Active Users"
          value="142,830"
          change="+12.4%"
        />


        <MetricCard
          icon={Activity}
          title="Active Connections"
          value="8,492"
          change="+5.2%"
          iconBg="bg-gray-100"
          iconColor="text-gray-700"
        />


        <MetricCard
          icon={School}
          title="Total Schools"
          value="42"
          change="Stable"
          iconBg="bg-red-100"
          iconColor="text-red-700"
          changeColor="text-gray-600"
        />


        <MetricCard
          icon={TriangleAlert}
          title="Pending Escalations"
          value="18"
          change="-2.1%"
          iconBg="bg-red-100"
          iconColor="text-red-600"
          changeColor="text-red-600"
        />


      </div>






      {/* Main Content */}


      <div className="grid xl:grid-cols-3 gap-6">



        {/* Left Section */}


        <div className="xl:col-span-2 space-y-6">


          <GrowthChart />


          <SchoolRanking />


        </div>






        {/* Right Section */}


        <div>


          <SystemEvents />


        </div>



      </div>



    </div>

  );

}


export default Dashboard;