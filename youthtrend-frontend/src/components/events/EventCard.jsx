import {
  CalendarDays,
  MapPin,
  Users
} from "lucide-react";

import { useNavigate } from "react-router-dom";


function EventCard({ event }) {

  const navigate = useNavigate();


  return (

    <div

      className="
      bg-white
      rounded-2xl
      border
      overflow-hidden
      shadow-sm
      hover:shadow-lg
      transition
      cursor-pointer
      "

      onClick={() => navigate(`/events/${event.id}`)}

    >


      {/* Event Image */}

      <img

        src={event.image}

        alt={event.title}

        className="
        w-full
        h-48
        object-cover
        "

      />





      <div className="p-5">


        <h2 className="
          text-xl
          font-bold
          text-[#005429]
        ">

          {event.title}

        </h2>





        <p className="
          text-sm
          text-gray-500
          mt-1
        ">

          Organized by 

          <span className="font-semibold ml-1">
            {event.organizer}
          </span>

        </p>






        <div className="
          space-y-2
          mt-4
          text-gray-600
          text-sm
        ">


          <p className="flex items-center gap-2">

            <CalendarDays size={17}/>

            {event.date}

          </p>





          <p className="flex items-center gap-2">

            <MapPin size={17}/>

            {event.location}

          </p>





          <p className="flex items-center gap-2">

            <Users size={17}/>

            {event.people} attending

          </p>


        </div>






        {/* Student Attendees Avatars */}

        <div className="
          flex
          items-center
          mt-5
        ">


          {(event.avatars || []).map((avatar,index)=>(


            <img

              key={index}

              src={avatar}

              alt="Student attendee"

              className="
                w-10
                h-10
                rounded-full
                object-cover
                border-2
                border-white
                -ml-2
              "

            />


          ))}




          {event.people > 3 && (

            <span className="
              ml-4
              text-sm
              text-gray-500
            ">

              +{event.people - 3} students

            </span>

          )}



        </div>






        <button

          className="
            mt-6
            w-full
            bg-[#005429]
            text-white
            py-3
            rounded-xl
            font-semibold
            hover:bg-green-800
            transition
          "

          onClick={(e)=>{

            e.stopPropagation();

            navigate(`/events/${event.id}`);

          }}

        >

          View Event

        </button>



      </div>


    </div>

  );

}


export default EventCard;