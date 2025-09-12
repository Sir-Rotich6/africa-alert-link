import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  Users, 
  Shield, 
  Smartphone, 
  Globe, 
  Lock,
  Zap,
  CheckCircle
} from "lucide-react";

const SupabaseIntegration = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-success text-success-foreground">
            Backend Integration Required
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Connect to Supabase for Full Functionality
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            AlertBridge requires Supabase integration to enable authentication, database storage, 
            SMS/USSD messaging, and AI-powered predictions. Connect now to activate all features.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <Card className="p-8 mb-12 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-xl mb-6">
                <Database className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Activate Supabase Integration</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Click the green Supabase button in the top right corner to connect your AlertBridge 
                application to a secure, scalable backend infrastructure.
              </p>
              <Button variant="hero" size="lg" className="mb-4">
                <Database className="h-5 w-5 mr-2" />
                Connect to Supabase
              </Button>
              <p className="text-sm text-muted-foreground">
                Free tier available • Production-ready infrastructure
              </p>
            </div>
          </Card>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-primary/10 text-primary rounded-lg">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">User Authentication</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-success" />
                  Role-based access control
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-success" />
                  Email & phone authentication
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-success" />
                  Multi-factor authentication
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-accent/10 text-accent rounded-lg">
                  <Database className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">PostGIS Database</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-success" />
                  Geographic data storage
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-success" />
                  Population tracking
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-success" />
                  Real-time updates
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-success/10 text-success rounded-lg">
                  <Smartphone className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">SMS & USSD</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-success" />
                  Africa's Talking integration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-success" />
                  Basic phone support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-success" />
                  Multilingual alerts
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-warning/10 text-warning rounded-lg">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">AI Predictions</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-success" />
                  Weather risk analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-success" />
                  Flood pattern simulation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-success" />
                  Risk zone mapping
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-primary-glow/20 text-primary rounded-lg">
                  <Globe className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">GIS Integration</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-success" />
                  OpenStreetMap integration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-success" />
                  Risk zone visualization
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-success" />
                  Community mapping
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-danger/10 text-danger rounded-lg">
                  <Lock className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">Data Security</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-success" />
                  Row Level Security (RLS)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-success" />
                  API key management
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-success" />
                  Encrypted communications
                </li>
              </ul>
            </Card>
          </div>

          {/* Implementation Roadmap */}
          <Card className="p-8">
            <h3 className="text-xl font-bold mb-6 text-center">Implementation Roadmap</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full mb-4">
                  1
                </div>
                <h4 className="font-semibold mb-2">Connect Supabase</h4>
                <p className="text-sm text-muted-foreground">Set up authentication, database schema, and security policies</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent text-accent-foreground rounded-full mb-4">
                  2
                </div>
                <h4 className="font-semibold mb-2">Integrate APIs</h4>
                <p className="text-sm text-muted-foreground">Connect SMS providers, weather APIs, and GIS services</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-success text-success-foreground rounded-full mb-4">
                  3
                </div>
                <h4 className="font-semibold mb-2">Deploy & Scale</h4>
                <p className="text-sm text-muted-foreground">Launch communities, train responders, and expand coverage</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SupabaseIntegration;