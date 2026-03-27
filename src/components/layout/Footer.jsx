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

        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-50/60 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-16 pb-10">
          {/* Main grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-gray-200">

            {/* ── Brand ── */}
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

              {/* Social icons */}
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
                      className="group w-10 h-10 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gradient-to-br hover:from-blue-600 hover:to-orange-500 hover:border-transparent hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-200/60"
                    >
                      <Icon size={17} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* ── Quick Links ── */}
            <div>
              <h4 className="text-gray-900 font-semibold text-base uppercase tracking-widest mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {links.map((link, i) => (
                  <li key={i}>
                    <button
                      onClick={() => handleNavigation(link)}
                      className="group flex items-center gap-1.5 text-gray-500 hover:text-gray-900 text-sm sm:text-base transition-colors duration-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 group-hover:bg-orange-400 transition-colors" />
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Contact Info ── */}
            <div className="sm:col-span-2 lg:col-span-2">
              <h4 className="text-gray-900 font-semibold text-base uppercase tracking-widest mb-6">
                Contact Us
              </h4>

              <ul className="space-y-5">
                <li className="flex items-start gap-3 group">
                  <div className="mt-0.5 shrink-0 w-8 h-8 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-200 transition-all">
                    <MapPin size={15} className="text-blue-500" />
                  </div>
                  <span className="text-gray-500 text-sm sm:text-base leading-relaxed">
                    Plot No-781, Maharishi College Rd, in front of DN Kingsland,
                    Saheed Nagar, Bhubaneswar, Odisha 751007
                  </span>
                </li>

                <li className="flex items-center gap-3 group">
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center group-hover:bg-orange-50 group-hover:border-orange-200 transition-all">
                    <Phone size={15} className="text-orange-500" />
                  </div>
                  <a
                    href="tel:+919090029996"
                    className="text-gray-500 hover:text-gray-900 text-sm sm:text-base transition-colors"
                  >
                    +91 9090029996
                  </a>
                </li>

                <li className="flex items-center gap-3 group">
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-200 transition-all">
                    <Mail size={15} className="text-blue-500" />
                  </div>
                  <a
                    href="mailto:ridezipto.com@gmail.com"
                    className="text-gray-500 hover:text-gray-900 text-sm sm:text-base transition-colors break-all"
                  >
                    ridezipto.com@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div className="pt-7 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-xs sm:text-sm">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} Zipto. All rights reserved. Made with
              ❤️ in Bhubaneswar
            </p>

            <div className="flex items-center gap-5 flex-wrap justify-center">
              <Link
                to="/privacy-policy"
                className="hover:text-gray-900 transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                to="/terms-of-service"
                className="hover:text-gray-900 transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Contact Modal ── */}
      {contactOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 p-4"
          onClick={() => setContactOpen(false)}
        >
          <div
            className="relative w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Glow blobs */}
            <div className="absolute -top-8 -left-8 w-36 h-36 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-orange-400/20 rounded-full blur-3xl pointer-events-none" />

            {/* Card */}
            <div className="relative bg-white border border-gray-200 shadow-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-10 animate-popup">
              {/* Close */}
              <button
                onClick={() => setContactOpen(false)}
                aria-label="Close modal"
                className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-black transition-all"
              >
                <FaTimes size={16} />
              </button>

              {/* Header */}
              <div className="text-center mb-7">
                <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-orange-600 text-transparent bg-clip-text">
                  Get in Touch
                </h2>
                <p className="text-gray-500 mt-2 text-sm sm:text-base">
                  We'd love to hear from you 🚀
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="bg-gray-50 border border-gray-200 rounded-xl px-4 sm:px-5 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition placeholder-gray-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="bg-gray-50 border border-gray-200 rounded-xl px-4 sm:px-5 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition placeholder-gray-400"
                />
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  required
                  className="bg-gray-50 border border-gray-200 rounded-xl px-4 sm:px-5 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition resize-none placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="group mt-1 bg-gradient-to-r from-blue-600 to-orange-600 text-white py-3.5 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-orange-300/40 hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Send Message
                  <ArrowUpRight
                    size={17}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .animate-popup {
          animation: popup 0.32s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        @keyframes popup {
          from { transform: scale(0.88) translateY(16px); opacity: 0; }
          to   { transform: scale(1)    translateY(0);    opacity: 1; }
        }
      `}</style>

      <ToastContainer />
    </>
  );
}