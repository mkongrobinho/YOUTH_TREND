import {
  Image,
  Send
} from "lucide-react";


function CreateCommunityPost() {


  return (

    <div className="
      bg-white
      rounded-2xl
      border
      p-5
    ">


      {/* User */}

      <div className="
        flex
        items-center
        gap-3
        mb-4
      ">

        <img

          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80"

          alt="student"

          className="
            w-12
            h-12
            rounded-full
            object-cover
          "

        />


        <div>

          <h3 className="font-semibold">
            Ivan Takam
          </h3>


          <p className="text-sm text-gray-500">
            Posting in AWS Community Cameroon
          </p>

        </div>


      </div>






      {/* Title */}

      <input

        placeholder="Post title..."

        className="
          w-full
          border
          rounded-xl
          px-4
          py-3
          mb-3
          outline-none
          focus:border-green-700
        "

      />






      {/* Text */}

      <textarea

        placeholder="Share something with your community..."

        rows="4"

        className="
          w-full
          border
          rounded-xl
          px-4
          py-3
          resize-none
          outline-none
          focus:border-green-700
        "

      />








      {/* Options */}

      <div className="
        flex
        justify-between
        items-center
        mt-4
      ">


        <button

          className="
            flex
            items-center
            gap-2
            text-gray-600
            hover:text-green-700
          "

        >

          <Image size={22}/>

          Add Image

        </button>





        <button

          className="
            flex
            items-center
            gap-2
            bg-green-700
            text-white
            px-6
            py-3
            rounded-xl
            hover:bg-green-800
          "

        >

          Publish

          <Send size={18}/>

        </button>



      </div>



    </div>

  );

}


export default CreateCommunityPost;