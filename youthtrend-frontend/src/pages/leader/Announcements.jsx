import { Plus } from "lucide-react";

import CreateAnnouncement from "../../components/leader/CreateAnnouncement";
import AnnouncementCard from "../../components/leader/AnnouncementCard";


function Announcements() {

  const announcements = [
    {
      title: "Campus Leadership Meeting",
      message:
        "All community leaders are invited to attend the monthly leadership meeting.",
      date: "July 31, 2026",
      audience: "All Leaders",
      pinned: true,
    },

    {
      title: "New Student Guidelines",
      message:
        "Please review the updated community rules and student guidelines.",
      date: "July 28, 2026",
      audience: "All Students",
      pinned: false,
    },

    {
      title: "Innovation Challenge",
      message:
        "Students can now register for the campus innovation competition.",
      date: "July 25, 2026",
      audience: "Computer Science Students",
      pinned: false,
    },
  ];



  return (
    <div className="space-y-6">


      {/* Header */}

      <div className="flex justify-between items-center">


        <div>

          <h1 className="text-4xl font-bold">
            Announcements
          </h1>


          <p className="text-gray-500 mt-2">
            Create and manage official community announcements.
          </p>

        </div>




        <button
          className="
            flex
            items-center
            gap-2
            bg-[#005429]
            text-white
            px-5
            py-3
            rounded-xl
          "
        >

          <Plus size={20}/>

          Create Announcement

        </button>


      </div>





      {/* Create Announcement Component */}

      <CreateAnnouncement />






      {/* Announcement List */}

      <div className="space-y-5">


        {announcements.map((item,index)=>(

          <AnnouncementCard

            key={index}

            title={item.title}

            message={item.message}

            date={item.date}

            audience={item.audience}

            pinned={item.pinned}

          />

        ))}


      </div>



    </div>
  );
}


export default Announcements;