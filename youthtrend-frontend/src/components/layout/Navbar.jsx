import { Search, Bell, MessageCircle } from "lucide-react";

function Navbar() {

  return (

    <nav className="
      fixed
      top-0
      left-0
      right-0
      h-16
      bg-white
      shadow-sm
      flex
      items-center
      justify-between
      px-6
      z-50
    ">


      {/* Logo */}

      <div className="
        text-2xl
        font-bold
        text-[#005429]
      ">
        YouthTrend
      </div>



      {/* Search */}

      <div className="
        hidden
        md:flex
        items-center
        bg-gray-100
        rounded-full
        px-4
        py-2
        w-96
      ">

        <Search 
          size={20}
          className="text-gray-400"
        />

        <input
          placeholder="Search students, communities..."
          className="
            bg-transparent
            outline-none
            ml-3
            w-full
          "
        />

      </div>




      {/* Actions */}

      <div className="
        flex
        items-center
        gap-5
      ">

        <MessageCircle
          className="text-gray-600 cursor-pointer"
        />


        <Bell
          className="text-gray-600 cursor-pointer"
        />


        <div className="
          w-10
          h-10
          rounded-full
          bg-green-100
          flex
          items-center
          justify-center
          font-bold
          text-[#005429]
        ">
          YT
        </div>


      </div>


    </nav>

  );

}


export default Navbar;