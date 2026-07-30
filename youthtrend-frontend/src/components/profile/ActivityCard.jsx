import {
  Heart,
  MessageCircle,
  Share2
} from "lucide-react";


function ActivityCard() {

  return (

    <div className="
      bg-white
      rounded-2xl
      border
      shadow-sm
      p-6
    ">


      <h2 className="
        text-xl
        font-bold
        mb-5
      ">
        Recent Public Activity
      </h2>



      <div>

        <h3 className="font-bold text-lg">
          Built a new campus project 🚀
        </h3>


        <p className="text-gray-600 mt-2">
          Created a student collaboration platform with React.
        </p>



        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
          alt="Project"
          className="
            w-full
            h-56
            object-cover
            rounded-xl
            mt-4
          "
        />



        <div className="
          flex
          gap-8
          mt-4
          text-gray-500
        ">

          <button className="flex gap-2 items-center">
            <Heart size={18}/>
            Like
          </button>


          <button className="flex gap-2 items-center">
            <MessageCircle size={18}/>
            Comment
          </button>


          <button className="flex gap-2 items-center">
            <Share2 size={18}/>
            Share
          </button>


        </div>


      </div>


    </div>

  );

}


export default ActivityCard;