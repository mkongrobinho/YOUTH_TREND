import {
  CalendarDays,
  MapPin,
  Users
} from "lucide-react";


function EventCard({ event }) {

  return (

    <div className="
      bg-white
      rounded-2xl
      border
      shadow-sm
      overflow-hidden
      hover:shadow-md
      transition
    ">


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
        ">
          {event.title}
        </h2>



        <div className="
          space-y-3
          mt-4
          text-gray-500
          text-sm
        ">


          <div className="
            flex
            items-center
            gap-2
          ">
            <CalendarDays size={18}/>
            <span>{event.date}</span>
          </div>



          <div className="
            flex
            items-center
            gap-2
          ">
            <MapPin size={18}/>
            <span>{event.location}</span>
          </div>



          <div className="
            flex
            items-center
            gap-2
          ">
            <Users size={18}/>
            <span>{event.people} participants</span>
          </div>


        </div>




        <button
          className="
            mt-5
            w-full
            bg-green-700
            text-white
            py-3
            rounded-xl
            hover:bg-green-800
          "
        >
          Join Event
        </button>


      </div>


    </div>

  );

}


export default EventCard;