import { Button } from "@/components/ui/button";
import alertBridgeLogo from "@/assets/alertbridge-logo.png";
import { Bell, Shield, Users, MapPin } from "lucide-react";

const AlertBridgeHeader = () => {
  return (
    <header className="bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={alertBridgeLogo} 
              alt="AlertBridge Logo" 
              className="h-8 w-8"
            />
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AlertBridge
              </h1>
              <p className="text-xs text-muted-foreground">Early Warning & Rescue Coordination</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#dashboard" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Shield className="h-4 w-4" />
              Dashboard
            </a>
            <a href="#alerts" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Bell className="h-4 w-4" />
              Alerts
            </a>
            <a href="#community" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Users className="h-4 w-4" />
              Community
            </a>
            <a href="#maps" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <MapPin className="h-4 w-4" />
              Risk Maps
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              Log In
            </Button>
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AlertBridgeHeader;