import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";


function UniversityHeader(){

  const navigate = useNavigate();


  return (

    <div className="
    flex
    justify-between
    items-center
    ">


      <div>

        <h1 className="
        text-4xl
        font-bold
        text-gray-900
        ">
          University Management
        </h1>


        <p className="text-gray-500 mt-2">
          Manage all registered universities across YouthTrend.
        </p>


      </div>



      <button

        onClick={() =>
          navigate("/admin/universities/add")
        }

        className="
        flex
        items-center
        gap-2
        bg-[#005429]
        text-white
        px-6
        py-3
        rounded-xl
        hover:bg-green-800
        "

      >

        <Plus size={18}/>

        Add University

      </button>



    </div>

  );

}


export default UniversityHeader;