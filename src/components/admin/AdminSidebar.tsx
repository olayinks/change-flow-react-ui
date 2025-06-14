
import React from "react";
import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: LayoutDashboard,
  },
  // Add more admin nav links here as needed
];

const AdminSidebar = () => (
  <aside className="min-h-screen bg-white/90 p-6 shadow-lg w-64 hidden md:flex flex-col">
    <div className="flex items-center mb-10">
      <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Admin</span>
    </div>
    <nav className="flex flex-col gap-2">
      {links.map((link) => (
        <NavLink
          to={link.path}
          key={link.name}
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 rounded-lg font-medium transition-colors ${
              isActive
                ? "bg-gradient-to-r from-purple-50 to-cyan-50 text-blue-700"
                : "hover:bg-purple-50 text-muted-foreground"
            }`
          }
          end
        >
          <link.icon className="w-5 h-5" />
          {link.name}
        </NavLink>
      ))}
    </nav>
  </aside>
);

export default AdminSidebar;
