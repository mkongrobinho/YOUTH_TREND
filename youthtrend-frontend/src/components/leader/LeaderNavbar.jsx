import { Bell, Search } from "lucide-react";


function LeaderNavbar() {

  return (

    <header className="
      h-20
      bg-white
      border-b
      flex
      items-center
      justify-between
      px-6
    ">


      {/* Search */}

      <div className="
        flex
        items-center
        gap-3
        bg-gray-100
        rounded-xl
        px-4
        py-2
        w-96
      ">

        <Search
          size={20}
          className="text-gray-400"
        />

        <input
          placeholder="Search..."
          className="
            bg-transparent
            outline-none
            w-full
          "
        />

      </div>





      {/* Right side */}

      <div className="
        flex
        items-center
        gap-5
      ">


        {/* Notification */}

        <button
          className="
            relative
            text-gray-600
            hover:text-green-700
          "
        >

          <Bell size={24}/>


          <span className="
            absolute
            -top-1
            -right-1
            bg-red-600
            text-white
            text-xs
            w-5
            h-5
            rounded-full
            flex
            items-center
            justify-center
          ">
            3
          </span>


        </button>





        {/* Leader Profile */}

        <div className="
          flex
          items-center
          gap-3
        ">


          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80"
            alt="leader"
            className="
              w-11
              h-11
              rounded-full
              object-cover
            "
          />


          <div>

            <h3 className="
              font-semibold
            ">
              Admin Leader
            </h3>


            <p className="
              text-sm
              text-gray-500
            ">
              Campus Manager
            </p>


          </div>


        </div>


      </div>


    </header>

  );

}


export default LeaderNavbar;