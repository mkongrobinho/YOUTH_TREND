import { useState } from "react";
import { Image, Calendar, MapPin, Clock } from "lucide-react";

function CreateEvent() {

  const [event, setEvent] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    university: "",
    hall: "",
    audience: "all",
    image: "",
  });


  const handleChange = (e) => {

    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });

  };


  return (

    <div className="
      bg-white
      rounded-2xl
      border
      p-6
      space-y-5
    ">


      <h2 className="text-2xl font-bold text-gray-800">
        Create New Event
      </h2>





      {/* Event Image */}

      <div className="
        border-2
        border-dashed
        rounded-xl
        p-6
        text-center
      ">

        <Image
          size={35}
          className="mx-auto text-gray-400"
        />

        <p className="text-gray-500 mt-2">
          Upload event image
        </p>


        <input
          type="file"
          className="mt-3"
          accept="image/*"
        />

      </div>







      {/* Event Title */}

      <input

        name="title"

        placeholder="Event title"

        value={event.title}

        onChange={handleChange}

        className="
          w-full
          border
          rounded-xl
          px-4
          py-3
          outline-none
          focus:ring-2
          focus:ring-green-600
        "

      />







      {/* Description */}

      <textarea

        name="description"

        placeholder="Describe the event..."

        value={event.description}

        onChange={handleChange}

        rows="5"

        className="
          w-full
          border
          rounded-xl
          px-4
          py-3
          outline-none
          focus:ring-2
          focus:ring-green-600
        "

      />









      {/* Date and Time */}

      <div className="
        grid
        md:grid-cols-2
        gap-4
      ">


        <div className="
          flex
          items-center
          gap-3
          border
          rounded-xl
          px-4
        ">

          <Calendar className="text-gray-400"/>


          <input

            type="date"

            name="date"

            value={event.date}

            onChange={handleChange}

            className="
              w-full
              py-3
              outline-none
            "

          />

        </div>






        <div className="
          flex
          items-center
          gap-3
          border
          rounded-xl
          px-4
        ">

          <Clock className="text-gray-400"/>


          <input

            type="time"

            name="time"

            value={event.time}

            onChange={handleChange}

            className="
              w-full
              py-3
              outline-none
            "

          />

        </div>


      </div>









      {/* University + Hall */}

      <div className="
        grid
        md:grid-cols-2
        gap-4
      ">




        {/* University Name */}

        <div className="
          flex
          items-center
          gap-3
          border
          rounded-xl
          px-4
        ">


          <MapPin className="text-gray-400"/>


          <input

            name="university"

            placeholder="University name"

            value={event.university}

            onChange={handleChange}

            className="
              w-full
              py-3
              outline-none
            "

          />


        </div>







        {/* Event Hall */}

        <div className="
          flex
          items-center
          gap-3
          border
          rounded-xl
          px-4
        ">


          <MapPin className="text-gray-400"/>


          <input

            name="hall"

            placeholder="Event hall (e.g. Amphitheatre A)"

            value={event.hall}

            onChange={handleChange}

            className="
              w-full
              py-3
              outline-none
            "

          />


        </div>



      </div>









      {/* Audience Selection */}

      <div>

        <h3 className="
          font-semibold
          mb-3
        ">
          Who can attend?
        </h3>



        <label className="
          flex
          gap-3
          mb-3
        ">


          <input

            type="radio"

            name="audience"

            value="all"

            checked={event.audience === "all"}

            onChange={handleChange}

          />


          All Universities


        </label>






        <label className="
          flex
          gap-3
          mb-3
        ">


          <input

            type="radio"

            name="audience"

            value="university"

            checked={event.audience === "university"}

            onChange={handleChange}

          />


          My University Only


        </label>







        <label className="flex gap-3">


          <input

            type="radio"

            name="audience"

            value="community"

            checked={event.audience === "community"}

            onChange={handleChange}

          />


          Selected Communities


        </label>


      </div>









      {/* Publish */}

      <button className="
        bg-[#005429]
        text-white
        px-6
        py-3
        rounded-xl
        font-semibold
        hover:bg-green-800
      ">

        Publish Event

      </button>


    </div>

  );

}


export default CreateEvent;