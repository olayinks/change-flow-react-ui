import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Star, Award } from 'lucide-react';

const BestRatesOfDay = () => {
  const bestRates = [
    {
      provider: "Wise",
      pair: "USD/EUR",
      rate: "0.9245",
      savings: "Save $23.50",
      badge: "Best Overall",
      color: "emerald",
      icon: Award
    },
    {
      provider: "Revolut", 
      pair: "GBP/USD",
      rate: "1.2734",
      savings: "Save $18.20",
      badge: "Fastest",
      color: "blue",
      icon: TrendingUp
    },
    {
      provider: "XE Money",
      pair: "EUR/JPY", 
      rate: "163.45",
      savings: "Save ¥1,240",
      badge: "Lowest Fees",
      color: "purple",
      icon: Star
    },
    {
      provider: "Remitly",
      pair: "USD/INR",
      rate: "83.25",
      savings: "Save ₹125",
      badge: "Best for Large Transfers",
      color: "orange",
      icon: Award
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      emerald: "bg-emerald-50 border-emerald-200 text-emerald-700",
      blue: "bg-blue-50 border-blue-200 text-blue-700", 
      purple: "bg-purple-50 border-purple-200 text-purple-700",
      orange: "bg-orange-50 border-orange-200 text-orange-700"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-6 w-6 text-primary" />
          Best Rates of the Day
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {bestRates.map((rate, index) => {
            const IconComponent = rate.icon;
            return (
              <div
                key={index}
                className="relative p-4 border rounded-lg bg-gradient-to-br from-background to-muted/20 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-lg">{rate.provider}</h3>
                    <p className="text-sm text-muted-foreground">{rate.pair}</p>
                  </div>
                  <IconComponent className="h-5 w-5 text-primary" />
                </div>
                
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">
                    {rate.rate}
                  </div>
                  
                  <div className="text-sm font-medium text-emerald-600">
                    {rate.savings}
                  </div>
                  
                  <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium border ${getColorClasses(rate.color)}`}>
                    {rate.badge}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default BestRatesOfDay;