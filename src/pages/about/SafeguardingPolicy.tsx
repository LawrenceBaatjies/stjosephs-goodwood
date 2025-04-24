
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SafeguardingPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-church-navy mb-6">Safeguarding Policy</h1>
            
            <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-church-navy mb-4">Our Commitment to Safeguarding</h2>
              
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  St Joseph's Catholic Church Goodwood is committed to the safety, wellbeing, and dignity of all children, 
                  young people, and vulnerable adults who are part of our parish community. We recognize our special 
                  responsibility to create and maintain a safe environment for all.
                </p>
                
                <p className="mb-4">
                  Our parish follows the comprehensive Safeguarding Policy established by the Catholic Archdiocese of Cape Town. 
                  This policy includes guidelines for the protection of children and vulnerable adults, code of conduct for all clergy, 
                  staff and volunteers, and procedures for handling complaints and concerns.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Key Elements of Our Policy</h3>
                
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li>Safe recruitment and screening procedures for all staff and volunteers</li>
                  <li>Clear code of conduct for anyone working with children or vulnerable adults</li>
                  <li>Ongoing education and training for staff and volunteers</li>
                  <li>Accessible and transparent reporting procedures</li>
                  <li>Pastoral care and support for those affected by abuse</li>
                  <li>Regular review and improvement of safeguarding measures</li>
                </ul>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                  <p className="text-blue-800">
                    Any concerns about the safety of children or vulnerable adults should be reported immediately to 
                    the Parish Safeguarding Representative or directly to the Archdiocese Safeguarding Office.
                  </p>
                </div>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Archdiocese Policy Document</h3>
                
                <p className="mb-6">
                  For comprehensive information about the Archdiocesan Safeguarding Policy, please download the complete document using the link below:
                </p>
                
                <div className="flex justify-center mt-8 mb-4">
                  <a
                    href="https://adct.org.za/wp-content/uploads/2023/01/ADCT-Safeguarding-Policy-Final-_-signed-by-AB.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-church-red text-white rounded-md hover:bg-opacity-90 transition-colors inline-flex items-center"
                  >
                    Download Archdiocese of Cape Town Safeguarding Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SafeguardingPolicy;
