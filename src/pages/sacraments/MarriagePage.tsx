
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MarriagePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-church-navy text-white py-16">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1528115024996-260f89a10a04?q=80&w=2070&auto=format&fit=crop')", 
              opacity: "0.3" 
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Marriage</h1>
              <p className="text-xl font-light">
                The Sacrament of Holy Matrimony: A Covenant of Love and Life
              </p>
            </div>
          </div>
        </div>

        {/* Marriage Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-church-red mb-8">About the Sacrament</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  The Sacrament of Marriage is a covenant by which a man and a woman establish between themselves a partnership for their whole life. It is ordered toward the well-being of the spouses and the procreation and education of children.
                </p>
                <p>
                  When validly contracted between two baptized people, marriage is a sacrament. The matrimonial covenant, by which a man and a woman establish between themselves a partnership of the whole of life, is by its nature ordered toward the good of the spouses and the procreation and education of offspring.
                </p>
                <p>
                  The Church teaches that the valid marriage between two baptized Christians is also a sacrament – a visible sign of God's grace and a sacred mystery that signifies the union of Christ and his Church.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16 bg-church-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-church-red mb-8">Requirements for Marriage at St Joseph's</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-church-navy mb-4">Basic Requirements</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-church-red rounded-full mt-2 mr-2"></span>
                      <span>At least one party must be a baptized Catholic</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-church-red rounded-full mt-2 mr-2"></span>
                      <span>Both parties must be free to marry (no previous valid marriages unless annulled)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-church-red rounded-full mt-2 mr-2"></span>
                      <span>Minimum age requirement (typically 18 years or older)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-church-red rounded-full mt-2 mr-2"></span>
                      <span>Consent must be freely given by both parties</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-church-red rounded-full mt-2 mr-2"></span>
                      <span>Both parties must understand and accept the essential obligations of marriage</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-church-navy mb-4">Required Documents</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-church-red rounded-full mt-2 mr-2"></span>
                      <span>Baptismal certificates (issued within the last 6 months)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-church-red rounded-full mt-2 mr-2"></span>
                      <span>Confirmation certificates (for Catholics)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-church-red rounded-full mt-2 mr-2"></span>
                      <span>Declaration of freedom to marry</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-church-red rounded-full mt-2 mr-2"></span>
                      <span>Civil marriage license</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-church-red rounded-full mt-2 mr-2"></span>
                      <span>Completion certificate from marriage preparation program</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Marriage Preparation Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-church-red mb-8">Marriage Preparation Process</h2>
              
              <div className="prose prose-lg max-w-none">
                <p>
                  Couples planning to marry at St Joseph's should begin the process at least six months before their intended wedding date. Our marriage preparation process includes:
                </p>
                
                <ol className="space-y-4 list-decimal pl-4">
                  <li>
                    <strong>Initial Meeting with Priest</strong> – Discussion of intentions, assessment of readiness, and overview of the process.
                  </li>
                  <li>
                    <strong>Pre-Marriage Inventory</strong> – Completion of a compatibility assessment (e.g., FOCCUS or Pre-Cana) to identify strengths and growth areas.
                  </li>
                  <li>
                    <strong>Marriage Preparation Course</strong> – Attendance at an approved marriage preparation program covering topics such as communication, finances, faith, family planning, etc.
                  </li>
                  <li>
                    <strong>Follow-up Meetings</strong> – Discussion of inventory results and any potential challenges with the priest.
                  </li>
                  <li>
                    <strong>Liturgical Planning</strong> – Selection of readings, music, and other elements of the wedding ceremony.
                  </li>
                  <li>
                    <strong>Rehearsal</strong> – Typically held the evening before the wedding.
                  </li>
                </ol>
              </div>
              
              <div className="mt-12 bg-church-gray p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-church-navy mb-4">Scheduling Your Wedding</h3>
                <p className="text-gray-700 mb-4">
                  To schedule your wedding at St Joseph's, please contact the parish office at least six months in advance. Weddings are typically scheduled on Saturdays at 11:00 AM or 2:00 PM, but other days and times may be available by arrangement.
                </p>
                <a href="/contact" className="inline-block bg-church-red text-white font-medium py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors">
                  Contact Parish Office
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MarriagePage;
