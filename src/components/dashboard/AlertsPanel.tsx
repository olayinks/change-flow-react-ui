import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bell, Plus, Trash2, TrendingUp, TrendingDown } from "lucide-react";

const alerts = [
  {
    id: 1,
    pair: "USD/EUR",
    condition: "above",
    target: 0.85,
    current: 0.8523,
    active: true,
    created: "2024-01-10"
  },
  {
    id: 2,
    pair: "GBP/USD",
    condition: "below",
    target: 1.25,
    current: 1.2654,
    active: false,
    created: "2024-01-08"
  },
  {
    id: 3,
    pair: "EUR/JPY",
    condition: "above",
    target: 160,
    current: 159.87,
    active: true,
    created: "2024-01-12"
  },
];

const AlertsPanel = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <Card className="p-6 bg-white/90 backdrop-blur-sm shadow-lg border-0">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Bell className="w-5 h-5 text-primary" />
          <h3 className="text-xl font-bold text-foreground">Rate Alerts</h3>
        </div>
        <Button onClick={() => setShowAddForm(!showAddForm)} className="gap-2">
          <Plus className="w-4 h-4" />
          Add Alert
        </Button>
      </div>

      {showAddForm && (
        <Card className="p-4 mb-6 bg-muted/30">
          <h4 className="font-semibold mb-4">Create New Alert</h4>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="From" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USD">USD</SelectItem>
                <SelectItem value="EUR">EUR</SelectItem>
                <SelectItem value="GBP">GBP</SelectItem>
                <SelectItem value="JPY">JPY</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="To" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USD">USD</SelectItem>
                <SelectItem value="EUR">EUR</SelectItem>
                <SelectItem value="GBP">GBP</SelectItem>
                <SelectItem value="JPY">JPY</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Condition" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="above">Goes Above</SelectItem>
                <SelectItem value="below">Goes Below</SelectItem>
              </SelectContent>
            </Select>

            <Input placeholder="Target Rate" type="number" step="0.0001" />

            <div className="flex gap-2">
              <Button size="sm" className="flex-1">Save</Button>
              <Button 
                size="sm" 
                variant="outline" 
                onClick={() => setShowAddForm(false)}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </div>
        </Card>
      )}

      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`flex items-center justify-between p-4 rounded-lg transition-colors ${
              alert.active 
                ? 'bg-green-50 border border-green-200' 
                : 'bg-muted/30'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`p-2 rounded-lg ${
                alert.condition === 'above' 
                  ? 'bg-green-100 text-green-600' 
                  : 'bg-red-100 text-red-600'
              }`}>
                {alert.condition === 'above' ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
              </div>
              <div>
                <div className="font-semibold text-foreground">{alert.pair}</div>
                <div className="text-sm text-muted-foreground">
                  Alert when rate goes {alert.condition} {alert.target}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right">
                <div className="font-semibold text-foreground">{alert.current}</div>
                <div className="text-sm text-muted-foreground">Current Rate</div>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${
                  alert.active ? 'bg-green-500' : 'bg-muted-foreground'
                }`} />
                <span className="text-sm text-muted-foreground">
                  {alert.active ? 'Active' : 'Inactive'}
                </span>
              </div>
              <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {alerts.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          <Bell className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>No alerts set up yet.</p>
          <p className="text-sm mt-2">Create your first alert to get notified of rate changes.</p>
        </div>
      )}
    </Card>
  );
};

export default AlertsPanel;