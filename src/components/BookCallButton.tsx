import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface BookCallButtonProps {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
  children?: React.ReactNode;
}

/**
 * BookCallButton — routes to the Strategy Session qualification gate.
 * Ensures every prospect completes operational screening before accessing the calendar.
 */
const BookCallButton = ({
  variant = "default",
  size = "default",
  className = "",
  children = "Book a Strategy Session",
}: BookCallButtonProps) => {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <Link to="/strategy-session#diagnostic-intake">
        {children}
      </Link>
    </Button>
  );
};

export default BookCallButton;
