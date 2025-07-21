import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowUpDown, Calculator } from "lucide-react";

const QuickConverter = () => {
  const [amount, setAmount] = useState("1000");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState("852.30");

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <Card className="p-6 bg-white/90 backdrop-blur-sm shadow-lg border-0">
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="w-5 h-5 text-primary" />
        <h3 className="text-xl font-bold text-foreground">Quick Converter</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Amount</label>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="text-lg"
          />
        </div>

        <div className="flex items-center gap-2">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2">From</label>
            <Select value={fromCurrency} onValueChange={setFromCurrency}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USD">🇺🇸 USD</SelectItem>
                <SelectItem value="EUR">🇪🇺 EUR</SelectItem>
                <SelectItem value="GBP">🇬🇧 GBP</SelectItem>
                <SelectItem value="JPY">🇯🇵 JPY</SelectItem>
                <SelectItem value="CAD">🇨🇦 CAD</SelectItem>
                <SelectItem value="AUD">🇦🇺 AUD</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={handleSwap}
            className="mt-6 p-2"
          >
            <ArrowUpDown className="w-4 h-4" />
          </Button>

          <div className="flex-1">
            <label className="block text-sm font-medium mb-2">To</label>
            <Select value={toCurrency} onValueChange={setToCurrency}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USD">🇺🇸 USD</SelectItem>
                <SelectItem value="EUR">🇪🇺 EUR</SelectItem>
                <SelectItem value="GBP">🇬🇧 GBP</SelectItem>
                <SelectItem value="JPY">🇯🇵 JPY</SelectItem>
                <SelectItem value="CAD">🇨🇦 CAD</SelectItem>
                <SelectItem value="AUD">🇦🇺 AUD</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="p-4 bg-primary/5 rounded-lg">
          <div className="text-sm text-muted-foreground mb-1">Converted Amount</div>
          <div className="text-2xl font-bold text-primary">
            {result} {toCurrency}
          </div>
          <div className="text-sm text-muted-foreground mt-1">
            1 {fromCurrency} = 0.8523 {toCurrency}
          </div>
        </div>

        <Button className="w-full">
          Convert & Save
        </Button>

        <div className="text-center">
          <Button variant="ghost" size="sm" className="text-sm">
            View detailed rates
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default QuickConverter;