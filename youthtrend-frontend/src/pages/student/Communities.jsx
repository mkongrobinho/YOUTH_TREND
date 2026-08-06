import { useState } from "react";

import CommunityCard from "../../components/community/CommunityCard";
import CommunityHeader from "../../components/community/CommunityHeader";
import CreateCommunity from "../../components/community/CreateCommunity";


const communities = [

  {
    id: 1,
    name: "AWS Community Cameroon",
    description:
      "A community for students and developers interested in AWS cloud computing, cloud careers and certifications.",
    members: 450,

    cover:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",

  students: [
  "https://images.pexels.com/photos/30714671/pexels-photo-30714671.jpeg?auto=compress&cs=tinysrgb&w=200",
  "https://images.pexels.com/photos/32275115/pexels-photo-32275115.jpeg?auto=compress&cs=tinysrgb&w=200",
  "https://images.pexels.com/photos/18658795/pexels-photo-18658795.jpeg?auto=compress&cs=tinysrgb&w=200"
]
  },



  {
    id: 2,
    name: "Claude Community Cameroon",

    description:
      "A community exploring Artificial Intelligence, Claude AI, machine learning and AI projects.",

    members: 320,

    cover:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",

   students: [
  "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200",
  "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
]
  },



  {
    id: 3,
    name: "Flutter Cameroon",

    description:
      "A community for Flutter developers building mobile applications with Dart.",

    members: 380,

    cover:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",

  students: [
  "https://images.pexels.com/photos/5984158/pexels-photo-5984158.jpeg?auto=compress&cs=tinysrgb&w=200",
  "https://images.pexels.com/photos/28935716/pexels-photo-28935716.jpeg?auto=compress&cs=tinysrgb&w=200"
]
  },



  {
    id: 4,
    name: "Yaounde WordPress Meetup",

    description:
      "A community for WordPress users, designers and developers sharing knowledge and building websites.",

    members: 250,

    cover:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80",

  students: [
  "https://images.pexels.com/photos/19518397/pexels-photo-19518397.jpeg?auto=compress&cs=tinysrgb&w=200",
  "https://images.pexels.com/photos/11440539/pexels-photo-11440539.jpeg?auto=compress&cs=tinysrgb&w=200"
]
  }

];



function Communities() {


  const [showCreate, setShowCreate] = useState(false);



  return (

    <div className="space-y-6">


      {/* Header */}

      <CommunityHeader
        openCreate={() => setShowCreate(true)}
      />





      {/* Search */}

      <div className="
        bg-white
        border
        rounded-2xl
        p-4
      ">

        <input

          placeholder="Search communities..."

          className="
            w-full
            bg-gray-100
            rounded-xl
            px-4
            py-3
            outline-none
          "

        />

      </div>






      {/* Communities List */}

      <div className="
        grid
        md:grid-cols-2
        xl:grid-cols-3
        gap-6
      ">


        {
          communities.map((community)=>(

            <CommunityCard

              key={community.id}

              community={community}

            />

          ))
        }


      </div>






      {/* Create Community Modal */}

      {
        showCreate && (

          <CreateCommunity

            close={() => setShowCreate(false)}

          />

        )
      }



    </div>

  );

}


export default Communities;