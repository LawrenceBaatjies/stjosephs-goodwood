
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HolyOrdersPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-church-navy text-white py-16">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1519608487953-e823d78933a7?q=80&w=2070&auto=format&fit=crop')", 
              opacity: "0.3" 
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Holy Orders</h1>
              <p className="text-xl font-light">
                The Sacrament of Apostolic Ministry
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg mx-auto">
                <h2 className="text-church-red text-3xl mb-6 font-bold">The Sacrament of Holy Orders</h2>
                
                <p>Holy Orders is the sacrament through which the mission entrusted by Christ to His apostles continues to be exercised in the Church until the end of time. It includes three degrees: episcopate (bishops), presbyterate (priests), and diaconate (deacons).</p>
                
                <h3 className="text-2xl mt-8 mb-4 text-[#d4a760]">The Three Degrees of Holy Orders</h3>
                
                <div className="mb-8">
                  <h4 className="font-bold text-xl mb-2">Bishops</h4>
                  <p>Bishops receive the fullness of the sacrament of Holy Orders. They are the successors of the Apostles and members of the college of bishops. They are the chief teachers, priests, and shepherds of their dioceses.</p>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-bold text-xl mb-2">Priests</h4>
                  <p>Priests are united with bishops in priestly dignity and are consecrated to preach the Gospel, shepherd the faithful, and celebrate divine worship, especially as ministers of the Eucharist. They serve as co-workers of the bishops.</p>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-bold text-xl mb-2">Deacons</h4>
                  <p>Deacons are ordained for tasks of service in the Church, including assisting the bishop and priests in the celebration of the divine mysteries, especially the Eucharist, distributing Holy Communion, assisting at and blessing marriages, proclaiming the Gospel, preaching, officiating at funerals, and dedicating themselves to the various ministries of charity.</p>
                </div>
                
                <h3 className="text-2xl mt-8 mb-4 text-[#d4a760]">Discerning a Vocation</h3>
                
                <p>Those who feel called to the priesthood or diaconate are encouraged to speak with our parish priest for initial guidance and discernment. The journey typically involves a period of discernment, seminary education for priests, and a formation program for deacons.</p>
                
                <div className="bg-gray-100 p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-church-red">Vocation Resources</h3>
                  <p className="mb-4">If you are discerning a vocation to the priesthood or diaconate, here are some helpful resources:</p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Speak with our parish priest</li>
                    <li>Contact the Vocations Director of our Diocese</li>
                    <li>Attend a discernment retreat</li>
                    <li>Regular prayer and spiritual direction</li>
                  </ul>
                  <p><strong>Contact:</strong> Parish Office at (+27)  21 591 2229 for more information</p>
                </div>
                
                <h3 className="text-2xl mt-8 mb-4 text-[#d4a760]">Supporting Vocations</h3>
                
                <p>All the faithful are encouraged to pray for and support vocations to the priesthood and religious life. Our parish regularly prays for vocations during the Prayers of the Faithful at Mass and holds special events to promote vocational awareness.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HolyOrdersPage;
