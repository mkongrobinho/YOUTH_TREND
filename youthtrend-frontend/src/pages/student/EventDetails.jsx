import {
  CalendarDays,
  MapPin,
  Users,
  ArrowLeft
} from "lucide-react";

import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";


const events = [

  {
    id: 1,
    title: "Campus Tech Hackathon",
    date: "August 15, 2026",
    location: "University Innovation Hub",
    people: 120,
    organizer: "YouthTrend Cameroon",

    image:
      "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",

    description:
      "A technology competition where students collaborate to build innovative solutions and showcase their skills.",

    avatars: [
      "https://images.pexels.com/photos/7683693/pexels-photo-7683693.jpeg?auto=compress&cs=tinysrgb&w=200",
      "https://images.pexels.com/photos/5940864/pexels-photo-5940864.jpeg?auto=compress&cs=tinysrgb&w=200",
      "https://images.pexels.com/photos/3791932/pexels-photo-3791932.jpeg?auto=compress&cs=tinysrgb&w=200"
    ]
  },


  {
    id: 2,
    title: "Student Developer Meetup",
    date: "August 22, 2026",
    location: "Computer Science Faculty",
    people: 80,
    organizer: "GDSC Cameroon",

    image:
      "https://images.pexels.com/photos/34162714/pexels-photo-34162714.jpeg?auto=compress&cs=tinysrgb&w=1000&q=80",

    description:
      "A meetup for developers to share knowledge, discuss technologies and create networking opportunities.",

    avatars: [
      "https://images.pexels.com/photos/19039168/pexels-photo-19039168.jpeg?auto=compress&cs=tinysrgb&w=200",
      "https://images.pexels.com/photos/2661255/pexels-photo-2661255.jpeg?auto=compress&cs=tinysrgb&w=200",
      "https://images.pexels.com/photos/16306779/pexels-photo-16306779.jpeg?auto=compress&cs=tinysrgb&w=200"
    ]
  },


  {
    id: 3,
    title: "Career Guidance Workshop",
    date: "September 5, 2026",
    location: "Main Campus Hall",
    people: 200,
    organizer: "YouthTrend Team",

    image:
      "https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=800",

    description:
      "A workshop helping students prepare for internships, careers and professional growth.",

    avatars: [
      "https://images.pexels.com/photos/19039168/pexels-photo-19039168.jpeg?auto=compress&cs=tinysrgb&w=200",
      "https://images.pexels.com/photos/2661255/pexels-photo-2661255.jpeg?auto=compress&cs=tinysrgb&w=200",
      "https://images.pexels.com/photos/16306779/pexels-photo-16306779.jpeg?auto=compress&cs=tinysrgb&w=200"
    ]
  }

];



function EventDetails(){

  const { id } = useParams();

  const navigate = useNavigate();


  const event = events.find(
    (item)=> item.id === Number(id)
  );


  const [joined,setJoined] = useState(false);

  const [attendees,setAttendees] = useState(
    event ? event.people : 0
  );



  const handleJoin = () => {

    if(joined){

      setAttendees(attendees - 1);

    }else{

      setAttendees(attendees + 1);

    }


    setJoined(!joined);

  };




  if(!event){

    return (

      <div className="p-6">

        <h1 className="text-2xl font-bold">
          Event not found
        </h1>

      </div>

    );

  }



  return (

    <div className="space-y-6">


      <button
        onClick={()=>navigate("/events")}
        className="
        flex
        items-center
        gap-2
        text-[#005429]
        font-medium
        "
      >

        <ArrowLeft size={20}/>

        Back to Events

      </button>





      <img
        src={event.image}
        alt={event.title}
        className="
        w-full
        h-80
        object-cover
        rounded-3xl
        "
      />





      <div className="
      bg-white
      rounded-3xl
      border
      p-8
      ">


        <h1 className="
        text-4xl
        font-bold
        text-[#005429]
        ">

          {event.title}

        </h1>


        <p className="text-gray-500 mt-2">
          Organized by {event.organizer}
        </p>



        <p className="
        text-gray-600
        mt-4
        text-lg
        ">

          {event.description}

        </p>





        <div className="
        mt-6
        space-y-4
        text-gray-600
        ">


          <div className="flex items-center gap-3">
            <CalendarDays/>
            {event.date}
          </div>



          <div className="flex items-center gap-3">
            <MapPin/>
            {event.location}
          </div>



          <div className="flex items-center gap-3">
            <Users/>
            {attendees} students attending
          </div>


        </div>






        <div className="mt-8">

          <h3 className="font-bold text-lg mb-4">
            Students attending
          </h3>


          <div className="flex">

            {event.avatars.map((avatar,index)=>(

              <img
                key={index}
                src={avatar}
                alt="Student"
                className="
                w-12
                h-12
                rounded-full
                object-cover
                border-2
                border-white
                -ml-2
                "
              />

            ))}

          </div>

        </div>






        <button

          onClick={handleJoin}

          className={`
          mt-8
          px-8
          py-3
          rounded-xl
          font-semibold

          ${
            joined
            ?
            "bg-gray-200 text-gray-700"
            :
            "bg-[#005429] text-white"
          }

          `}

        >

          {joined ? "Joined" : "Join Event"}

        </button>



      </div>


    </div>

  );

}


export default EventDetails;