
import React, { useState } from 'react';
import { ArrowUpDown, Calculator } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const CurrencyConverter = () => {
  const [fromAmount, setFromAmount] = useState('1000');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState('853.40');

  const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'CHF', 'CNY'];

  const swapCurrencies = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  return (
    <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center text-xl font-semibold">
          <Calculator className="h-5 w-5 mr-2" />
          Currency Converter
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">From</label>
            <div className="flex space-x-2">
              <Input
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                className="flex-1"
                placeholder="Amount"
              />
              <Select value={fromCurrency} onValueChange={setFromCurrency}>
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((currency) => (
                    <SelectItem key={currency} value={currency}>
                      {currency}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">To</label>
            <div className="flex space-x-2">
              <Input
                value={result}
                readOnly
                className="flex-1 bg-muted"
                placeholder="Result"
              />
              <Select value={toCurrency} onValueChange={setToCurrency}>
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((currency) => (
                    <SelectItem key={currency} value={currency}>
                      {currency}
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
            size="sm"
            onClick={swapCurrencies}
            className="p-2 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>

        <div className="text-center">
          <div className="text-2xl font-bold text-primary">
            {fromAmount} {fromCurrency} = {result} {toCurrency}
          </div>
          <div className="text-sm text-muted-foreground mt-1">
            Rate: 1 {fromCurrency} = 0.8534 {toCurrency}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrencyConverter;
