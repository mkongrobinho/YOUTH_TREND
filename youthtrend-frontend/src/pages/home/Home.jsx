import CreatePost from "../../components/feed/CreatePost";
import PostCard from "../../components/feed/PostCard";
import StoryCard from "../../components/feed/StoryCard";


function Home() {


  const posts = [

    {
      name: "Ivan Takamtsia",
      school: "Software Engineering",
      text: "Welcome to YouthTrend 🚀 A new way for students to connect.",
      image: "/images/campus.jpg",
      likes: 120,
      comments: 25,
    },


    {
      name: "Sarah Johnson",
      school: "Computer Science",
      text: "Looking for teammates for our university project.",
      image: "/images/project.jpg",
      likes: 85,
      comments: 14,
    }

  ];



  return (

    <div className="max-w-4xl mx-auto">


      {/* Stories */}

      <div className="
        flex
        gap-4
        overflow-x-auto
        pb-5
      ">

        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />

      </div>




      {/* Create Post */}

      <div className="mt-5">

        <CreatePost />

      </div>




      {/* Posts */}

      <div className="
        mt-6
        space-y-6
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