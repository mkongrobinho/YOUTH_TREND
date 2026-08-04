import { Plus } from "lucide-react";

function UniversityHeader() {
  return (
    <div className="flex items-center justify-between">

      <div>
        <h1 className="text-4xl font-bold text-gray-900">
          University Management
        </h1>

        <p className="text-gray-500 mt-2">
          Manage all registered universities across YouthTrend.
        </p>
      </div>

      <button
        className="
        flex
        items-center
        gap-2
        bg-[#005429]
        hover:bg-green-800
        text-white
        px-6
        py-3
        rounded-xl
        transition
        "
      >
        <Plus size={18}/>
        Add University
      </button>

    </div>
  );
}

export default UniversityHeader;