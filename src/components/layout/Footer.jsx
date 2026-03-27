import {
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import ziptoLogo from "../../assets/zipto.jpeg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Footer() {
  const [contactOpen, setContactOpen] = useState(false);

  const links = [
    { name: "Our Delivery Vehicles", id: "Our Delivery Vehicles" },
    { name: "For Business", id: "for-business" },
    { name: "Become a Rider", id: "rider" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavigation = (link) => {
    if (link.name === "Contact") {
      setContactOpen(true);
      return;
    }
    const section = document.getElementById(link.id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent! We'll be in touch soon 🚀", {
      position: "top-right",
      autoClose: 3000,
    });
    setContactOpen(false);
  };

  const socials = [
    {
      icon: Instagram,
      link: "https://www.instagram.com/ridezipto?igsh=ZDNldGp6YjN2YXZx",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/company/zipto-com/",
      label: "LinkedIn",
    },
  ];

  return (
    <>
      <footer className="bg-white text-gray-600 relative overflow-hidden border-t border-gray-100">
        {/* Top gradient border */}
        <div className="h-[3px] w-full bg-gradient-to-r from-blue-600 via-sky-400 to-orange-500" />

        {/* Background glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-50/60 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-16 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-gray-200">

            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <img
                  src={ziptoLogo}
                  alt="Zipto Logo"
                  className="h-12 w-12 rounded-xl object-cover shadow-md"
                />
                <span className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  Zipto
                </span>
              </div>

              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-7 max-w-xs">
                Fast, reliable, and affordable logistics solutions built for
                businesses and individuals.
              </p>

              <div className="flex gap-3">
                {socials.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="group w-10 h-10 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gradient-to-br hover:from-blue-600 hover:to-orange-500 hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <Icon size={17} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-gray-900 font-semibold text-base uppercase tracking-widest mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {links.map((link, i) => (
                  <li key={i}>
                    <button
                      onClick={() => handleNavigation(link)}
                      className="flex items-center gap-1.5 text-gray-500 hover:text-gray-900 text-sm sm:text-base transition"
                    >
                      • {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="sm:col-span-2 lg:col-span-2">
              <h4 className="text-gray-900 font-semibold text-base uppercase tracking-widest mb-6">
                Contact Us
              </h4>

              <ul className="space-y-5">

                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-blue-500 mt-1" />
                  <span className="text-gray-500 text-sm">
                    Plot No-781, Maharishi College Rd, Saheed Nagar,
                    Bhubaneswar, Odisha 751007
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-orange-500" />
                  <a href="tel:+919090029996" className="text-gray-500 text-sm">
                    +91 9090029996 (10 AM – 7 PM)
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-blue-500" />
                  <a
                    href="mailto:supportzipto@gmail.com"
                    className="text-gray-500 text-sm"
                  >
                    supportzipto@gmail.com
                  </a>
                </li>

                <span className="text-xs text-gray-400 ml-7">
                  24×7 Email Support
                </span>

              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-7 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-xs">
            <p>© {new Date().getFullYear()} Zipto. All rights reserved.</p>

            <div className="flex gap-4">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-of-service">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      {contactOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl w-full max-w-md relative">
            <button
              onClick={() => setContactOpen(false)}
              className="absolute top-3 right-3"
            >
              <FaTimes />
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center">
              Get in Touch
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input placeholder="Your Name" required className="border p-2 rounded" />
              <input type="email" placeholder="Your Email" required className="border p-2 rounded" />
              <textarea placeholder="Message" required className="border p-2 rounded" />
              <button className="bg-blue-600 text-white py-2 rounded">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}

      <ToastContainer />
    </>
  );
}