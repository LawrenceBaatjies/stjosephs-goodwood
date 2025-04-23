
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Define the Prayer type
type Prayer = {
  id: number;
  title: string;
  category: string;
  text: string;
};

const CatholicPrayersPage = () => {
  // Array of Catholic prayers
  const prayers: Prayer[] = [
    {
      id: 1,
      title: "The Sign of the Cross",
      category: "Basic Prayers",
      text: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen."
    },
    {
      id: 2,
      title: "The Lord's Prayer (Our Father)",
      category: "Basic Prayers",
      text: "Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen."
    },
    {
      id: 3,
      title: "Hail Mary",
      category: "Marian Prayers",
      text: "Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen."
    },
    {
      id: 4,
      title: "Glory Be (Doxology)",
      category: "Basic Prayers",
      text: "Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen."
    },
    {
      id: 5,
      title: "The Apostles' Creed",
      category: "Creeds",
      text: "I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen."
    },
    {
      id: 6,
      title: "The Nicene Creed",
      category: "Creeds",
      text: "I believe in one God, the Father almighty, maker of heaven and earth, of all things visible and invisible. I believe in one Lord Jesus Christ, the Only Begotten Son of God, born of the Father before all ages. God from God, Light from Light, true God from true God, begotten, not made, consubstantial with the Father; through him all things were made. For us men and for our salvation he came down from heaven, and by the Holy Spirit was incarnate of the Virgin Mary, and became man. For our sake he was crucified under Pontius Pilate, he suffered death and was buried, and rose again on the third day in accordance with the Scriptures. He ascended into heaven and is seated at the right hand of the Father. He will come again in glory to judge the living and the dead and his kingdom will have no end. I believe in the Holy Spirit, the Lord, the giver of life, who proceeds from the Father and the Son, who with the Father and the Son is adored and glorified, who has spoken through the prophets. I believe in one, holy, catholic and apostolic Church. I confess one Baptism for the forgiveness of sins and I look forward to the resurrection of the dead and the life of the world to come. Amen."
    },
    {
      id: 7,
      title: "Act of Contrition",
      category: "Sacramental Prayers",
      text: "O my God, I am heartily sorry for having offended You, and I detest all my sins because I dread the loss of heaven and the pains of hell, but most of all because they offend You, my God, who are all good and deserving of all my love. I firmly resolve, with the help of Your grace, to confess my sins, to do penance, and to amend my life. Amen."
    },
    {
      id: 8,
      title: "Hail Holy Queen (Salve Regina)",
      category: "Marian Prayers",
      text: "Hail, Holy Queen, Mother of Mercy, our life, our sweetness and our hope. To thee do we cry, poor banished children of Eve. To thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious advocate, thine eyes of mercy toward us, and after this our exile, show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary! Pray for us, O Holy Mother of God, that we may be made worthy of the promises of Christ. Amen."
    },
    {
      id: 9,
      title: "Memorare",
      category: "Marian Prayers",
      text: "Remember, O most gracious Virgin Mary, that never was it known that anyone who fled to thy protection, implored thy help, or sought thy intercession was left unaided. Inspired by this confidence, I fly unto thee, O Virgin of virgins, my mother; to thee do I come, before thee I stand, sinful and sorrowful. O Mother of the Word Incarnate, despise not my petitions, but in thy mercy hear and answer me. Amen."
    },
    {
      id: 10,
      title: "Prayer to St. Michael the Archangel",
      category: "Prayers to Saints",
      text: "St. Michael the Archangel, defend us in battle. Be our defense against the wickedness and snares of the Devil. May God rebuke him, we humbly pray, and do thou, O Prince of the heavenly hosts, by the power of God, thrust into hell Satan, and all the evil spirits, who prowl about the world seeking the ruin of souls. Amen."
    },
    {
      id: 11,
      title: "The Angelus",
      category: "Marian Prayers",
      text: "V. The Angel of the Lord declared unto Mary. R. And she conceived of the Holy Spirit. Hail Mary... V. Behold the handmaid of the Lord. R. Be it done unto me according to thy word. Hail Mary... V. And the Word was made Flesh. R. And dwelt among us. Hail Mary... V. Pray for us, O holy Mother of God. R. That we may be made worthy of the promises of Christ. Let us pray: Pour forth, we beseech Thee, O Lord, Thy grace into our hearts, that we to whom the Incarnation of Christ Thy Son was made known by the message of an angel, may by His Passion and Cross be brought to the glory of His Resurrection. Through the same Christ Our Lord. Amen."
    },
    {
      id: 12,
      title: "The Regina Caeli",
      category: "Marian Prayers",
      text: "Queen of Heaven, rejoice, alleluia. For He whom you did merit to bear, alleluia. Has risen, as he said, alleluia. Pray for us to God, alleluia. V. Rejoice and be glad, O Virgin Mary, alleluia. R. For the Lord has truly risen, alleluia. Let us pray: O God, who gave joy to the world through the resurrection of Thy Son, our Lord Jesus Christ, grant we beseech Thee, that through the intercession of the Virgin Mary, His Mother, we may obtain the joys of everlasting life. Through the same Christ our Lord. Amen."
    },
    {
      id: 13,
      title: "Prayer Before Meals",
      category: "Daily Prayers",
      text: "Bless us, O Lord, and these Thy gifts, which we are about to receive from Thy bounty, through Christ our Lord. Amen."
    },
    {
      id: 14,
      title: "Prayer After Meals",
      category: "Daily Prayers",
      text: "We give Thee thanks, Almighty God, for all Thy benefits, who live and reign, world without end. Amen."
    },
    {
      id: 15,
      title: "Morning Offering",
      category: "Daily Prayers",
      text: "O Jesus, through the Immaculate Heart of Mary, I offer You my prayers, works, joys, and sufferings of this day in union with the Holy Sacrifice of the Mass throughout the world. I offer them for all the intentions of Your Sacred Heart: the salvation of souls, reparation for sin, and the reunion of all Christians. I offer them for the intentions of our Bishops and of all Apostles of Prayer, and in particular for those recommended by our Holy Father this month. Amen."
    }
  ];

  // Get unique prayer categories
  const categories = Array.from(new Set(prayers.map((prayer) => prayer.category)));
  
  // State for selected category
  const [activeCategory, setActiveCategory] = React.useState<string>("All");

  // Filter prayers based on selected category
  const filteredPrayers = activeCategory === "All" 
    ? prayers 
    : prayers.filter((prayer) => prayer.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-church-navy text-white py-16">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1607708161892-d44f04ff1603?q=80&w=2070&auto=format&fit=crop')", 
              opacity: "0.3" 
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Catholic Prayers</h1>
              <p className="text-xl font-light">
                A Collection of Traditional Catholic Prayers for Every Occasion
              </p>
            </div>
          </div>
        </div>

        {/* Prayer Collection */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-church-red mb-8 text-center">Prayer Collection</h2>
              
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                <button
                  onClick={() => setActiveCategory("All")}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeCategory === "All"
                      ? "bg-church-red text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  All Prayers
                </button>
                
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      activeCategory === category
                        ? "bg-church-red text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              {/* Prayers List */}
              <div className="space-y-8">
                {filteredPrayers.map((prayer) => (
                  <div key={prayer.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-church-navy">{prayer.title}</h3>
                          <span className="inline-block text-xs font-medium bg-gray-100 text-gray-600 py-1 px-2 rounded-full mt-1">
                            {prayer.category}
                          </span>
                        </div>
                      </div>
                      <div className="prose max-w-none">
                        <p className="text-gray-700 whitespace-pre-line">{prayer.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Prayer Resources */}
        <section className="py-16 bg-church-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-church-red mb-8 text-center">Prayer Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-church-navy mb-4">Daily Prayer</h3>
                  <p className="text-gray-700 mb-4">
                    Develop a routine of daily prayer to strengthen your relationship with God. Consider setting aside specific times each day for prayer, such as morning, midday, and evening.
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Morning Offering</li>
                    <li>Angelus (at noon)</li>
                    <li>Evening Examination of Conscience</li>
                    <li>Night Prayer</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-church-navy mb-4">Devotional Prayers</h3>
                  <p className="text-gray-700 mb-4">
                    These special prayers and devotions can enrich your spiritual life and help you focus on particular aspects of your faith throughout the liturgical year.
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>The Rosary</li>
                    <li>Divine Mercy Chaplet</li>
                    <li>Stations of the Cross</li>
                    <li>Novenas</li>
                    <li>Litanies</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-church-navy mb-4">Prayer Apps</h3>
                  <p className="text-gray-700 mb-4">
                    In our digital age, there are many helpful apps and websites that can support your prayer life. Here are a few recommendations:
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Laudate</li>
                    <li>iBreviary</li>
                    <li>Pray As You Go</li>
                    <li>Hallow</li>
                    <li>Daily Readings (USCCB)</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-gray-700 mb-6">
                  For more prayer resources and spiritual guidance, please visit our parish library or speak with one of our priests or deacons.
                </p>
                <a href="/contact" className="inline-block bg-church-red text-white font-medium py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors">
                  Contact Us for Spiritual Guidance
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

export default CatholicPrayersPage;
