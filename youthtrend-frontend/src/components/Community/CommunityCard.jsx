import { Users } from "lucide-react";


function CommunityCard({ community }) {

  return (

    <div className="
      bg-white
      rounded-2xl
      border
      overflow-hidden
      shadow-sm
      hover:shadow-md
      transition
    ">


      {/* Cover Image */}

      <img
        src={community.cover}
        alt={community.name}
        className="
          w-full
          h-44
          object-cover
        "
      />



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
          mt-4
          text-gray-500
        ">

          <Users size={18}/>

          <span>
            {community.members} members
          </span>

        </div>





        {/* Student Avatars */}

        <div className="
          flex
          items-center
          mt-4
        ">


          {
            community.students.map((student,index)=>(

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
                  first:ml-0
                "
              />

            ))
          }


        </div>





        <button
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
          Join Community
        </button>



      </div>


    </div>

  );

}


export default CommunityCard;