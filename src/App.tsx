
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/use-theme";
import Index from "./pages/Index";
import Roadmaps from "./pages/Roadmaps";
import FinanceRoadmap from "./pages/FinanceRoadmap";
import SalesRoadmap from "./pages/SalesRoadmap";
import MarketingRoadmap from "./pages/MarketingRoadmap";
import CommunicationRoadmap from "./pages/CommunicationRoadmap";
import LanguagesRoadmap from "./pages/LanguagesRoadmap";
import GermanRoadmap from "./pages/roadmaps/languages/GermanRoadmap";
import FrenchRoadmap from "./pages/roadmaps/languages/FrenchRoadmap";
import EnglishRoadmap from "./pages/roadmaps/languages/EnglishRoadmap";
import PublicSpeakingRoadmap from "./pages/roadmaps/communication/PublicSpeakingRoadmap";
import BusinessNegotiationRoadmap from "./pages/roadmaps/communication/BusinessNegotiationRoadmap";
import Resources from "./pages/Resources";
import Videos from "./pages/Videos";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/roadmaps" element={<Roadmaps />} />
            <Route path="/roadmaps/finance" element={<FinanceRoadmap />} />
            <Route path="/roadmaps/sales" element={<SalesRoadmap />} />
            <Route path="/roadmaps/marketing" element={<MarketingRoadmap />} />
            <Route path="/roadmaps/communication" element={<CommunicationRoadmap />} />
            <Route path="/roadmaps/communication/public-speaking" element={<PublicSpeakingRoadmap />} />
            <Route path="/roadmaps/communication/negotiation" element={<BusinessNegotiationRoadmap />} />
            <Route path="/roadmaps/languages" element={<LanguagesRoadmap />} />
            <Route path="/roadmaps/languages/german" element={<GermanRoadmap />} />
            <Route path="/roadmaps/languages/french" element={<FrenchRoadmap />} />
            <Route path="/roadmaps/languages/english" element={<EnglishRoadmap />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/faq" element={<FAQ />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
