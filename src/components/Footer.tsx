import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  LocationOn,
  Instagram,
  Facebook,
  WhatsApp,
} from "@mui/icons-material";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Floral Pattern Overlays */}
      <div className="absolute bottom-0 left-0 w-96 h-96 opacity-10 rotate-180">
        <img
          src="/assets/floral-left.svg"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10 rotate-180">
        <img
          src="/assets/floral-right.svg"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif italic text-white">
              Chetna<span className="text-red-600">'</span>s
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Your trusted destination for premium wholesale Kurtis in Mumbai
            </p>
            <div className="flex space-x-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600 transform hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600 transform hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook />
              </a>
              <a
                href="https://wa.me/919987886371"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-600 transform hover:scale-110 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <WhatsApp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-medium text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-12 h-px bg-red-600"></span>
            </h4>
            <ul className="space-y-4">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-red-600 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-medium text-white relative inline-block">
              Contact Info
              <span className="absolute -bottom-1 left-0 w-12 h-px bg-red-600"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <Phone className="text-gray-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <a
                    href="tel:+919987886371"
                    className="block text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    +91 9987886371
                  </a>
                  <a
                    href="tel:+919930881987"
                    className="block text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    +91 9930881987
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3 group">
                <LocationOn className="text-gray-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <address className="text-gray-400 not-italic">
                  Shop no 4, Gemini apt,
                  <br />
                  Marve Rd, Malad West,
                  <br />
                  Mumbai, Maharashtra 400095
                </address>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="space-y-6">
            <h4 className="text-lg font-medium text-white relative inline-block">
              Business Hours
              <span className="absolute -bottom-1 left-0 w-12 h-px bg-red-600"></span>
            </h4>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <span className="text-white">Monday - Saturday</span>
                <br />
                10:00 AM - 8:00 PM
              </li>
              <li className="text-red-600">Sunday: Closed</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Chetna
            <span className="text-red-600">'</span>s. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
