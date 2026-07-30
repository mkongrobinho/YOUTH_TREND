import { useState } from "react";

import EventCard from "../../components/events/EventCard";
import EventHeader from "../../components/events/EventHeader";
import CreateEvent from "../../components/events/CreateEvent";


const events = [

  {
    id: 1,
    title: "Campus Tech Hackathon",
    date: "August 15, 2026",
    location: "University Innovation Hub",
    people: 120,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
  },


  {
    id: 2,
    title: "Student Developer Meetup",
    date: "August 22, 2026",
    location: "Computer Science Faculty",
    people: 80,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
  },


  {
    id: 3,
    title: "Career Guidance Workshop",
    date: "September 5, 2026",
    location: "Main Campus Hall",
    people: 200,
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
  }

];



function Events() {


  const [showCreate, setShowCreate] = useState(false);



  return (

    <div className="
      space-y-6
    ">


      {/* Header */}

      <div onClick={() => setShowCreate(true)}>

        <EventHeader />

      </div>





      {/* Events */}

      <div className="
        grid
        md:grid-cols-2
        xl:grid-cols-3
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





      {/* Create Event Modal */}

      {
        showCreate && (

          <CreateEvent
            close={() => setShowCreate(false)}
          />

        )
      }



    </div>

  );

}


export default Events;