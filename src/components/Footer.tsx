import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SupercarRear, SupercarBadge } from "@/components/SupercarMotifs";

interface FooterProps {
  /** legacy prop — footer is dark by default in the new identity */
  dark?: boolean;
}

const Footer = (_: FooterProps) => {
  return (
    <footer className="relative bg-foreground text-white border-t border-white/10 px-6 md:px-8 py-16 pb-24 md:pb-16 overflow-hidden">
      {/* subtle collage marker */}
      <div className="absolute top-0 left-0 w-24 h-px bg-ember/70" aria-hidden />
      <div className="absolute top-0 right-8 h-8 w-px bg-primary/60" aria-hidden />

      {/* Mascot silhouette drifts across the bottom */}
      <SupercarRear
        className="absolute right-0 bottom-0 w-[65%] max-w-[720px] text-white/10 pointer-events-none"
        aria-hidden
      />

      <div className="max-w-6xl mx-auto relative on-motif">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <SupercarBadge className="w-10 h-4 text-white" />
              <div className="font-display text-xl tracking-tight">Genesis Lumina</div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Business Performance Engineering. We diagnose, engineer, and govern the engines that determine how your organization performs.
            </p>
          </div>

          <div>
            <div className="label-mono text-white/40 mb-4">Offers</div>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/pear" className="text-white hover:text-ember transition-colors">PEAR (free)</Link>
              <Link to="/field-guides" className="text-white/70 hover:text-white transition-colors">Field Guides</Link>
              <Link to="/labs" className="text-white/70 hover:text-white transition-colors">Lumina Labs</Link>
              <Link to="/compass" className="text-white/70 hover:text-white transition-colors">Lumina Compass</Link>
              <Link to="/ignite" className="text-white/70 hover:text-white transition-colors">Lumina Ignite</Link>
              <Link to="/s3" className="text-white/70 hover:text-white transition-colors">S³ Transformation</Link>
            </div>
          </div>

          <div>
            <div className="label-mono text-white/40 mb-4">Resources</div>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/approach" className="text-white/70 hover:text-white transition-colors">The Approach</Link>
              <Link to="/engines" className="text-white/70 hover:text-white transition-colors">Engine Library</Link>
              <Link to="/case-studies" className="text-white/70 hover:text-white transition-colors">Case Studies</Link>
              <Link to="/about" className="text-white/70 hover:text-white transition-colors">About</Link>
              <Link to="/newsletter" className="text-white/70 hover:text-white transition-colors">Newsletter</Link>
              <Link to="/faq" className="text-white/70 hover:text-white transition-colors">FAQ</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="label-mono text-white/40">© 2026 · Genesis Lumina · Business Performance Engineering</p>
          <Button asChild variant="outline" size="sm" className="border-white/20 bg-transparent text-white hover:bg-white/10 rounded-md">
            <a href="https://genesislumina.substack.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 label-mono">
              Weekly Notes
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
