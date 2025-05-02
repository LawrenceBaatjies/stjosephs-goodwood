
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import { useNotices } from "@/hooks/useNotices";
import NoticesHero from "@/components/notices/NoticesHero";
import NoticesViewToggle from "@/components/notices/NoticesViewToggle";
import NoticesGrid from "@/components/notices/NoticesGrid";
import AdminLoginDialog from "@/components/notices/AdminLoginDialog";
import NoticeFormDialog from "@/components/notices/NoticeFormDialog";

const Notices = () => {
  const [currentView, setCurrentView] = useState<"upcoming" | "all">("upcoming");
  const {
    notices,
    isAdmin,
    loading,
    showLoginModal,
    setShowLoginModal,
    showAddNoticeModal,
    setShowAddNoticeModal,
    editingNotice,
    authError,
    formData,
    handleLogin,
    handleLogout,
    handleFormChange,
    handleSubmitNotice,
    handleDeleteNotice,
    handleEditNotice,
    handleAddNewNotice,
    formatDate,
    addToCalendar,
    resetForm
  } = useNotices();
  
  // Get today's date for filtering
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const filteredNotices = currentView === "upcoming"
    ? notices.filter(notice => new Date(notice.date) >= today).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    : notices.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <NoticesHero />

        {/* Notices Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {/* Admin Controls */}
            <div className="flex justify-between items-center mb-8">
              {/* View Toggle */}
              <NoticesViewToggle 
                currentView={currentView} 
                setCurrentView={setCurrentView} 
              />
              
              {/* Admin Actions */}
              <div>
                {isAdmin ? (
                  <div className="flex items-center gap-3">
                    <Button 
                      onClick={handleAddNewNotice}
                      className="bg-[#d4a760] hover:bg-[#c4973b]"
                    >
                      Add Notice
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </div>
                ) : (
                  <Button 
                    variant="outline" 
                    onClick={() => setShowLoginModal(true)}
                  >
                    <Lock className="h-4 w-4 mr-2" />
                    Admin Login
                  </Button>
                )}
              </div>
            </div>

            {/* Notices Grid */}
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#d4a760]"></div>
              </div>
            ) : (
              <NoticesGrid 
                notices={filteredNotices}
                isAdmin={isAdmin}
                onEditNotice={handleEditNotice}
                onDeleteNotice={handleDeleteNotice}
                formatDate={formatDate}
                addToCalendar={addToCalendar}
              />
            )}
          </div>
        </section>
      </main>
      <Footer />
      
      {/* Admin Login Modal */}
      <AdminLoginDialog 
        open={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLogin={handleLogin}
        error={authError}
      />
      
      {/* Add/Edit Notice Modal */}
      <NoticeFormDialog
        open={showAddNoticeModal}
        onClose={resetForm}
        onSubmit={handleSubmitNotice}
        formData={formData}
        onChange={handleFormChange}
        isEditing={!!editingNotice}
      />
    </div>
  );
};

export default Notices;
