import {
  LayoutDashboard,
  School,
  Megaphone,
  CalendarDays,
  ShieldAlert,
  BarChart3,
  FileText,
  Settings,
  User,
  LogOut
} from "lucide-react";

import { NavLink, Outlet } from "react-router-dom";


const menuItems = [

  {
    name:"Dashboard",
    path:"/admin/dashboard",
    icon:LayoutDashboard
  },

  {
    name:"Universities",
    path:"/admin/universities",
    icon:School
  },

  {
    name:"Announcements",
    path:"/admin/announcements",
    icon:Megaphone
  },

  {
    name:"Events",
    path:"/admin/events",
    icon:CalendarDays
  },

  {
    name:"Moderation",
    path:"/admin/moderation",
    icon:ShieldAlert
  },

  {
    name:"Analytics",
    path:"/admin/analytics",
    icon:BarChart3
  },

  {
    name:"Reports",
    path:"/admin/reports",
    icon:FileText
  },

  {
    name:"Settings",
    path:"/admin/settings",
    icon:Settings
  },

  {
    name:"Profile",
    path:"/admin/profile",
    icon:User
  }

];



function AdminLayout(){


return (

<div className="
min-h-screen
bg-gray-50
flex
">


{/* Sidebar */}

<aside className="
w-72
bg-[#005429]
text-white
p-6
fixed
h-full
">


<h1 className="
text-3xl
font-bold
mb-10
">

YouthTrend Admin

</h1>



<nav className="
space-y-3
">


{

menuItems.map((item)=>(


<NavLink

key={item.name}

to={item.path}

className={({isActive})=>

`
flex
items-center
gap-3
px-4
py-3
rounded-xl
transition

${
isActive
?
"bg-white text-[#005429]"
:
"hover:bg-green-700"
}

`

}


>


<item.icon size={20}/>


<span>
{item.name}
</span>


</NavLink>


))


}


</nav>






<button

className="
absolute
bottom-8
flex
items-center
gap-3
px-4
py-3
hover:bg-green-700
rounded-xl
"

>


<LogOut size={20}/>

Logout


</button>



</aside>








{/* Main Content */}


<main className="
ml-72
p-8
w-full
">


<Outlet />

</main>



</div>


)

}


export default AdminLayout;