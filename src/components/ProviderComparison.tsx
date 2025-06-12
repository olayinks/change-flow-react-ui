
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProviderComparison = () => {
  const providers = [
    { name: 'Wise', rate: '0.8534', fee: '$4.12', total: '849.28', time: '1-2 hours' },
    { name: 'Revolut', rate: '0.8529', fee: '$0.00', total: '852.90', time: 'Instant' },
    { name: 'XE Money', rate: '0.8521', fee: '$5.99', total: '846.11', time: '1-4 days' },
    { name: 'Remitly', rate: '0.8515', fee: '$3.99', total: '847.51', time: '2-3 hours' },
  ];

  return (
    <Card className="border shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-medium">Provider Comparison</CardTitle>
        <p className="text-sm text-muted-foreground">USD 1,000 → EUR</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {providers.map((provider, index) => (
            <div
              key={provider.name}
              className={`flex items-center justify-between p-4 rounded-lg border transition-colors hover:bg-muted/30 ${
                index === 1 ? 'bg-green-50 border-green-200' : 'bg-background'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="font-medium">{provider.name}</div>
                {index === 1 && (
                  <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                    Best Deal
                  </div>
                )}
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <div>
                  <div className="text-muted-foreground">Rate</div>
                  <div className="font-medium">{provider.rate}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Fee</div>
                  <div className="font-medium">{provider.fee}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">You get</div>
                  <div className="font-semibold">€{provider.total}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Time</div>
                  <div className="font-medium">{provider.time}</div>
                </div>
                <Button size="sm" variant="outline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Go
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProviderComparison;
