import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">About us</h3>
            <p className="text-black text-sm leading-relaxed font-poppins">
              DD Mines is a trusted supplier of high-quality coal, serving industries with reliable sourcing, efficient logistics, and uncompromised quality. We power progress with consistent supply and a customer-first approach.
            </p>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-gray-900 mb-4 font-poppins">Address</h3>
            <p className="text-black text-sm font-poppins">
              Headquarter address goes here
            </p>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Contact Info</h3>
            <div className="space-y-2 mb-6">
              <p className="text-gray-600 text-sm">+91 1234567890</p>
              <p className="text-gray-600 text-sm">+91 1234567890</p>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-poppins font-bold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors duration-200">Home</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors duration-200">Markets</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors duration-200">Benchmarks</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors duration-200">Events</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors duration-200">E Auctions</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors duration-200">Terms of Services</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors duration-200">Refund Policy</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors duration-200">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-black text-sm hover:text-gray-700 transition-colors duration-200 font-poppins">About Us</a></li>
              <li><a href="#" className="text-black text-sm hover:text-gray-700 transition-colors duration-200 font-poppins">Blogs</a></li>
              <li><a href="#" className="text-black text-sm hover:text-gray-700 transition-colors duration-200 font-poppins">MediaKit</a></li>
              <li><a href="#" className="text-black text-sm hover:text-gray-700 transition-colors duration-200 font-poppins">News</a></li>
              <li><a href="#" className="text-black text-sm hover:text-gray-700 transition-colors duration-200 font-poppins">In Media & Events</a></li>
              <li><a href="#" className="text-black text-sm hover:text-gray-700 transition-colors duration-200 font-poppins">Certification</a></li>
              <li><a href="#" className="text-black text-sm hover:text-gray-700 transition-colors duration-200 font-poppins">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Coal Type</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-black text-sm hover:text-gray-700 transition-colors duration-200 font-poppins">Steam Coal</a></li>
              <li><a href="#" className="text-black text-sm hover:text-gray-700 transition-colors duration-200 font-poppins">Cooking Coal</a></li>
              <li><a href="#" className="text-black text-sm hover:text-gray-700 transition-colors duration-200 font-poppins">PET Coke</a></li>
              <li><a href="#" className="text-black text-sm hover:text-gray-700 transition-colors duration-200 font-poppins">Metallurgical Coal</a></li>
              <li><a href="#" className="text-black text-sm hover:text-gray-700 transition-colors duration-200 font-poppins">Bio Coal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Coal Origin</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-black text-sm hover:text-gray-700 transition-colors duration-200 font-poppins">India</a></li>
              <li><a href="#" className="text-black text-sm hover:text-gray-700 transition-colors duration-200 font-poppins">Australia</a></li>
              <li><a href="#" className="text-black text-sm hover:text-gray-700 transition-colors duration-200 font-poppins">USA</a></li>
              <li><a href="#" className="text-black text-sm hover:text-gray-700 transition-colors duration-200 font-poppins">Indonesia</a></li>
              <li><a href="#" className="text-black text-sm hover:text-gray-700 transition-colors duration-200 font-poppins">South Africa</a></li>
              <li><a href="#" className="text-black text-sm hover:text-gray-700 transition-colors duration-200 font-poppins">Columbia</a></li>
              <li><a href="#" className="text-black text-sm hover:text-gray-700 transition-colors duration-200 font-poppins">Russia</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-black text-sm text-center font-poppins">
            © Copyright 2025 Designed by Weecreate
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;