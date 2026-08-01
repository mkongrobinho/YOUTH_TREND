import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Edit,
  Trash2
} from "lucide-react";


function EventDetails() {


  const event = {

    title: "AI & Technology Innovation Meetup",

    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",

    description:
      "A campus event where students meet, share technology ideas, present projects and build new connections.",

    date: "15 August 2026",

    time: "10:00 AM",

    university: "University of Buea",

    hall: "Faculty of Engineering Amphitheatre A",

    audience: "All Universities",

    interested: 120

  };



  const students = [
    "Ivan Takam",
    "Sarah Johnson",
    "Kevin Tanyi",
    "Mary Eposi"
  ];



  return (

    <div className="space-y-6">



      {/* Header */}

      <div className="
        flex
        justify-between
        items-center
      ">


        <h1 className="
          text-4xl
          font-bold
        ">

          Event Details

        </h1>




        <div className="flex gap-3">


          <button className="
            flex
            items-center
            gap-2
            bg-green-100
            text-[#005429]
            px-4
            py-2
            rounded-xl
          ">

            <Edit size={18}/>

            Edit

          </button>



          <button className="
            flex
            items-center
            gap-2
            bg-red-100
            text-red-600
            px-4
            py-2
            rounded-xl
          ">

            <Trash2 size={18}/>

            Delete

          </button>


        </div>


      </div>








      {/* Main Card */}

      <div className="
        bg-white
        rounded-2xl
        border
        overflow-hidden
      ">


        <img

          src={event.image}

          alt="event"

          className="
            w-full
            h-72
            object-cover
          "

        />



        <div className="p-8 space-y-5">


          <h2 className="
            text-3xl
            font-bold
          ">

            {event.title}

          </h2>





          <div className="
            grid
            md:grid-cols-2
            gap-5
          ">


            <p className="flex gap-3 text-gray-600">

              <Calendar/>

              {event.date}

            </p>



            <p className="flex gap-3 text-gray-600">

              <Clock/>

              {event.time}

            </p>



            <p className="flex gap-3 text-gray-600">

              <MapPin/>

              {event.university}

            </p>



            <p className="flex gap-3 text-gray-600">

              <MapPin/>

              {event.hall}

            </p>


          </div>








          <div className="
            flex
            items-center
            gap-3
            text-gray-600
          ">

            <Users/>

            {event.audience}

          </div>






          <div>

            <h3 className="
              text-xl
              font-bold
              mb-2
            ">

              About Event

            </h3>


            <p className="text-gray-600">

              {event.description}

            </p>


          </div>


        </div>


      </div>








      {/* Interested Students */}

      <div className="
        bg-white
        rounded-2xl
        border
        p-6
      ">


        <h2 className="
          text-2xl
          font-bold
          mb-4
        ">

          Interested Students ({event.interested})

        </h2>



        <div className="space-y-3">


          {
            students.map((student,index)=>(

              <div

                key={index}

                className="
                  border
                  rounded-xl
                  px-4
                  py-3
                "

              >

                {student}

              </div>

            ))
          }


        </div>


      </div>



    </div>

  );

}


export default EventDetails;