import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/alert-bridge-hero.jpg";
import { AlertTriangle, Shield, Smartphone, Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="AlertBridge Emergency Response Network" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/95" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <AlertTriangle className="h-4 w-4" />
            AI-Powered Early Warning System
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Protecting African Communities
            <br />
            <span className="text-accent">Before Disaster Strikes</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            AlertBridge uses AI and GIS technology to predict weather risks, coordinate rescue operations, 
            and deliver life-saving alerts via SMS and USSD to communities across Africa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg">
              Connect to Supabase to Start
            </Button>
            <Button variant="outline" size="lg" className="text-lg">
              Learn More
            </Button>
          </div>

          {/* Key Features Cards */}
          <div className="grid md:grid-cols-4 gap-4 mt-16">
            <Card className="p-6 text-center bg-card/80 backdrop-blur-sm border-border/50">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-4">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">AI Predictions</h3>
              <p className="text-sm text-muted-foreground">Weather risk analysis and flood pattern simulation</p>
            </Card>

            <Card className="p-6 text-center bg-card/80 backdrop-blur-sm border-border/50">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 text-accent rounded-lg mb-4">
                <Smartphone className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">SMS & USSD</h3>
              <p className="text-sm text-muted-foreground">Reach communities with basic phones</p>
            </Card>

            <Card className="p-6 text-center bg-card/80 backdrop-blur-sm border-border/50">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-success/10 text-success rounded-lg mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Rescue Coordination</h3>
              <p className="text-sm text-muted-foreground">Real-time tracking and response management</p>
            </Card>

            <Card className="p-6 text-center bg-card/80 backdrop-blur-sm border-border/50">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-glow/20 text-primary rounded-lg mb-4">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Multilingual</h3>
              <p className="text-sm text-muted-foreground">Local African language support</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;