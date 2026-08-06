import {
  Upload,
  ArrowLeft
} from "lucide-react";

import { useNavigate } from "react-router-dom";


function AddUniversity(){

  const navigate = useNavigate();


  return (

    <div className="space-y-8">


      {/* Header */}

      <div className="flex items-center gap-4">

        <button
          onClick={() => navigate(-1)}
          className="
          p-3
          rounded-xl
          border
          hover:bg-gray-50
          "
        >

          <ArrowLeft size={20}/>

        </button>


        <div>

          <h1 className="
          text-4xl
          font-bold
          ">
            Add University
          </h1>

          <p className="text-gray-500 mt-2">
            Register a new university on YouthTrend.
          </p>

        </div>


      </div>





      {/* Form */}

      <div className="
      bg-white
      border
      rounded-2xl
      p-8
      space-y-6
      ">


        {/* Images */}

        <div className="
        grid
        md:grid-cols-2
        gap-6
        ">


          <div>

            <label className="font-semibold">
              University Logo
            </label>

            <div className="
            mt-3
            border-2
            border-dashed
            rounded-xl
            h-40
            flex
            items-center
            justify-center
            text-gray-400
            ">

              <Upload/>

              Upload Logo

            </div>

          </div>




          <div>

            <label className="font-semibold">
              Cover Image
            </label>


            <div className="
            mt-3
            border-2
            border-dashed
            rounded-xl
            h-40
            flex
            items-center
            justify-center
            text-gray-400
            ">

              <Upload/>

              Upload Cover

            </div>


          </div>


        </div>





        {/* Inputs */}

        <div className="
        grid
        md:grid-cols-2
        gap-6
        ">


          <input
            placeholder="University Name"
            className="
            border
            rounded-xl
            px-4
            py-3
            "
          />


          <input
            placeholder="City"
            className="
            border
            rounded-xl
            px-4
            py-3
            "
          />



          <select
            className="
            border
            rounded-xl
            px-4
            py-3
            "
          >

            <option>
              Select Region
            </option>

            <option>
              Centre
            </option>

            <option>
              Littoral
            </option>

            <option>
              South West
            </option>

            <option>
              North West
            </option>


          </select>



          <input
            placeholder="Website"
            className="
            border
            rounded-xl
            px-4
            py-3
            "
          />


        </div>





        <textarea
          placeholder="University description..."
          className="
          w-full
          border
          rounded-xl
          px-4
          py-3
          h-32
          "
        />





        <button
          className="
          bg-[#005429]
          text-white
          px-8
          py-3
          rounded-xl
          hover:bg-green-800
          "
        >

          Save University

        </button>



      </div>


    </div>

  );

}


export default AddUniversity;