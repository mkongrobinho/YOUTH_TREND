import { Users } from "lucide-react";
import { useNavigate } from "react-router-dom";


function CommunityCard({ community }) {


  const navigate = useNavigate();



  return (

    <div className="
      bg-white
      rounded-2xl
      border
      overflow-hidden
      shadow-sm
    ">



      {/* Cover Image */}

      <img
        src={community.cover}
        alt={community.name}
        className="
          w-full
          h-40
          object-cover
        "
      />





      {/* Content */}

      <div className="p-5">


        <h2 className="
          text-xl
          font-bold
        ">
          {community.name}
        </h2>



        <p className="
          text-gray-500
          text-sm
          mt-2
          line-clamp-2
        ">
          {community.description}
        </p>





        {/* Members */}

        <div className="
          flex
          items-center
          gap-2
          text-gray-500
          mt-4
        ">

          <Users size={18}/>

          <span>
            {community.members} Members
          </span>


        </div>






        {/* Student avatars */}

        <div className="
          flex
          mt-4
        ">


          {
            community.students?.map((student,index)=>(

              <img

                key={index}

                src={student}

                alt="student"

                className="
                  w-9
                  h-9
                  rounded-full
                  object-cover
                  border-2
                  border-white
                  -ml-2
                "

              />

            ))
          }


        </div>







        {/* Button */}

        <button

          onClick={() =>
            navigate(`/community/${community.id}`)
          }

          className="
            mt-5
            w-full
            bg-green-700
            text-white
            py-3
            rounded-xl
            hover:bg-green-800
          "

        >

          View Community

        </button>


      </div>


    </div>

  );

}


export default CommunityCard;