import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, TrendingUp, TrendingDown, ArrowUpRight } from "lucide-react";

const rateHistory = [
  {
    id: 1,
    from: "USD",
    to: "EUR",
    rate: 0.8523,
    amount: 1000,
    converted: 852.30,
    timestamp: "2024-01-15 14:30",
    change: "+0.12%",
    trend: "up"
  },
  {
    id: 2,
    from: "GBP",
    to: "USD",
    rate: 1.2654,
    amount: 500,
    converted: 632.70,
    timestamp: "2024-01-15 11:20",
    change: "-0.08%",
    trend: "down"
  },
  {
    id: 3,
    from: "EUR",
    to: "JPY",
    rate: 159.87,
    amount: 750,
    converted: 119902.50,
    timestamp: "2024-01-14 16:45",
    change: "+0.34%",
    trend: "up"
  },
  {
    id: 4,
    from: "USD",
    to: "CAD",
    rate: 1.3456,
    amount: 2000,
    converted: 2691.20,
    timestamp: "2024-01-14 09:15",
    change: "+0.21%",
    trend: "up"
  },
];

const RateHistory = () => {
  return (
    <Card className="p-6 bg-white/90 backdrop-blur-sm shadow-lg border-0">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-foreground">Rate History</h3>
        <Button variant="outline" size="sm" className="gap-2">
          <ArrowUpRight className="w-4 h-4" />
          View All
        </Button>
      </div>

      <Tabs defaultValue="recent" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="favorites">Favorites</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
        </TabsList>

        <TabsContent value="recent" className="mt-6">
          <div className="space-y-4">
            {rateHistory.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">{item.from}</span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                    <span className="font-semibold text-foreground">{item.to}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.amount.toLocaleString()} {item.from}
                  </div>
                </div>

                <div className="flex items-center gap-6 text-right">
                  <div>
                    <div className="font-semibold text-foreground">{item.rate}</div>
                    <div className={`text-sm flex items-center gap-1 ${
                      item.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {item.trend === 'up' ? (
                        <TrendingUp className="w-3 h-3" />
                      ) : (
                        <TrendingDown className="w-3 h-3" />
                      )}
                      {item.change}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {item.converted.toLocaleString()} {item.to}
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.timestamp}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="favorites" className="mt-6">
          <div className="text-center py-8 text-muted-foreground">
            <p>No favorite currency pairs yet.</p>
            <p className="text-sm mt-2">Add pairs to your favorites for quick access.</p>
          </div>
        </TabsContent>

        <TabsContent value="alerts" className="mt-6">
          <div className="text-center py-8 text-muted-foreground">
            <p>No rate alerts triggered recently.</p>
            <p className="text-sm mt-2">Set up alerts to track rate changes.</p>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default RateHistory;