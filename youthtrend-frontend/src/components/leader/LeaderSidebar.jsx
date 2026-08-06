import {
  LayoutDashboard,
  Megaphone,
  Shield,
  Calendar,
  Users,
  Settings,
  Plus,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function LeaderSidebar() {
  const menu = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/leader/dashboard",
    },
    {
      name: "Member Management",
      icon: Users,
      path: "/leader/members",
    },
    {
      name: "Announcements",
      icon: Megaphone,
      path: "/leader/announcements",
    },
    {
      name: "Moderation",
      icon: Shield,
      path: "/leader/moderation",
    },
    {
      name: "Events",
      icon: Calendar,
      path: "/leader/events",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/leader/settings",
    },
  ];

  return (
    <aside className="hidden lg:flex flex-col justify-between w-64 bg-white border-r min-h-screen pt-20">

      <div>

        {/* Logo */}
        <div className="px-6 mb-8">
          <h1 className="text-2xl font-bold text-[#005429]">
            Leader Mode
          </h1>

          <p className="text-sm text-gray-500">
            Student Community
          </p>
        </div>

        {/* Menu */}
        <div className="space-y-2 px-4">
          {menu.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                    isActive
                      ? "bg-green-100 text-[#005429] font-semibold"
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
      </div>

      {/* Bottom Section */}
      <div className="p-4 border-t">

        <button className="w-full flex items-center justify-center gap-2 bg-[#005429] text-white py-3 rounded-xl font-medium hover:bg-green-800 transition">
          <Plus size={18} />
          Create Event
        </button>

        <div className="flex items-center gap-3 mt-6">

          <img
            src="https://images.pexels.com/photos/19379640/pexels-photo-19379640.jpeg?w=200&q=80"
            alt="Leader"
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <h3 className="font-semibold">
              Dr. Njie Collins
            </h3>

            <p className="text-sm text-gray-500">
              Admin Representative
            </p>
          </div>

        </div>

      </div>

    </aside>
  );
}

export default LeaderSidebar;