import React from "react";
import { LayoutDashboard, TrendingUp, Bell, Settings, History, Calculator } from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [
  {
    name: "Overview",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Rate History",
    path: "/dashboard/history",
    icon: History,
  },
  {
    name: "Alerts",
    path: "/dashboard/alerts",
    icon: Bell,
  },
  {
    name: "Analytics",
    path: "/dashboard/analytics",
    icon: TrendingUp,
  },
  {
    name: "Calculator",
    path: "/dashboard/calculator",
    icon: Calculator,
  },
  {
    name: "Settings",
    path: "/dashboard/settings",
    icon: Settings,
  },
];

const DashboardSidebar = () => (
  <aside className="h-screen bg-white/90 backdrop-blur-sm p-6 shadow-lg w-64 hidden md:flex flex-col sticky top-0 overflow-y-auto">
    <div className="flex items-center mb-10">
      <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        RateRunner
      </span>
    </div>
    <nav className="flex flex-col gap-2">
      {links.map((link) => (
        <NavLink
          to={link.path}
          key={link.name}
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
              isActive
                ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md"
                : "hover:bg-purple-50 text-muted-foreground hover:text-foreground"
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

export default DashboardSidebar;