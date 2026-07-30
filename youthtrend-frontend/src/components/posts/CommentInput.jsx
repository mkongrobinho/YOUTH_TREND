import { Image, Paperclip, Smile, Send } from "lucide-react";

function CommentInput() {
  return (
    <div className="bg-white rounded-2xl border p-4">

      <div className="flex items-center gap-3">

        {/* User Avatar */}

        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80"
          alt="Student"
          className="w-11 h-11 rounded-full object-cover"
        />

        {/* Comment Input */}

        <input
          type="text"
          placeholder="Write a comment..."
          className="
            flex-1
            border
            rounded-full
            px-5
            py-3
            outline-none
            focus:border-green-600
          "
        />

        {/* Emoji */}

        <button className="text-gray-500 hover:text-green-700">
          <Smile size={20} />
        </button>

        {/* Image */}

        <button className="text-gray-500 hover:text-green-700">
          <Image size={20} />
        </button>

        {/* Attachment */}

        <button className="text-gray-500 hover:text-green-700">
          <Paperclip size={20} />
        </button>

        {/* Send */}

        <button
          className="
            bg-green-700
            hover:bg-green-800
            text-white
            p-3
            rounded-full
          "
        >
          <Send size={20} />
        </button>

      </div>

    </div>
  );
}

export default CommentInput;