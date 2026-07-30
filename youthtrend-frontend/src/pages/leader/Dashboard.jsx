import {
  Users,
  FileText,
  CalendarDays,
  UsersRound
} from "lucide-react";


import StatCard from "../../components/leader/StatCard";
import ActivityCard from "../../components/leader/ActivityCard";



const activities = [

  {
    type: "student",
    title: "New student joined",
    description: "John joined Computer Science community",
    time: "5 minutes ago"
  },

  {
    type: "post",
    title: "New post created",
    description: "A student shared a project update",
    time: "20 minutes ago"
  },

  {
    type: "event",
    title: "New event created",
    description: "Campus Tech Hackathon was created",
    time: "1 hour ago"
  },

  {
    type: "community",
    title: "New community",
    description: "AI Developers Club was created",
    time: "2 hours ago"
  }

];




function Dashboard() {


  return (

    <div className="
      space-y-6
    ">



      {/* Title */}

      <div>

        <h1 className="
          text-3xl
          font-bold
        ">
          Dashboard
        </h1>


        <p className="
          text-gray-500
        ">
          Manage your campus activities and students.
        </p>


      </div>







      {/* Statistics */}

      <div className="
        grid
        md:grid-cols-2
        xl:grid-cols-4
        gap-6
      ">


        <StatCard
          title="Total Students"
          value="2,540"
          icon={Users}
        />


        <StatCard
          title="Posts"
          value="8,320"
          icon={FileText}
        />


        <StatCard
          title="Events"
          value="120"
          icon={CalendarDays}
        />


        <StatCard
          title="Communities"
          value="85"
          icon={UsersRound}
        />


      </div>








      {/* Recent Activity */}

      <div>

        <h2 className="
          text-xl
          font-bold
          mb-4
        ">
          Recent Activity
        </h2>



        <div className="
          grid
          md:grid-cols-2
          gap-5
        ">


          {
            activities.map((activity,index)=>(

              <ActivityCard
                key={index}
                activity={activity}
              />

            ))
          }


        </div>


      </div>



    </div>

  );

}


export default Dashboard;