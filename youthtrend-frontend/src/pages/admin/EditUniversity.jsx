import {
  ArrowLeft,
  Upload,
  Save,
  X,
} from "lucide-react";

import { useNavigate } from "react-router-dom";


function EditUniversity() {

  const navigate = useNavigate();


  return (

    <div className="space-y-8">


      {/* Header */}

      <div className="flex items-center gap-4">

        <button
          onClick={() => navigate(-1)}
          className="
          w-12 h-12
          rounded-xl
          border
          flex
          items-center
          justify-center
          hover:bg-gray-100
          "
        >
          <ArrowLeft size={22}/>
        </button>


        <div>

          <h1 className="text-4xl font-bold">
            Edit University
          </h1>

          <p className="text-gray-500 mt-2">
            Update university information.
          </p>

        </div>

      </div>



      {/* Cover Card */}

      <div className="
      bg-white
      rounded-2xl
      border
      overflow-hidden
      ">


        <div className="
        h-60
        bg-linear-to-r
        from-[#005429]
        to-green-400
        flex
        items-end
        justify-end
        p-6
        ">

          <button className="
          bg-white
          px-5
          py-3
          rounded-xl
          flex
          gap-2
          items-center
          shadow
          ">

            <Upload size={18}/>
            Change Cover

          </button>

        </div>



        <div className="p-8">


          <div className="
          flex
          justify-between
          items-center
          ">


            <img
              src="https://placehold.co/150x150"
              alt="logo"
              className="
              w-32
              h-32
              rounded-2xl
              border-4
              border-white
              shadow
              "
            />


            <div className="flex gap-4">


              <button
                onClick={() => navigate(-1)}
                className="
                px-6 py-3
                border
                rounded-xl
                flex
                gap-2
                items-center
                "
              >

                <X size={18}/>
                Cancel

              </button>



              <button
                className="
                px-6 py-3
                bg-[#005429]
                text-white
                rounded-xl
                flex
                gap-2
                items-center
                "
              >

                <Save size={18}/>
                Save Changes

              </button>


            </div>


          </div>


        </div>


      </div>





      {/* Information Form */}


      <div className="
      bg-white
      rounded-2xl
      border
      p-8
      ">


        <h2 className="
        text-2xl
        font-bold
        mb-6
        ">
          University Information
        </h2>



        <div className="
        grid
        md:grid-cols-2
        gap-6
        ">



          <input
            defaultValue="University of Buea"
            placeholder="University Name"
            className="
            border
            rounded-xl
            px-4
            py-3
            "
          />



          <input
            defaultValue="UB"
            placeholder="Short Name"
            className="
            border
            rounded-xl
            px-4
            py-3
            "
          />



          <input
            defaultValue="Buea"
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
              South West
            </option>

            <option>
              Centre
            </option>

            <option>
              Littoral
            </option>

          </select>



          <input
            defaultValue="https://www.ubuea.cm"
            placeholder="Website"
            className="
            border
            rounded-xl
            px-4
            py-3
            "
          />



          <input
            defaultValue="info@ubuea.cm"
            placeholder="Email"
            className="
            border
            rounded-xl
            px-4
            py-3
            "
          />



          <input
            defaultValue="+237 000000000"
            placeholder="Phone"
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
              Active
            </option>

            <option>
              Inactive
            </option>

          </select>



        </div>





        <textarea
          defaultValue="University description..."
          className="
          mt-6
          w-full
          h-32
          border
          rounded-xl
          px-4
          py-3
          "
        />



      </div>


    </div>

  );

}


export default EditUniversity;