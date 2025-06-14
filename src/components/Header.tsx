import React from 'react';
import { BarChart3, Menu, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-lg border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-2xl shadow-lg">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                RateRunner
              </span>
              <div className="text-xs text-muted-foreground font-medium">
                Currency Exchange
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `rounded-full px-5 py-2 font-medium text-sm transition items-center mr-1 hidden md:inline-block ${
                  isActive
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow"
                    : "bg-purple-50 text-purple-700 hover:bg-purple-100"
                }`
              }
            >
              Dashboard
            </NavLink>
            <Button variant="ghost" size="sm" className="rounded-full hover:bg-purple-50">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full hover:bg-purple-50">
              <Menu className="h-4 w-4" />
            </Button>
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-full px-6 shadow-lg">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
