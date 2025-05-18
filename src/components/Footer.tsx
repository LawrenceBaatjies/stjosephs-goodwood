
import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-church-navy text-white">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-church-gold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-church-gold shrink-0 mt-0.5" />
                <span>30 Anderson Street,Goodwood,7460</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-church-gold shrink-0" />
                <span>(27+)  21 591 2229</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-church-gold shrink-0" />
                <span>info@stjosephcatholicchruch.co.za</span>
              </li>
            </ul>
            
            {/* Social Media Links */}
            <div className="mt-6 flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-church-gold transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-church-gold transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links - Stacked in two columns */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-church-gold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Link to="/" className="block hover:text-church-gold transition-colors mb-1">Home</Link>
                <Link to="/about" className="block hover:text-church-gold transition-colors mb-1">About</Link>
                <Link to="/mass-times" className="block hover:text-church-gold transition-colors mb-1">Mass Times</Link>
                <Link to="/sacraments/baptism" className="block hover:text-church-gold transition-colors mb-1">Sacraments</Link>
                <Link to="/seasons/ordinary-time" className="block hover:text-church-gold transition-colors mb-1">Seasons</Link>
              </div>
              <div>
                <Link to="/gallery" className="block hover:text-church-gold transition-colors mb-1">Gallery</Link>
                <Link to="/notices" className="block hover:text-church-gold transition-colors mb-1">Notices</Link>
                <Link to="/newsletters" className="block hover:text-church-gold transition-colors mb-1">Newsletters</Link>
                <Link to="/calendar" className="block hover:text-church-gold transition-colors mb-1">Calendar</Link>
		<Link to="/parish-ministry"className="hover:text-church-gold transition-colors mb-1">Parish Ministry</Link>
                <Link to="/edge" className="block hover:text-church-gold transition-colors mb-1">EDGE Youth</Link>
              </div>
            </div>
          </div>

          {/* Mass Times Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-church-gold">Mass Times</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>17:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>10:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Monday:</span>
                <span>8:30 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Tuesday:</span>
                <span>8:30 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Wednesday:</span>
                <span>8:30 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Thursday:</span>
                <span>18:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday Adoration: 8:00 AM</span> 
                <span>Mass 8:30 AM</span>
              </li>
            </ul>
          </div>
          
          {/* Sister Parish */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-church-gold">Sister Parish</h3>
            <Link to="/our-lady-rosary" className="block mb-3 font-bold text-church-gold hover:text-white transition-colors">
              OUR LADY OF THE ROSARY
            </Link>
            <p className="text-sm text-gray-300">
              RUYTERWACHT sister parish located in the northern suburbs of Cape Town. Visit our page to learn more about this community.
            </p>
            <Link to="/our-lady-rosary" className="mt-3 inline-block px-4 py-2 bg-church-red hover:bg-opacity-90 text-white rounded">
              Learn More
            </Link>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-4 border-t border-gray-700 text-center text-sm">
          <p>© {currentYear} St Joseph's Catholic Church, Goodwood. All rights reserved.</p>
          <p className="mt-2 text-gray-400">
            Part of the Catholic <Link to="https://adct.org.za/" className="block hover:text-church-gold transition-colors mb-1">
              Archdiocese of Cape Town
            </Link> 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;