
import React, { useState } from 'react';
import { ShoppingCart, TrendingUp, Clock, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const TradingPanel = () => {
  const [tradeType, setTradeType] = useState('buy');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('EUR');

  const popularPairs = [
    { pair: 'USD/EUR', price: '0.8534', spread: '0.0002' },
    { pair: 'GBP/USD', price: '1.2456', spread: '0.0003' },
    { pair: 'USD/JPY', price: '149.67', spread: '0.02' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center text-xl font-semibold">
            <ShoppingCart className="h-5 w-5 mr-2" />
            Quick Trade
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={tradeType} onValueChange={setTradeType} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="buy" className="text-green-600">Buy</TabsTrigger>
              <TabsTrigger value="sell" className="text-red-600">Sell</TabsTrigger>
            </TabsList>
            
            <TabsContent value="buy" className="space-y-4 mt-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Currency Pair</label>
                <Select value="USD/EUR">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD/EUR">USD/EUR</SelectItem>
                    <SelectItem value="GBP/USD">GBP/USD</SelectItem>
                    <SelectItem value="USD/JPY">USD/JPY</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Amount (USD)</label>
                <Input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                />
              </div>
              
              <div className="bg-background p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">Rate</span>
                  <span className="font-medium">0.8534</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">Fee</span>
                  <span className="font-medium">$2.50</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">You'll receive</span>
                  <span className="font-bold text-green-600">€853.40</span>
                </div>
              </div>
              
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Buy EUR
              </Button>
            </TabsContent>
            
            <TabsContent value="sell" className="space-y-4 mt-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Currency Pair</label>
                <Select value="EUR/USD">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="EUR/USD">EUR/USD</SelectItem>
                    <SelectItem value="GBP/USD">GBP/USD</SelectItem>
                    <SelectItem value="JPY/USD">JPY/USD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Amount (EUR)</label>
                <Input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                />
              </div>
              
              <div className="bg-background p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">Rate</span>
                  <span className="font-medium">1.1717</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">Fee</span>
                  <span className="font-medium">€2.15</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">You'll receive</span>
                  <span className="font-bold text-red-600">$1,171.70</span>
                </div>
              </div>
              
              <Button className="w-full bg-red-600 hover:bg-red-700">
                Sell EUR
              </Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center text-xl font-semibold">
            <TrendingUp className="h-5 w-5 mr-2" />
            Popular Pairs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {popularPairs.map((pair, index) => (
              <div
                key={pair.pair}
                className="bg-background p-4 rounded-lg hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">{pair.pair}</span>
                  <span className="text-lg font-bold">{pair.price}</span>
                </div>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>Spread: {pair.spread}</span>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                      Buy
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                      Sell
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-background rounded-lg border border-dashed border-primary">
            <div className="flex items-center text-sm text-muted-foreground mb-2">
              <Clock className="h-4 w-4 mr-2" />
              Market Hours
            </div>
            <div className="text-sm">
              <div className="flex justify-between">
                <span>London:</span>
                <span className="text-green-600 font-medium">Open</span>
              </div>
              <div className="flex justify-between">
                <span>New York:</span>
                <span className="text-green-600 font-medium">Open</span>
              </div>
              <div className="flex justify-between">
                <span>Tokyo:</span>
                <span className="text-red-600 font-medium">Closed</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TradingPanel;
