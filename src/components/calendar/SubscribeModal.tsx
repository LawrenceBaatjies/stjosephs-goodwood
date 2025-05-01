
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Calendar, Download, Mail, CalendarPlus, Bell } from "lucide-react";

interface SubscribeModalProps {
  email: string;
  onEmailChange: (email: string) => void;
  onSubscribe: () => void;
  onClose: () => void;
  loading: boolean;
}

const SubscribeModal = ({
  email,
  onEmailChange,
  onSubscribe,
  onClose,
  loading
}: SubscribeModalProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubscribe();
  };

  const premiumFeatures = [
    {
      icon: <CalendarPlus className="h-5 w-5 text-[#d4a760]" />,
      title: "Add Custom Events",
      description: "Create and manage your own events on the calendar"
    },
    {
      icon: <Download className="h-5 w-5 text-[#d4a760]" />,
      title: "Download Calendar",
      description: "Export calendar as PDF for offline viewing"
    },
    {
      icon: <Mail className="h-5 w-5 text-[#d4a760]" />,
      title: "Email Updates",
      description: "Receive calendar updates directly to your inbox"
    },
    {
      icon: <Bell className="h-5 w-5 text-[#d4a760]" />,
      title: "Event Notifications",
      description: "Get reminders for upcoming parish events"
    },
    {
      icon: <Calendar className="h-5 w-5 text-[#d4a760]" />,
      title: "Multiple View Options",
      description: "Switch between grid view and standard calendar view"
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full">
        <h3 className="text-2xl font-bold mb-4 text-[#d4a760]">Subscribe to Calendar</h3>
        <p className="mb-6">Subscribe to unlock premium features:</p>
        
        <div className="mb-6 space-y-4">
          {premiumFeatures.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-3 mt-0.5">{feature.icon}</div>
              <div>
                <h4 className="font-semibold">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="subscribe-email">Email Address</Label>
            <Input 
              id="subscribe-email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              className="mt-1"
              required
            />
          </div>
          
          <div className="flex justify-end space-x-3">
            <Button variant="outline" onClick={onClose} disabled={loading}>Cancel</Button>
            <Button type="submit" disabled={loading || !email}>
              {loading ? "Processing..." : "Subscribe Now"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubscribeModal;
