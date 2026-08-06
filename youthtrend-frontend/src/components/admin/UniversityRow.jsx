import {
  Eye,
  Pencil,
} from "lucide-react";

import { useNavigate } from "react-router-dom";


function UniversityRow({ university }) {

  const navigate = useNavigate();


  return (

    <tr className="
    border-t
    hover:bg-gray-50
    transition
    ">


      {/* University */}

      <td className="px-6 py-4">

        <div className="flex items-center gap-4">


          <img

            src={university.logo}

            alt={university.name}

            className="
            w-12
            h-12
            rounded-xl
            object-cover
            "

          />


          <div>

            <h3 className="font-semibold">

              {university.name}

            </h3>


            <p className="text-sm text-gray-500">

              {university.city}

            </p>


          </div>


        </div>


      </td>





      {/* Region */}

      <td className="px-6 py-4 text-gray-600">

        {university.region}

      </td>





      {/* Students */}

      <td className="px-6 py-4">

        {university.students.toLocaleString()}

      </td>





      {/* Communities */}

      <td className="px-6 py-4">

        {university.communities}

      </td>





      {/* Leaders */}

      <td className="px-6 py-4">

        {university.leaders}

      </td>





      {/* Status */}

      <td className="px-6 py-4">


        <span

          className={`
          px-3
          py-1
          rounded-full
          text-sm
          font-medium

          ${
            university.status === "Active"

            ? "bg-green-100 text-green-700"

            : "bg-red-100 text-red-700"

          }

          `}

        >

          {university.status}

        </span>


      </td>






      {/* Actions */}

      <td className="px-6 py-4">


        <div className="flex gap-3">


          {/* View */}

          <button

            onClick={() =>
              navigate(`/admin/universities/${university.id}`)
            }

            className="
            w-10
            h-10
            rounded-lg
            bg-blue-50
            text-blue-600
            flex
            items-center
            justify-center
            hover:bg-blue-100
            "

          >

            <Eye size={18}/>

          </button>





          {/* Edit */}

          <button

            onClick={() =>
              navigate(`/admin/universities/edit/${university.id}`)
            }

            className="
            w-10
            h-10
            rounded-lg
            bg-green-50
            text-green-700
            flex
            items-center
            justify-center
            hover:bg-green-100
            "

          >

            <Pencil size={18}/>

          </button>



        </div>


      </td>


    </tr>

  );

}


export default UniversityRow;