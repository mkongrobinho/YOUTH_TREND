import {
  Home,
  Compass,
  Users,
  MessageCircle,
  Calendar,
  FolderKanban,
  User,
  Settings
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar() {

  const menu = [
    {
      name: "Home",
      icon: Home,
      path: "/home"
    },
    {
      name: "Discover",
      icon: Compass,
      path: "/discover"
    },
    {
      name: "Communities",
      icon: Users,
      path: "/communities"
    },
    {
      name: "Messages",
      icon: MessageCircle,
      path: "/messages"
    },
    {
      name: "Events",
      icon: Calendar,
      path: "/events"
    },
    {
      name: "Projects",
      icon: FolderKanban,
      path: "/projects"
    },
    {
      name: "Profile",
      icon: User,
      path: "/profile"
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/settings"
    }
  ];

  return (
    <aside className="hidden md:block w-64 bg-white min-h-screen border-r p-5">

      <div className="space-y-2">

        {menu.map((item, index) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition ${
                  isActive
                    ? "bg-green-100 text-[#005429]"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              <Icon size={20} />
              {item.name}
            </NavLink>
          );
        })}

      </div>

    </aside>
  );
}

export default Sidebar;