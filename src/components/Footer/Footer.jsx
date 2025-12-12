import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full mt-20">
      <div
        className="
          bg-white/10 backdrop-blur-xl border-t border-white/20
          shadow-[0_-10px_30px_rgba(0,0,0,0.05)]
        "
      >
        <div className="max-w-6xl mx-auto px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Logo & Description */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">GrowMind</h1>
            <p className="text-gray-700 mt-3 text-sm leading-relaxed">
              A modern space to learn, grow, and improve your mindset, habits, and productivity every day.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="hover:text-black transition">Home</li>
              <li className="hover:text-black transition">Blog</li>
              <li className="hover:text-black transition">Categories</li>
              <li className="hover:text-black transition">About</li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="hover:text-black transition">Productivity</li>
              <li className="hover:text-black transition">Mindset</li>
              <li className="hover:text-black transition">Habits</li>
              <li className="hover:text-black transition">Motivation</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex items-center gap-4">
              <a className="p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition">
                <Instagram />
              </a>
              <a className="p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition">
               <Facebook />
              </a>
              <a className="p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition">
                <Github />
              </a>
              <a className="p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition">
                <Linkedin />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-white/20 py-5">
          <p className="text-center text-gray-700 text-sm">
            © {new Date().getFullYear()} GrowMind — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
