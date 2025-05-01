
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TriduumPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-church-navy text-white py-60">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://www.carmelitas.edu.pe/wp-content/uploads/2020/04/Triduo-pascual-B.jpg')", 
              opacity: "0.4" 
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">The Easter Triduum</h1>
              <p className="text-xl font-light">
                The Most Sacred Three Days of the Church Year
              </p>
            </div>
          </div>
        </div>

        {/* Introduction to the Triduum */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-church-red mb-8">Understanding the Sacred Triduum</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  The Easter Triduum, often called the Sacred Triduum or simply the Triduum, is the period of three days that begins with the liturgy on the evening of Holy Thursday and reaches its culmination in the Easter Vigil on Holy Saturday night. It marks the end of Lent and is the most solemn and important time in the liturgical year.
                </p>
                <p>
                  During these three days, the Church commemorates the Passion, Death, and Resurrection of Jesus Christ—the events which are at the heart of our salvation. The word "triduum" comes from Latin meaning "three days." These days are counted using the Jewish understanding of sundown as the beginning of the day, so the Triduum consists of:
                </p>
                <ul>
                  <li>Holy Thursday evening (Mass of the Lord's Supper)</li>
                  <li>Good Friday (Celebration of the Lord's Passion)</li>
                  <li>Holy Saturday and Easter Sunday (Easter Vigil and Easter Sunday Masses)</li>
                </ul>
                <p>
                  The Triduum is considered one unified liturgical celebration that unfolds over three days, inviting us to enter deeply into the mystery of our redemption.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Three Days of the Triduum */}
        <section className="py-16 bg-church-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-church-red mb-8">The Three Days of the Triduum</h2>
              
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-church-navy mb-4">Holy Thursday - Mass of the Lord's Supper</h3>
                  <div className="prose prose-lg">
                    <p>
                      The Triduum begins with the evening Mass of the Lord's Supper, which commemorates Jesus' institution of the Eucharist and the priesthood at the Last Supper. Key elements of this liturgy include:
                    </p>
                    <ul>
                      <li><strong>The Washing of Feet</strong> - A ritual that recalls Jesus' washing of his disciples' feet, symbolizing his command to serve one another.</li>
                      <li><strong>The Transfer of the Blessed Sacrament</strong> - After Mass, the consecrated hosts are carried in procession to a place of reposition, where the faithful are invited to spend time in adoration.</li>
                      <li><strong>The Stripping of the Altar</strong> - The altar is cleared and crosses are removed or covered, symbolizing Jesus' abandonment by his disciples and the stripping of his garments.</li>
                    </ul>
                    <p>
                      The Holy Thursday Mass ends without a concluding rite, signifying that it continues into Good Friday.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-church-navy mb-4">Good Friday - Celebration of the Lord's Passion</h3>
                  <div className="prose prose-lg">
                    <p>
                      On Good Friday, the Church commemorates the crucifixion and death of Jesus Christ. This is a day of fasting and abstinence. The liturgy includes:
                    </p>
                    <ul>
                      <li><strong>The Liturgy of the Word</strong> - Including the reading of the Passion narrative from the Gospel of John.</li>
                      <li><strong>The Veneration of the Cross</strong> - The faithful approach a crucifix to show reverence through a kiss, touch, or bow, acknowledging the instrument of our salvation.</li>
                      <li><strong>Holy Communion</strong> - Using hosts consecrated on Holy Thursday, as there is no Mass celebrated on Good Friday.</li>
                      <li><strong>Solemn Intercessions</strong> - Special prayers offered for the needs of the Church and the world.</li>
                    </ul>
                    <p>
                      The Good Friday liturgy, like Holy Thursday, ends in silence with no dismissal.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-church-navy mb-4">Holy Saturday and Easter Sunday - The Easter Vigil</h3>
                  <div className="prose prose-lg">
                    <p>
                      The Easter Vigil is the climax of the Triduum and the most important liturgy of the Church year. Traditionally celebrated after nightfall on Holy Saturday, it includes:
                    </p>
                    <ul>
                      <li><strong>The Service of Light</strong> - Beginning outside the church with the blessing of the new fire and the lighting of the Paschal Candle, symbolizing Christ as the Light of the World.</li>
                      <li><strong>The Liturgy of the Word</strong> - An extended series of readings that trace salvation history from Creation through the Resurrection.</li>
                      <li><strong>The Liturgy of Baptism</strong> - The blessing of baptismal water, the reception of new members into the Church through Baptism and Confirmation, and the renewal of baptismal promises by all present.</li>
                      <li><strong>The Liturgy of the Eucharist</strong> - The first celebration of the Eucharist during the Easter season, with the newly baptized receiving Communion for the first time.</li>
                    </ul>
                    <p>
                      The Easter Vigil concludes the Triduum, though the celebration of Easter continues with Masses on Easter Sunday and throughout the Easter Octave.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Participating in the Triduum */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-church-red mb-8">Participating in the Triduum</h2>
              
              <div className="prose prose-lg max-w-none">
                <p>
                  The Easter Triduum invites us to enter deeply into the mystery of our faith. Here are some ways to fully participate in these sacred days:
                </p>
                
                <h3>Prepare Spiritually</h3>
                <ul>
                  <li>Attend the Sacrament of Reconciliation before Holy Thursday</li>
                  <li>Read and reflect on the Scripture readings for each liturgy</li>
                  <li>Create space for silence and prayer during these days</li>
                </ul>
                
                <h3>Participate in the Liturgies</h3>
                <ul>
                  <li>Attend all three main liturgies of the Triduum if possible</li>
                  <li>Spend time in adoration after the Holy Thursday Mass</li>
                  <li>Observe a period of silence and fasting on Good Friday and Holy Saturday</li>
                </ul>
                
                <h3>Maintain the Spirit of the Triduum</h3>
                <ul>
                  <li>Limit unnecessary work, entertainment, and distractions</li>
                  <li>Reflect on how the events of the Triduum relate to your own life and faith journey</li>
                  <li>Prepare your home for Easter by cleaning and decorating on Holy Saturday</li>
                </ul>
              </div>
              
              <div className="mt-12 bg-church-gray p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-church-navy mb-4">The Triduum at St Joseph's</h3>
                <p className="text-gray-700 mb-4">
                  Join us at St Joseph's Parish for our Triduum liturgies. These beautiful and sacred celebrations are the heart of our liturgical year and offer a profound opportunity to grow in faith and understanding of Christ's sacrifice and triumph.
                </p>
                <a href="/calendar" className="inline-block bg-church-red text-white font-medium py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors">
                  View Triduum Schedule
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

export default TriduumPage;
