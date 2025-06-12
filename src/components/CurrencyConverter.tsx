
import React, { useState } from 'react';
import { ArrowUpDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const CurrencyConverter = () => {
  const [fromAmount, setFromAmount] = useState('1000');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState('853.40');

  const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD'];

  const swapCurrencies = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  return (
    <Card className="border shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-medium">Currency Converter</CardTitle>
        <p className="text-sm text-muted-foreground">Compare rates from multiple providers</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">From</label>
            <div className="flex space-x-2">
              <Input
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                className="flex-1"
                placeholder="Amount"
              />
              <Select value={fromCurrency} onValueChange={setFromCurrency}>
                <SelectTrigger className="w-20">
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
            <label className="text-sm font-medium">To</label>
            <div className="flex space-x-2">
              <Input
                value={result}
                readOnly
                className="flex-1 bg-muted/50"
                placeholder="Result"
              />
              <Select value={toCurrency} onValueChange={setToCurrency}>
                <SelectTrigger className="w-20">
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
            className="p-2"
          >
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>

        <div className="text-center p-4 bg-muted/30 rounded-lg">
          <div className="text-xl font-semibold mb-1">
            {fromAmount} {fromCurrency} = {result} {toCurrency}
          </div>
          <div className="text-sm text-muted-foreground">
            Best rate from Wise • 1 {fromCurrency} = 0.8534 {toCurrency}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrencyConverter;
