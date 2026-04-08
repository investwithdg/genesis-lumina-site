import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FooterProps {
  dark?: boolean;
}

const Footer = ({ dark = false }: FooterProps) => {
  return (
    <footer className={`px-8 py-16 pb-24 md:pb-16 ${dark ? 'bg-foreground text-white border-white/10' : 'bg-white text-foreground border-foreground/10'} border-t`}>
      <div className="max-w-6xl mx-auto">
        {/* Newsletter CTA */}
        <div className="text-center mb-12">
          <p className={`text-sm mb-4 ${dark ? 'text-white/60' : 'text-foreground/60'}`}>
            Get weekly AI insights delivered to your inbox
          </p>
          <Button asChild variant={dark ? "outline" : "default"} size="sm" className={dark ? "border-white/20 text-white hover:bg-white/10" : ""}>
            <a href="https://genesislumina.substack.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Subscribe to Newsletter
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-8 mb-8 text-sm">
          <Link to="/diagnostic" className={`min-h-[44px] sm:min-h-0 flex items-center justify-center hover:text-primary transition-colors font-medium ${dark ? 'text-white' : ''}`}>Assessment</Link>
          <span className={`hidden sm:inline ${dark ? "text-white/30" : "text-foreground/30"}`}>│</span>
          <Link to="/waypoints/ai-literacy" className={`min-h-[44px] sm:min-h-0 flex items-center justify-center hover:text-primary transition-colors ${dark ? 'text-white/70' : ''}`}>AI Literacy</Link>
          <Link to="/waypoints/system-integration" className={`min-h-[44px] sm:min-h-0 flex items-center justify-center hover:text-primary transition-colors ${dark ? 'text-white/70' : ''}`}>System Integration</Link>
          <Link to="/waypoints/s3" className={`min-h-[44px] sm:min-h-0 flex items-center justify-center hover:text-primary transition-colors ${dark ? 'text-white/70' : ''}`}>S³</Link>
          <span className={`hidden sm:inline ${dark ? "text-white/30" : "text-foreground/30"}`}>│</span>
          <Link to="/about" className={`min-h-[44px] sm:min-h-0 flex items-center justify-center hover:text-primary transition-colors ${dark ? 'text-white/70' : ''}`}>About</Link>
          <Link to="/newsletter" className={`min-h-[44px] sm:min-h-0 flex items-center justify-center hover:text-primary transition-colors ${dark ? 'text-white/70' : ''}`}>Newsletter</Link>
          <Link to="/faq" className={`min-h-[44px] sm:min-h-0 flex items-center justify-center hover:text-primary transition-colors ${dark ? 'text-white/70' : ''}`}>FAQ</Link>
        </div>

        {/* Copyright */}
        <p className={`text-xs text-center ${dark ? 'text-white/40' : 'text-foreground/40'}`}>
          © 2025 Genesis Lumina. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
