function CommentCard({ comment }) {
  return (
    <div className="flex gap-4 py-4 border-b">

      <img
        src={comment.avatar}
        alt={comment.name}
        className="w-12 h-12 rounded-full object-cover"
      />

      <div className="flex-1">

        <div className="bg-gray-100 rounded-2xl p-4">

          <div className="flex justify-between items-center">

            <h3 className="font-semibold">
              {comment.name}
            </h3>

            <span className="text-xs text-gray-500">
              {comment.time}
            </span>

          </div>

          <p className="mt-2 text-gray-700">
            {comment.text}
          </p>

        </div>

        <div className="flex gap-5 mt-2 text-sm text-gray-500">

          <button className="hover:text-green-700">
            Like
          </button>

          <button className="hover:text-green-700">
            Reply
          </button>

        </div>

      </div>

    </div>
  );
}

export default CommentCard;