import {
  Image,
  Video,
  Smile,
  Send
} from "lucide-react";


function CreatePost() {

  return (

    <div className="
      bg-white
      rounded-2xl
      border
      shadow-sm
      p-5
    ">


      {/* User input */}

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
          text-[#005429]
          font-bold
        ">
          YT
        </div>


        <input
          type="text"
          placeholder="Share something with your campus..."
          className="
            flex-1
            bg-gray-100
            rounded-full
            px-5
            py-3
            outline-none
          "
        />

      </div>




      {/* Actions */}

      <div className="
        flex
        justify-between
        border-t
        mt-5
        pt-4
      ">


        <button className="
          flex
          items-center
          gap-2
          text-gray-600
          hover:text-green-600
        ">
          <Image size={20}/>
          Photo
        </button>



        <button className="
          flex
          items-center
          gap-2
          text-gray-600
          hover:text-blue-600
        ">
          <Video size={20}/>
          Video
        </button>



        <button className="
          flex
          items-center
          gap-2
          text-gray-600
          hover:text-yellow-500
        ">
          <Smile size={20}/>
          Feeling
        </button>



        <button className="
          bg-[#005429]
          text-white
          px-5
          py-2
          rounded-xl
          flex
          items-center
          gap-2
        ">
          <Send size={18}/>
          Post
        </button>


      </div>


    </div>

  );

}


export default CreatePost;