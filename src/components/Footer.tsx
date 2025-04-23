
import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-church-navy text-white">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-church-gold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-church-gold shrink-0 mt-0.5" />
                <span>21 Albert Street, Goodwood SA 5034</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-church-gold shrink-0" />
                <span>(08) 8272 1988</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-church-gold shrink-0" />
                <span>stjosephgoodwood@archd.adelaide.catholic.org.au</span>
              </li>
            </ul>
          </div>

          {/* Quick Links - Simplified to match main nav */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-church-gold">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="/" className="block hover:text-church-gold transition-colors">
                Home
              </Link>
              <Link to="/about" className="block hover:text-church-gold transition-colors">
                About
              </Link>
              <Link to="/mass-times" className="block hover:text-church-gold transition-colors">
                Mass Times
              </Link>
              <Link to="/sacraments" className="block hover:text-church-gold transition-colors">
                Sacraments
              </Link>
              <Link to="/seasons" className="block hover:text-church-gold transition-colors">
                Seasons
              </Link>
              <Link to="/gallery" className="block hover:text-church-gold transition-colors">
                Gallery
              </Link>
              <Link to="/notices" className="block hover:text-church-gold transition-colors">
                Notices
              </Link>
              <Link to="/calendar" className="block hover:text-church-gold transition-colors">
                Calendar
              </Link>
              <Link to="/contact" className="block hover:text-church-gold transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Mass Times Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-church-gold">Mass Times</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Saturday Vigil:</span>
                <span>6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>10:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Tuesday:</span>
                <span>9:30 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Wednesday:</span>
                <span>9:30 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Thursday:</span>
                <span>9:30 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday:</span>
                <span>9:30 AM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-4 border-t border-gray-700 text-center text-sm">
          <p>© {currentYear} St Joseph's Catholic Church, Goodwood. All rights reserved.</p>
          <p className="mt-2 text-gray-400">
            Part of the Catholic Archdiocese of Adelaide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
