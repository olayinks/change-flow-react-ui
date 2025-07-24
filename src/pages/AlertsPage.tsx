import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Plus, Edit, Trash2, TrendingUp, TrendingDown, AlertCircle } from "lucide-react";
import AlertForm from "@/components/dashboard/AlertForm";
import { useToast } from "@/hooks/use-toast";

// Mock data - in real app this would come from API/state management
const initialAlerts = [
  {
    id: 1,
    fromCurrency: "USD",
    toCurrency: "EUR",
    condition: "above",
    targetRate: 0.85,
    currentRate: 0.8523,
    active: true,
    created: "2024-01-10",
    triggered: false
  },
  {
    id: 2,
    fromCurrency: "GBP", 
    toCurrency: "USD",
    condition: "below",
    targetRate: 1.25,
    currentRate: 1.2654,
    active: true,
    created: "2024-01-08",
    triggered: true
  },
  {
    id: 3,
    fromCurrency: "EUR",
    toCurrency: "JPY", 
    condition: "above",
    targetRate: 160,
    currentRate: 159.87,
    active: false,
    created: "2024-01-12",
    triggered: false
  },
];

const AlertsPage = () => {
  const [alerts, setAlerts] = useState(initialAlerts);
  const [showForm, setShowForm] = useState(false);
  const [editingAlert, setEditingAlert] = useState<any>(null);
  const { toast } = useToast();

  const handleSave = (alertData: any) => {
    if (editingAlert) {
      // Update existing alert
      setAlerts(prev => prev.map(alert => 
        alert.id === alertData.id 
          ? { 
              ...alert, 
              fromCurrency: alertData.fromCurrency,
              toCurrency: alertData.toCurrency,
              condition: alertData.condition,
              targetRate: alertData.targetRate 
            }
          : alert
      ));
      toast({ title: "Alert updated successfully!" });
    } else {
      // Create new alert
      const newAlert = {
        id: Date.now(),
        ...alertData,
        currentRate: Math.random() * 2, // Mock current rate
        active: true,
        created: new Date().toISOString().split('T')[0],
        triggered: false
      };
      setAlerts(prev => [...prev, newAlert]);
      toast({ title: "Alert created successfully!" });
    }
    setShowForm(false);
    setEditingAlert(null);
  };

  const handleEdit = (alert: any) => {
    setEditingAlert(alert);
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
    toast({ title: "Alert deleted successfully!" });
  };

  const handleToggleActive = (id: number) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === id ? { ...alert, active: !alert.active } : alert
    ));
    toast({ title: "Alert status updated!" });
  };

  const activeAlerts = alerts.filter(alert => alert.active);
  const triggeredAlerts = alerts.filter(alert => alert.triggered);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
            Rate Alerts
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage your currency rate alerts and get notified when rates change
          </p>
        </div>
        <Button 
          onClick={() => setShowForm(true)}
          className="bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-blue/90 hover:to-brand-purple/90"
        >
          <Plus className="w-4 h-4 mr-2" />
          Create Alert
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 bg-gradient-to-br from-brand-blue/5 to-brand-purple/5">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-r from-brand-blue to-brand-purple">
              <Bell className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Alerts</p>
              <p className="text-2xl font-bold">{alerts.length}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-brand-green/5 to-brand-blue/5">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-r from-brand-green to-brand-blue">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Alerts</p>
              <p className="text-2xl font-bold text-brand-green">{activeAlerts.length}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-brand-orange/5 to-brand-red/5">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-r from-brand-orange to-brand-red">
              <AlertCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Triggered This Week</p>
              <p className="text-2xl font-bold text-brand-orange">{triggeredAlerts.length}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Alert Form */}
      {showForm && (
        <AlertForm
          alert={editingAlert}
          onSave={handleSave}
          onCancel={() => {
            setShowForm(false);
            setEditingAlert(null);
          }}
        />
      )}

      {/* Alerts List */}
      <Card className="p-6">
        <h3 className="text-lg font-bold mb-4">Your Alerts</h3>
        
        {alerts.length === 0 ? (
          <div className="text-center py-12">
            <Bell className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
            <h4 className="text-lg font-medium text-muted-foreground mb-2">No alerts created yet</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Create your first alert to get notified when exchange rates change
            </p>
            <Button 
              onClick={() => setShowForm(true)}
              className="bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-blue/90 hover:to-brand-purple/90"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Your First Alert
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className={`p-4 rounded-lg border transition-all duration-200 hover:shadow-md ${
                  alert.active 
                    ? 'bg-gradient-to-r from-brand-green/5 to-brand-blue/5 border-brand-green/20' 
                    : 'bg-muted/30 border-muted'
                } ${alert.triggered ? 'ring-2 ring-brand-orange/30' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${
                      alert.condition === 'above' 
                        ? 'bg-gradient-to-r from-brand-green to-brand-blue text-white' 
                        : 'bg-gradient-to-r from-brand-red to-brand-orange text-white'
                    }`}>
                      {alert.condition === 'above' ? (
                        <TrendingUp className="w-4 h-4" />
                      ) : (
                        <TrendingDown className="w-4 h-4" />
                      )}
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold">
                          {alert.fromCurrency}/{alert.toCurrency}
                        </span>
                        {alert.triggered && (
                          <Badge variant="secondary" className="bg-brand-orange/10 text-brand-orange border-brand-orange/20">
                            <AlertCircle className="w-3 h-3 mr-1" />
                            Triggered
                          </Badge>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Alert when rate goes {alert.condition} {alert.targetRate}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="font-semibold">{alert.currentRate.toFixed(4)}</div>
                      <div className="text-sm text-muted-foreground">Current Rate</div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleToggleActive(alert.id)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          alert.active ? 'bg-brand-green' : 'bg-muted-foreground'
                        }`}
                      />
                      <span className="text-sm text-muted-foreground">
                        {alert.active ? 'Active' : 'Inactive'}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleEdit(alert)}
                        className="hover:bg-accent hover:text-accent-foreground"
                        aria-label="Edit alert"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleDelete(alert.id)}
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        aria-label="Delete alert"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
};

export default AlertsPage;