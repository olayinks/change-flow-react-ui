import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X } from "lucide-react";

interface AlertFormProps {
  alert?: {
    id: number;
    fromCurrency: string;
    toCurrency: string;
    condition: string;
    targetRate: number;
  } | null;
  onSave: (alertData: any) => void;
  onCancel: () => void;
}

const AlertForm = ({ alert, onSave, onCancel }: AlertFormProps) => {
  const [formData, setFormData] = useState({
    fromCurrency: alert?.fromCurrency || "",
    toCurrency: alert?.toCurrency || "",
    condition: alert?.condition || "",
    targetRate: alert?.targetRate?.toString() || ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fromCurrency && formData.toCurrency && formData.condition && formData.targetRate) {
      onSave({
        ...formData,
        targetRate: parseFloat(formData.targetRate),
        id: alert?.id
      });
    }
  };

  const currencies = ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY"];

  return (
    <Card className="p-6 bg-gradient-to-br from-brand-blue/5 to-brand-purple/5 border border-brand-purple/20">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold">
          {alert ? "Edit Alert" : "Create New Alert"}
        </h3>
        <Button variant="ghost" size="sm" onClick={onCancel}>
          <X className="w-4 h-4" />
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">From Currency</label>
            <Select 
              value={formData.fromCurrency} 
              onValueChange={(value) => setFormData(prev => ({ ...prev, fromCurrency: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                {currencies.map(currency => (
                  <SelectItem key={currency} value={currency}>{currency}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">To Currency</label>
            <Select 
              value={formData.toCurrency} 
              onValueChange={(value) => setFormData(prev => ({ ...prev, toCurrency: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                {currencies.map(currency => (
                  <SelectItem key={currency} value={currency}>{currency}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Condition</label>
            <Select 
              value={formData.condition} 
              onValueChange={(value) => setFormData(prev => ({ ...prev, condition: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select condition" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="above">Goes Above</SelectItem>
                <SelectItem value="below">Goes Below</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Target Rate</label>
            <Input
              type="number"
              step="0.0001"
              placeholder="0.0000"
              value={formData.targetRate}
              onChange={(e) => setFormData(prev => ({ ...prev, targetRate: e.target.value }))}
            />
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <Button 
            type="submit" 
            className="flex-1 bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-blue/90 hover:to-brand-purple/90"
          >
            {alert ? "Update Alert" : "Create Alert"}
          </Button>
          <Button type="button" variant="outline" onClick={onCancel} className="flex-1">
            Cancel
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default AlertForm;