import React from "react";
import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, Clock } from "lucide-react";

const stats = [
  {
    label: "Total Conversions",
    value: "23",
    change: "+12%",
    trend: "up",
    icon: DollarSign,
    description: "This month"
  },
  {
    label: "Amount Converted",
    value: "$12,450",
    change: "+8.2%",
    trend: "up",
    icon: TrendingUp,
    description: "Total value"
  },
  {
    label: "Active Alerts",
    value: "5",
    change: "+2",
    trend: "up",
    icon: Clock,
    description: "Rate alerts"
  },
  {
    label: "Best Rate Saved",
    value: "2.3%",
    change: "$127",
    trend: "up",
    icon: TrendingDown,
    description: "vs bank rates"
  },
];

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card key={stat.label} className="p-6 bg-white/90 backdrop-blur-sm shadow-lg border-0 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-lg ${
                stat.trend === 'up' 
                  ? 'bg-green-100 text-green-600' 
                  : 'bg-blue-100 text-blue-600'
              }`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-xs text-muted-foreground">{stat.description}</span>
            <span className={`text-sm font-medium flex items-center gap-1 ${
              stat.trend === 'up' ? 'text-green-600' : 'text-blue-600'
            }`}>
              {stat.trend === 'up' ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
              {stat.change}
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;