
import React from 'react';
import Header from '@/components/Header';
import ExchangeRates from '@/components/ExchangeRates';
import CurrencyConverter from '@/components/CurrencyConverter';
import ProviderComparison from '@/components/ProviderComparison';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Hero Section */}
        <div className="text-center py-8">
          <h1 className="text-3xl font-semibold mb-3 text-foreground">
            Compare Exchange Rates
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find the best exchange rates from top providers. Compare fees, rates, and transfer times in real-time.
          </p>
        </div>

        {/* Currency Converter */}
        <CurrencyConverter />

        {/* Provider Comparison */}
        <ProviderComparison />

        {/* Exchange Rates */}
        <ExchangeRates />
      </main>
    </div>
  );
};

export default Index;
