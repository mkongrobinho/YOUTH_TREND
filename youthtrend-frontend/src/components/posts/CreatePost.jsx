import { Image, Send } from "lucide-react";
import { useState } from "react";


function CreatePost() {

  const [content, setContent] = useState("");


  const handlePost = () => {

    if(!content.trim()) return;

    console.log("New post:", content);

    setContent("");

  };


  return (

    <div className="
      bg-white
      rounded-2xl
      border
      p-5
      shadow-sm
    ">


      <div className="
        flex
        gap-3
      ">


        <div className="
          w-12
          h-12
          rounded-full
          bg-[#005429]
          text-white
          flex
          items-center
          justify-center
          font-bold
        ">

          IT

        </div>



        <textarea

          value={content}

          onChange={(e)=>setContent(e.target.value)}

          placeholder="Share something with your campus..."

          className="
            flex-1
            bg-gray-100
            rounded-xl
            p-3
            outline-none
            resize-none
            h-24
          "

        />


      </div>





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
          hover:text-[#005429]
          "
        >

          <Image size={20}/>

          Photo

        </button>





        <button

          onClick={handlePost}

          className="
          bg-[#005429]
          text-white
          px-5
          py-2
          rounded-xl
          flex
          items-center
          gap-2
          "

        >

          <Send size={18}/>

          Post

        </button>


      </div>



    </div>

  );

}


export default CreatePost;