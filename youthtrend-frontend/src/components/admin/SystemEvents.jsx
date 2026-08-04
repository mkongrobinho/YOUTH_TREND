import {
  School,
  UserPlus,
  ShieldAlert,
  Activity,
} from "lucide-react";


const events = [
  {
    icon: School,
    title: "New University Registered",
    description: "Saint Monica University joined YouthTrend",
    time: "2 minutes ago",
  },

  {
    icon: UserPlus,
    title: "New Students Verified",
    description: "500 students were added to the platform",
    time: "1 hour ago",
  },

  {
    icon: ShieldAlert,
    title: "Moderation Alert",
    description: "15 reports require administrator attention",
    time: "3 hours ago",
  },

  {
    icon: Activity,
    title: "System Performance Update",
    description: "Platform response time improved",
    time: "5 hours ago",
  },
];


function SystemEvents() {

  return (

    <div className="bg-white rounded-2xl border p-6">


      <h2 className="text-2xl font-bold text-gray-900">
        Global System Events
      </h2>


      <p className="text-gray-500 mt-2 mb-8">
        Live updates across all regions
      </p>



      <div className="space-y-7">


        {events.map((event, index) => {

          const Icon = event.icon;


          return (

            <div
              key={index}
              className="flex gap-4"
            >


              <div
                className="
                w-11 h-11
                rounded-full
                bg-green-100
                flex items-center justify-center
                "
              >

                <Icon
                  size={21}
                  className="text-[#005429]"
                />

              </div>



              <div>

                <h3 className="font-semibold text-gray-900">
                  {event.title}
                </h3>


                <p className="text-sm text-gray-500">
                  {event.description}
                </p>


                <p className="text-xs text-gray-400 mt-1">
                  {event.time}
                </p>


              </div>


            </div>

          );

        })}


      </div>



      <button
        className="
        mt-8
        w-full
        py-3
        rounded-xl
        border
        border-[#005429]
        text-[#005429]
        font-semibold
        hover:bg-green-50
        "
      >
        View Historical Logs
      </button>


    </div>

  );

}


export default SystemEvents;