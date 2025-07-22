import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Plus, TrendingUp, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Mock data - in real app this would come from API/state management
const alertStats = {
  totalAlerts: 3,
  activeAlerts: 2,
  triggeredThisWeek: 1,
  recentTrigger: "EUR/USD reached 0.85"
};

const AlertsWidget = () => {
  const navigate = useNavigate();

  return (
    <Card className="p-6 bg-gradient-to-br from-brand-blue/5 to-brand-purple/5 border border-brand-purple/10 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-r from-brand-blue to-brand-purple">
            <Bell className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-lg font-bold">Rate Alerts</h3>
        </div>
        <Button 
          size="sm" 
          variant="outline"
          onClick={() => navigate('/dashboard/alerts')}
          className="text-sm"
        >
          View All
        </Button>
      </div>

      <div className="space-y-4">
        {/* Alert Summary Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-brand-green" />
              <span className="text-sm text-muted-foreground">Active</span>
            </div>
            <div className="text-xl font-bold text-brand-green">{alertStats.activeAlerts}</div>
          </div>
          
          <div className="bg-white/50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="w-3 h-3 text-brand-orange" />
              <span className="text-sm text-muted-foreground">Triggered</span>
            </div>
            <div className="text-xl font-bold text-brand-orange">{alertStats.triggeredThisWeek}</div>
          </div>
        </div>

        {/* Recent Alert */}
        {alertStats.triggeredThisWeek > 0 && (
          <div className="bg-gradient-to-r from-brand-orange/10 to-brand-red/10 border border-brand-orange/20 rounded-lg p-3">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-sm font-medium text-brand-orange">Recent Alert</div>
                <div className="text-xs text-muted-foreground mt-1">{alertStats.recentTrigger}</div>
              </div>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="flex gap-2">
          <Button 
            size="sm" 
            onClick={() => navigate('/dashboard/alerts')}
            className="flex-1 bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-blue/90 hover:to-brand-purple/90"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create Alert
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default AlertsWidget;