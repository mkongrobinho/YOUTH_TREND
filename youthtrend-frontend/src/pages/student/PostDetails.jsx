import PostDetailsCard from "../../components/posts/PostDetailsCard";
import CommentCard from "../../components/posts/CommentCard";
import CommentInput from "../../components/posts/CommentInput";

const comments = [
  {
    id: 1,
    name: "John Doe",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    time: "5 min ago",
    text: "Amazing work! I really like the UI design.",
  },

  {
    id: 2,
    name: "Sarah Williams",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    time: "12 min ago",
    text: "Can't wait to see the backend connected!",
  },

  {
    id: 3,
    name: "Michael James",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
    time: "25 min ago",
    text: "YouthTrend is looking really professional.",
  },
];

function PostDetails() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">

      <PostDetailsCard />

      <CommentInput />

      <div className="bg-white rounded-2xl border p-6">

        <h2 className="text-2xl font-bold mb-6">
          Comments ({comments.length})
        </h2>

        <div className="space-y-5">
          {comments.map((comment) => (
            <CommentCard
              key={comment.id}
              comment={comment}
            />
          ))}
        </div>

      </div>

    </div>
  );
}

export default PostDetails;