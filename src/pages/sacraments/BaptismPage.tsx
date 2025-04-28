
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";

const BaptismPage = () => {
  const [isRequirementsOpen, setIsRequirementsOpen] = React.useState(true);
  const [isProcessOpen, setIsProcessOpen] = React.useState(false);
  const [isFAQOpen, setIsFAQOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-church-navy text-white py-60">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1664393487283-bc6204787aeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", 
              opacity: "0.3" 
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Baptism</h1>
              <p className="text-xl font-light">
                <strong>"Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit." - Matthew 28:19</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-7 space-y-6">
                  <h2 className="text-3xl font-bold text-[#d4a760] mb-4">The Sacrament of Baptism</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p>
                      Baptism is the first of the seven sacraments and the "door" which gives access to the other sacraments. 
                      Through Baptism we are freed from sin and reborn as children of God; we become members of Christ, 
                      are incorporated into the Church and made sharers in her mission.
                    </p>
                    
                    <p>
                      At St Joseph's, we welcome families who wish to have their children baptized into the 
                      Catholic faith. Adult baptisms are also celebrated through our RCIA program.
                    </p>
                    
                    <p>
                      Baptisms at St Joseph's Parish are typically celebrated on the first and third Sunday of the 
                      month at 12:30 PM, after the morning Mass.
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button asChild>
                      <a href="/contact">Contact Us About Baptism</a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="/registration">Register for Baptism Preparation</a>
                    </Button>
                  </div>
                </div>
                
                <div className="md:col-span-5">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1615610856180-d074f21c2854?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="Baptism"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements & Process */}
        <section className="py-16 bg-church-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Requirements */}
              <Collapsible
                open={isRequirementsOpen}
                onOpenChange={setIsRequirementsOpen}
                className="w-full border rounded-lg overflow-hidden bg-white"
              >
                <CollapsibleTrigger className="flex justify-between items-center w-full p-6 text-left">
                  <h3 className="text-2xl font-semibold text-[#d4a760]">Requirements for Baptism</h3>
                  {isRequirementsOpen ? (
                    <ChevronUp className="h-6 w-6 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-500" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent className="p-6 pt-0 border-t">
                  <div className="prose max-w-none">
                    <p>For an infant or child baptism at St Joseph's Parish, the following requirements apply:</p>
                    
                    <h4>For Parents:</h4>
                    <ul>
                      <li>At least one parent must be a Catholic.</li>
                      <li>Parents should be registered members of St Joseph's Parish or provide a letter of permission from their home parish.</li>
                      <li>Parents must attend a Baptism Preparation Class prior to the baptism.</li>
                      <li>Complete and submit the Baptism Registration Form.</li>
                      <li>Provide a copy of the child's birth certificate.</li>
                    </ul>
                    
                    <h4>For Godparents:</h4>
                    <ul>
                      <li>At least one godparent must be a practicing Catholic who has received Baptism, Confirmation, and Holy Eucharist.</li>
                      <li>The Catholic godparent must be at least 16 years old and not be the parent of the child.</li>
                      <li>A baptized non-Catholic may serve as a Christian witness along with the Catholic godparent.</li>
                      <li>Catholic godparents must provide a Sponsor Certificate from their parish.</li>
                    </ul>
                    
                    <h4>For Adult Baptism:</h4>
                    <ul>
                      <li>Adults seeking baptism should contact the parish office to learn about our RCIA (Rite of Christian Initiation for Adults) program.</li>
                      <li>The RCIA process typically begins in September and culminates at the Easter Vigil.</li>
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
              
              {/* Process */}
              <Collapsible
                open={isProcessOpen}
                onOpenChange={setIsProcessOpen}
                className="w-full border rounded-lg overflow-hidden bg-white"
              >
                <CollapsibleTrigger className="flex justify-between items-center w-full p-6 text-left">
                  <h3 className="text-2xl font-semibold text-[#d4a760]">The Baptism Process</h3>
                  {isProcessOpen ? (
                    <ChevronUp className="h-6 w-6 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-500" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent className="p-6 pt-0 border-t">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">1. Initial Contact</h4>
                      <p className="text-gray-700">
                        Contact the parish office to express your interest in having your child baptized. 
                        Our parish staff will explain the process and provide you with the necessary forms.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">2. Registration</h4>
                      <p className="text-gray-700">
                        Complete the Baptism Registration Form and return it to the parish office along with a copy 
                        of the child's birth certificate. A suggested donation of $50 is appreciated to cover administrative costs.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">3. Baptism Preparation Class</h4>
                      <p className="text-gray-700">
                        Parents and godparents are required to attend a Baptism Preparation Class. These classes are 
                        typically held on the first Saturday of each month at 10:00 AM in the parish meeting room.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">4. Scheduling</h4>
                      <p className="text-gray-700">
                        After completing the preparation class, you can schedule the baptism date with the parish office. 
                        Baptisms are typically held on the first and third Sundays of the month at 12:30 PM.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">5. The Celebration</h4>
                      <p className="text-gray-700">
                        On the day of baptism, please arrive at the church 15 minutes before the scheduled time. 
                        Bring the baptismal garment (white clothing or bib) and a candle, which will be provided if needed.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">6. Certificate</h4>
                      <p className="text-gray-700">
                        After the baptism, a certificate will be issued as an official record of the sacrament. 
                        The baptism will also be recorded in the parish baptismal register.
                      </p>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
              
              {/* FAQ */}
              <Collapsible
                open={isFAQOpen}
                onOpenChange={setIsFAQOpen}
                className="w-full border rounded-lg overflow-hidden bg-white"
              >
                <CollapsibleTrigger className="flex justify-between items-center w-full p-6 text-left">
                  <h3 className="text-2xl font-semibold text-[#d4a760]">Frequently Asked Questions</h3>
                  {isFAQOpen ? (
                    <ChevronUp className="h-6 w-6 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-500" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent className="p-6 pt-0 border-t">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">At what age should my child be baptized?</h4>
                      <p className="text-gray-700">
                        The Church encourages parents to have their children baptized within the first few weeks or months after birth. 
                        However, children and adults of any age can be baptized.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">How many godparents should my child have?</h4>
                      <p className="text-gray-700">
                        A child must have at least one godparent (sponsor), but may have two – traditionally one male and one female. 
                        A godparent must be a fully initiated, practicing Catholic.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">What if we're not registered parishioners at St Joseph's?</h4>
                      <p className="text-gray-700">
                        If you are not registered at St Joseph's, you will need to provide a letter of permission from your home parish 
                        to have your child baptized here.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Can we take photographs during the baptism?</h4>
                      <p className="text-gray-700">
                        Yes, discreet photography is allowed during the ceremony, as long as it does not disrupt the sacrament. 
                        Please inform the priest before the ceremony if you plan to have a professional photographer.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">What should my child wear for baptism?</h4>
                      <p className="text-gray-700">
                        Traditionally, children wear white garments as a symbol of purity and the new life in Christ. 
                        However, comfortable clothing that allows easy access to the child's head for the pouring of water is practical.
                      </p>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </section>

        {/* Contact Action */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-[#d4a760] mb-6">Ready to Take the Next Step?</h2>
              <p className="text-lg text-gray-700 mb-8">
                We're here to guide you through the process of baptism at St Joseph's Parish. 
                Contact us today to begin this beautiful journey of faith for you or your child.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                  <a href="/contact">Contact the Parish Office</a>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <a href="/registration">Download Baptism Form</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BaptismPage;
