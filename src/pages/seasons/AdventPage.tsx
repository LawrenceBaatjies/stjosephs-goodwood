
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AdventPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-church-navy text-white py-60">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1639001766042-08514d70010b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", 
              opacity: "0.4" 
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Advent Season</h1>
              <p className="text-xl font-light">
                A time of joyful preparation for the coming of Christ
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7">
                  <h2 className="text-3xl font-bold text-[#d4a760] mb-6">What is Advent?</h2>
                  <div className="prose prose-lg max-w-none">
                    <p>
                      Advent is the period of four Sundays and weeks before Christmas. The word "Advent" comes from the Latin 
                      word "adventus" meaning "coming" or "arrival." It is a time of preparation and expectation for the 
                      coming of Christ, both in celebration of his birth at Christmas, and in anticipation of his final 
                      coming at the end of time.
                    </p>

                    <p>
                      During Advent, Catholics prepare for Christmas by making themselves ready for Christ's coming. 
                      This preparation includes prayer, reflection, and penance. The color associated with Advent is 
                      purple (or violet), symbolizing penance, preparation, and royalty.
                    </p>
                    
                    <p>
                      The Advent wreath, with its four candles (three purple and one pink), is a prominent symbol of the 
                      season. Each candle represents one of the four Sundays of Advent, with the pink candle lit on the 
                      third Sunday (Gaudete Sunday) as a symbol of joy.
                    </p>
                  </div>
                </div>
                
                <div className="md:col-span-5">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1737808786075-50571de8d1ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhdGhvbGljJTIwYWR2ZW50fGVufDB8fDB8fHww" 
                      alt="Advent Wreath"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Traditions and Customs */}
        <section className="py-16 bg-church-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#d4a760] mb-8 text-center">Advent Traditions and Customs</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-[#d4a760] mb-4">The Advent Wreath</h3>
                  <p className="text-gray-700 mb-4">
                    The Advent wreath is a circular garland of evergreen branches representing eternity. 
                    Four candles are arranged on the wreath, traditionally three purple and one pink.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>First Sunday:</strong> Hope (purple candle)</li>
                    <li><strong>Second Sunday:</strong> Peace (purple candle)</li>
                    <li><strong>Third Sunday:</strong> Joy (pink candle)</li>
                    <li><strong>Fourth Sunday:</strong> Love (purple candle)</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-[#d4a760] mb-4">Advent Calendar</h3>
                  <p className="text-gray-700">
                    The Advent calendar is a special calendar used to count the days of Advent in anticipation of 
                    Christmas. Traditional Advent calendars feature 24 doors, one for each day from December 1st to 
                    Christmas Eve. Each door reveals a small gift, Bible verse, or part of the Nativity story.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-[#d4a760] mb-4">Jesse Tree</h3>
                  <p className="text-gray-700">
                    The Jesse Tree represents the family tree of Jesus Christ, tracing his ancestry from Jesse 
                    (the father of King David). Each day of Advent, a new ornament representing a Biblical figure 
                    or event is added to the tree, telling the story of God's salvation plan leading up to the 
                    birth of Jesus.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-[#d4a760] mb-4">Advent Prayers</h3>
                  <p className="text-gray-700 mb-3">
                    Special prayers and devotions are said during Advent, including the "O Antiphons" which are 
                    used in the last seven days of Advent in the daily prayer of the Church.
                  </p>
                  <p className="text-gray-700">
                    Many families also pray together around the Advent wreath each evening, lighting the 
                    appropriate candle and reading Scripture passages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Readings and Prayers */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#d4a760] mb-8 text-center">Readings and Prayers for Advent</h2>
              
              <div className="prose prose-lg max-w-none mb-8">
                <p>
                  The readings during Advent focus on the coming of Christ, both at his birth and at the end of time.
                  They include prophecies about the Messiah, John the Baptist's preparation for Jesus' ministry, 
                  and the events leading up to Jesus' birth.
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold text-[#d4a760] mb-3">Advent Prayer</h3>
                  <blockquote className="italic text-gray-700">
                    "Come, Lord Jesus, come!<br />
                    Fill our hearts with your peace and joy.<br />
                    As we prepare to celebrate your birth,<br />
                    Make us ready to receive you.<br />
                    Help us to make room for you in our busy lives.<br />
                    May this Advent season be a time of grace for us,<br />
                    As we await in joyful hope for your coming.<br />
                    Amen."
                  </blockquote>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold text-[#d4a760] mb-3">Prayer for Lighting the Advent Wreath</h3>
                  <blockquote className="italic text-gray-700">
                    "Lord God,<br />
                    Your Church joyfully awaits the coming of its Savior,<br />
                    Who enlightens our hearts and dispels the darkness of ignorance and sin.<br />
                    Pour forth your blessings upon us as we light the candles of this wreath.<br />
                    May their light reflect the splendor of Christ,<br />
                    Who is Lord, forever and ever.<br />
                    Amen."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Parish Advent Schedule */}
        <section className="py-16 bg-church-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#d4a760] mb-8 text-center">Advent at St Joseph's</h2>
              
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h3 className="text-xl font-semibold mb-4">Special Advent Events</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="min-w-[100px] font-medium">Dec 1</div>
                    <div>
                      <p className="font-medium">Advent Wreath Blessing</p>
                      <p className="text-gray-600">At all Sunday Masses</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="min-w-[100px] font-medium">Dec 8</div>
                    <div>
                      <p className="font-medium">Immaculate Conception Mass</p>
                      <p className="text-gray-600">7:30 AM and 7:00 PM</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="min-w-[100px] font-medium">Dec 15</div>
                    <div>
                      <p className="font-medium">Advent Penance Service</p>
                      <p className="text-gray-600">7:00 PM</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="min-w-[100px] font-medium">Dec 17</div>
                    <div>
                      <p className="font-medium">Christmas Novena Begins</p>
                      <p className="text-gray-600">After evening Mass</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="min-w-[100px] font-medium">Dec 20</div>
                    <div>
                      <p className="font-medium">Decorating the Church</p>
                      <p className="text-gray-600">10:00 AM (Volunteers welcome)</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Advent Mass Schedule</h3>
                <p className="text-gray-700 mb-4">
                  During the Advent season, our regular Mass schedule remains the same:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Sunday:</strong> 7:30 AM, 9:30 AM, and 5:00 PM</li>
                  <li><strong>Monday to Friday:</strong> 7:30 AM</li>
                  <li><strong>Saturday:</strong> 9:00 AM and 5:00 PM (Sunday Vigil)</li>
                </ul>
                <p className="mt-4 text-gray-700">
                  Additional Masses for holy days will be announced in the parish bulletin and on the website.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AdventPage;
