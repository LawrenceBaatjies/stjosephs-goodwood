
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterHero from "@/components/newsletter/NewsletterHero";
import NewsletterAbout from "@/components/newsletter/NewsletterAbout";
import NewsletterContent from "@/components/newsletter/NewsletterContent";
import PDFPreview from "@/components/newsletter/PDFPreview";
import { NewsletterProvider, useNewsletterContext } from "@/components/newsletter/NewsletterContext";

const NewslettersPageContent = () => {
  const { previewPdfUrl, closePreview } = useNewsletterContext();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <NewsletterHero />
        <NewsletterAbout />
        <NewsletterContent />
        <PDFPreview 
          previewPdfUrl={previewPdfUrl} 
          closePreview={closePreview} 
        />
      </main>
      <Footer />
    </div>
  );
};

const NewslettersPage = () => {
  return (
    <NewsletterProvider>
      <NewslettersPageContent />
    </NewsletterProvider>
  );
};

export default NewslettersPage;
