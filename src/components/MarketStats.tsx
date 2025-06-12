
import React from 'react';
import { BarChart3, DollarSign, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const MarketStats = () => {
  const stats = [
    {
      title: 'Daily Volume',
      value: '$2.4B',
      change: '+12.5%',
      icon: BarChart3,
      color: 'blue',
    },
    {
      title: 'Active Traders',
      value: '45,230',
      change: '+8.2%',
      icon: Users,
      color: 'green',
    },
    {
      title: 'Total Trades',
      value: '892K',
      change: '+15.7%',
      icon: TrendingUp,
      color: 'purple',
    },
    {
      title: 'Avg Spread',
      value: '0.002%',
      change: '-0.1%',
      icon: DollarSign,
      color: 'orange',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={stat.title} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${getColorClasses(stat.color)}`}>
                <stat.icon className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm text-green-600 font-medium">{stat.change}</span>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.title}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MarketStats;
