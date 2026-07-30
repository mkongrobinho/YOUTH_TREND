import LikeBar from "./LikeBar";

function PostDetailsCard() {
  return (
    <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">

      {/* Post Header */}

      <div className="flex items-center justify-between p-5">

        <div className="flex items-center gap-4">

          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
            alt="Student"
            className="w-14 h-14 rounded-full object-cover"
          />

          <div>

            <h2 className="font-bold text-lg">
              Grace M.
            </h2>

            <p className="text-sm text-gray-500">
              Software Engineering • 2 hours ago
            </p>

          </div>

        </div>

        <button className="text-gray-400 text-2xl">
          ⋮
        </button>

      </div>





      {/* Post Content */}

      <div className="px-5 pb-5">

        <p className="text-gray-700 leading-7">
          🎉 We finally completed the YouthTrend UI!
          The next step is connecting all the pages to the backend
          and making the platform fully functional for students.
        </p>

      </div>





      {/* Post Image */}

      <img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80"
        alt="Post"
        className="w-full h-96 object-cover"
      />





      {/* Like Bar */}

      <LikeBar
        likes={245}
        comments={36}
        shares={12}
      />

    </div>
  );
}

export default PostDetailsCard;