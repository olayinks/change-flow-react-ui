
import React from 'react';
import Header from '@/components/Header';
import ExchangeRates from '@/components/ExchangeRates';
import CurrencyConverter from '@/components/CurrencyConverter';
import TradingPanel from '@/components/TradingPanel';
import MarketStats from '@/components/MarketStats';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Header />
      
      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Hero Section */}
        <div className="text-center py-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Global Currency Exchange
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trade currencies with real-time rates, low spreads, and instant execution. 
            Join thousands of traders worldwide.
          </p>
        </div>

        {/* Market Stats */}
        <MarketStats />

        {/* Exchange Rates */}
        <ExchangeRates />

        {/* Currency Converter */}
        <CurrencyConverter />

        {/* Trading Panel */}
        <TradingPanel />

        {/* Footer CTA */}
        <div className="text-center py-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">Start Trading Today</h2>
          <p className="text-xl mb-6 opacity-90">
            Get access to professional trading tools and competitive rates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Open Free Account
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
