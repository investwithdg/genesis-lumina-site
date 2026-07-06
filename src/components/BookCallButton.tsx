import { Button } from "@/components/ui/button";

interface BookCallButtonProps {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
  children?: React.ReactNode;
}

/**
 * BookCallButton — books the free PEAR call
 * (Performance Engineering Analysis & Roadmap, 30 min).
 */
const BookCallButton = ({
  variant = "default",
  size = "default",
  className = "",
  children = "Book PEAR (free)",
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
