
import { useState } from "react";

export const useEventRequestModal = () => {
  const [showEventRequestModal, setShowEventRequestModal] = useState(false);
  
  return {
    showEventRequestModal,
    setShowEventRequestModal
  };
};
