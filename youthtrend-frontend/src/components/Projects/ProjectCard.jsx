import { Users, Code } from "lucide-react";
import { useNavigate } from "react-router-dom";


function ProjectCard({ project }) {

  const navigate = useNavigate();


  // Prevent crash if project data is missing
  if (!project) {
    return null;
  }


  return (

    <div

      onClick={() => navigate(`/projects/${project.id}`)}

      className="
        bg-white
        rounded-2xl
        border
        overflow-hidden
        shadow-sm
        hover:shadow-md
        transition
        cursor-pointer
      "

    >


      {/* Project Image */}

      <img

        src={project.image}

        alt={project.title}

        className="
          w-full
          h-44
          object-cover
        "

      />





      <div className="p-5">


        {/* Title */}

        <h2 className="
          text-xl
          font-bold
          text-[#005429]
        ">

          {project.title}

        </h2>





        {/* Description */}

        <p className="
          text-gray-600
          mt-2
          text-sm
        ">

          {project.description}

        </p>





        {/* Technology */}

        <div className="
          flex
          items-center
          gap-2
          mt-4
          text-gray-600
          text-sm
        ">

          <Code size={18}/>

          <span>
            {project.tech}
          </span>

        </div>





        {/* Members */}

        <div className="
          flex
          items-center
          gap-2
          mt-3
          text-gray-600
          text-sm
        ">

          <Users size={18}/>

          <span>
            {project.members} members
          </span>

        </div>





        {/* Team Avatars */}

        <div className="
          flex
          mt-5
        ">


          {
            project.students?.map((student,index)=>(

              <img

                key={index}

                src={student}

                alt="team member"

                className="
                  w-9
                  h-9
                  rounded-full
                  border-2
                  border-white
                  -ml-2
                "

              />

            ))
          }


        </div>





        {/* View Button */}

        <button

          onClick={(e)=>{

            e.stopPropagation();

            navigate(`/projects/${project.id}`);

          }}

          className="
            mt-5
            bg-[#005429]
            text-white
            px-5
            py-2
            rounded-xl
          "

        >

          View Project

        </button>



      </div>


    </div>

  );

}


export default ProjectCard;