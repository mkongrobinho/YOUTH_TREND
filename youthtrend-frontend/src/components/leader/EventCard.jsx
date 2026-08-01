import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EventCard({ event }) {

  const [interested, setInterested] = useState(false);
  const navigate = useNavigate();


  return (

    <div className="
      bg-white
      rounded-2xl
      border
      overflow-hidden
      shadow-sm
    ">


      {/* Event Image */}

      <img

        src={
          event.image ||
          "https://images.unsplash.com/photo-1505373877841-8d25f7d46678"
        }

        alt="event"

        className="
          w-full
          h-52
          object-cover
        "

      />







      <div className="p-6 space-y-4">



        {/* Title */}

        <h2 className="
          text-xl
          font-bold
          text-gray-800
        ">

          {event.title}

        </h2>







        {/* Date */}

        <div className="
          flex
          items-center
          gap-2
          text-gray-500
          text-sm
        ">

          <Calendar size={17}/>

          {event.date}

        </div>







        {/* Time */}

        <div className="
          flex
          items-center
          gap-2
          text-gray-500
          text-sm
        ">

          <Clock size={17}/>

          {event.time}

        </div>







        {/* Location */}

        <div className="
          flex
          items-center
          gap-2
          text-gray-500
          text-sm
        ">

          <MapPin size={17}/>

          <div>

            <p>
              {event.university}
            </p>

            <p>
              {event.hall}
            </p>

          </div>


        </div>








        {/* Audience */}

        <div className="
          flex
          items-center
          gap-2
          text-gray-500
          text-sm
        ">


          <Users size={17}/>


          {
            event.audience === "all"
              ? "All Universities"
              : event.audience === "university"
              ? "My University Only"
              : "Selected Communities"
          }


        </div>









        {/* Description */}

        <p className="
          text-gray-600
          text-sm
          line-clamp-3
        ">

          {event.description}

        </p>

        {/*View Details */}
      <button
  onClick={() => navigate(`/leader/events/${event.id}`)}
  className="
    w-full
    py-3
    rounded-xl
    border
    border-[#005429]
    text-[#005429]
    font-semibold
    hover:bg-green-50
    mb-3
  "
>
  View Details
</button>








        {/* Interested */}

        <button

          onClick={() => setInterested(!interested)}

          className={`
            w-full
            py-3
            rounded-xl
            font-semibold
            transition

            ${
              interested
              ?
              "bg-green-100 text-[#005429]"
              :
              "bg-[#005429] text-white"
            }
          `}

        >

          {
            interested
            ?
            "Interested ✓"
            :
            "I'm Interested"
          }


        </button>





      </div>


    </div>

  );

}


export default EventCard;