
import { useState, useMemo } from "react";
import { Newsletter } from "../components/newsletter/types";

export const useNewsletterFilters = (newsletters: Newsletter[]) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedMonth, setSelectedMonth] = useState("all");

  // Calculate available years from newsletter dates
  const availableYears = useMemo(() => {
    const years = newsletters.map(newsletter => 
      new Date(newsletter.date).getFullYear().toString()
    );
    return Array.from(new Set(years)).sort((a, b) => parseInt(b) - parseInt(a));
  }, [newsletters]);

  return {
    searchTerm,
    setSearchTerm,
    selectedYear,
    setSelectedYear,
    selectedMonth,
    setSelectedMonth,
    availableYears,
  };
};
