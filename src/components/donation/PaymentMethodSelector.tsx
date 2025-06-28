
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CreditCard, Building, Smartphone, Wallet } from "lucide-react";

interface PaymentMethodSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const PaymentMethodSelector = ({ value, onChange }: PaymentMethodSelectorProps) => {
  const getPaymentMethodIcon = (method: string) => {
    switch (method) {
      case "card":
        return <CreditCard className="h-5 w-5" />;
      case "bank_transfer":
        return <Building className="h-5 w-5" />;
      case "digital_wallet":
        return <Smartphone className="h-5 w-5" />;
      default:
        return <Wallet className="h-5 w-5" />;
    }
  };

  const getPaymentMethodDescription = (method: string) => {
    switch (method) {
      case "card":
        return "Pay securely with your credit or debit card";
      case "bank_transfer":
        return "Direct bank transfer or EFT payment";
      case "digital_wallet":
        return "Pay with Apple Pay, Google Pay, or other digital wallets";
      default:
        return "Choose your preferred payment method";
    }
  };

  return (
    <FormItem>
      <FormLabel>Payment Method</FormLabel>
      <FormControl>
        <RadioGroup
          onValueChange={onChange}
          defaultValue={value}
          className="grid grid-cols-1 gap-4"
        >
          <FormItem className="flex items-center space-x-3 space-y-0 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <FormControl>
              <RadioGroupItem value="card" />
            </FormControl>
            <div className="flex items-center space-x-3 flex-1">
              {getPaymentMethodIcon("card")}
              <div>
                <FormLabel className="font-medium">Credit/Debit Card</FormLabel>
                <p className="text-sm text-gray-600">Visa, Mastercard, American Express</p>
              </div>
            </div>
          </FormItem>
          
          <FormItem className="flex items-center space-x-3 space-y-0 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <FormControl>
              <RadioGroupItem value="bank_transfer" />
            </FormControl>
            <div className="flex items-center space-x-3 flex-1">
              {getPaymentMethodIcon("bank_transfer")}
              <div>
                <FormLabel className="font-medium">Bank Transfer</FormLabel>
                <p className="text-sm text-gray-600">Direct bank transfer or EFT</p>
              </div>
            </div>
          </FormItem>
          
          <FormItem className="flex items-center space-x-3 space-y-0 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <FormControl>
              <RadioGroupItem value="digital_wallet" />
            </FormControl>
            <div className="flex items-center space-x-3 flex-1">
              {getPaymentMethodIcon("digital_wallet")}
              <div>
                <FormLabel className="font-medium">Digital Wallet</FormLabel>
                <p className="text-sm text-gray-600">Apple Pay, Google Pay, PayPal</p>
              </div>
            </div>
          </FormItem>
        </RadioGroup>
      </FormControl>
      <FormDescription>
        {getPaymentMethodDescription(value)}
      </FormDescription>
      <FormMessage />
    </FormItem>
  );
};

export default PaymentMethodSelector;
