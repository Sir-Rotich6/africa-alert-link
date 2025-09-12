import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  Cloud, 
  Smartphone, 
  Users, 
  Brain,
  MapPin,
  Shield,
  Globe
} from "lucide-react";

const SystemArchitecture = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            System Architecture
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Scalable Emergency Response Infrastructure
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built on modern cloud infrastructure optimized for African communities with 
            low connectivity and diverse communication needs.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Architecture Diagram */}
          <Card className="p-8 mb-12 bg-gradient-to-br from-background to-muted/20">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Input Layer */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-center mb-6">Data Sources</h3>
                
                <Card className="p-4 bg-primary/5 border-primary/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-primary/20 text-primary rounded-lg">
                      <Cloud className="h-4 w-4" />
                    </div>
                    <span className="font-medium">Weather APIs</span>
                  </div>
                  <p className="text-sm text-muted-foreground">National meteorological services, satellite data</p>
                </Card>

                <Card className="p-4 bg-accent/5 border-accent/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-accent/20 text-accent rounded-lg">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <span className="font-medium">GIS Data</span>
                  </div>
                  <p className="text-sm text-muted-foreground">OpenStreetMap, elevation models, population density</p>
                </Card>

                <Card className="p-4 bg-success/5 border-success/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-success/20 text-success rounded-lg">
                      <Users className="h-4 w-4" />
                    </div>
                    <span className="font-medium">Community Reports</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Ground-truth data from local responders</p>
                </Card>
              </div>

              {/* Processing Layer */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-center mb-6">AI Processing</h3>
                
                <Card className="p-4 bg-warning/5 border-warning/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-warning/20 text-warning rounded-lg">
                      <Brain className="h-4 w-4" />
                    </div>
                    <span className="font-medium">Risk Analysis</span>
                  </div>
                  <p className="text-sm text-muted-foreground">ML models for weather prediction and impact assessment</p>
                </Card>

                <Card className="p-4 bg-primary-glow/10 border-primary/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-primary/20 text-primary rounded-lg">
                      <Database className="h-4 w-4" />
                    </div>
                    <span className="font-medium">Supabase Backend</span>
                  </div>
                  <p className="text-sm text-muted-foreground">PostGIS database with real-time subscriptions</p>
                </Card>

                <Card className="p-4 bg-danger/5 border-danger/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-danger/20 text-danger rounded-lg">
                      <Shield className="h-4 w-4" />
                    </div>
                    <span className="font-medium">Alert Engine</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Intelligent alert routing and localization</p>
                </Card>
              </div>

              {/* Output Layer */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-center mb-6">User Interfaces</h3>
                
                <Card className="p-4 bg-accent/5 border-accent/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-accent/20 text-accent rounded-lg">
                      <Globe className="h-4 w-4" />
                    </div>
                    <span className="font-medium">Web Dashboard</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Real-time coordination for responders and leaders</p>
                </Card>

                <Card className="p-4 bg-success/5 border-success/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-success/20 text-success rounded-lg">
                      <Smartphone className="h-4 w-4" />
                    </div>
                    <span className="font-medium">SMS & USSD</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Basic phone alerts via Africa's Talking API</p>
                </Card>

                <Card className="p-4 bg-primary/5 border-primary/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-primary/20 text-primary rounded-lg">
                      <Users className="h-4 w-4" />
                    </div>
                    <span className="font-medium">Community Portal</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Educational resources and subscription management</p>
                </Card>
              </div>
            </div>
          </Card>

          {/* Tech Stack */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-xl mb-4">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Frontend</h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>React + TypeScript</p>
                <p>Tailwind CSS</p>
                <p>PWA Support</p>
              </div>
            </Card>

            <Card className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 text-accent rounded-xl mb-4">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Backend</h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Supabase</p>
                <p>PostgreSQL + PostGIS</p>
                <p>Edge Functions</p>
              </div>
            </Card>

            <Card className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-warning/10 text-warning rounded-xl mb-4">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">AI/ML</h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>TensorFlow/PyTorch</p>
                <p>Cloud Functions</p>
                <p>Weather APIs</p>
              </div>
            </Card>

            <Card className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-success/10 text-success rounded-xl mb-4">
                <Smartphone className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Communication</h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Africa's Talking</p>
                <p>SMS/USSD</p>
                <p>Multilingual</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemArchitecture;