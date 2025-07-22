import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardStats from "@/components/dashboard/DashboardStats";
import RateHistory from "@/components/dashboard/RateHistory";
import AlertsPanel from "@/components/dashboard/AlertsPanel";
import QuickConverter from "@/components/dashboard/QuickConverter";
import AlertsPage from "./AlertsPage";

const DashboardOverview = () => (
  <>
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        Dashboard
      </h1>
      <div className="text-sm text-muted-foreground">
        Welcome back! Here's your currency exchange overview.
      </div>
    </div>

    {/* Stats Overview */}
    <DashboardStats />

    {/* Main Content Grid */}
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
      {/* Quick Converter */}
      <div className="xl:col-span-1">
        <QuickConverter />
      </div>

      {/* Rate History */}
      <div className="xl:col-span-2">
        <RateHistory />
      </div>
    </div>

    {/* Alerts Panel */}
    <AlertsPanel />
  </>
);

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 flex">
      <DashboardSidebar />
      <main className="flex-1 p-8 flex flex-col gap-8 overflow-auto">
        <Routes>
          <Route path="/" element={<DashboardOverview />} />
          <Route path="/alerts" element={<AlertsPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;