
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const EdgePage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    gender: "",
    school: "",
    grade: "",
    address: "",
    parentName: "",
    parentContact: "",
    parentEmail: "",
    emergencyContact: "",
    relationship: "",
    medicalConditions: "",
    allergies: "",
    medications: "",
    photoConsent: false,
    commitment: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    toast({
      title: "Registration submitted",
      description: "Your EDGE registration has been received. We'll contact you soon!",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-church-navy text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2574&auto=format&fit=crop')", 
              opacity: "0.4" 
            }}
          />
          
          <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                EDGE Youth Ministry
              </h1>
              <p className="text-xl mb-8 font-light">
                Empowering and nurturing our Catholic teens in faith, fellowship, and service
              </p>
            </div>
          </div>
        </div>

        {/* About EDGE Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-church-navy mb-6 text-center">About EDGE</h2>
              
              <div className="prose max-w-none">
                <p className="mb-4">
                  EDGE is a Catholic middle school youth ministry program that provides a safe and fun place for youth to find 
                  solid Catholic community, to get answers to their questions about faith, and, most importantly, to experience 
                  Jesus in a profound and personal way.
                </p>
                
                <p className="mb-6">
                  EDGE is designed specifically for middle schoolers in grades 7-9, addressing their emotional, psychological, 
                  intellectual, and spiritual maturity. At St. Joseph's Goodwood, our EDGE program helps young people to strengthen 
                  their Catholic identity while addressing their developmental needs.
                </p>

                <h3 className="text-xl font-semibold mb-3">What We Offer:</h3>
                
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li>Weekly gatherings with fun activities and relevant teachings</li>
                  <li>Small group discussions led by trained adult mentors</li>
                  <li>Service projects and community outreach opportunities</li>
                  <li>Retreats and special events throughout the year</li>
                  <li>A safe environment to ask questions about faith and life</li>
                  <li>Preparation for the sacrament of Confirmation</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                  <p className="text-blue-800">
                    "EDGE creates a safe environment where our middle school youth can find solid Catholic community, learn about the faith, and experience Jesus in a profound way."
                  </p>
                </div>

                <p>
                  The EDGE program at St Joseph's follows the guidelines of the Archdiocese of Cape Town's Youth Ministry 
                  Office, ensuring that our content is faithful to Catholic teaching while being engaging and relevant to young people.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-church-navy mb-6 text-center">EDGE Registration Form</h2>
              <p className="text-center text-gray-600 mb-8">
                Please complete this form to register your teen for the EDGE youth ministry program
              </p>
              
              <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
                <form onSubmit={handleSubmit}>
                  {/* Participant Information */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 pb-2 border-b">Participant Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="fullName" className="block font-medium text-gray-700">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-church-red"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="dateOfBirth" className="block font-medium text-gray-700">
                          Date of Birth <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          id="dateOfBirth"
                          name="dateOfBirth"
                          required
                          value={formData.dateOfBirth}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-church-red"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="gender" className="block font-medium text-gray-700">
                          Gender <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="gender"
                          name="gender"
                          required
                          value={formData.gender}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-church-red"
                        >
                          <option value="">Select</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Prefer not to say</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="school" className="block font-medium text-gray-700">
                          School <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="school"
                          name="school"
                          required
                          value={formData.school}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-church-red"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="grade" className="block font-medium text-gray-700">
                          Grade <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="grade"
                          name="grade"
                          required
                          value={formData.grade}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-church-red"
                        >
                          <option value="">Select</option>
                          <option value="7">Grade 7</option>
                          <option value="8">Grade 8</option>
                          <option value="9">Grade 9</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2 md:col-span-2">
                        <label htmlFor="address" className="block font-medium text-gray-700">
                          Home Address <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="address"
                          name="address"
                          required
                          rows={3}
                          value={formData.address}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-church-red"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Parent/Guardian Information */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 pb-2 border-b">Parent/Guardian Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="parentName" className="block font-medium text-gray-700">
                          Parent/Guardian Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="parentName"
                          name="parentName"
                          required
                          value={formData.parentName}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-church-red"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="parentContact" className="block font-medium text-gray-700">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="parentContact"
                          name="parentContact"
                          required
                          value={formData.parentContact}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-church-red"
                        />
                      </div>
                      
                      <div className="space-y-2 md:col-span-2">
                        <label htmlFor="parentEmail" className="block font-medium text-gray-700">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="parentEmail"
                          name="parentEmail"
                          required
                          value={formData.parentEmail}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-church-red"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="emergencyContact" className="block font-medium text-gray-700">
                          Emergency Contact <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="emergencyContact"
                          name="emergencyContact"
                          required
                          value={formData.emergencyContact}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-church-red"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="relationship" className="block font-medium text-gray-700">
                          Relationship to Participant <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="relationship"
                          name="relationship"
                          required
                          value={formData.relationship}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-church-red"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Medical Information */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 pb-2 border-b">Medical Information</h3>
                    
                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="medicalConditions" className="block font-medium text-gray-700">
                          Any medical conditions we should be aware of:
                        </label>
                        <textarea
                          id="medicalConditions"
                          name="medicalConditions"
                          rows={2}
                          value={formData.medicalConditions}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-church-red"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="allergies" className="block font-medium text-gray-700">
                          Allergies:
                        </label>
                        <textarea
                          id="allergies"
                          name="allergies"
                          rows={2}
                          value={formData.allergies}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-church-red"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="medications" className="block font-medium text-gray-700">
                          Current medications:
                        </label>
                        <textarea
                          id="medications"
                          name="medications"
                          rows={2}
                          value={formData.medications}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-church-red"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Consent */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 pb-2 border-b">Consent</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          id="photoConsent"
                          name="photoConsent"
                          checked={formData.photoConsent}
                          onChange={handleChange}
                          className="mt-1"
                        />
                        <label htmlFor="photoConsent" className="text-gray-700">
                          I give permission for my child's photo to be used in parish publications and social media.
                        </label>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          id="commitment"
                          name="commitment"
                          required
                          checked={formData.commitment}
                          onChange={handleChange}
                          className="mt-1"
                        />
                        <label htmlFor="commitment" className="text-gray-700">
                          I commit to supporting my child's participation in the EDGE program and understand the importance of regular attendance. <span className="text-red-500">*</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-church-red text-white rounded-md hover:bg-opacity-90 transition-colors font-medium"
                    >
                      Submit Registration
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EdgePage;
