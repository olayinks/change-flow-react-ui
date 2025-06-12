
import React, { useState } from 'react';
import { ArrowUpDown, Zap, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const CurrencyConverter = () => {
  const [fromAmount, setFromAmount] = useState('1000');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState('853.40');

  const currencies = [
    { code: 'USD', flag: '🇺🇸', name: 'US Dollar' },
    { code: 'EUR', flag: '🇪🇺', name: 'Euro' },
    { code: 'GBP', flag: '🇬🇧', name: 'British Pound' },
    { code: 'JPY', flag: '🇯🇵', name: 'Japanese Yen' },
    { code: 'CAD', flag: '🇨🇦', name: 'Canadian Dollar' },
    { code: 'AUD', flag: '🇦🇺', name: 'Australian Dollar' },
  ];

  const swapCurrencies = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  return (
    <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-purple-500 to-blue-500 text-white pb-8">
        <CardTitle className="text-2xl font-bold flex items-center">
          <Zap className="h-6 w-6 mr-3" />
          Lightning Fast Converter
        </CardTitle>
        <p className="text-purple-100">
          Get instant rates from the best providers worldwide
        </p>
      </CardHeader>
      <CardContent className="p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">From</label>
            <div className="space-y-3">
              <Input
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                className="text-2xl font-bold h-14 rounded-2xl border-2 focus:border-purple-500 transition-colors"
                placeholder="Amount"
              />
              <Select value={fromCurrency} onValueChange={setFromCurrency}>
                <SelectTrigger className="h-12 rounded-2xl border-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((currency) => (
                    <SelectItem key={currency.code} value={currency.code}>
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{currency.flag}</span>
                        <span className="font-medium">{currency.code}</span>
                        <span className="text-muted-foreground text-sm">{currency.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">To</label>
            <div className="space-y-3">
              <Input
                value={result}
                readOnly
                className="text-2xl font-bold h-14 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200"
                placeholder="Result"
              />
              <Select value={toCurrency} onValueChange={setToCurrency}>
                <SelectTrigger className="h-12 rounded-2xl border-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((currency) => (
                    <SelectItem key={currency.code} value={currency.code}>
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{currency.flag}</span>
                        <span className="font-medium">{currency.code}</span>
                        <span className="text-muted-foreground text-sm">{currency.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Button
            variant="outline"
            size="lg"
            onClick={swapCurrencies}
            className="rounded-full w-12 h-12 border-2 border-purple-200 hover:border-purple-500 hover:bg-purple-50 transition-all"
          >
            <ArrowUpDown className="h-5 w-5 text-purple-600" />
          </Button>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2 text-gray-900">
              {fromAmount} {fromCurrency} = {result} {toCurrency}
            </div>
            <div className="flex items-center justify-center space-x-2 text-green-600 font-medium">
              <TrendingUp className="h-4 w-4" />
              <span>Best rate from Wise • 1 {fromCurrency} = 0.8534 {toCurrency}</span>
            </div>
          </div>
        </div>

        <Button className="w-full h-14 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold text-lg rounded-2xl shadow-lg">
          Compare All Providers
        </Button>
      </CardContent>
    </Card>
  );
};

export default CurrencyConverter;
