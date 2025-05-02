
import React from "react";
import { useNewsletterContext } from "./NewsletterContext";
import NewsletterSearch from "./NewsletterSearch";
import NewsletterAdmin from "./NewsletterAdmin";
import NewsletterGrid from "./NewsletterGrid";
import { Button } from "@/components/ui/button";
import { LogOut, Loader2 } from "lucide-react";

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
    handleViewPdf,
    isLoading,
    isAuthenticated,
    handleLogout
  } = useNewsletterContext();

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-3 md:space-y-0">
            <h2 className="text-2xl font-bold text-church-navy">Available Newsletters</h2>
            <div className="flex items-center gap-2">
              {isAuthenticated && (
                <Button 
                  onClick={handleLogout} 
                  variant="outline"
                  className="mr-2"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              )}
              <button 
                onClick={toggleAdminMode}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 transition-colors"
              >
                {isAdminMode ? "Exit Admin Mode" : "Admin Mode"}
              </button>
            </div>
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

          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="h-10 w-10 animate-spin text-church-navy" />
            </div>
          ) : (
            <NewsletterGrid 
              newsletters={newsletters}
              isAdminMode={isAdminMode && isAuthenticated}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onView={handleViewPdf}
              searchTerm={searchTerm}
              selectedYear={selectedYear}
              selectedMonth={selectedMonth}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterContent;
