import { NavLink } from "react-router-dom";
import {
  BarChart3,
  TriangleAlert,
  GraduationCap,
  Settings,
} from "lucide-react";

const menus = [
  {
    name: "Analytics",
    icon: BarChart3,
    path: "/admin/dashboard",
  },
  {
    name: "Escalations",
    icon: TriangleAlert,
    path: "/admin/escalations",
  },
  {
    name: "University Partners",
    icon: GraduationCap,
    path: "/admin/universities",
  },
  {
    name: "System Settings",
    icon: Settings,
    path: "/admin/settings",
  },
];

function AdminSidebar() {
  return (
    <aside className="w-72 bg-white border-r flex flex-col">

      <div className="p-8">

        <h1 className="text-3xl font-bold text-[#005429]">
          Admin Central
        </h1>

        <p className="text-gray-500 mt-1">
          Global Moderator
        </p>

      </div>

      <nav className="px-5 space-y-2">

        {menus.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition ${
                  isActive
                    ? "bg-[#005429] text-white"
                    : "text-gray-700 hover:bg-green-50"
                }`
              }
            >
              <Icon size={18} />

              {item.name}
            </NavLink>
          );
        })}

      </nav>

      <div className="mt-auto border-t p-6">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center font-bold">
            AU
          </div>

          <div>

            <p className="font-semibold">
              Admin User
            </p>

            <p className="text-xs text-gray-500">
              SUPER ADMIN
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}

export default AdminSidebar;