
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Ignite", path: "/ignite" },
    { name: "Compass", path: "/compass" },
    { name: "FAQ", path: "/faq" },
  ];

  const isCurrentPage = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-foreground/10">
      <nav className="px-8 py-6 max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-medium hover-underline flex items-center gap-3">
          <img 
            src="/lovable-uploads/3ea3582b-e144-456a-83c9-0103815342aa.png" 
            alt="Genesis Lumina Icon" 
            className="w-8 h-8"
          />
          Genesis Lumina
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover-underline ${
                isCurrentPage(link.path) ? "text-black" : "text-foreground/70"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/compass">
            <Button 
              size="sm"
              className="bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-all duration-300"
            >
              Get Started
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-foreground/10 md:hidden">
            <div className="px-8 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block text-sm font-medium transition-colors ${
                    isCurrentPage(link.path) ? "text-black" : "text-foreground/70"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/compass" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  size="sm"
                  className="bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-all duration-300"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
