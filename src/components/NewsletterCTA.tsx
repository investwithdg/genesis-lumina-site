import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

interface NewsletterCTAProps {
  dark?: boolean;
  compact?: boolean;
}

const NewsletterCTA = ({ dark = false, compact = false }: NewsletterCTAProps) => {
  if (compact) {
    return (
      <div className={`flex items-center gap-4 p-4 rounded-lg ${dark ? 'bg-white/5' : 'bg-foreground/5'}`}>
        <Mail className={`w-5 h-5 ${dark ? 'text-white/60' : 'text-foreground/60'}`} />
        <div className="flex-1">
          <p className={`text-sm font-medium ${dark ? 'text-white' : 'text-foreground'}`}>Not ready yet?</p>
          <p className={`text-xs ${dark ? 'text-white/60' : 'text-foreground/60'}`}>Get free weekly AI insights</p>
        </div>
        <Button asChild variant="ghost" size="sm" className={dark ? "text-white hover:bg-white/10" : ""}>
          <a href="https://genesislumina.substack.com" target="_blank" rel="noopener noreferrer">
            Subscribe
          </a>
        </Button>
      </div>
    );
  }

  return (
    <div className={`text-center p-8 rounded-2xl ${dark ? 'bg-white/5' : 'bg-foreground/5'}`}>
      <Mail className={`w-10 h-10 mx-auto mb-4 ${dark ? 'text-white/40' : 'text-foreground/40'}`} />
      <h3 className={`text-xl font-medium mb-2 ${dark ? 'text-white' : 'text-foreground'}`}>
        Not ready to book a call?
      </h3>
      <p className={`text-sm mb-6 max-w-md mx-auto ${dark ? 'text-white/60' : 'text-foreground/60'}`}>
        Join 500+ leaders getting weekly AI insights, automation tips, and exclusive early access.
      </p>
      <Button asChild variant={dark ? "outline" : "default"} className={dark ? "border-white/20 text-white hover:bg-white/10" : ""}>
        <a href="https://genesislumina.substack.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
          Subscribe Free
          <ArrowRight className="w-4 h-4" />
        </a>
      </Button>
    </div>
  );
};

export default NewsletterCTA;
