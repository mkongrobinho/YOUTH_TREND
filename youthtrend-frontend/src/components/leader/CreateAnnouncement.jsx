import { Send } from "lucide-react";

function CreateAnnouncement() {

  return (
    <div className="bg-white rounded-2xl border p-6">

      <h2 className="text-xl font-bold mb-4">
        New Announcement
      </h2>


      <input
        placeholder="Announcement title"
        className="
          w-full
          border
          rounded-xl
          p-3
          mb-4
          outline-none
        "
      />


      <textarea
        placeholder="Write your announcement..."
        className="
          w-full
          border
          rounded-xl
          p-3
          h-32
          outline-none
        "
      />


      <div className="flex gap-4 mt-4">

        <select className="border rounded-xl px-4 py-2">

          <option>
            All Students
          </option>

          <option>
            Community Leaders
          </option>

          <option>
            Specific School
          </option>

        </select>


        <button className="
          bg-[#005429]
          text-white
          px-6
          py-2
          rounded-xl
          flex
          items-center
          gap-2
        ">

          <Send size={18}/>

          Publish

        </button>

      </div>


    </div>
  );
}


export default CreateAnnouncement;