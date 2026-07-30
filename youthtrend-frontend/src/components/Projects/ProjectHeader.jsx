import { Rocket } from "lucide-react";


function ProjectHeader({ openCreate }) {

  return (

    <div className="
      bg-white
      rounded-2xl
      border
      p-6
      flex
      justify-between
      items-center
    ">


      <div className="
        flex
        items-center
        gap-4
      ">


        <div className="
          w-12
          h-12
          rounded-full
          bg-green-100
          flex
          items-center
          justify-center
          text-green-700
        ">

          <Rocket size={26}/>

        </div>




        <div>

          <h1 className="
            text-3xl
            font-bold
          ">
            Projects
          </h1>


          <p className="
            text-gray-500
          ">
            Collaborate with students and build amazing ideas.
          </p>


        </div>


      </div>





      <button
        onClick={openCreate}
        className="
          bg-green-700
          text-white
          px-5
          py-3
          rounded-xl
          hover:bg-green-800
        "
      >
        Create Project
      </button>



    </div>

  );

}


export default ProjectHeader;