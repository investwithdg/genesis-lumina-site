
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Flash from "./pages/programs/Flash";
import Spark from "./pages/programs/Spark";
import Ignite from "./pages/programs/Ignite";
import Compass from "./pages/programs/Compass";
import Newsletter from "./pages/Newsletter";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Programs from "./pages/Programs";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/flash" element={<Flash />} />
          <Route path="/programs/spark" element={<Spark />} />
          <Route path="/programs/ignite" element={<Ignite />} />
          <Route path="/programs/compass" element={<Compass />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          {/* Redirects for old URLs */}
          <Route path="/ignite" element={<Navigate to="/programs/ignite" replace />} />
          <Route path="/compass" element={<Navigate to="/programs/compass" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
