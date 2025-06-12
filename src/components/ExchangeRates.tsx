
import React from 'react';
import { TrendingUp, TrendingDown, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ExchangeRates = () => {
  const rates = [
    { pair: 'USD/EUR', rate: '0.8534', change: '+0.12%', isPositive: true, provider: 'Wise', featured: true },
    { pair: 'GBP/USD', rate: '1.2456', change: '-0.08%', isPositive: false, provider: 'Revolut', featured: false },
    { pair: 'USD/JPY', rate: '149.67', change: '+0.34%', isPositive: true, provider: 'XE', featured: true },
    { pair: 'EUR/GBP', rate: '0.8721', change: '+0.05%', isPositive: true, provider: 'Wise', featured: false },
    { pair: 'USD/CAD', rate: '1.3542', change: '-0.15%', isPositive: false, provider: 'Remitly', featured: false },
    { pair: 'AUD/USD', rate: '0.6789', change: '+0.22%', isPositive: true, provider: 'Revolut', featured: true },
  ];

  return (
    <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
        <CardTitle className="text-2xl font-bold">Live Exchange Rates</CardTitle>
        <p className="text-cyan-100">Real-time rates from trusted providers</p>
      </CardHeader>
      <CardContent className="p-8">
        <div className="grid gap-4">
          {rates.map((rate, index) => (
            <div
              key={rate.pair}
              className={`flex items-center justify-between p-6 rounded-2xl transition-all hover:scale-[1.02] cursor-pointer ${
                rate.featured 
                  ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 shadow-lg' 
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center space-x-4">
                {rate.featured && (
                  <div className="bg-yellow-400 p-2 rounded-full">
                    <Star className="h-4 w-4 text-yellow-800" />
                  </div>
                )}
                <div>
                  <div className="font-bold text-lg">{rate.pair}</div>
                  <div className="text-sm text-muted-foreground flex items-center space-x-2">
                    <span className="px-3 py-1 bg-white rounded-full text-xs font-medium">
                      {rate.provider}
                    </span>
                    {rate.featured && (
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                        Best Rate
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="text-right">
                  <div className="font-bold text-xl">{rate.rate}</div>
                  <div className={`flex items-center text-sm font-medium ${
                    rate.isPositive ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {rate.isPositive ? (
                      <TrendingUp className="h-4 w-4 mr-1" />
                    ) : (
                      <TrendingDown className="h-4 w-4 mr-1" />
                    )}
                    {rate.change}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExchangeRates;
