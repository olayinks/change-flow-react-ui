
import React from 'react';
import { ExternalLink, Crown, Zap, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProviderComparison = () => {
  const providers = [
    { 
      name: 'Revolut', 
      rate: '0.8534', 
      fee: '$0.00', 
      total: '852.90', 
      time: 'Instant',
      badge: 'Best Deal',
      color: 'emerald',
      icon: Crown
    },
    { 
      name: 'Wise', 
      rate: '0.8529', 
      fee: '$4.12', 
      total: '849.28', 
      time: '1-2 hours',
      badge: 'Most Popular',
      color: 'blue',
      icon: Zap
    },
    { 
      name: 'XE Money', 
      rate: '0.8521', 
      fee: '$5.99', 
      total: '846.11', 
      time: '1-4 days',
      badge: null,
      color: 'gray',
      icon: Clock
    },
    { 
      name: 'Remitly', 
      rate: '0.8515', 
      fee: '$3.99', 
      total: '847.51', 
      time: '2-3 hours',
      badge: null,
      color: 'gray',
      icon: Clock
    },
  ];

  const getColorClasses = (color: string, isTop: boolean) => {
    const colors = {
      emerald: isTop ? 'from-emerald-500 to-green-500' : 'from-emerald-50 to-green-50 border-emerald-200',
      blue: isTop ? 'from-blue-500 to-cyan-500' : 'from-blue-50 to-cyan-50 border-blue-200',
      gray: isTop ? 'from-gray-400 to-gray-500' : 'from-gray-50 to-gray-100 border-gray-200',
    };
    return colors[color as keyof typeof colors] || colors.gray;
  };

  return (
    <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
        <CardTitle className="text-2xl font-bold">Provider Comparison</CardTitle>
        <p className="text-indigo-100">USD 1,000 → EUR • Updated every 30 seconds</p>
      </CardHeader>
      <CardContent className="p-8">
        <div className="space-y-4">
          {providers.map((provider, index) => {
            const isTop = index === 0;
            const IconComponent = provider.icon;
            
            return (
              <div
                key={provider.name}
                className={`relative overflow-hidden rounded-2xl border-2 transition-all hover:scale-[1.02] hover:shadow-lg ${
                  isTop 
                    ? `bg-gradient-to-r ${getColorClasses(provider.color, false)} shadow-lg` 
                    : 'bg-white hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-2xl ${
                      isTop 
                        ? `bg-gradient-to-r ${getColorClasses(provider.color, true)} text-white` 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">{provider.name}</div>
                      {provider.badge && (
                        <div className={`text-xs font-bold px-3 py-1 rounded-full inline-block mt-1 ${
                          provider.color === 'emerald' 
                            ? 'bg-emerald-100 text-emerald-700' 
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {provider.badge}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-8">
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Rate</div>
                      <div className="font-bold text-lg">{provider.rate}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Fee</div>
                      <div className="font-bold text-lg">{provider.fee}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">You get</div>
                      <div className={`font-bold text-xl ${
                        isTop ? 'text-emerald-600' : 'text-gray-900'
                      }`}>
                        €{provider.total}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Time</div>
                      <div className="font-bold">{provider.time}</div>
                    </div>
                    <Button 
                      className={`${
                        isTop 
                          ? 'bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white' 
                          : 'bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white'
                      } rounded-xl px-6 shadow-lg`}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Go
                    </Button>
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

export default ProviderComparison;
