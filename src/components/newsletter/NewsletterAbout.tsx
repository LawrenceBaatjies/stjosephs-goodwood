
import React from "react";

const NewsletterAbout = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://brandpacks.com/wp-content/uploads/edd/2024/11/church-christmas-newsletter-template-indd-idml-00.jpg" 
                  alt="Parish Newsletter" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-church-navy mb-4">About Our Newsletters</h2>
              <p className="text-gray-700 mb-4">
                Our parish newsletters are published regularly to keep our community informed about important events,
                celebrations, and announcements. They contain a wealth of information including Mass schedules, 
                upcoming events, spiritual reflections, and ministry updates.
              </p>
              <p className="text-gray-700">
                Newsletters are an essential way to stay connected with our parish life and activities.
                You can view, download, or print current and past newsletters below.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterAbout;
