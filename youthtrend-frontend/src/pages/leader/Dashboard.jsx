import {
  Users,
  Megaphone,
  ShieldAlert,
  BadgeCheck,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

import StatCard from "../../components/leader/StatCard";
import ModerationCard from "../../components/leader/ModerationCard";
import ActivityCard from "../../components/leader/ActivityCard";
import NoticeBoard from "../../components/leader/NoticeBoard";


function Dashboard() {

  return (

    <div className="space-y-6">


      {/* Header */}

      <div>

        <h1 className="text-4xl font-bold">
          Overview
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your campus community
        </p>

      </div>





      {/* Statistics Cards */}

      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
        gap-6
      ">


        <StatCard
          icon={BadgeCheck}
          title="Total Verified Students"
          value="14,208"
          change="+12% this month"
          color="green"
        />


        <StatCard
          icon={Users}
          title="Active Communities"
          value="112"
          color="blue"
        />


        <StatCard
          icon={Megaphone}
          title="Official Announcements"
          value="28"
          color="pink"
        />


        <StatCard
          icon={ShieldAlert}
          title="Pending Moderation"
          value="17"
          color="red"
        />


      </div>






      {/* Middle Section */}

      <div className="
        grid
        xl:grid-cols-3
        gap-6
      ">



        {/* Moderation Queue */}

        <div className="
          xl:col-span-2
          bg-white
          rounded-2xl
          border
          p-6
        ">


          <div className="
            flex
            justify-between
            items-center
          ">

            <h2 className="text-2xl font-bold">
              Moderation Queue Preview
            </h2>


            <button className="text-[#005429]">
              View All Reports
            </button>

          </div>



          <div className="mt-6 space-y-5">

            <ModerationCard />

            <ModerationCard />

            <ModerationCard />

          </div>


        </div>







        {/* Activity Feed */}

        <div className="
          bg-white
          rounded-2xl
          border
          p-6
        ">


          <h2 className="
            text-2xl
            font-bold
            mb-6
          ">
            Activity Feed
          </h2>




          <div className="space-y-6">


            <ActivityCard
              icon={TrendingUp}
              title="Announcement Published"
              time="10 minutes ago"
              color="green"
            />



            <ActivityCard
              icon={AlertTriangle}
              title="System Permission Update"
              time="2 hours ago"
              color="orange"
            />



            <ActivityCard
              icon={ShieldAlert}
              title="Community Archived"
              time="5 hours ago"
              color="red"
            />


          </div>


        </div>


      </div>






      {/* Bottom Section */}

      <div className="
        grid
        xl:grid-cols-2
        gap-6
      ">



        <div className="
          bg-white
          rounded-2xl
          border
          p-8
        ">

          <h2 className="text-3xl font-bold">
            Campus Activity Surge
          </h2>


          <p className="text-gray-500 mt-3">
            Current real-time network interactions across campuses.
          </p>


        </div>




        <NoticeBoard />


      </div>



    </div>

  );

}


export default Dashboard;