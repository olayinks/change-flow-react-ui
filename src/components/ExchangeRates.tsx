
import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ExchangeRates = () => {
  const rates = [
    { pair: 'USD/EUR', rate: '0.8534', change: '+0.12%', isPositive: true },
    { pair: 'GBP/USD', rate: '1.2456', change: '-0.08%', isPositive: false },
    { pair: 'USD/JPY', rate: '149.67', change: '+0.34%', isPositive: true },
    { pair: 'EUR/GBP', rate: '0.8721', change: '+0.05%', isPositive: true },
    { pair: 'USD/CAD', rate: '1.3542', change: '-0.15%', isPositive: false },
    { pair: 'AUD/USD', rate: '0.6789', change: '+0.22%', isPositive: true },
  ];

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Live Exchange Rates</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {rates.map((rate, index) => (
            <div
              key={rate.pair}
              className="bg-background p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              <div className="text-sm font-medium text-muted-foreground mb-1">
                {rate.pair}
              </div>
              <div className="text-lg font-bold mb-2">{rate.rate}</div>
              <div className={`flex items-center text-sm ${
                rate.isPositive ? 'text-green-600' : 'text-red-600'
              }`}>
                {rate.isPositive ? (
                  <TrendingUp className="h-3 w-3 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 mr-1" />
                )}
                {rate.change}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExchangeRates;
