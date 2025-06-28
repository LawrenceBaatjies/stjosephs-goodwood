
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

interface AmountSelectorProps {
  value: string;
  onChange: (value: string) => void;
  onSetValue: (amount: string) => void;
}

const AmountSelector = ({ value, onChange, onSetValue }: AmountSelectorProps) => {
  const predefinedAmounts = ["100", "250", "500", "1000", "2500", "5000"];

  return (
    <FormItem>
      <FormLabel>Donation Amount (ZAR)</FormLabel>
      <FormControl>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            {predefinedAmounts.map((amount) => (
              <Button
                key={amount}
                type="button"
                variant={value === amount ? "default" : "outline"}
                onClick={() => onSetValue(amount)}
                className={`w-full ${value === amount ? 'bg-[#d4a760] hover:bg-[#c9965a]' : ''}`}
              >
                R{amount}
              </Button>
            ))}
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">R</span>
            <Input
              placeholder="Other amount"
              className="pl-8"
              value={value}
              onChange={(e) => {
                if (/^\d*\.?\d*$/.test(e.target.value) || e.target.value === '') {
                  onChange(e.target.value);
                }
              }}
            />
          </div>
        </div>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

export default AmountSelector;
