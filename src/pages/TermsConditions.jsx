import React from "react";
import { FaCheckCircle, FaEnvelope, FaMotorcycle } from "react-icons/fa";
import ziptoLogo from "../assets/zipto.jpeg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function TermsConditions() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. Introduction",
      text: `Welcome to Zipto. By downloading, accessing, or using the Zipto application or website, you agree to comply with these Terms & Conditions.`,
    },
    {
      title: "2. Service Description",
      text: `Zipto is a technology platform that connects customers and businesses with independent delivery partners for transporting goods through multiple vehicles including Bike, Scooty, Auto-rickshaw, Pickup, and Mini Truck. Zipto acts only as a technology intermediary facilitating delivery services.`,
    },
    {
      title: "3. User Eligibility",
      text: `Users must be at least 18 years old, provide accurate account information, and use the platform only for lawful purposes.`,
    },
    {
      title: "4. User Responsibilities",
      text: `Users agree to provide accurate pickup and delivery information, ensure items are properly packaged, and avoid sending restricted or illegal items.`,
    },
    {
      title: "5. Payments",
      text: `Delivery charges are displayed before confirming the order. Payments may be made using available payment options within the Zipto platform.`,
    },
    {
      title: "6. Account Suspension",
      text: `Zipto reserves the right to suspend or terminate accounts that violate platform policies or misuse the service.`,
    },
    {
      title: "7. Governing Law",
      text: `These Terms & Conditions are governed by the laws of India.`,
    },
  ];

  const riderSections = [
    {
      title: "1. Rider Eligibility",
      text: `Delivery partners must be at least 18 years old, hold a valid driving license, and provide valid vehicle documents.`,
    },
    {
      title: "2. Rider Responsibilities",
      text: `Delivery partners must deliver packages safely, follow traffic laws, and maintain professional conduct with customers.`,
    },
    {
      title: "3. Independent Service Provider",
      text: `By registering on the Zipto Rider App, delivery partners agree to operate as independent service providers.`,
    },
    {
      title: "4. Rider Account Suspension",
      text: `Zipto may suspend or terminate rider accounts if platform policies are violated.`,
    },
  ];

  return (
    <>
      {/* Back Button */}
      <div className="p-4">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-50 transition"
        >
          ← Back to Home
        </button>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-orange-500 to-blue-500 py-16 px-6">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-3">
            <img
              src={ziptoLogo}
              alt="Zipto Logo"
              className="h-14 w-14 rounded-lg"
            />

             <span className="text-3xl font-extrabold text-white tracking-wide">
  Zipto
</span>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-orange-700 to-blue-600 bg-clip-text text-transparent">
            Terms & Conditions
          </h1>

          <p className="text-gray-800 mt-3">
            Last updated: January 2026
          </p>
        </div>

        {/* CUSTOMER TERMS */}
        <div className="max-w-5xl mx-auto grid gap-6">

          <h2 className="text-2xl font-bold text-center mb-6">
            ZIPTO CUSTOMER APPLICATION
          </h2>

          {sections.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition"
            >
              <div className="flex items-start gap-3">

                <FaCheckCircle className="text-blue-500 mt-1" />

                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-2 leading-relaxed">
                    {item.text}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* RIDER TERMS */}
        <div className="max-w-5xl mx-auto grid gap-6 mt-16">

          <h2 className="text-2xl font-bold text-center flex items-center justify-center gap-2">
             ZIPTO RIDER APPLICATION
          </h2>

          {riderSections.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition"
            >
              <div className="flex items-start gap-3">

                <FaCheckCircle className="text-orange-500 mt-1" />

                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-2 leading-relaxed">
                    {item.text}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-2xl p-8 text-center">

          <FaEnvelope className="text-3xl mx-auto mb-4" />

          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>

          <p className="opacity-90 mb-4">
            If you have questions about this Terms & Conditions, contact us.
          </p>

          <p>Email: supportzipto@gmail.com</p>
          <p>Phone: +91 9090029996</p>
          <p>Plot No-781, Maharishi College Rd, in front of DN Kingsland, Saheed Nagar, Bhubaneswar, Odisha 751007</p>

        </div>

        <p className="text-center text-gray-800 mt-10 text-sm">
          🛡️ By using Zipto, you acknowledge that you have read this Privacy Policy.
        </p>
        

        

      </div>
    </>
  );
}
