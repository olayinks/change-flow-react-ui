
import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ExchangeRates = () => {
  const rates = [
    { pair: 'USD/EUR', rate: '0.8534', change: '+0.12%', isPositive: true, provider: 'Wise' },
    { pair: 'GBP/USD', rate: '1.2456', change: '-0.08%', isPositive: false, provider: 'XE' },
    { pair: 'USD/JPY', rate: '149.67', change: '+0.34%', isPositive: true, provider: 'Revolut' },
    { pair: 'EUR/GBP', rate: '0.8721', change: '+0.05%', isPositive: true, provider: 'Wise' },
    { pair: 'USD/CAD', rate: '1.3542', change: '-0.15%', isPositive: false, provider: 'XE' },
    { pair: 'AUD/USD', rate: '0.6789', change: '+0.22%', isPositive: true, provider: 'Revolut' },
  ];

  return (
    <Card className="border shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-medium">Exchange Rates</CardTitle>
        <p className="text-sm text-muted-foreground">Aggregated from multiple providers</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {rates.map((rate, index) => (
            <div
              key={rate.pair}
              className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="font-medium text-sm">{rate.pair}</div>
                <div className="text-xs text-muted-foreground px-2 py-1 bg-background rounded">
                  {rate.provider}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="font-semibold">{rate.rate}</div>
                <div className={`flex items-center text-xs ${
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
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExchangeRates;
