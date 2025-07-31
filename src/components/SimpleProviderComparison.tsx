import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Star } from 'lucide-react';

const SimpleProviderComparison = () => {
  const providers = [
    {
      name: "Wise",
      rate: "0.9245",
      fee: "$4.50",
      total: "924.50 EUR",
      time: "Within hours",
      badge: "Best rate",
      recommended: true,
      status: "live"
    },
    {
      name: "Revolut",
      rate: "0.9230",
      fee: "$3.00",
      total: "923.00 EUR",
      time: "Instant",
      badge: "Fastest",
      status: "live"
    },
    {
      name: "XE Money",
      rate: "0.9215",
      fee: "$5.99",
      total: "921.50 EUR",
      time: "1-2 days",
      badge: "Good value",
      status: "stale"
    },
    {
      name: "Western Union",
      rate: "0.9180",
      fee: "$8.00",
      total: "918.00 EUR",
      time: "Same day",
      badge: "Widely available",
      status: "stale"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Compare providers</h2>
        <p className="text-muted-foreground">
          Sending $1,000 USD → EUR
        </p>
      </div>

      <div className="space-y-3">
        {providers.map((provider, index) => (
          <Card key={index} className={`relative transition-all duration-200 hover:shadow-md ${
            provider.recommended 
              ? 'ring-2 ring-primary/20 bg-gradient-to-r from-primary/5 to-primary/10' 
              : 'hover:shadow-lg'
          }`}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="space-y-1">
                     <div className="flex items-center gap-2">
                       <h3 className="font-semibold">{provider.name}</h3>
                       {provider.recommended && (
                         <Star className="h-4 w-4 text-primary fill-primary" />
                       )}
                       <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                         {provider.badge}
                       </span>
                       <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                         provider.status === 'live' 
                           ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' 
                           : 'bg-slate-100 text-slate-600 border border-slate-200'
                       }`}>
                         {provider.status === 'live' ? 'Live' : 'Stale'}
                       </span>
                     </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Rate: {provider.rate}</span>
                      <span>Fee: {provider.fee}</span>
                      <span>{provider.time}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-lg font-bold">{provider.total}</div>
                    <div className="text-sm text-muted-foreground">Recipient gets</div>
                  </div>
                  <button className="flex items-center gap-2 bg-gradient-to-r from-brand-blue to-brand-purple text-white px-4 py-2 rounded-lg hover:from-brand-blue/90 hover:to-brand-purple/90 transition-all duration-200 shadow-md hover:shadow-lg">
                    Select
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center text-sm text-muted-foreground">
        Rates updated 2 minutes ago • All fees included
      </div>
    </div>
  );
};

export default SimpleProviderComparison;