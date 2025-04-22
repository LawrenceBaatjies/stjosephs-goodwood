
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, BookOpen, Heart, Music, Bookmark, Coffee, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const GroupDetailCard = ({ title, icon: Icon, description, meetingTime, contact, leader }: {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
  meetingTime: string;
  contact: string;
  leader: string;
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-church-red bg-opacity-10 rounded-full flex items-center justify-center">
            <Icon className="h-6 w-6 text-church-red" />
          </div>
          <h3 className="ml-4 text-xl font-bold text-church-navy">{title}</h3>
        </div>
        
        <p className="text-gray-700 mb-6">{description}</p>
        
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Meeting Time:</span>
            <span className="text-gray-800">{meetingTime}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Leader:</span>
            <span className="text-gray-800">{leader}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Contact:</span>
            <span className="text-gray-800">{contact}</span>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 px-6 py-3 border-t">
        <Link
          to="#"
          className="text-church-red font-medium hover:underline inline-flex items-center text-sm"
        >
          More Information
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </div>
  );
};

const ParishGroupsPage = () => {
  const ministryGroups = [
    {
      title: "Pastoral Council",
      icon: Users,
      description:
        "The Pastoral Council assists the parish priest in fostering pastoral activity in the parish. They help identify pastoral needs, develop pastoral plans, and evaluate their effectiveness.",
      meetingTime: "First Tuesday of the month, 7:00 PM",
      leader: "Mrs. Patricia Williams",
      contact: "pastoral.council@stjosephsgoodwood.org"
    },
    {
      title: "Liturgy Committee",
      icon: BookOpen,
      description:
        "The Liturgy Committee plans and coordinates liturgical celebrations throughout the year, including Sunday Masses, feast days, and special liturgical seasons.",
      meetingTime: "Second Wednesday of the month, 7:30 PM",
      leader: "Mr. Michael Roberts",
      contact: "liturgy@stjosephsgoodwood.org"
    },
    {
      title: "St Vincent de Paul Society",
      icon: Heart,
      description:
        "The St Vincent de Paul Society provides assistance to those in need within our local community through various outreach programs including food parcels, financial assistance, and support services.",
      meetingTime: "Every Thursday, 5:00 PM",
      leader: "Mrs. Jennifer Thompson",
      contact: "vinnies@stjosephsgoodwood.org"
    },
    {
      title: "Church Choir",
      icon: Music,
      description:
        "Our church choir enhances our liturgical celebrations through beautiful music. The choir sings at the 10:00 AM Sunday Mass and for special occasions throughout the year.",
      meetingTime: "Thursday, 7:00 PM (Practice)",
      leader: "Mr. David Wilson",
      contact: "choir@stjosephsgoodwood.org"
    },
    {
      title: "Bible Study Group",
      icon: Bookmark,
      description:
        "The Bible Study Group meets weekly to study and reflect on the Scriptures in a friendly and supportive environment. All levels of biblical knowledge are welcome.",
      meetingTime: "Wednesday, 10:30 AM",
      leader: "Fr. John Smith",
      contact: "biblestudy@stjosephsgoodwood.org"
    },
    {
      title: "Youth Ministry",
      icon: Users,
      description:
        "Our Youth Ministry provides spiritual formation and social activities for young people in our parish. Activities include faith discussions, service projects, and social events.",
      meetingTime: "Sunday, 11:30 AM (after 10:00 AM Mass)",
      leader: "Ms. Emily Parker",
      contact: "youth@stjosephsgoodwood.org"
    },
    {
      title: "Legion of Mary",
      icon: Heart,
      description:
        "The Legion of Mary is a lay Catholic organization whose members serve the Church on a voluntary basis. Their work includes visiting the sick, the elderly, and new parishioners.",
      meetingTime: "Monday, 10:00 AM",
      leader: "Mrs. Margaret Adams",
      contact: "legionofmary@stjosephsgoodwood.org"
    },
    {
      title: "Parish Hospitality Team",
      icon: Coffee,
      description:
        "The Hospitality Team coordinates refreshments after Sunday Masses and helps organize parish social events such as picnics, dinners, and celebrations.",
      meetingTime: "As needed for events",
      leader: "Mr. James Carter",
      contact: "hospitality@stjosephsgoodwood.org"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-church-navy text-white py-16">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?q=80&w=2070&auto=format&fit=crop')", 
              opacity: "0.3" 
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Parish Groups & Ministries</h1>
              <p className="text-xl font-light">
                Join us in building a vibrant faith community through service and fellowship
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p>
                  St Joseph's Parish offers many opportunities for parishioners to share their gifts 
                  and talents in service to the community. Our parish groups and ministries enrich our 
                  faith life, foster fellowship, and reach out to those in need.
                </p>
                <p>
                  We invite you to explore these opportunities and consider how you might become more 
                  involved in our parish community. New members and volunteers are always welcome!
                </p>
                <p>
                  For more information about any of these groups, please contact the parish office or the 
                  group leader directly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ministry Groups */}
        <section className="py-16 bg-church-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-church-navy mb-12 text-center">Our Ministries</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ministryGroups.map((group, index) => (
                  <GroupDetailCard key={index} {...group} />
                ))}
              </div>

              <div className="mt-16 text-center">
                <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
                  <h3 className="text-xl font-bold text-church-navy mb-4">Want to Start a New Ministry?</h3>
                  <p className="text-gray-700 mb-6">
                    If you have an idea for a new ministry or group that would benefit our parish community, 
                    we'd love to hear from you. Please contact the parish office to discuss your proposal.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block px-6 py-3 bg-church-red text-white rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ParishGroupsPage;
