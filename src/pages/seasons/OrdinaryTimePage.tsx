
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const OrdinaryTimePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-church-navy text-white py-60">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://plus.unsplash.com/premium_photo-1678305037622-474d23a7d906?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhdGhvbGljfGVufDB8fDB8fHww')", 
              opacity: "0.4" 
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Ordinary Time</h1>
              <p className="text-xl font-light">
                The Season of Growth in our Faith Journey
              </p>
            </div>
          </div>
        </div>

        {/* Introduction to Ordinary Time */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-church-red mb-8">About Ordinary Time</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Ordinary Time is the longest liturgical season in the Catholic Church calendar, taking up 33 or 34 weeks of the year. The name "Ordinary" comes not from the English word meaning "common" or "plain," but from the Latin word "ordinalis," which refers to numbers in a series. In this case, the weeks of Ordinary Time are numbered.
                </p>
                <p>
                  Ordinary Time is divided into two sections. The first begins after the Christmas season on the Monday following the Feast of the Baptism of the Lord and continues until the day before Ash Wednesday (the beginning of Lent). The second period begins on the Monday after Pentecost and continues until the First Sunday of Advent.
                </p>
                <p>
                  During Ordinary Time, the Church celebrates the fullness of the mystery of the Lord Jesus. The Sundays of this time are devoted to the mystery of Christ in all its aspects. The liturgical color for Ordinary Time is green, symbolizing hope and life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Themes of Ordinary Time */}
        <section className="py-16 bg-church-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-church-red mb-8">Themes of Ordinary Time</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-church-navy mb-4">Growth in Faith</h3>
                  <p className="text-gray-700">
                    Ordinary Time invites us to grow in our faith and deepen our relationship with God. Just as the color green represents growth in nature, this season represents spiritual growth in our lives. Through regular participation in Mass, prayer, and study of Scripture, we nurture our faith during this season.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-church-navy mb-4">Jesus' Public Ministry</h3>
                  <p className="text-gray-700">
                    During Ordinary Time, the readings at Mass often focus on Jesus' public ministry, including his teachings, parables, and miracles. We are invited to walk alongside Jesus as his disciples, learning from his words and actions how to live as children of God.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-church-navy mb-4">Living the Faith Daily</h3>
                  <p className="text-gray-700">
                    Ordinary Time reminds us that our faith is lived out in the "ordinary" moments of daily life. We are called to bring Christ's presence into our homes, workplaces, and communities through acts of love, service, and witness.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-church-navy mb-4">The Universal Call to Holiness</h3>
                  <p className="text-gray-700">
                    This season emphasizes that all Christians are called to holiness, regardless of their state in life. We grow in holiness by living virtuous lives, practicing the works of mercy, and allowing God's grace to transform us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Important Feasts During Ordinary Time */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-church-red mb-8">Important Celebrations During Ordinary Time</h2>
              
              <div className="prose prose-lg max-w-none">
                <p>
                  While Ordinary Time lacks the intense liturgical focus of seasons like Advent or Lent, it includes many important celebrations:
                </p>
                
                <ul>
                  <li><strong>Trinity Sunday</strong> – Celebrated on the Sunday after Pentecost, honoring the Holy Trinity.</li>
                  <li><strong>Corpus Christi</strong> – The Solemnity of the Most Holy Body and Blood of Christ, celebrated on the Sunday after Trinity Sunday.</li>
                  <li><strong>Sacred Heart of Jesus</strong> – Celebrated on the Friday after the Second Sunday after Pentecost.</li>
                  <li><strong>Assumption of the Blessed Virgin Mary</strong> (August 15) – Celebrating Mary's assumption into heaven.</li>
                  <li><strong>All Saints Day</strong> (November 1) – Honoring all the saints, known and unknown.</li>
                  <li><strong>Christ the King</strong> – The final Sunday of Ordinary Time and of the liturgical year, celebrating Christ's kingship over all creation.</li>
                </ul>
                
                <p>
                  Additionally, many saints' feast days are celebrated throughout Ordinary Time, providing us with examples of holiness and intercessors for our spiritual journey.
                </p>
              </div>
              
              <div className="mt-12 bg-church-gray p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-church-navy mb-4">Living Ordinary Time at St Joseph's</h3>
                <p className="text-gray-700 mb-4">
                  At St Joseph's Parish, we celebrate the season of Ordinary Time with regular devotions, opportunities for faith formation, and community events. Check our parish calendar for upcoming activities and liturgical celebrations.
                </p>
                <a href="/calendar" className="inline-block bg-church-red text-white font-medium py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors">
                  View Parish Calendar
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

export default OrdinaryTimePage;
