import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h3 className="text-2xl font-bold mb-4 text-[#d4a760]">Subscribe to Calendar</h3>
        <p className="mb-6">Subscribe to unlock premium features:</p>
        
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
