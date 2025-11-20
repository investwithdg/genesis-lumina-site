import { Button } from "@/components/ui/button";
import { useEffect } from "react";

interface BookCallButtonProps {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
  children?: React.ReactNode;
}

/**
 * BookCallButton - Calendly Integration
 * 
 * SETUP INSTRUCTIONS:
 * 1. Create a free Calendly account at https://calendly.com
 * 2. Set up your booking page and copy your Calendly link
 * 3. Replace 'https://calendly.com/your-link-here' below with your actual Calendly URL
 * 
 * The button will automatically open a Calendly popup when clicked.
 * No other configuration needed!
 */
const BookCallButton = ({
  variant = "default", 
  size = "default", 
  className = "",
  children = "Book a Call"
}: BookCallButtonProps) => {
  
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // @ts-ignore - Calendly is loaded externally
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/your-link-here'
      });
    }
  };

  return (
    <Button 
      variant={variant} 
      size={size} 
      className={className}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default BookCallButton;
