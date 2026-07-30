import CreatePost from "../../components/feed/CreatePost";
import PostCard from "../../components/feed/PostCard";
import StoryCard from "../../components/feed/StoryCard";


function Home() {

  const posts = [
    {
      name: "Christian Ivan",
      school: "University Student",
      text: "Welcome to YouthTrend 🎓. A new way for students to connect, share and grow.",
      likes: 120,
      comments: 24
    },

    {
      name: "Sarah M.",
      school: "Computer Science",
      text: "Looking for teammates for our software engineering project.",
      likes: 85,
      comments: 15
    }
  ];


  return (

    <div className="p-6">


      <h1 className="
        text-3xl
        font-bold
        text-[#005429]
      ">
        Home Feed
      </h1>


      <p className="text-gray-500 mt-2">
        Connect with students across campuses.
      </p>



      {/* Stories */}

      <div className="
        flex
        gap-4
        mt-6
        overflow-x-auto
      ">

        <StoryCard />

        <StoryCard />

        <StoryCard />

      </div>



      {/* Create Post */}

      <div className="mt-6">

        <CreatePost />

      </div>





      {/* Posts */}

      <div className="
        mt-6
        space-y-6
        max-w-3xl
      ">


        {posts.map((post,index)=>(

          <PostCard
            key={index}
            post={post}
          />

        ))}


      </div>


    </div>

  );

}


export default Home;