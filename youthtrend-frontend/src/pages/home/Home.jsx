import CreatePost from "../../components/feed/CreatePost";
import PostCard from "../../components/feed/PostCard";
import StoryCard from "../../components/feed/StoryCard";


function Home() {


 const posts = [

  {
    name: "Ivan Takamtsia",
    school: "University of Bamenda • Software Engineering",
    text:
      "Excited to keep building YouthTrend! 🚀 Looking forward to connecting students across Cameroon through one platform.",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
    likes: 187,
    comments: 34,
  },


  {
    name: "Brenda Ndz i",
    school: "University of Buea • Computer Science",
    text:
      "We're looking for two teammates for our final-year software engineering project. Anyone interested?",
    image:
      "https://images.pexels.com/photos/1184572/pexels-photo-1184572.jpeg?auto=compress&cs=tinysrgb&w=800",
    avatar:
      "https://images.unsplash.com/photo-1524255684952-d7185b509571?w=300&q=80",
    likes: 146,
    comments: 29,
  },


  {
    name: "Cedric Mbah",
    school: "University of Yaoundé I • ICT",
    text:
      "Today's coding session at the innovation hub was amazing! We learned React and built our first dashboard.",
    image:
      "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
    avatar:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=300&q=80",
    likes: 231,
    comments: 48,
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