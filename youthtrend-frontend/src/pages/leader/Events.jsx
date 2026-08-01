import { useState } from "react";
import { Plus } from "lucide-react";

import CreateEvent from "../../components/leader/CreateEvent";
import EventCard from "../../components/leader/EventCard";


function Events() {


  const [showCreate, setShowCreate] = useState(false);



  const events = [

    {
      id: 1,
      title: "AI & Technology Innovation Meetup",

      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",

      description:
        "A campus event where students meet, share technology ideas, present projects and build new connections.",

      date: "15 August 2026",

      time: "10:00 AM",

      university: "University of Buea",

      hall: "Faculty of Engineering Amphitheatre A",

      audience: "all",

    },



    {
      id: 2,

      title: "Leadership Workshop",

      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952",

      description:
        "A workshop focused on leadership skills, teamwork and student community management.",

      date: "22 August 2026",

      time: "2:00 PM",

      university: "University of Buea",

      hall: "Conference Hall B",

      audience: "university",

    },

  ];






  return (

    <div className="space-y-6">





      {/* Header */}

      <div className="
        flex
        justify-between
        items-center
      ">


        <div>

          <h1 className="
            text-4xl
            font-bold
          ">

            Events Management

          </h1>


          <p className="
            text-gray-500
            mt-2
          ">

            Create and manage campus events.

          </p>


        </div>





        <button

          onClick={() => setShowCreate(!showCreate)}

          className="
            flex
            items-center
            gap-2
            bg-[#005429]
            text-white
            px-5
            py-3
            rounded-xl
          "

        >

          <Plus size={18}/>

          Create Event

        </button>



      </div>







      {/* Create Event */}

      {
        showCreate && (

          <CreateEvent />

        )
      }








      {/* Events */}

      <div className="
        grid
        md:grid-cols-2
        gap-6
      ">


        {
          events.map((event)=>(

            <EventCard

              key={event.id}

              event={event}

            />

          ))
        }


      </div>






    </div>


  );

}


export default Events;