
import { useToast, toast as baseToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import React from "react";

// Predefined toast variant types
export type ToastVariant = "default" | "success" | "error" | "warning" | "info";

// Predefined duration options
export const TOAST_DURATIONS = {
  SHORT: 3000,
  MEDIUM: 5000,
  LONG: 8000,
};

// Interface for consistent toast options
export interface ToastOptions {
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function useToastNotification() {
  const { toast } = useToast();

  // Helper function to create styled toasts by variant
  const showToast = ({ 
    title, 
    description, 
    variant = "default",
    duration = TOAST_DURATIONS.MEDIUM,
    action 
  }: ToastOptions) => {
    return toast({
      title,
      description,
      duration,
      className: getToastClassForVariant(variant),
      action: action ? (
        <ToastAction altText={action.label} onClick={action.onClick}>
          {action.label}
        </ToastAction>
      ) : undefined,
    });
  };

  // Helper functions for common toast types
  const success = (options: Omit<ToastOptions, "variant">) => 
    showToast({ ...options, variant: "success" });
  
  const error = (options: Omit<ToastOptions, "variant">) => 
    showToast({ ...options, variant: "error" });
  
  const warning = (options: Omit<ToastOptions, "variant">) => 
    showToast({ ...options, variant: "warning" });
  
  const info = (options: Omit<ToastOptions, "variant">) => 
    showToast({ ...options, variant: "info" });

  // For programmatic toast usage outside of React components
  const programmatic = {
    // For programmatic usage, we need a simplified approach to avoid type errors
    show: (options: ToastOptions) => {
      const { title, description, variant = "default", duration = TOAST_DURATIONS.MEDIUM } = options;
      return baseToast({
        title,
        description,
        duration,
        className: getToastClassForVariant(variant),
        // We can't use React components in programmatic toasts
      });
    },
    success: (options: Omit<ToastOptions, "variant">) => 
      programmatic.show({ ...options, variant: "success" }),
    error: (options: Omit<ToastOptions, "variant">) => 
      programmatic.show({ ...options, variant: "error" }),
    warning: (options: Omit<ToastOptions, "variant">) => 
      programmatic.show({ ...options, variant: "warning" }),
    info: (options: Omit<ToastOptions, "variant">) => 
      programmatic.show({ ...options, variant: "info" }),
  };

  return {
    toast: showToast,
    success,
    error,
    warning,
    info,
    programmatic,
  };
}

// Utility function to get appropriate class names based on variant
function getToastClassForVariant(variant: ToastVariant): string {
  switch (variant) {
    case "success":
      return "bg-green-50 border-green-200 text-green-800";
    case "error":
      return "bg-red-50 border-red-200 text-red-800";
    case "warning":
      return "bg-amber-50 border-amber-200 text-amber-800";
    case "info":
      return "bg-blue-50 border-blue-200 text-blue-800";
    default:
      return ""; // Use default toast styling
  }
}
