
import React from "react";
import { useNewsletterContext } from "./NewsletterContext";
import NewsletterSearch from "./NewsletterSearch";
import NewsletterAdmin from "./NewsletterAdmin";
import NewsletterGrid from "./NewsletterGrid";

const NewsletterContent = () => {
  const {
    isAdminMode,
    toggleAdminMode,
    searchTerm,
    setSearchTerm,
    selectedYear,
    setSelectedYear,
    selectedMonth,
    setSelectedMonth,
    availableYears,
    newsletters,
    handleEdit,
    handleDelete,
    handleViewPdf
  } = useNewsletterContext();

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-church-navy">Available Newsletters</h2>
            <button 
              onClick={toggleAdminMode}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 transition-colors"
            >
              {isAdminMode ? "Exit Admin Mode" : "Admin Mode"}
            </button>
          </div>

          <NewsletterSearch 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedYear={selectedYear}
            onYearChange={setSelectedYear}
            selectedMonth={selectedMonth}
            onMonthChange={setSelectedMonth}
            availableYears={availableYears}
          />

          <NewsletterAdmin />

          <NewsletterGrid 
            newsletters={newsletters}
            isAdminMode={isAdminMode}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onView={handleViewPdf}
            searchTerm={searchTerm}
            selectedYear={selectedYear}
            selectedMonth={selectedMonth}
          />
        </div>
      </div>
    </section>
  );
};

export default NewsletterContent;
