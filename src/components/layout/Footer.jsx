import {
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Send,
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
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
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
      <footer className="bg-gradient-to-b from-gray-50 to-white text-gray-600 relative overflow-hidden border-t border-gray-200">
        {/* Top accent line */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-sky-400 to-orange-500" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-gray-200">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={ziptoLogo}
                  alt="Zipto Logo"
                  className="h-14 w-14 rounded-2xl object-cover shadow-lg ring-2 ring-gray-100"
                />
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                  Zipto
                </span>
              </div>

              <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-sm">
                Fast, reliable, and affordable logistics solutions built for
                businesses and individuals across India.
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
                      className="group w-11 h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gradient-to-br hover:from-blue-600 hover:to-orange-500 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3">
              <h4 className="text-gray-900 font-bold text-sm uppercase tracking-wider mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3.5">
                {links.map((link, i) => (
                  <li key={i}>
                    <button
                      onClick={() => handleNavigation(link)}
                      className="group flex items-center gap-2 text-gray-600 hover:text-blue-600 text-base transition-colors duration-200"
                    >
                      <ArrowUpRight
                        size={16}
                        className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                      />
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-5">
              <h4 className="text-gray-900 font-bold text-sm uppercase tracking-wider mb-6">
                Contact Us
              </h4>

              <ul className="space-y-5">
                <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                    <MapPin size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-700 text-sm font-medium mb-1">
                      Our Office
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Plot No-781, Maharishi College Rd, Saheed Nagar,
                      Bhubaneswar, Odisha 751007
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-100 transition-colors">
                    <Phone size={18} className="text-orange-600" />
                  </div>
                  <div>
                    <p className="text-gray-700 text-sm font-medium mb-1">
                      Call Us
                    </p>
                    <a
                      href="tel:+919090029996"
                      className="text-gray-500 text-sm hover:text-orange-600 transition-colors"
                    >
                      +91 9090029996
                    </a>
                    <p className="text-gray-400 text-xs mt-1">
                      Mon-Sat: 10 AM – 7 PM
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                    <Mail size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-700 text-sm font-medium mb-1">
                      Email Us
                    </p>
                    <a
                      href="mailto:supportzipto@gmail.com"
                      className="text-gray-500 text-sm hover:text-blue-600 transition-colors"
                    >
                      supportzipto@gmail.com
                    </a>
                    <p className="text-gray-400 text-xs mt-1">
                      24×7 Email Support
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Zipto. All rights reserved.</p>

            <div className="flex gap-6 text-sm">
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

      {/* Contact Modal */}
      {contactOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl w-full max-w-lg relative shadow-2xl animate-slideUp">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-blue-600 to-orange-500 px-8 py-6 rounded-t-2xl">
              <button
                onClick={() => setContactOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
                aria-label="Close modal"
              >
                <FaTimes size={16} />
              </button>
              <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
              <p className="text-blue-50 text-sm mt-1">
                We'd love to hear from you
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Tell us how we can help you..."
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white font-semibold py-3.5 rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Send size={18} />
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
