
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";
import AILiteracy from "./pages/waypoints/AILiteracy";
import SystemIntegration from "./pages/waypoints/SystemIntegration";
import S3 from "./pages/waypoints/S3";
import Quiz from "./pages/Quiz";
import Newsletter from "./pages/Newsletter";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Analog from "./pages/guides/Analog";
import Harvest from "./pages/guides/Harvest";
import Audit from "./pages/guides/Audit";
import Diagnostic from "./pages/Diagnostic";
import LuminaLabs from "./pages/products/LuminaLabs";
import LuminaCompass from "./pages/products/LuminaCompass";
import LuminaIgnite from "./pages/products/LuminaIgnite";
import CaseStudies from "./pages/CaseStudies";
import PST from "./pages/case-studies/PST";
import Optimist from "./pages/case-studies/Optimist";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/diagnostic" element={<Diagnostic />} />
          <Route path="/waypoints/ai-literacy" element={<AILiteracy />} />
          <Route path="/waypoints/system-integration" element={<SystemIntegration />} />
          <Route path="/waypoints/s3" element={<S3 />} />
          <Route path="/field-guides/analog" element={<Analog />} />
          <Route path="/field-guides/harvest" element={<Harvest />} />
          <Route path="/field-guides/audit" element={<Audit />} />
          <Route path="/products/lumina-labs" element={<LuminaLabs />} />
          <Route path="/products/lumina-compass" element={<LuminaCompass />} />
          <Route path="/products/lumina-ignite" element={<LuminaIgnite />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/pst" element={<PST />} />
          <Route path="/case-studies/optimist" element={<Optimist />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
