
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface CalendarHeaderProps {
  isSubscriber: boolean;
  onShowSubscribe: () => void;
}

const CalendarHeader = ({ isSubscriber, onShowSubscribe }: CalendarHeaderProps) => {
  const downloadCalendar = () => {
    toast({
      title: "Download Started",
      description: "Your calendar is being downloaded as a PDF.",
    });
  };

  const sendCalendarByEmail = () => {
    toast({
      title: "Email Sent",
      description: "The calendar has been sent to your email.",
    });
  };

  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-[#d4a760]">Parish Events</h2>
      <div className="flex gap-2">
        {isSubscriber ? (
          <>
            <Button variant="outline" onClick={downloadCalendar}>
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
            <Button variant="outline" onClick={sendCalendarByEmail}>
              <Mail className="h-4 w-4 mr-2" />
              Email Calendar
            </Button>
          </>
        ) : (
          <Button onClick={onShowSubscribe}>
            Subscribe for More
          </Button>
        )}
      </div>
    </div>
  );
};

export default CalendarHeader;
