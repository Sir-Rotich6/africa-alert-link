import AlertBridgeHeader from "@/components/AlertBridgeHeader";
import HeroSection from "@/components/HeroSection";
import DashboardPreview from "@/components/DashboardPreview";
import SupabaseIntegration from "@/components/SupabaseIntegration";
import SystemArchitecture from "@/components/SystemArchitecture";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AlertBridgeHeader />
      <main>
        <HeroSection />
        <DashboardPreview />
        <SupabaseIntegration />
        <SystemArchitecture />
      </main>
    </div>
  );
};

export default Index;
