
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ConfirmationPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-church-navy text-white py-60">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1531627467965-e9c3dd19209c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGNhdGhvbGljfGVufDB8fDB8fHww')", 
              opacity: "0.4" 
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Confirmation</h1>
              <p className="text-xl font-light">
                The Sacrament of Confirmation: Completing Baptismal Grace
              </p>
            </div>
          </div>
        </div>

        {/* Confirmation Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-church-red mb-8">The Sacrament of Confirmation</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                 Confirmation is one of the seven sacraments of the Catholic Church. It is the sacrament that completes baptismal grace. Through Confirmation, the Holy Spirit gives us special strength to spread and defend the faith by word and action as true witnesses of Christ.
                </p>
                <p>
                  In the Sacrament of Confirmation, the baptized person is "sealed with the gift of the Holy Spirit" and is strengthened for service to the Body of Christ. The prophets of the Old Testament foretold that God's Spirit would rest upon the Messiah to sustain his mission. Their prophecy was fulfilled when Jesus the Messiah was conceived by the Spirit and born of the Virgin Mary.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16 bg-church-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-church-red mb-8">Requirements</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-church-navy mb-4">For Candidates</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-church-red rounded-full mt-2 mr-2"></span>
                      <span>Must be baptized and not yet confirmed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-church-red rounded-full mt-2 mr-2"></span>
                      <span>Must be at least 16 years of age (in most dioceses)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-church-red rounded-full mt-2 mr-2"></span>
                      <span>Must have received proper catechetical instruction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-church-red rounded-full mt-2 mr-2"></span>
                      <span>Must be a practicing Catholic in good standing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-church-red rounded-full mt-2 mr-2"></span>
                      <span>Must be able to renew their baptismal promises</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-church-navy mb-4">Required Documents</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-church-red rounded-full mt-2 mr-2"></span>
                      <span>Baptismal certificate (recent copy issued within the last 6 months)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-church-red rounded-full mt-2 mr-2"></span>
                      <span>First Holy Communion certificate</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-church-red rounded-full mt-2 mr-2"></span>
                      <span>Sponsor eligibility letter from sponsor's parish</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-church-red rounded-full mt-2 mr-2"></span>
                      <span>Confirmation name selection form</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Preparation Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-church-red mb-8">Preparation Process</h2>
              
              <div className="prose prose-lg max-w-none">
                <p>
                  Preparation for Confirmation at St Joseph's involves a structured program that includes:
                </p>
                
                <ol className="space-y-4 list-decimal pl-4">
                  <li>
                    <strong>Catechetical Sessions</strong> – Weekly classes over several months covering Church teachings, sacraments, morality, prayer, and Christian living.
                  </li>
                  <li>
                    <strong>Spiritual Preparation</strong> – Regular Mass attendance, confession, and development of a personal prayer life.
                  </li>
                  <li>
                    <strong>Sponsor Involvement</strong> – Working with a confirmed Catholic who serves as a spiritual guide throughout the process.
                  </li>
                  <li>
                    <strong>Retreat Experience</strong> – A day of reflection to deepen the candidate's understanding of the sacrament.
                  </li>
                  <li>
                    <strong>Christian Service</strong> – Participation in service projects to practice living the faith through works of mercy.
                  </li>
                  <li>
                    <strong>Interview</strong> – Meeting with the parish priest to discuss readiness for the sacrament.
                  </li>
                </ol>
                
                <p className="mt-6">
                  The Confirmation program typically begins in September and concludes with the Confirmation Mass in May or June, depending on the Bishop's schedule.
                </p>
              </div>
              
              <div className="mt-12 bg-church-gray p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-church-navy mb-4">Registration</h3>
                <p className="text-gray-700 mb-4">
                  To register for our Confirmation preparation program, please contact the parish office or complete the registration form on our website. Registration opens each year in August for the upcoming program.
                </p>
                <a href="/registration" className="inline-block bg-church-red text-white font-medium py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors">
                  Registration Form
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

export default ConfirmationPage;
