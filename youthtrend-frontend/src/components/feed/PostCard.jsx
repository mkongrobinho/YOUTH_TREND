import {
  Heart,
  MessageCircle,
  Share2,
  MoreHorizontal
} from "lucide-react";


function PostCard({ post }) {

  return (

    <div className="
      bg-white
      rounded-2xl
      border
      shadow-sm
      overflow-hidden
    ">


      {/* Header */}

      <div className="
        flex
        justify-between
        items-center
        p-5
      ">

        <div className="
          flex
          items-center
          gap-3
        ">

          <div className="
            w-12
            h-12
            rounded-full
            bg-green-100
            flex
            items-center
            justify-center
            font-bold
            text-[#005429]
          ">
            {post.name.charAt(0)}
          </div>


          <div>

            <h3 className="font-semibold">
              {post.name}
            </h3>

            <p className="text-sm text-gray-500">
              {post.school}
            </p>

          </div>

        </div>


        <MoreHorizontal 
          size={22}
          className="text-gray-500"
        />

      </div>



      {/* Text */}

      <div className="px-5 pb-4">

        <p className="text-gray-700">
          {post.text}
        </p>

      </div>




      {/* Post Image */}

      {post.image && (

        <div className="
          h-72
          bg-gray-100
          overflow-hidden
        ">

          <img
            src={post.image}
            alt="post"
            className="
              w-full
              h-full
              object-cover
            "
          />

        </div>

      )}




      {/* Stats */}

      <div className="
        flex
        justify-between
        px-5
        py-3
        text-sm
        text-gray-500
      ">

        <span>
          ❤️ {post.likes} Likes
        </span>

        <span>
          {post.comments} Comments
        </span>

      </div>




      {/* Actions */}

      <div className="
        border-t
        flex
        justify-around
        py-3
      ">


        <button className="
          flex
          items-center
          gap-2
          text-gray-600
        ">
          <Heart size={20}/>
          Like
        </button>



        <button className="
          flex
          items-center
          gap-2
          text-gray-600
        ">
          <MessageCircle size={20}/>
          Comment
        </button>



        <button className="
          flex
          items-center
          gap-2
          text-gray-600
        ">
          <Share2 size={20}/>
          Share
        </button>


      </div>


    </div>

  );

}


export default PostCard;