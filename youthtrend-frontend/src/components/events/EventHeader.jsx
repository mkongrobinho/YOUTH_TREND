import { CalendarDays } from "lucide-react";


function EventHeader() {

  return (

    <div className="
      bg-white
      rounded-2xl
      border
      p-6
      flex
      justify-between
      items-center
    ">


      <div className="
        flex
        items-center
        gap-4
      ">

        <div className="
          w-12
          h-12
          rounded-full
          bg-green-100
          flex
          items-center
          justify-center
          text-green-700
        ">

          <CalendarDays size={25}/>

        </div>


        <div>

          <h1 className="
            text-3xl
            font-bold
          ">
            Events
          </h1>


          <p className="
            text-gray-500
          ">
            Discover campus events and activities.
          </p>


        </div>


      </div>


      <button className="
        bg-green-700
        text-white
        px-5
        py-3
        rounded-xl
      ">
        Create Event
      </button>


    </div>

  );

}


export default EventHeader;