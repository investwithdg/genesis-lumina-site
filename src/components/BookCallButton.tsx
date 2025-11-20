import { Button } from "@/components/ui/button";

interface BookCallButtonProps {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
  children?: React.ReactNode;
}

/**
 * BookCallButton - Calendar Booking Link
 * 
 * SETUP: Replace the URL below with your booking link:
 * - Google Calendar: calendar.google.com/calendar/appointments/schedules/[your-id]
 * - Calendly: calendly.com/your-username/meeting
 * - Cal.com: cal.com/your-username/meeting
 */
const BookCallButton = ({ 
  variant = "default", 
  size = "default", 
  className = "",
  children = "Book a Call"
}: BookCallButtonProps) => {
  // Replace this URL with your actual booking link
  const bookingUrl = "https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID";

  return (
    <Button 
      asChild
      variant={variant} 
      size={size} 
      className={className}
    >
      <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Button>
  );
};

export default BookCallButton;
