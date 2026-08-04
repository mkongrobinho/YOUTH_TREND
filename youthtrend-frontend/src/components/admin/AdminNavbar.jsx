import { Bell, CircleHelp, Search } from "lucide-react";

function AdminNavbar() {
  return (
    <header className="bg-white border-b h-20 px-8 flex items-center justify-between">

      {/* Search */}

      <div className="relative w-90">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search ecosystem data..."
          className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-100 outline-none"
        />

      </div>

      {/* Right */}

      <div className="flex items-center gap-6">

        <Bell className="cursor-pointer text-gray-600" />

        <CircleHelp className="cursor-pointer text-gray-600" />

        <div className="h-8 w-px bg-gray-300"></div>

        <button className="font-semibold text-[#005429]">
          Admin Settings
        </button>

      </div>

    </header>
  );
}

export default AdminNavbar;