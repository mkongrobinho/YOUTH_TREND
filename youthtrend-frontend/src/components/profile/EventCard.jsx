import {
  Calendar,
  MapPin
} from "lucide-react";


function EventCard() {


  return (

    <div className="
      bg-white
      rounded-2xl
      border
      shadow-sm
      p-6
    ">


      <h2 className="
        text-xl
        font-bold
        mb-5
      ">
        Upcoming Events
      </h2>





      <div className="
        rounded-xl
        bg-green-50
        border
        border-green-100
        p-5
      ">


        <div className="
          flex
          justify-between
          items-start
        ">


          <div>

            <h3 className="
              font-bold
              text-lg
            ">
              Tech Innovation Meetup
            </h3>


            <p className="
              text-gray-600
              mt-2
              text-sm
            ">
              A campus event for students interested
              in technology and innovation.
            </p>

          </div>


          <div className="
            bg-green-700
            text-white
            rounded-xl
            px-3
            py-2
            text-center
          ">

            <p className="
              text-xs
            ">
              AUG
            </p>

            <p className="
              font-bold
              text-xl
            ">
              25
            </p>

          </div>


        </div>





        <div className="
          mt-5
          space-y-2
          text-sm
          text-gray-600
        ">


          <div className="
            flex
            items-center
            gap-2
          ">

            <Calendar size={17}/>

            Saturday • 10:00 AM

          </div>




          <div className="
            flex
            items-center
            gap-2
          ">

            <MapPin size={17}/>

            University of Buea Innovation Hub

          </div>


        </div>





        <button className="
          mt-5
          w-full
          bg-green-700
          text-white
          py-3
          rounded-xl
          font-semibold
        ">
          View Event
        </button>


      </div>


    </div>

  );

}


export default EventCard;