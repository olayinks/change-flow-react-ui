
import React from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import Header from "@/components/Header";

const stats = [
  { label: "Total Users", value: 8723 },
  { label: "FX Volume (USD)", value: "$12,300,000" },
  { label: "Active Providers", value: 5 },
  { label: "Conversions Today", value: 361 },
];

const AdminDashboard = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
    <Header fullWidth />
    <div className="flex">
      <AdminSidebar />
    <main className="flex-1 p-8 flex flex-col gap-8">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
        Admin Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl bg-white/90 shadow px-6 py-8 flex flex-col items-center animate-fade-in">
            <span className="text-lg text-muted-foreground">{stat.label}</span>
            <span className="mt-2 text-3xl font-bold text-blue-600">{stat.value}</span>
          </div>
        ))}
      </div>
      <section className="mt-12">
        <div className="bg-white/80 rounded-2xl p-8 shadow text-center">
          <p className="text-xl text-muted-foreground mb-2">Admin tools coming soon.</p>
          <button className="px-5 py-2 rounded-md bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold shadow hover:scale-105 transition">
            Sync Providers
          </button>
        </div>
      </section>
    </main>
    </div>
  </div>
);

export default AdminDashboard;
