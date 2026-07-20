import { Button } from "@/components/ui/button";

interface BookCallButtonProps {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
  children?: React.ReactNode;
}

/**
 * BookCallButton — books a Strategy Session (Tier 0, no fee).
 * Renamed from the retired "PEAR" call, 2026-07-15.
 * NOTE: this links straight to a Google Calendar booking link. The
 * confirmation-gate mechanic (doctrine video + intake within 24 hours)
 * described in Offer Architecture v4 is not yet wired to this button —
 * see StrategySession.tsx for the flagged build gap.
 */
const BookCallButton = ({
  variant = "default",
  size = "default",
  className = "",
  children = "Book a Strategy Session",
}: BookCallButtonProps) => {
  const bookingUrl = "https://calendar.app.google/XXdQMZcNjYjnACuz5";

  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Button>
  );
};

export default BookCallButton;
