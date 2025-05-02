
import React from "react";
import { Link } from "react-router-dom";
import { Users, BookOpen, Heart, Music, Bookmark, Church, PenTool } from "lucide-react";

const GroupCard = ({ title, icon: Icon, description, link }: {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
  link: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg">
      <div className="w-12 h-12 bg-church-red bg-opacity-10 rounded-full flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-church-red" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-church-navy">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        to={link}
        className="text-church-red font-medium hover:underline inline-flex items-center"
      >
        Learn More
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </div>
  );
};

const ParishGroups = () => {
  const groups = [
    {
      title: "Evangelization",
      icon: PenTool,
      description:
        "Focused on missionary discipleship, spreading the Good News, and sharing the message of Christ.",
      link: "/parish-ministry/evangelization"
    },
    {
      title: "Faith Formation",
      icon: BookOpen,
      description:
        "Programs and activities to deepen the understanding of Catholic faith through education and spiritual growth.",
      link: "/parish-ministry/faith-formation"
    },
    {
      title: "Marriage & Family",
      icon: Heart,
      description:
        "Supporting the sacredness of marriage and providing resources for family life in the Catholic tradition.",
      link: "/parish-ministry/marriage-family"
    },
    {
      title: "Parish & Community Building",
      icon: Church,
      description:
        "Initiatives to strengthen parish bonds and build a vibrant community of faith.",
      link: "/parish-ministry/parish-community"
    },
    {
      title: "Community Engagement",
      icon: Users,
      description:
        "Outreach programs that connect our parish with the wider community and those in need.",
      link: "/parish-ministry/community-engagement"
    },
    {
      title: "Youth & Young Adult",
      icon: Bookmark,
      description:
        "Engaging young people through spiritual formation, community, and service activities.",
      link: "/parish-ministry/youth-young-adult"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-church-navy mb-4">
            Parish Ministry
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            There are many ways to get involved in our parish community. Explore our various
            ministries and consider sharing your gifts and talents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group, index) => (
            <GroupCard key={index} {...group} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/parish-ministry/evangelization"
            className="inline-block px-6 py-3 border border-church-navy text-church-navy rounded-md hover:bg-church-navy hover:text-white transition-colors"
          >
            View All Parish Ministries
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ParishGroups;
