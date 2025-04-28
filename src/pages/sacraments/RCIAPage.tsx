
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RCIAPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-church-navy text-white py-60">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1633706202766-748173429f33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGNhdGhvbGljJTIwcGFyeWVyaW5nfGVufDB8fDB8fHww')", 
              opacity: "0.3" 
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">RCIA</h1>
              <p className="text-xl font-light">
                Rite of Christian Initiation of Adults: The Journey to Full Communion
              </p>
            </div>
          </div>
        </div>

        {/* RCIA Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-church-red mb-8">About RCIA</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  The Rite of Christian Initiation of Adults (RCIA) is the process through which interested adults are gradually introduced to the Roman Catholic faith and way of life. It is a journey of faith that includes study, prayer, and rites at Mass.
                </p>
                <p>
                  RCIA is designed for adults who, after hearing the mystery of Christ proclaimed, consciously and freely seek the living God and enter the way of faith and conversion as the Holy Spirit opens their hearts. By God's help, they will be strengthened spiritually during their preparation and at the proper time will receive the sacraments fruitfully.
                </p>
                <p>
                  This process is for:
                </p>
                <ul>
                  <li>Those who have never been baptized</li>
                  <li>Those who were baptized in another Christian denomination and wish to enter into full communion with the Catholic Church</li>
                  <li>Baptized Catholics who have not received the sacraments of Eucharist and/or Confirmation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The RCIA Journey */}
        <section className="py-16 bg-church-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-church-red mb-8">The RCIA Journey</h2>
              
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-church-navy mb-3">Period of Inquiry</h3>
                  <p className="text-gray-700">
                    During this time, inquirers are introduced to the Gospel message and the basic teachings of the Catholic Church. This is a time for questions, initial faith sharing, and getting to know the Catholic community. There is no commitment required during this stage.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-church-navy mb-3">Catechumenate</h3>
                  <p className="text-gray-700">
                    After the Rite of Acceptance, participants enter the Catechumenate period, which typically lasts for several months. This is a time of more formal catechesis, focused on Scripture, Catholic teaching, prayer, and participation in the liturgical life of the Church. Catechumens (unbaptized) and candidates (baptized) deepen their faith and understanding.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-church-navy mb-3">Period of Purification and Enlightenment</h3>
                  <p className="text-gray-700">
                    This period coincides with Lent and is a time of intense spiritual preparation. It includes the Rite of Election (for catechumens) or Call to Continuing Conversion (for candidates), celebrated with the Bishop. This period focuses on interior reflection, prayer, and spiritual preparation for the sacraments.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-church-navy mb-3">Sacraments of Initiation</h3>
                  <p className="text-gray-700">
                    At the Easter Vigil, catechumens receive all three Sacraments of Initiation: Baptism, Confirmation, and Eucharist. Candidates (already baptized) are received into full communion with the Catholic Church through a Profession of Faith, followed by Confirmation and Eucharist.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-church-navy mb-3">Mystagogy</h3>
                  <p className="text-gray-700">
                    The period after Easter, known as Mystagogy, is a time for the newly initiated to deepen their understanding of the mysteries of the faith and become more fully integrated into the life of the parish community. This period typically lasts through the Easter season.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Joining RCIA at St Joseph's */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-church-red mb-8">Join RCIA at St Joseph's</h2>
              
              <div className="prose prose-lg max-w-none mb-8">
                <p>
                  Our RCIA program at St Joseph's typically begins in September and culminates at the Easter Vigil. Sessions are held weekly and include catechesis, prayer, faith sharing, and gradual introduction to parish life.
                </p>
                <p>
                  Participants are accompanied on their journey by:
                </p>
                <ul>
                  <li><strong>RCIA Team Members</strong> – Dedicated parishioners who help lead sessions and share their faith</li>
                  <li><strong>Sponsors</strong> – Practicing Catholics who provide one-on-one support and guidance</li>
                  <li><strong>The Parish Community</strong> – Who pray for and welcome those in the RCIA process</li>
                </ul>
              </div>
              
              <div className="bg-church-gray p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-church-navy mb-4">How to Enroll</h3>
                <p className="text-gray-700 mb-4">
                  If you are interested in learning more about the Catholic faith or in joining the RCIA process at St Joseph's, please contact the parish office. We welcome inquirers at any time, though the formal process typically begins in September.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="inline-block bg-church-red text-white font-medium py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors">
                    Contact Parish Office
                  </a>
                  <a href="/registration" className="inline-block bg-church-navy text-white font-medium py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors">
                    Registration Form
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RCIAPage;
