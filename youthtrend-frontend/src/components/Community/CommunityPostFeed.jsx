import CommunityPostCard from "./CommunityPostCard";


function CommunityPostFeed() {


  const posts = [

    {
      id: 1,

      author: "Ivan Takam",

      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",

      time: "2 hours ago",

      title:
        "AWS Cloud Workshop Coming Soon 🚀",

      content:
        "We are organizing a cloud workshop for students interested in AWS, cloud computing and certifications.",

      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80"

    },



    {
      id: 2,

      author: "Grace M.",

      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",

      time: "Yesterday",

      title:
        "My first AWS project",

      content:
        "I created my first cloud project using AWS services. Happy to share my experience with the community.",

      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80"

    }

  ];





  return (

    <div className="
      space-y-5
    ">


      {
        posts.map((post)=>(

          <CommunityPostCard

            key={post.id}

            post={post}

          />

        ))
      }


    </div>

  );

}


export default CommunityPostFeed;