
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LentPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-church-navy text-white py-60">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://tjfluehr.com/wp-content/uploads/sites/50/2022/04/whatisthemeaningoflent.webp')", 
              opacity: "0.4" 
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Lent</h1>
              <p className="text-xl font-light">
                A Season of Repentance, Prayer, and Preparation
              </p>
            </div>
          </div>
        </div>

        {/* Introduction to Lent */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-church-red mb-8">About Lent</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Lent is a solemn liturgical season that begins on Ash Wednesday and ends on Holy Thursday evening, before the celebration of the Easter Triduum. It is a period of 40 days (not counting Sundays) that symbolizes Jesus' 40 days of fasting in the desert before beginning his public ministry. During Lent, the Church calls us to prayer, fasting, and almsgiving as we prepare to celebrate the Resurrection of Christ at Easter.
                </p>
                <p>
                  The liturgical color of Lent is purple, symbolizing penance, preparation, and sacrifice. Churches are more simply adorned, with no flowers at the altar and more restrained musical accompaniment. The "Gloria" is not sung during Lent, and the "Alleluia" is omitted entirely until the Easter Vigil.
                </p>
                <p>
                  Lent is a time for spiritual renewal through increased attention to the word of God, prayer, repentance, and works of charity. It is a time to turn away from sin and be faithful to the Gospel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Three Pillars of Lent */}
        <section className="py-16 bg-church-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-church-red mb-8">The Three Pillars of Lent</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-church-navy mb-4">Prayer</h3>
                  <p className="text-gray-700 mb-4">
                    Lent is a time to deepen our relationship with God through increased prayer. This can take many forms: attending daily Mass, praying the rosary, participating in Stations of the Cross, spending time in Eucharistic adoration, or establishing a daily practice of reading and reflecting on Scripture.
                  </p>
                  <p className="text-gray-700">
                    Prayer helps us to align our will with God's and strengthens us against temptation.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-church-navy mb-4">Fasting</h3>
                  <p className="text-gray-700 mb-4">
                    Fasting is the practice of abstaining from food, certain types of food, or other pleasures as a form of self-discipline. The Church requires that Catholics aged 18-59 fast on Ash Wednesday and Good Friday, limiting themselves to one full meal and two smaller meals. Catholics aged 14 and older are also asked to abstain from meat on Fridays during Lent.
                  </p>
                  <p className="text-gray-700">
                    Beyond these requirements, many Catholics choose additional forms of fasting, such as giving up a favorite food, entertainment, or habit for the duration of Lent.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-church-navy mb-4">Almsgiving</h3>
                  <p className="text-gray-700 mb-4">
                    Almsgiving means donating money or goods to the poor and performing other acts of charity. This practice reminds us of our responsibility to care for those in need and to share the blessings we have received.
                  </p>
                  <p className="text-gray-700">
                    During Lent, Catholics are encouraged to be especially generous in their charitable giving and volunteer work, seeing Christ in those who are in need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Moments in Lent */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-church-red mb-8">Key Moments in Lent</h2>
              
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                      <img 
                        src="https://www.mercyhome.org/wp-content/uploads/2019/03/maxresdefault.jpg" 
                        alt="Ash Wednesday"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-semibold text-church-navy mb-2">Ash Wednesday</h3>
                    <p className="text-gray-700">
                      Lent begins with Ash Wednesday, when Catholics receive ashes on their forehead in the shape of a cross as a sign of repentance and mortality. The priest or minister says either "Remember that you are dust, and to dust you shall return" or "Repent and believe in the Gospel." This ancient practice reminds us of our mortality and the need for spiritual renewal.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.squarespace-cdn.com/content/v1/5a970c95b40b9df3acd98574/1616175113055-WN20EPL1TT0YR8M2S2MJ/Stations+of+the+Cross+2021.jpg?format=2500w" 
                        alt="Stations of the Cross"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-semibold text-church-navy mb-2">Stations of the Cross</h3>
                    <p className="text-gray-700">
                      This devotional practice, especially popular during Lent, follows Jesus on his journey to Calvary through 14 "stations" or moments. Each station represents an event that occurred during Jesus' passion and death. By meditating on these events, we unite ourselves with Christ's suffering and develop a deeper appreciation for his sacrifice.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                      <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNj3V_o5v7ga1loxflPoe1wXR9YNP-xYIzdw&s" 
                        alt="Palm Sunday"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-semibold text-church-navy mb-2">Palm Sunday</h3>
                    <p className="text-gray-700">
                      Palm Sunday marks the beginning of Holy Week and commemorates Jesus' triumphant entry into Jerusalem. Catholics receive blessed palm branches, which symbolize the palms that were strewn before Jesus as he entered the city. The liturgy includes a reading of the Passion narrative, moving us from the joy of Christ's welcome into Jerusalem to the solemnity of his approaching death.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 bg-church-gray p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-church-navy mb-4">Lent at St Joseph's</h3>
                <p className="text-gray-700 mb-4">
                  At St Joseph's Parish, we offer many opportunities to deepen your Lenten journey, including daily Mass, Stations of the Cross on Fridays, a parish mission, reconciliation services, and community service projects. Check our parish calendar for the full schedule of Lenten events and services.
                </p>
                <a href="/calendar" className="inline-block bg-church-red text-white font-medium py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors">
                  View Lenten Schedule
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

export default LentPage;
