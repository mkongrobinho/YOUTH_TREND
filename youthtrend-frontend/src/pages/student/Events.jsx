import { useState } from "react";

import EventCard from "../../components/events/EventCard";
import EventHeader from "../../components/events/EventHeader";
import CreateEvent from "../../components/events/CreateEvent";

const events = [

  {
    id: 1,
    title: "Campus Tech Hackathon",
    date: "August 15, 2026",
    location: "University of Buea - ICT Innovation Hub",
    people: 120,
    organizer: "GDSC University of Buea",

    image:
      "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",

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
    location: "University of Yaoundé I - Faculty of Science",
    people: 80,
    organizer: "AWS Community Cameroon",

    image:
      "https://images.pexels.com/photos/34162714/pexels-photo-34162714.jpeg?auto=compress&cs=tinysrgb&w=1000&q=80",
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
    location: "University of Bamenda - Conference Hall",
    people: 200,
    organizer: "YouthTrend Cameroon",

    image:
      "https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=800",

   avatars: [
  "https://images.pexels.com/photos/19039168/pexels-photo-19039168.jpeg?auto=compress&cs=tinysrgb&w=200",
  "https://images.pexels.com/photos/2661255/pexels-photo-2661255.jpeg?auto=compress&cs=tinysrgb&w=200",
  "https://images.pexels.com/photos/16306779/pexels-photo-16306779.jpeg?auto=compress&cs=tinysrgb&w=200"
]
  }

];

function Events() {

  const [showCreate, setShowCreate] = useState(false);

  return (

    <div className="space-y-6">

      {/* Header */}

      <div onClick={() => setShowCreate(true)}>
        <EventHeader />
      </div>

      {/* Events */}

      <div
        className="
          grid
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
        "
      >

        {events.map((event) => (

          <EventCard
            key={event.id}
            event={event}
          />

        ))}

      </div>

      {/* Create Event */}

      {showCreate && (

        <CreateEvent
          close={() => setShowCreate(false)}
        />

      )}

    </div>

  );

}

export default Events;