import {
  Users,
  MapPin
} from "lucide-react";

import CreateCommunityPost from "../../components/community/CreateCommunityPost";
import CommunityPostFeed from "../../components/community/CommunityPostFeed";


function CommunityDetails() {

  return (

    <div className="
      max-w-5xl
      mx-auto
      space-y-6
    ">


      {/* Community Header */}

      <div className="
        bg-white
        rounded-2xl
        border
        overflow-hidden
      ">


        {/* Cover Image */}

        <div className="
          h-48
          bg-cover
          bg-center
          bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644')]
        ">
        </div>





        <div className="
          p-6
        ">


          <div className="
            flex
            justify-between
            items-center
          ">


            <div>

              <h1 className="
                text-3xl
                font-bold
              ">
                AI Developers Community
              </h1>


              <p className="
                text-gray-500
                mt-2
              ">
                A place for students interested in
                Artificial Intelligence and technology.
              </p>


            </div>





            <button className="
              bg-green-700
              text-white
              px-6
              py-3
              rounded-xl
            ">
              Join Community
            </button>


          </div>






          {/* Community Info */}

          <div className="
            flex
            gap-6
            mt-5
            text-gray-500
          ">


            <span className="
              flex
              items-center
              gap-2
            ">

              <Users size={20}/>

              2.5k Members

            </span>





            <span className="
              flex
              items-center
              gap-2
            ">

              <MapPin size={20}/>

              Cameroon Universities

            </span>


          </div>


        </div>


      </div>








      {/* Create Post */}

      <CreateCommunityPost />







      {/* Community Feed */}

      <CommunityPostFeed />



    </div>

  );

}


export default CommunityDetails;