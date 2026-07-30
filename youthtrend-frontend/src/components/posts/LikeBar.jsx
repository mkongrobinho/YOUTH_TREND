import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark
} from "lucide-react";

function LikeBar({
  likes = 245,
  comments = 36,
  shares = 12,
  saved = false,
}) {
  return (
    <div className="bg-white rounded-b-2xl border-x border-b">

      {/* Statistics */}

      <div className="flex justify-between px-5 py-3 text-sm text-gray-500">

        <span>{likes} Likes</span>

        <div className="flex gap-4">
          <span>{comments} Comments</span>
          <span>{shares} Shares</span>
        </div>

      </div>

      <hr />

      {/* Actions */}

      <div className="grid grid-cols-4">

        <button
          className="
            flex
            items-center
            justify-center
            gap-2
            py-3
            hover:bg-gray-100
            hover:text-green-700
            transition
          "
        >
          <Heart size={20} />
          <span>Like</span>
        </button>

        <button
          className="
            flex
            items-center
            justify-center
            gap-2
            py-3
            hover:bg-gray-100
            hover:text-green-700
            transition
          "
        >
          <MessageCircle size={20} />
          <span>Comment</span>
        </button>

        <button
          className="
            flex
            items-center
            justify-center
            gap-2
            py-3
            hover:bg-gray-100
            hover:text-green-700
            transition
          "
        >
          <Share2 size={20} />
          <span>Share</span>
        </button>

        <button
          className="
            flex
            items-center
            justify-center
            py-3
            hover:bg-gray-100
            hover:text-green-700
            transition
          "
        >
          <Bookmark
            size={20}
            fill={saved ? "currentColor" : "none"}
          />
        </button>

      </div>

    </div>
  );
}

export default LikeBar;