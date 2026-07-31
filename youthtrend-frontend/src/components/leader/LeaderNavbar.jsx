import { Search, Bell, CircleHelp } from "lucide-react";

function LeaderNavbar() {
  return (
    <nav
      className="
        fixed
        top-0
        left-0
        right-0
        h-16
        bg-white
        border-b
        flex
        items-center
        justify-between
        px-6
        z-50
      "
    >

      {/* Left */}
      <div className="flex items-center gap-6">

        <h1 className="text-xl font-bold text-[#005429]">
          Leader Mode
        </h1>

      </div>





      {/* Search */}

      <div
        className="
          hidden
          lg:flex
          items-center
          bg-gray-100
          rounded-full
          px-4
          py-2
          w-96
        "
      >

        <Search
          size={18}
          className="text-gray-400"
        />

        <input
          type="text"
          placeholder="Search members, roles, or schools..."
          className="
            bg-transparent
            outline-none
            ml-3
            w-full
          "
        />

      </div>






      {/* Right */}

      <div className="flex items-center gap-5">

        <Bell
          size={22}
          className="
            cursor-pointer
            text-gray-600
            hover:text-[#005429]
          "
        />



        <CircleHelp
          size={22}
          className="
            cursor-pointer
            text-gray-600
            hover:text-[#005429]
          "
        />



        <div className="h-8 w-px bg-gray-300"></div>



        <div className="flex items-center gap-3">

          <div className="text-right">

            <h3 className="text-sm font-semibold">
              Amara Diallo
            </h3>

            <p className="text-xs text-gray-500">
              Community Lead
            </p>

          </div>



          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80"
              alt="Leader"
              className="
                w-10
                h-10
                rounded-full
                object-cover
              "
            />

            <span
              className="
                absolute
                bottom-0
                right-0
                w-3
                h-3
                rounded-full
                bg-green-500
                border-2
                border-white
              "
            ></span>

          </div>

        </div>

      </div>

    </nav>
  );
}

export default LeaderNavbar;