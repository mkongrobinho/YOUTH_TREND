import {
  LayoutDashboard,
  Users,
  FileText,
  CalendarDays,
  UsersRound,
  Settings,
  LogOut
} from "lucide-react";


const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard
  },
  {
    name: "Students",
    icon: Users
  },
  {
    name: "Posts",
    icon: FileText
  },
  {
    name: "Events",
    icon: CalendarDays
  },
  {
    name: "Communities",
    icon: UsersRound
  },
  {
    name: "Settings",
    icon: Settings
  }
];



function LeaderSidebar() {

  return (

    <aside className="
      w-72
      min-h-screen
      bg-white
      border-r
      p-5
    ">


      {/* Logo */}

      <div className="
        mb-8
      ">

        <h1 className="
          text-2xl
          font-bold
          text-green-700
        ">
          YouthTrend
        </h1>


        <p className="
          text-sm
          text-gray-500
        ">
          Leader Panel
        </p>


      </div>





      {/* Menu */}

      <nav className="
        space-y-2
      ">


        {
          menuItems.map((item,index)=>{

            const Icon = item.icon;

            return (

              <button
                key={index}
                className="
                  w-full
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  rounded-xl
                  text-gray-600
                  hover:bg-green-50
                  hover:text-green-700
                  transition
                "
              >

                <Icon size={20}/>

                <span>
                  {item.name}
                </span>


              </button>

            );

          })
        }


      </nav>





      {/* Logout */}

      <button
        className="
          mt-10
          w-full
          flex
          items-center
          gap-3
          px-4
          py-3
          rounded-xl
          text-red-600
          hover:bg-red-50
        "
      >

        <LogOut size={20}/>

        Logout

      </button>


    </aside>

  );

}


export default LeaderSidebar;