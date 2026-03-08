import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FooterProps {
  dark?: boolean;
}

const Footer = ({ dark = false }: FooterProps) => {
  return (
    <footer className={`px-8 py-16 ${dark ? 'bg-foreground text-white' : 'bg-white text-foreground'} border-t border-primary/20`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <img src="/lovable-uploads/3ea3582b-e144-456a-83c9-0103815342aa.png" alt="GL" className="w-8 h-8 rounded" />
              <span className="text-xl font-display tracking-tight">Genesis Lumina</span>
            </Link>
            <p className={`text-sm leading-relaxed ${dark ? 'text-white/60' : 'text-foreground/60'}`}>
              Orientation before execution. AI fluency and ethical transformation for values-aligned teams.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h4 className={`text-xs font-semibold uppercase tracking-wider mb-4 ${dark ? 'text-white/40' : 'text-foreground/40'}`}>Solutions</h4>
            <div className="space-y-2">
              <Link to="/diagnostic" className={`block text-sm min-h-[44px] sm:min-h-0 flex items-center hover:text-primary transition-colors font-medium ${dark ? 'text-white' : ''}`}>Diagnostic</Link>
              <Link to="/products/lumina-labs" className={`block text-sm min-h-[44px] sm:min-h-0 flex items-center hover:text-primary transition-colors ${dark ? 'text-white/70' : 'text-foreground/70'}`}>Lumina Labs</Link>
              <Link to="/products/lumina-compass" className={`block text-sm min-h-[44px] sm:min-h-0 flex items-center hover:text-primary transition-colors ${dark ? 'text-white/70' : 'text-foreground/70'}`}>Lumina Compass</Link>
              <Link to="/products/lumina-ignite" className={`block text-sm min-h-[44px] sm:min-h-0 flex items-center hover:text-primary transition-colors ${dark ? 'text-white/70' : 'text-foreground/70'}`}>Lumina Ignite</Link>
              <Link to="/waypoints/s3" className={`block text-sm min-h-[44px] sm:min-h-0 flex items-center hover:text-primary transition-colors ${dark ? 'text-white/70' : 'text-foreground/70'}`}>S³ Transformation</Link>
            </div>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className={`text-xs font-semibold uppercase tracking-wider mb-4 ${dark ? 'text-white/40' : 'text-foreground/40'}`}>Stay Connected</h4>
            <div className="space-y-2 mb-4">
              <Link to="/about" className={`block text-sm min-h-[44px] sm:min-h-0 flex items-center hover:text-primary transition-colors ${dark ? 'text-white/70' : 'text-foreground/70'}`}>About</Link>
              <Link to="/newsletter" className={`block text-sm min-h-[44px] sm:min-h-0 flex items-center hover:text-primary transition-colors ${dark ? 'text-white/70' : 'text-foreground/70'}`}>Newsletter</Link>
              <Link to="/faq" className={`block text-sm min-h-[44px] sm:min-h-0 flex items-center hover:text-primary transition-colors ${dark ? 'text-white/70' : 'text-foreground/70'}`}>FAQ</Link>
            </div>
            <Button asChild variant={dark ? "outline" : "default"} size="sm" className={dark ? "border-white/20 text-white hover:bg-white/10" : ""}>
              <a href="https://genesislumina.substack.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className={`pt-8 border-t ${dark ? 'border-white/10' : 'border-foreground/10'}`}>
          <p className={`text-xs text-center ${dark ? 'text-white/40' : 'text-foreground/40'}`}>
            © 2025 Genesis Lumina. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
