
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-church-navy text-white py-60">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('lovable-uploads/hero2-image.jpg')", 
              opacity: "0.3" 
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Parish</h1>
              <p className="text-xl font-light">
                Learning about our history, mission, and community
              </p>
            </div>
          </div>
        </div>

        {/* History Section with Image */}
        <section className="py-16 bg-white" id="history">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#d4a760] mb-8">Our History</h2>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3 prose prose-lg max-w-none">
                  <p>
                    St Joseph's Parish in Goodwood was (Blessed & Opened 1948; Dedicated 2008) to serve the growing Catholic population in the area. 
                    The foundation stone of our beautiful church was laid on March 19, 1909, the Feast of St Joseph.
                  </p>
                  
                  <p>
                    Over the past century, our parish has been blessed with dedicated priests, religious, and parishioners 
                    who have built a vibrant faith community. What began as a small church has grown into a parish with 
                    various ministries and outreach programs serving the wider Goodwood community.
                  </p>
                  
                  <p>
                    Our church building features beautiful stained glass windows depicting various saints and biblical scenes, 
                    which were installed in the 1950s. The church underwent significant renovations in the 1980s to preserve its 
                    architectural integrity while meeting the needs of modern worship.
                  </p>
                  
                  <p>
                    Today, St Joseph's continues the tradition of faith, service, and community that has characterized 
                    our parish from the beginning.
                  </p>
                </div>
                
                <div className="md:w-1/3">
                  <div className="rounded-lg overflow-hidden shadow-lg h-full">
                    <img 
                      src="lovable-uploads\hero-image.png" 
                      alt="St Joseph's Church Historical Photo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 bg-church-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#d4a760] mb-8">Our Mission & Values</h2>
              
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-semibold mb-4">Mission Statement</h3>
                <p>
                  St Joseph's Parish is a welcoming Catholic community committed to growing in faith, hope, and love. 
                  Inspired by the example of our patron saint, we strive to serve God and one another through worship, 
                  education, and charitable works.
                </p>
                
                <h3 className="text-2xl font-semibold mt-8 mb-4">Our Values</h3>
                
                <ul>
                  <li>
                    <strong>Faith</strong> – We are committed to living and sharing the Gospel of Jesus Christ and the teachings of the Catholic Church.
                  </li>
                  <li>
                    <strong>Community</strong> – We foster a sense of belonging where all are welcomed, respected, and supported.
                  </li>
                  <li>
                    <strong>Service</strong> – Following Christ's example, we serve others with compassion and generosity.
                  </li>
                  <li>
                    <strong>Stewardship</strong> – We responsibly care for and share the gifts God has entrusted to us.
                  </li>
                  <li>
                    <strong>Tradition</strong> – We honor our Catholic heritage while being open to the movement of the Holy Spirit in our time.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Parish Team */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#d4a760] mb-8">Our Parish Team</h2>
              
              <div className="space-y-8">
                {/* Parish Priest */}
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-full md:w-1/4">
                    <div className="aspect-square bg-gray-200 rounded-full overflow-hidden">
                      <img 
                        src="https://scontent.fcpt11-1.fna.fbcdn.net/v/t39.30808-6/491434593_9066450753458649_4420695979273938339_n.jpg?stp=dst-jpg_p110x80_tt6&_nc_cat=106&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHBP8tnj2iycu8ONabBbKOmhHmuFt1Qa7uEea4W3VBru07o9pA7uqKe8APTgGAH3k8&_nc_ohc=rxWlJVEmxY8Q7kNvwH8zRYb&_nc_oc=AdlzjIJG7v3eEIPyM7MwXBahoIifFjhHp-e5WrJ1qe2E8Yr-1w-fSZrqzrLk5Ax6cYs&_nc_zt=23&_nc_ht=scontent.fcpt11-1.fna&_nc_gid=y3pjGBbenezEiZghjtiWnA&oh=00_AfGGE10c-krUv9ik7sWQJWjHrzYq-QvRtwSL_GU2m_HgRQ&oe=68192EBC" 
                        alt="Father Francesco Fabris"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="w-full md:w-3/4">
                    <h3 className="text-2xl font-semibold text-[#d4a760]">Fr. Francesco Fabris - (20 May 2016)</h3>
                    <p className="text-church-red font-medium mb-4">Parish Priest</p>
                    <div className="prose">
                      <p>
                        Fr. Francesco Fabris has been the parish priest at St Joseph's since 2018. He was ordained in 2005 and has 
                        served in several parishes across the Archdiocese of Adelaide. Fr. John has a particular interest 
                        in youth ministry and social justice.
                      </p>
                      <p>
                        "I am blessed to serve in such a vibrant and welcoming community. St Joseph's has a rich history 
                        and a bright future as we continue to grow in faith together."
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Parish Secretary */}
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-full md:w-1/4">
                    <div className="aspect-square bg-gray-200 rounded-full overflow-hidden">
                      <img 
                        src="lovable-uploads/ludwe-jayiya.jpg" 
                        alt="Father Ludwe Jayiya"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-3/4">
                    <h3 className="text-2xl font-semibold text-[#d4a760]">Fr. Ludwe Jayiya - (18 February 2006)</h3>
                    <p className="text-church-red font-medium mb-4">Chaplain at the Goodwood Prison</p>
                    <div className="prose">
                      <p>
                        Fr. Ludwe Jayiyahas been the parish priest at St Joseph's since 2018. He was ordained in 2005 and has 
                        served in several parishes across the Archdiocese of Adelaide. Fr. John has a particular interest 
                        in youth ministry and social justice.
                      </p>
                      <p>
                        "I am blessed to serve in such a vibrant and welcoming community. St Joseph's has a rich history 
                        and a bright future as we continue to grow in faith together."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="w-full md:w-1/6 ">
                    <div className="aspect-square bg-gray-200 rounded-full overflow-hidden">
                      <img 
                        src="public\lovable-uploads\hands_icon.svg" 
                        alt="Father John Smith"
                        className="w-full h-full object-bottom "
                      />
                    </div>
                  </div> */}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
