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
        <div className="text-center mb-12">
          <p className={`text-sm mb-4 ${dark ? 'text-white/60' : 'text-foreground/60'}`}>
            Weekly notes on Business Performance Engineering
          </p>
          <Button asChild variant={dark ? "outline" : "default"} size="sm" className={dark ? "border-white/20 text-white hover:bg-white/10" : ""}>
            <a href="https://genesislumina.substack.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Subscribe to Newsletter
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-6 mb-8 text-sm">
          <Link to="/pear" className={`min-h-[44px] sm:min-h-0 flex items-center justify-center hover:text-primary transition-colors font-medium ${dark ? 'text-white' : ''}`}>PEAR (free)</Link>
          <span className={`hidden sm:inline ${dark ? "text-white/30" : "text-foreground/30"}`}>│</span>
          <Link to="/approach" className={`min-h-[44px] sm:min-h-0 flex items-center justify-center hover:text-primary transition-colors ${dark ? 'text-white/70' : ''}`}>Approach</Link>
          <Link to="/engines" className={`min-h-[44px] sm:min-h-0 flex items-center justify-center hover:text-primary transition-colors ${dark ? 'text-white/70' : ''}`}>Engines</Link>
          <Link to="/labs" className={`min-h-[44px] sm:min-h-0 flex items-center justify-center hover:text-primary transition-colors ${dark ? 'text-white/70' : ''}`}>Labs</Link>
          <Link to="/compass" className={`min-h-[44px] sm:min-h-0 flex items-center justify-center hover:text-primary transition-colors ${dark ? 'text-white/70' : ''}`}>Compass</Link>
          <Link to="/ignite" className={`min-h-[44px] sm:min-h-0 flex items-center justify-center hover:text-primary transition-colors ${dark ? 'text-white/70' : ''}`}>Ignite</Link>
          <Link to="/s3" className={`min-h-[44px] sm:min-h-0 flex items-center justify-center hover:text-primary transition-colors ${dark ? 'text-white/70' : ''}`}>S³</Link>
          <span className={`hidden sm:inline ${dark ? "text-white/30" : "text-foreground/30"}`}>│</span>
          <Link to="/case-studies" className={`min-h-[44px] sm:min-h-0 flex items-center justify-center hover:text-primary transition-colors ${dark ? 'text-white/70' : ''}`}>Case Studies</Link>
          <Link to="/about" className={`min-h-[44px] sm:min-h-0 flex items-center justify-center hover:text-primary transition-colors ${dark ? 'text-white/70' : ''}`}>About</Link>
          <Link to="/newsletter" className={`min-h-[44px] sm:min-h-0 flex items-center justify-center hover:text-primary transition-colors ${dark ? 'text-white/70' : ''}`}>Newsletter</Link>
          <Link to="/faq" className={`min-h-[44px] sm:min-h-0 flex items-center justify-center hover:text-primary transition-colors ${dark ? 'text-white/70' : ''}`}>FAQ</Link>
        </div>

        <p className={`text-xs text-center ${dark ? 'text-white/40' : 'text-foreground/40'}`}>
          © 2026 Genesis Lumina. Business Performance Engineering.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
