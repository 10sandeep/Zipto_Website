import {
  FaRocket,
  FaMapMarkerAlt,
  FaTruck,
  FaMotorcycle,
  FaBox,
  FaUsers,
} from "react-icons/fa";
import ziptoLogo from "../assets/zipto.jpeg";
import { useNavigate } from "react-router-dom";
// Import custom vehicle images
import bikeIcon from "../assets/Bike.png";
import scootyIcon from "../assets/Scooter.png";
import autoIcon from "../assets/Auto.png";
import pickupIcon from "../assets/Pickup.png";
import miniTruckIcon from "../assets/Truck.png";
import herovideo from "../assets/About-hero-video.mp4";

import WhyChooseSection from "../components/home/WhyChooseSection";

export default function AboutUs() {
  const navigate = useNavigate();

  const deliveries = [
    {
      icon: bikeIcon,
      title: "Bike Delivery",
      desc: "Suitable for small parcels, documents, medicines, and food deliveries.",
    },
    {
      icon: scootyIcon,
      title: "Scooty Delivery",
      desc: "Ideal for lightweight packages and quick hyperlocal deliveries.",
    },
    {
      icon: autoIcon,
      title: "Auto Delivery",
      desc: "Perfect for medium-sized parcels and business shipments.",
    },
    {
      icon: pickupIcon,
      title: "Pickup Delivery",
      desc: "Designed for larger goods, retail inventory, and commercial deliveries.",
    },
    {
      icon: miniTruckIcon,
      title: "Mini Truck Delivery",
      desc: "Used for bulk shipments, business logistics, and heavy goods transportation.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Back Button */}
      <div className="p-4">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-50 transition"
        >
          ← Back to Home
        </button>
      </div>

      {/* Hero Section */}
      {/* Hero Section with Background Video */}
<div className="relative h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
  {/* Video Background */}
  <video
    autoPlay
    loop
    muted
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source src={herovideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay for better text readability */}
  <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

 {/* Content */}
<div className="relative z-10 px-4 text-center">
  <div className="flex items-center justify-center gap-3 mb-4">
    <img
      src={ziptoLogo}
      alt="Zipto Logo"
      className="h-25 w-25 rounded-lg"
    />
      <span className="text-3xl font-extrabold text-white tracking-wide">
  Zipto
</span>
  </div>

  <h1 className="text-4xl font-bold mb-4">About Zipto</h1>

  <p className="max-w-3xl mx-auto text-lg">
    Zipto is a technology-driven logistics platform built to simplify and
    accelerate last-mile delivery for businesses and individuals.
  </p>
</div>
</div>

      {/* About */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-gray-600 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          In many growing cities, deliveries remain fragmented, slow, and
          unstructured. Businesses struggle with reliable logistics, and
          customers often face unnecessary delays. Zipto solves this challenge
          by building a connected delivery network powered by technology and
          local mobility.
          <br /><br />
          Our platform brings together customers, businesses, and delivery
          partners on a single ecosystem, enabling fast, affordable, and
          reliable movement of goods across the city.
        </p>
      </div>

      {/* Vision */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <FaRocket className="text-4xl text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            To build one of the most trusted and scalable hyperlocal logistics
            networks across India, empowering local businesses, creating
            opportunities for delivery partners, and making city logistics
            smarter and more efficient.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <FaUsers className="text-4xl text-orange-500 mx-auto mb-4" />

          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-8">
            Our mission is to transform the way local logistics works by
            creating a structured delivery network powered by technology.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto text-gray-600">
            <p>• Enable faster and more reliable deliveries for businesses and individuals</p>
            <p>• Support local commerce through efficient logistics infrastructure</p>
            <p>• Create flexible earning opportunities for delivery partners</p>
            <p>• Build a scalable logistics ecosystem that supports growing cities</p>
          </div>
        </div>
      </div>

      {/* What Zipto Does */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <FaBox className="text-4xl text-blue-600 mx-auto mb-4" />

          <h2 className="text-3xl font-bold mb-6">What Zipto Does</h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Zipto connects customers and businesses with delivery partners
            through an intelligent logistics platform designed for speed and
            efficiency.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-10 text-gray-600 text-left max-w-4xl mx-auto">
            <p>• Food , Medicine and grocery deliveries</p>
            <p>• Parcel and document transportation</p>
            <p>• Retail and e-commerce shipments</p>
            <p>• Business inventory and bulk logistics</p>
          </div>
        </div>
      </div>

      {/* Delivery Network */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Our Delivery Network
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {deliveries.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow text-center hover:shadow-lg transition"
              >
                <div className="text-3xl mb-3"><img src={item.icon} alt={item.title} className="mx-auto mb-3 w-12 h-12" /></div>

                <h3 className="font-semibold text-lg mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Building the Future of City Logistics */}
<div className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <h2 className="text-3xl font-bold mb-6">
      Building the Future of City Logistics
    </h2>

    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
      Zipto is more than just a delivery platform. Our goal is to build a
      structured logistics ecosystem that improves efficiency, reduces
      delivery friction, and supports the growth of local commerce.
    </p>

    <p className="text-gray-600 max-w-3xl mx-auto text-lg mt-6 leading-relaxed">
      By combining technology, mobility, and a growing network of delivery
      partners, Zipto is working to create a smarter and more connected
      logistics infrastructure for modern cities.
    </p>

  </div>
</div>

      {/* Journey */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <FaMapMarkerAlt className="text-4xl text-orange-500 mx-auto mb-4" />

          <h2 className="text-3xl font-bold mb-6">Our Journey</h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Zipto is launching its initial operations in the
            <strong> Bhubaneswar – Cuttack corridor</strong>, with a long-term
            vision to expand across Odisha and Eastern India.
            <br /><br />
            As we grow, our focus remains on building a delivery network that
            is fast, reliable, and accessible for everyone.
          </p>
        </div>
      </div>
      <WhyChooseSection />
    </div>
  );
}
