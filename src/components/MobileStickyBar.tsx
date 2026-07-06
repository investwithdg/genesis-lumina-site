import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Compass } from "lucide-react";

const MobileStickyBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-foreground/95 backdrop-blur-md border-t border-white/10 px-4 py-3 flex gap-2">
      <Button asChild size="sm" className="flex-1 gap-1.5 min-h-[44px] bg-white text-foreground hover:bg-white/90 rounded-md label-mono">
        <Link to="/pear">
          Book PEAR
          <ArrowRight className="w-4 h-4" />
        </Link>
      </Button>
      <Button asChild variant="outline" size="sm" className="flex-1 gap-1.5 min-h-[44px] border-white/25 bg-transparent text-white hover:bg-white/10 rounded-md label-mono">
        <Link to="/engines">
          <Compass className="w-4 h-4" />
          Engines
        </Link>
      </Button>
    </div>
  );
};

export default MobileStickyBar;
