
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ChristmastidePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-church-navy text-white py-60">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=2070&auto=format&fit=crop')", 
              opacity: "0.4" 
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Christmastide</h1>
              <p className="text-xl font-light">
                The Season of Joy and Light
              </p>
            </div>
          </div>
        </div>

        {/* Introduction to Christmastide */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-church-red mb-8">About Christmastide</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Christmastide, also known as the Christmas Season, is a joyful period in the liturgical calendar that begins on Christmas Eve and continues until the Feast of the Baptism of the Lord. While much of society views Christmas as a single day, the Church celebrates the birth of Christ over an extended period, giving us time to reflect on the profound mystery of the Incarnation.
                </p>
                <p>
                  During this season, we celebrate that God became human in the person of Jesus Christ to bring salvation to the world. The liturgical color for Christmas is white, symbolizing light, joy, and purity. Churches are beautifully decorated with nativity scenes, Christmas trees, poinsettias, and other festive elements that help us enter into the joy of this sacred time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Celebrations of Christmastide */}
        <section className="py-16 bg-church-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-church-red mb-8">Key Celebrations of Christmastide</h2>
              
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-church-navy mb-4">Christmas (December 25)</h3>
                  <p className="text-gray-700">
                    The Nativity of the Lord celebrates the birth of Jesus Christ in Bethlehem. The Church offers three Masses for Christmas: the Vigil Mass on Christmas Eve, the Mass at Midnight, and the Mass during the Day. Each has its own readings that help us enter into different aspects of the mystery of the Incarnation.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-church-navy mb-4">Feast of the Holy Family (Sunday after Christmas)</h3>
                  <p className="text-gray-700">
                    This feast celebrates the family unit of Jesus, Mary, and Joseph as a model for all Christian families. It reminds us of the importance of family life and the domestic church as the foundation of society and faith formation.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-church-navy mb-4">Solemnity of Mary, Mother of God (January 1)</h3>
                  <p className="text-gray-700">
                    This solemnity honors Mary's role as the Mother of God (Theotokos) and celebrates her unique place in salvation history. It is also the Octave Day of Christmas and coincides with the civil New Year, offering an opportunity to begin the year with prayer and reflection.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-church-navy mb-4">Epiphany (January 6 or the Sunday closest)</h3>
                  <p className="text-gray-700">
                    Epiphany celebrates the manifestation of Christ to the Gentiles, represented by the visit of the Magi who brought gifts of gold, frankincense, and myrrh. This feast reminds us that Jesus came as Savior for all people, not just the Jewish nation.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-church-navy mb-4">Baptism of the Lord (Sunday after Epiphany)</h3>
                  <p className="text-gray-700">
                    This feast commemorates Jesus' baptism in the Jordan River by John the Baptist. It marks the beginning of Jesus' public ministry and the end of the Christmas season. The voice of God the Father is heard identifying Jesus as his beloved Son, and the Holy Spirit descends upon him in the form of a dove.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Christmastide Traditions */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-church-red mb-8">Christmastide Traditions</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-church-navy mb-4">Liturgical Traditions</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-church-red rounded-full mt-2 mr-2"></span>
                      <span><strong>Christmas Carols</strong> - Special hymns that tell the story of Christ's birth and celebrate the joy of the season.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-church-red rounded-full mt-2 mr-2"></span>
                      <span><strong>Blessing of Homes</strong> - At Epiphany, homes are traditionally blessed using chalk to mark the doorway with the year and the letters C+M+B (for the traditional names of the Magi: Caspar, Melchior, and Balthasar, and also for "Christus Mansionem Benedicat" - "May Christ bless this house").</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-church-red rounded-full mt-2 mr-2"></span>
                      <span><strong>Nativity Scenes</strong> - Displays representing the birth of Jesus that help us visualize and contemplate the Christmas story.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-church-red rounded-full mt-2 mr-2"></span>
                      <span><strong>Christmas Trees and Lights</strong> - Symbols of Christ as the Light of the World and the Tree of Life.</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-church-navy mb-4">Family and Cultural Traditions</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-church-red rounded-full mt-2 mr-2"></span>
                      <span><strong>Christmas Meals</strong> - Special foods and gatherings that emphasize the festive nature of the season.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-church-red rounded-full mt-2 mr-2"></span>
                      <span><strong>Gift-Giving</strong> - Reflecting the gifts of the Magi and God's gift of Jesus to humanity.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-church-red rounded-full mt-2 mr-2"></span>
                      <span><strong>Twelve Days of Christmas</strong> - The traditional count from Christmas Day to Epiphany, celebrated with special activities or devotions.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-church-red rounded-full mt-2 mr-2"></span>
                      <span><strong>Cultural Celebrations</strong> - Various ethnic traditions that enrich our understanding and celebration of Christ's birth.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-12 bg-church-gray p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-church-navy mb-4">Celebrating Christmastide at St Joseph's</h3>
                <p className="text-gray-700 mb-4">
                  At St Joseph's Parish, we celebrate the Christmas season with special liturgies, communal events, and opportunities for prayer and reflection. Visit our parish calendar for the schedule of Masses and activities during this joyful season.
                </p>
                <a href="/calendar" className="inline-block bg-church-red text-white font-medium py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors">
                  View Christmas Schedule
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

export default ChristmastidePage;
