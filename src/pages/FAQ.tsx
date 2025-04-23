
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What are the Mass times at St Joseph's?",
    answer: "St Joseph's offers Mass at the following times: Sunday at 7:30 AM, 9:30 AM, and 5:00 PM; Weekdays (Monday to Friday) at 7:30 AM; and Saturday at 9:00 AM. Please check our Mass Times page for Holy Days and special occasions."
  },
  {
    question: "How do I arrange a baptism for my child?",
    answer: "To arrange a baptism, please contact the parish office at least one month in advance. Parents are required to attend a baptism preparation class before the ceremony. You can find more details on our Baptism page."
  },
  {
    question: "Can I have my wedding at St Joseph's Church?",
    answer: "Yes, you can have your wedding at St Joseph's Church. Please contact the parish office at least six months before your intended wedding date to begin the preparation process. More information is available on our Marriage page."
  },
  {
    question: "How do I become a Catholic or complete my sacraments as an adult?",
    answer: "Adults interested in becoming Catholic or completing their sacraments can join our Rite of Christian Initiation for Adults (RCIA) program. Please contact the parish office for information about the next program."
  },
  {
    question: "How can I join the parish?",
    answer: "To join the parish, please complete a registration form available on our Registration page or at the back of the church. You can return it to the parish office or place it in the collection basket during Mass."
  },
  {
    question: "What parish groups can I join?",
    answer: "St Joseph's has several active parish groups including the Parish Pastoral Council, Liturgy Committee, Youth Group, Choir, Bible Study Group, and various outreach ministries. Visit our Parish Groups page for more information."
  },
  {
    question: "How can I make a donation to the parish?",
    answer: "Donations can be made via the weekly collection basket during Mass, by direct deposit to the parish account, or online through our donation portal. Please visit our Make a Donation page for details."
  },
  {
    question: "Does St Joseph's have facilities available for hire?",
    answer: "Yes, the Parish Hall is available for hire for appropriate functions. Please contact the parish office for availability, rates, and conditions."
  },
  {
    question: "How can I have a Mass offered for a special intention?",
    answer: "To have a Mass offered for a special intention, please contact the parish office. A small offering is customary."
  },
  {
    question: "How do I arrange a house blessing?",
    answer: "To arrange a house blessing, please contact the parish office to schedule a time with the parish priest."
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-church-navy text-white py-16">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop')", 
              opacity: "0.3" 
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
              <p className="text-xl font-light">
                Find answers to common questions about our parish
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="mb-10">
                <p className="text-gray-600">
                  Can't find an answer to your question? Please <a href="/contact" className="text-[#d4a760] hover:underline">contact us</a> and we'll be happy to help.
                </p>
              </div>
              
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-medium text-gray-800 hover:text-[#d4a760]">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p className="py-2">{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
