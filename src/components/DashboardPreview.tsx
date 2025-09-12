import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  AlertTriangle, 
  Shield, 
  Heart, 
  MapPin, 
  Clock,
  TrendingUp,
  Zap
} from "lucide-react";

const DashboardPreview = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Rescue Coordination Dashboard
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real-Time Emergency Response
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Monitor affected populations, coordinate rescue teams, and track response progress 
            across multiple communities in real-time.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Alert Banner */}
          <Card className="p-4 mb-6 bg-gradient-to-r from-warning/10 to-danger/10 border-warning/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-warning text-warning-foreground rounded-lg">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-warning-foreground">ACTIVE ALERT: Flood Warning</h3>
                  <p className="text-sm text-muted-foreground">River levels rising in Lagos State - 3 communities affected</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="warning" size="sm">
                  View Details
                </Button>
                <Button variant="outline" size="sm">
                  Send Update
                </Button>
              </div>
            </div>
          </Card>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg">
                  <Users className="h-6 w-6" />
                </div>
                <TrendingUp className="h-4 w-4 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold">1,247</p>
                <p className="text-sm text-muted-foreground">Total Residents</p>
                <div className="mt-2">
                  <Badge variant="secondary" className="text-xs">Lagos State</Badge>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-success/10 text-success rounded-lg">
                  <Shield className="h-6 w-6" />
                </div>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold text-success">892</p>
                <p className="text-sm text-muted-foreground">Safe & Rescued</p>
                <Progress value={71} className="mt-2 h-2" />
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-warning/10 text-warning rounded-lg">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <Zap className="h-4 w-4 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold text-warning">355</p>
                <p className="text-sm text-muted-foreground">Evacuation Needed</p>
                <div className="mt-2">
                  <Badge variant="outline" className="text-xs text-warning">Priority</Badge>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 text-accent rounded-lg">
                  <Heart className="h-6 w-6" />
                </div>
                <MapPin className="h-4 w-4 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">Active Rescue Teams</p>
                <div className="mt-2">
                  <Badge className="text-xs">All Deployed</Badge>
                </div>
              </div>
            </Card>
          </div>

          {/* Community Status Table */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Community Status</h3>
              <Button variant="outline" size="sm">
                Export Report
              </Button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium">Community</th>
                    <th className="text-left py-3 px-4 font-medium">Risk Level</th>
                    <th className="text-left py-3 px-4 font-medium">Population</th>
                    <th className="text-left py-3 px-4 font-medium">Status</th>
                    <th className="text-left py-3 px-4 font-medium">Last Update</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-danger rounded-full"></div>
                        Ajegunle
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant="outline" className="text-danger border-danger/20">Critical</Badge>
                    </td>
                    <td className="py-3 px-4">423 residents</td>
                    <td className="py-3 px-4">
                      <Badge className="bg-warning text-warning-foreground">Evacuating</Badge>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">2 min ago</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-warning rounded-full"></div>
                        Mushin
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant="outline" className="text-warning border-warning/20">High</Badge>
                    </td>
                    <td className="py-3 px-4">612 residents</td>
                    <td className="py-3 px-4">
                      <Badge className="bg-primary text-primary-foreground">Monitoring</Badge>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">5 min ago</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                        Ikeja
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant="outline" className="text-success border-success/20">Low</Badge>
                    </td>
                    <td className="py-3 px-4">212 residents</td>
                    <td className="py-3 px-4">
                      <Badge className="bg-success text-success-foreground">Safe</Badge>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">12 min ago</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;