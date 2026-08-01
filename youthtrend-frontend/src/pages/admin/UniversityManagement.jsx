import { Search, Plus, Eye, Pencil, Ban } from "lucide-react";

const universities = [
  {
    id: 1,
    name: "University of Buea",
    city: "Buea",
    students: 18420,
    communities: 42,
    leaders: 18,
    status: "Active",
  },
  {
    id: 2,
    name: "University of Yaoundé I",
    city: "Yaoundé",
    students: 22150,
    communities: 56,
    leaders: 24,
    status: "Active",
  },
  {
    id: 3,
    name: "University of Douala",
    city: "Douala",
    students: 19840,
    communities: 48,
    leaders: 20,
    status: "Inactive",
  },
];

function UniversityManagement() {
  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-4xl font-bold">
            University Management
          </h1>

          <p className="text-gray-500 mt-2">
            Manage all registered universities on YouthTrend.
          </p>
        </div>

        <button
          className="
          bg-[#005429]
          text-white
          px-5
          py-3
          rounded-xl
          flex
          items-center
          gap-2
          hover:bg-green-800
          "
        >
          <Plus size={18} />
          Add University
        </button>

      </div>

      {/* Search */}

      <div className="bg-white rounded-2xl border p-6">

        <div className="
        flex
        items-center
        border
        rounded-xl
        px-4
        py-3
        ">

          <Search
            size={20}
            className="text-gray-400"
          />

          <input
            placeholder="Search university..."
            className="ml-3 w-full outline-none"
          />

        </div>

      </div>

      {/* Table */}

      <div className="bg-white rounded-2xl border overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-50">

            <tr>

              <th className="text-left p-5">University</th>

              <th className="text-left p-5">City</th>

              <th className="text-left p-5">Students</th>

              <th className="text-left p-5">Communities</th>

              <th className="text-left p-5">Leaders</th>

              <th className="text-left p-5">Status</th>

              <th className="text-left p-5">Actions</th>

            </tr>

          </thead>

          <tbody>

            {universities.map((uni) => (

              <tr
                key={uni.id}
                className="border-t hover:bg-gray-50"
              >

                <td className="p-5 font-semibold">
                  {uni.name}
                </td>

                <td className="p-5">
                  {uni.city}
                </td>

                <td className="p-5">
                  {uni.students.toLocaleString()}
                </td>

                <td className="p-5">
                  {uni.communities}
                </td>

                <td className="p-5">
                  {uni.leaders}
                </td>

                <td className="p-5">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      uni.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {uni.status}
                  </span>

                </td>

                <td className="p-5">

                  <div className="flex gap-3">

                    <button className="text-green-700 hover:text-green-900">
                      <Eye size={18} />
                    </button>

                    <button className="text-blue-600 hover:text-blue-800">
                      <Pencil size={18} />
                    </button>

                    <button className="text-red-600 hover:text-red-800">
                      <Ban size={18} />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default UniversityManagement;