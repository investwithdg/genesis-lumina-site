import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";
import Approach from "./pages/Approach";
import Engines from "./pages/Engines";
import PEAR from "./pages/PEAR";
import FieldGuides from "./pages/FieldGuides";
import Labs from "./pages/Labs";
import Compass from "./pages/Compass";
import Ignite from "./pages/Ignite";
import S3Transformation from "./pages/S3Transformation";
import Quiz from "./pages/Quiz";
import Newsletter from "./pages/Newsletter";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Analog from "./pages/guides/Analog";
import Harvest from "./pages/guides/Harvest";
import Audit from "./pages/guides/Audit";
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

          {/* Doctrine + Library */}
          <Route path="/approach" element={<Approach />} />
          <Route path="/engines" element={<Engines />} />

          {/* Offer stack */}
          <Route path="/pear" element={<PEAR />} />
          <Route path="/field-guides" element={<FieldGuides />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/compass" element={<Compass />} />
          <Route path="/ignite" element={<Ignite />} />
          <Route path="/s3" element={<S3Transformation />} />

          {/* Field guide detail pages */}
          <Route path="/field-guides/analog" element={<Analog />} />
          <Route path="/field-guides/harvest" element={<Harvest />} />
          <Route path="/field-guides/audit" element={<Audit />} />

          {/* Case studies */}
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/pst" element={<PST />} />
          <Route path="/case-studies/optimist" element={<Optimist />} />

          {/* Standard */}
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />

          {/* Legacy redirects */}
          <Route path="/diagnostic" element={<Navigate to="/pear" replace />} />
          <Route path="/waypoints/ai-literacy" element={<Navigate to="/engines" replace />} />
          <Route path="/waypoints/system-integration" element={<Navigate to="/engines" replace />} />
          <Route path="/waypoints/s3" element={<Navigate to="/s3" replace />} />
          <Route path="/products/lumina-labs" element={<Navigate to="/labs" replace />} />
          <Route path="/products/lumina-compass" element={<Navigate to="/compass" replace />} />
          <Route path="/products/lumina-ignite" element={<Navigate to="/ignite" replace />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
