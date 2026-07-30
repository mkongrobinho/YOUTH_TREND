import {
  X,
  CalendarDays,
  MapPin
} from "lucide-react";


function CreateEvent({ close }) {

  return (

    <div className="
      fixed
      inset-0
      bg-black/40
      flex
      items-center
      justify-center
      z-50
    ">


      <div className="
        bg-white
        w-full
        max-w-lg
        rounded-2xl
        p-6
      ">


        <div className="
          flex
          justify-between
          items-center
          mb-5
        ">


          <h2 className="
            text-2xl
            font-bold
          ">
            Create Event
          </h2>


          <button onClick={close}>

            <X />

          </button>


        </div>





        <div className="space-y-4">


          <input
            placeholder="Event title"
            className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              outline-none
            "
          />



          <textarea
            placeholder="Event description"
            className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              h-28
              outline-none
            "
          />



          <div className="
            flex
            items-center
            gap-3
            border
            rounded-xl
            px-4
            py-3
          ">

            <CalendarDays size={20}/>

            <input
              type="date"
              className="outline-none"
            />

          </div>





          <div className="
            flex
            items-center
            gap-3
            border
            rounded-xl
            px-4
            py-3
          ">

            <MapPin size={20}/>

            <input
              placeholder="Location"
              className="outline-none"
            />

          </div>





          <button className="
            w-full
            bg-green-700
            text-white
            py-3
            rounded-xl
          ">
            Publish Event
          </button>


        </div>


      </div>


    </div>

  );

}


export default CreateEvent;