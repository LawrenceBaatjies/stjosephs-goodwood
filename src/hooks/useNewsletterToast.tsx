import { useToastNotification } from "./useToastNotification";

export function useNewsletterToast() {
  // Use the new robust toast implementation but keep the API compatible for existing usages
  const { toast: showToast, success } = useToastNotification();
  
  // Return a compatible API for existing uses
  return {
    toast: (options: { title: string; description?: string }) => 
      showToast({ ...options, variant: "default" }),
  };
}
