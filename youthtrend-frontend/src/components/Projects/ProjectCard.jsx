import { Users, Code2 } from "lucide-react";


function ProjectCard({ project }) {

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


        <h2 className="
          text-xl
          font-bold
        ">
          {project.title}
        </h2>



        <p className="
          text-gray-500
          text-sm
          mt-2
          line-clamp-3
        ">
          {project.description}
        </p>





        {/* Technologies */}

        <div className="
          flex
          items-center
          gap-2
          mt-4
          text-green-700
        ">

          <Code2 size={18}/>

          <span className="
            text-sm
          ">
            {project.tech}
          </span>

        </div>





        {/* Team */}

        <div className="
          flex
          items-center
          gap-2
          mt-4
          text-gray-500
        ">

          <Users size={18}/>

          <span>
            {project.members} members
          </span>

        </div>





        {/* Student Avatars */}

        <div className="
          flex
          mt-4
        ">


          {
            project.students.map((student,index)=>(

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
          View Project
        </button>


      </div>


    </div>

  );

}


export default ProjectCard;