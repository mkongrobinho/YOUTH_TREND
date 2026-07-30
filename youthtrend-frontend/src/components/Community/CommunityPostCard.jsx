import {
  Heart,
  MessageCircle,
  Share2
} from "lucide-react";


function CommunityPostCard({ post }) {


  return (

    <div className="
      bg-white
      rounded-2xl
      border
      p-5
    ">


      {/* Author */}

      <div className="
        flex
        items-center
        gap-3
      ">


        <img

          src={post.avatar}

          alt={post.author}

          className="
            w-12
            h-12
            rounded-full
            object-cover
          "

        />


        <div>

          <h3 className="font-semibold">
            {post.author}
          </h3>


          <p className="text-sm text-gray-500">
            {post.time}
          </p>

        </div>


      </div>






      {/* Title */}

      <h2 className="
        text-xl
        font-bold
        mt-5
      ">

        {post.title}

      </h2>







      {/* Content */}

      <p className="
        text-gray-700
        mt-3
      ">

        {post.content}

      </p>








      {/* Image */}

      {
        post.image && (

          <img

            src={post.image}

            alt="post"

            className="
              w-full
              h-64
              object-cover
              rounded-xl
              mt-4
            "

          />

        )
      }








      {/* Actions */}

      <div className="
        flex
        justify-around
        border-t
        mt-5
        pt-4
      ">


        <button className="
          flex
          items-center
          gap-2
          text-gray-500
          hover:text-green-700
        ">

          <Heart size={20}/>

          Like

        </button>





        <button className="
          flex
          items-center
          gap-2
          text-gray-500
          hover:text-green-700
        ">

          <MessageCircle size={20}/>

          Comment

        </button>





        <button className="
          flex
          items-center
          gap-2
          text-gray-500
          hover:text-green-700
        ">

          <Share2 size={20}/>

          Share

        </button>



      </div>




    </div>

  );

}


export default CommunityPostCard;