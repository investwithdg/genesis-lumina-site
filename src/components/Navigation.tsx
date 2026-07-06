import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { SupercarBadge } from "@/components/SupercarMotifs";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const offersLinks = [
    { title: "PEAR — Free 30-min Call", path: "/pear" },
    { title: "Field Guides ($47 – $297)", path: "/field-guides" },
    { title: "Lumina Labs — Team Workshop", path: "/labs" },
    { title: "Lumina Compass — 4-Week Sprint", path: "/compass" },
    { title: "Lumina Ignite — Ongoing Partner", path: "/ignite" },
    { title: "S³ Transformation", path: "/s3" },
  ];

  const resourcesLinks = [
    { title: "The Approach (BPE Doctrine)", path: "/approach" },
    { title: "Engine Library", path: "/engines" },
    { title: "Case Studies", path: "/case-studies" },
    { title: "Newsletter", path: "/newsletter" },
    { title: "FAQ", path: "/faq" },
  ];

  const isCurrentPage = (p: string) => location.pathname === p;
  const isOffersActive = offersLinks.some((l) => location.pathname === l.path);
  const isResourcesActive = resourcesLinks.some((l) => location.pathname === l.path);

  const linkBase = "label-mono transition-colors";
  const activeUnderline =
    "relative after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-full after:bg-ember";

  return (
    <header className="sticky top-0 z-50 w-full bg-foreground/90 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2.5 font-display text-lg font-medium tracking-tight text-white hover:opacity-80 transition-opacity"
          >
            <SupercarBadge className="w-7 h-7 text-white" />
            <span className="text-white">GENESIS</span>
            <span className="text-white/50"> / </span>
            <span className="text-white">LUMINA</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <button
                className={`${linkBase} flex items-center gap-1.5 ${
                  isOffersActive ? "text-white " + activeUnderline : "text-white/60 hover:text-white"
                }`}
              >
                Offers
                <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-3 w-80 bg-foreground border border-white/10 rounded-md shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                <div className="p-2">
                  {offersLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block px-3 py-2 text-sm rounded transition-colors ${
                        isCurrentPage(link.path) ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <button
                className={`${linkBase} flex items-center gap-1.5 ${
                  isResourcesActive ? "text-white " + activeUnderline : "text-white/60 hover:text-white"
                }`}
              >
                Resources
                <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-3 w-72 bg-foreground border border-white/10 rounded-md shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                <div className="p-2">
                  {resourcesLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block px-3 py-2 text-sm rounded transition-colors ${
                        isCurrentPage(link.path) ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className={`${linkBase} ${
                isCurrentPage("/about") ? "text-white " + activeUnderline : "text-white/60 hover:text-white"
              }`}
            >
              About
            </Link>

            <Button asChild size="sm" className="gap-2 bg-white text-foreground hover:bg-white/90 rounded-md label-mono">
              <Link to="/pear">Book PEAR<ArrowRight className="w-3.5 h-3.5" /></Link>
            </Button>
          </div>

          <button
            className="md:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-white/10 pt-4">
            <div className="space-y-1">
              <div className="label-mono text-white/40 px-2">Offers</div>
              {offersLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center px-3 py-3 min-h-[44px] text-sm rounded transition-colors ${
                    isCurrentPage(link.path) ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </div>

            <div className="space-y-1 pt-2">
              <div className="label-mono text-white/40 px-2">Resources</div>
              {resourcesLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center px-3 py-3 min-h-[44px] text-sm rounded transition-colors ${
                    isCurrentPage(link.path) ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </div>

            <div className="space-y-1 pt-2">
              <Link
                to="/about"
                className={`block px-3 py-3 min-h-[44px] text-sm rounded transition-colors ${
                  isCurrentPage("/about") ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>

            <div className="pt-4">
              <Button asChild size="sm" className="w-full gap-2 bg-white text-foreground hover:bg-white/90 rounded-md">
                <Link to="/pear" onClick={() => setIsMenuOpen(false)}>Book PEAR (free)<ArrowRight className="w-4 h-4" /></Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
