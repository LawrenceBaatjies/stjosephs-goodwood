
import { useToast } from "@/hooks/use-toast";

export function useNewsletterToast() {
  const toast = useToast();
  return toast;
}
