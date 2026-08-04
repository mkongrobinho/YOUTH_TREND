import { Eye, Pencil, Ban } from "lucide-react";
import { useNavigate } from "react-router-dom";
function UniversityRow({ university }) {
  const navigate = useNavigate();
  return (
    <tr className="border-b hover:bg-gray-50 transition">

      {/* University */}

      <td className="px-6 py-5">

        <div className="flex items-center gap-4">

          <img
            src={university.logo}
            alt={university.name}
            className="w-14 h-14 rounded-xl object-cover border"
          />

          <div>

            <h3 className="font-semibold text-gray-900">
              {university.name}
            </h3>

            <p className="text-sm text-gray-500">
              {university.city}
            </p>

          </div>

        </div>

      </td>

      {/* Region */}

      <td className="px-6">
        {university.region}
      </td>

      {/* Students */}

      <td className="px-6">
        {university.students.toLocaleString()}
      </td>

      {/* Communities */}

      <td className="px-6">
        {university.communities}
      </td>

      {/* Leaders */}

      <td className="px-6">
        {university.leaders}
      </td>

      {/* Status */}

      <td className="px-6">

        <span
          className={`
          px-4
          py-2
          rounded-full
          text-sm
          font-medium
          ${
            university.status === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-600"
          }
          `}
        >
          {university.status}
        </span>

      </td>

      {/* Actions */}

      <td className="px-6">

        <div className="flex gap-3">
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
  hover:bg-blue-100
  "
>
  <Eye size={18}/>
</button>

          <button
            className="
            w-10
            h-10
            rounded-lg
            bg-green-50
            text-green-700
            hover:bg-green-100
            "
          >
            <Pencil size={18}/>
          </button>

          <button
            className="
            w-10
            h-10
            rounded-lg
            bg-red-50
            text-red-600
            hover:bg-red-100
            "
          >
            <Ban size={18}/>
          </button>

        </div>

      </td>

    </tr>
  );
}

export default UniversityRow;