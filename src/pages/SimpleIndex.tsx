import React from 'react';
import Header from '@/components/Header';
import CurrencyConverter from '@/components/CurrencyConverter';
import { Check, Globe, Shield, Zap } from 'lucide-react';

const SimpleIndex = () => {
  const features = [
    {
      icon: Globe,
      title: "200+ Countries",
      description: "Send money to over 200 countries worldwide"
    },
    {
      icon: Shield,
      title: "Bank-level Security",
      description: "Your money and data are protected with industry-leading security"
    },
    {
      icon: Zap,
      title: "Fast Transfers",
      description: "Most transfers arrive within minutes to hours"
    }
  ];

  const benefits = [
    "No hidden fees - see exactly what you pay",
    "Real-time exchange rates",
    "Compare all providers instantly",
    "Save up to 90% vs banks"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section with Converter */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Hero content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                    Send money abroad with the{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      best exchange rates
                    </span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Compare rates from top providers and save money on every transfer. 
                    Fast, secure, and transparent.
                  </p>
                </div>

                {/* Benefits list */}
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side - Currency Converter */}
              <div className="lg:pl-8">
                <CurrencyConverter />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why choose our platform?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We make international money transfers simple, secure, and affordable
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Simple CTA Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to save money on your next transfer?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of customers who trust us with their money transfers
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors">
              Start Your Transfer
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SimpleIndex;