
import React from 'react';
import Header from '@/components/Header';
import ExchangeRates from '@/components/ExchangeRates';
import CurrencyConverter from '@/components/CurrencyConverter';
import ProviderComparison from '@/components/ProviderComparison';
import MarketStats from '@/components/MarketStats';
import TradingPanel from '@/components/TradingPanel';
import BestRatesOfDay from '@/components/BestRatesOfDay';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
      <Header />
      
      <main className="container mx-auto px-6 py-8 space-y-12">
        {/* Hero Section */}
        <div className="text-center py-12 px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
              Exchange rates that don't suck
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Compare real-time rates from top providers. No hidden fees, no surprises. 
              Just transparent currency exchange that saves you money.
            </p>
          </div>
        </div>

        {/* Market Stats */}
        <MarketStats />

        {/* Best Rates of the Day */}
        <BestRatesOfDay />

        {/* Currency Converter */}
        <CurrencyConverter />

        {/* Trading Panel */}
        <TradingPanel />

        {/* Provider Comparison */}
        <ProviderComparison />

        {/* Exchange Rates */}
        <ExchangeRates />
      </main>
    </div>
  );
};

export default Index;
