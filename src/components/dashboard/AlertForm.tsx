import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X, Check } from "lucide-react";
import { z } from "zod";

interface AlertFormProps {
  alert?: {
    id: number;
    fromCurrency: string;
    toCurrency: string;
    condition: string;
    targetRate: number;
    providers?: string[];
  } | null;
  onSave: (alertData: any) => void;
  onCancel: () => void;
}

const alertSchema = z.object({
  fromCurrency: z.string().min(1, "Please select a source currency"),
  toCurrency: z.string().min(1, "Please select a target currency"), 
  condition: z.enum(["above", "below"], {
    errorMap: () => ({ message: "Please select a condition" })
  }),
  targetRate: z.string()
    .min(1, "Please enter a target rate")
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, {
      message: "Please enter a valid positive number"
    }),
  providers: z.array(z.string()).min(1, "Please select at least one provider")
});

const AlertForm = ({ alert, onSave, onCancel }: AlertFormProps) => {
  const [formData, setFormData] = useState({
    fromCurrency: alert?.fromCurrency || "",
    toCurrency: alert?.toCurrency || "",
    condition: alert?.condition || "",
    targetRate: alert?.targetRate?.toString() || "",
    providers: alert?.providers || ["All"]
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    try {
      alertSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path.length > 0) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSave({
        ...formData,
        targetRate: parseFloat(formData.targetRate),
        id: alert?.id
      });
    }
  };

  const currencies = ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY"];
  const providers = ["Wise", "Revolut", "XE", "Western Union", "MoneyGram", "Remitly"];

  const toggleProvider = (provider: string) => {
    setFormData(prev => {
      let newProviders;
      if (provider === "All") {
        newProviders = prev.providers.includes("All") ? [] : ["All"];
      } else {
        newProviders = prev.providers.includes(provider)
          ? prev.providers.filter(p => p !== provider && p !== "All")
          : [...prev.providers.filter(p => p !== "All"), provider];
      }
      return {
        ...prev,
        providers: newProviders
      };
    });
    setErrors(prev => ({ ...prev, providers: '' }));
  };

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
              onValueChange={(value) => {
                setFormData(prev => ({ ...prev, fromCurrency: value }));
                setErrors(prev => ({ ...prev, fromCurrency: '' }));
              }}
            >
              <SelectTrigger className={errors.fromCurrency ? "border-red-500" : ""}>
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                {currencies.map(currency => (
                  <SelectItem key={currency} value={currency}>{currency}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.fromCurrency && <p className="text-red-500 text-xs mt-1">{errors.fromCurrency}</p>}
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">To Currency</label>
            <Select 
              value={formData.toCurrency} 
              onValueChange={(value) => {
                setFormData(prev => ({ ...prev, toCurrency: value }));
                setErrors(prev => ({ ...prev, toCurrency: '' }));
              }}
            >
              <SelectTrigger className={errors.toCurrency ? "border-red-500" : ""}>
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                {currencies.map(currency => (
                  <SelectItem key={currency} value={currency}>{currency}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.toCurrency && <p className="text-red-500 text-xs mt-1">{errors.toCurrency}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Condition</label>
            <Select 
              value={formData.condition} 
              onValueChange={(value) => {
                setFormData(prev => ({ ...prev, condition: value }));
                setErrors(prev => ({ ...prev, condition: '' }));
              }}
            >
              <SelectTrigger className={errors.condition ? "border-red-500" : ""}>
                <SelectValue placeholder="Select condition" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="above">Goes Above</SelectItem>
                <SelectItem value="below">Goes Below</SelectItem>
              </SelectContent>
            </Select>
            {errors.condition && <p className="text-red-500 text-xs mt-1">{errors.condition}</p>}
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Target Rate</label>
            <Input
              type="number"
              step="0.0001"
              placeholder="0.0000"
              value={formData.targetRate}
              onChange={(e) => {
                setFormData(prev => ({ ...prev, targetRate: e.target.value }));
                setErrors(prev => ({ ...prev, targetRate: '' }));
              }}
              className={errors.targetRate ? "border-red-500" : ""}
            />
            {errors.targetRate && <p className="text-red-500 text-xs mt-1">{errors.targetRate}</p>}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Providers</label>
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => toggleProvider("All")}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                  formData.providers.includes("All")
                    ? "bg-gradient-to-r from-brand-blue to-brand-purple text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {formData.providers.includes("All") && <Check className="w-3 h-3" />}
                All Providers
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {providers.map(provider => (
                <button
                  key={provider}
                  type="button"
                  onClick={() => toggleProvider(provider)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                    formData.providers.includes(provider)
                      ? "bg-gradient-to-r from-brand-blue to-brand-purple text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {formData.providers.includes(provider) && <Check className="w-3 h-3" />}
                  {provider}
                </button>
              ))}
            </div>
          </div>
          {errors.providers && <p className="text-red-500 text-xs mt-1">{errors.providers}</p>}
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