
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EastertidePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-church-navy text-white py-60">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://nccumc.org/creation/wp-content/uploads/sites/37/2025/04/eastertide-resources.jpg')", 
              opacity: "0.4" 
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Eastertide</h1>
              <p className="text-xl font-light">
                The Season of Resurrection and Joy
              </p>
            </div>
          </div>
        </div>

        {/* Introduction to Eastertide */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-church-red mb-8">About Eastertide</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Eastertide, also known as the Easter Season, is the joyful period of 50 days from Easter Sunday to Pentecost Sunday. It is a time when the Church celebrates the Resurrection of Jesus Christ and his appearances to his disciples before his Ascension. This season is marked by joy, light, and new life as we continue to celebrate the central mystery of our faith: Christ is risen!
                </p>
                <p>
                  During this season, the liturgical color is white, symbolizing light, joy, and purity. The Paschal Candle, lit at the Easter Vigil, remains in the sanctuary throughout Eastertide, reminding us of Christ's presence among us as the Light of the World. The "Alleluia," which was absent during Lent, is sung with great enthusiasm, and we add a double "Alleluia" to the dismissal at Mass.
                </p>
                <p>
                  Eastertide is a single joyful feast, considered by the Church to be a "great Sunday" that lasts for seven weeks. It is a time for us to deepen our understanding of the Resurrection and its implications for our lives and faith.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Celebrations During Eastertide */}
        <section className="py-16 bg-church-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-church-red mb-8">Key Celebrations During Eastertide</h2>
              
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-church-navy mb-4">Easter Sunday and the Octave of Easter</h3>
                  <p className="text-gray-700">
                    The first eight days of Eastertide, from Easter Sunday through the following Sunday (Divine Mercy Sunday), are celebrated as one continuous feast called the Octave of Easter. Each day within the Octave is celebrated as a Solemnity, the highest rank of liturgical feast. During this time, we hear Gospel accounts of the various appearances of the risen Christ to his disciples.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-church-navy mb-4">Divine Mercy Sunday</h3>
                  <p className="text-gray-700">
                    The Second Sunday of Easter is also known as Divine Mercy Sunday, established by Pope John Paul II in 2000. This feast focuses on God's mercy and forgiveness, inspired by the devotion promoted by St. Faustina Kowalska. Many parishes hold special services to commemorate this feast, including the recitation of the Divine Mercy Chaplet.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-church-navy mb-4">The Ascension of the Lord</h3>
                  <p className="text-gray-700">
                    Celebrated on the 40th day of Easter (or the nearest Sunday in many dioceses), the Ascension commemorates Jesus' return to heaven after his Resurrection. This feast marks the fulfillment of Christ's earthly ministry and his entry into heavenly glory, from where he continues to intercede for us and guide his Church through the Holy Spirit.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-church-navy mb-4">Pentecost Sunday</h3>
                  <p className="text-gray-700">
                    Pentecost, celebrated on the 50th day of Easter, marks the conclusion of the Easter season. This feast commemorates the descent of the Holy Spirit upon the apostles and the Virgin Mary, empowering them to proclaim the Gospel to all nations. Often referred to as the "birthday of the Church," Pentecost celebrates the fulfillment of Christ's promise to send an Advocate to guide his followers. The liturgical color for this day is red, symbolizing the fire of the Holy Spirit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Themes and Practices of Eastertide */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-church-red mb-8">Themes and Practices of Eastertide</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-church-navy mb-4">Spiritual Themes</h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex">
                      <span className="inline-block w-2 h-2 bg-church-red rounded-full mt-2 mr-2"></span>
                      <div>
                        <strong>New Life</strong> - Easter celebrates Christ's victory over death and the new life available to all believers through baptism and faith.
                      </div>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-2 h-2 bg-church-red rounded-full mt-2 mr-2"></span>
                      <div>
                        <strong>Joy</strong> - The Resurrection fills us with joy, knowing that Christ has conquered sin and death and opened the way to eternal life.
                      </div>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-2 h-2 bg-church-red rounded-full mt-2 mr-2"></span>
                      <div>
                        <strong>Light</strong> - Christ is the Light of the World, dispelling darkness and illuminating our path.
                      </div>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-2 h-2 bg-church-red rounded-full mt-2 mr-2"></span>
                      <div>
                        <strong>Witness</strong> - Like the apostles who encountered the risen Christ, we are called to be witnesses to the Resurrection in our daily lives.
                      </div>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-2 h-2 bg-church-red rounded-full mt-2 mr-2"></span>
                      <div>
                        <strong>Mission</strong> - The Easter season culminates in Pentecost, reminding us of our call to share the Gospel with others.
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-church-navy mb-4">Traditional Practices</h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex">
                      <span className="inline-block w-2 h-2 bg-church-red rounded-full mt-2 mr-2"></span>
                      <div>
                        <strong>Regina Caeli</strong> - This ancient Marian antiphon replaces the Angelus during Eastertide, celebrating Mary's joy at her son's Resurrection.
                      </div>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-2 h-2 bg-church-red rounded-full mt-2 mr-2"></span>
                      <div>
                        <strong>Easter Water</strong> - Water blessed at the Easter Vigil is traditionally taken home by the faithful to bless themselves and their homes.
                      </div>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-2 h-2 bg-church-red rounded-full mt-2 mr-2"></span>
                      <div>
                        <strong>Paschal Candle</strong> - Prominently displayed near the altar, it represents the light of Christ and is used at baptisms and funerals throughout the year.
                      </div>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-2 h-2 bg-church-red rounded-full mt-2 mr-2"></span>
                      <div>
                        <strong>Easter Decorations</strong> - Churches and homes are adorned with flowers, especially lilies, and other symbols of new life.
                      </div>
                    </li>
                    <li className="flex">
                      <span className="inline-block w-2 h-2 bg-church-red rounded-full mt-2 mr-2"></span>
                      <div>
                        <strong>Via Lucis</strong> - The "Way of Light" is a devotional practice mirroring the Stations of the Cross but focusing on the Resurrection appearances of Jesus.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-12 bg-church-gray p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-church-navy mb-4">Celebrating Eastertide at St Joseph's</h3>
                <p className="text-gray-700 mb-4">
                  At St Joseph's Parish, we celebrate the Easter season with continued joy and festivity. Our liturgies are enhanced with special music, floral decorations, and the prominent display of the Paschal Candle. Join us for our Easter season liturgies and activities as we continue to celebrate Christ's Resurrection and prepare for the coming of the Holy Spirit at Pentecost.
                </p>
                <a href="/calendar" className="inline-block bg-church-red text-white font-medium py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors">
                  View Easter Season Events
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

export default EastertidePage;
