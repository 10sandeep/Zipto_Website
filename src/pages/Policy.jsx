import {
  FaUserShield,
  FaMoneyBillWave,
  FaTimesCircle,
  FaBan,
  FaMotorcycle,
  FaEnvelope,
} from "react-icons/fa";
import ziptoLogo from "../assets/zipto.jpeg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-orange-500 py-16 px-6">

        <div className="max-w-5xl mx-auto">

          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-3">
              <img src={ziptoLogo} alt="Zipto Logo" className="h-25 w-25 rounded-lg"/>
                <span className="text-3xl font-extrabold text-white tracking-wide">
  Zipto
</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-blue-700 to-orange-600 bg-clip-text text-transparent">
            Zipto Privacy Policies
          </h1>

          <p className="text-center text-gray-800 mb-12">
            Last updated: January 2026
          </p>

          {/* CUSTOMER PRIVACY POLICY */}
          <div className="bg-white shadow-xl rounded-2xl p-10 mb-10">
            <div className="flex items-center gap-3 mb-6">
              <FaUserShield className="text-blue-600 text-xl"/>
              <h2 className="text-2xl font-bold">Customer Privacy Policy</h2>
            </div>

            <h3 className="font-semibold mt-4">Information We Collect</h3>
            <ul className="list-disc ml-6 text-gray-600">
              <li>Name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Pickup and delivery addresses</li>
              <li>Device and location data</li>
              <li>Payment details</li>
            </ul>

            <h3 className="font-semibold mt-6">Use of Information</h3>
            <ul className="list-disc ml-6 text-gray-600">
              <li>Process delivery requests</li>
              <li>Assign delivery partners</li>
              <li>Provide order tracking</li>
              <li>Improve platform services</li>
            </ul>

            <h3 className="font-semibold mt-6">Data Sharing</h3>
            <ul className="list-disc ml-6 text-gray-600">
              <li>Delivery partners</li>
              <li>Payment providers</li>
              <li>Government authorities when legally required</li>
            </ul>

            <p className="mt-4 text-gray-600">
              Zipto does not sell user data to third parties.
            </p>

            <h3 className="font-semibold mt-6">Security</h3>
            <p className="text-gray-600">
              We implement reasonable security measures to protect personal information.
            </p>
          </div>

          {/* REFUND POLICY */}
          <div className="bg-white shadow-xl rounded-2xl p-10 mb-10">
            <div className="flex items-center gap-3 mb-6">
              <FaMoneyBillWave className="text-green-600 text-xl"/>
              <h2 className="text-2xl font-bold">Refund Policy</h2>
            </div>

            <p className="text-gray-600 font-semibold mb-3">
              Refunds may be issued if:
            </p>

            <ul className="list-disc ml-6 text-gray-600">
              <li>Payment deducted but order not created</li>
              <li>Duplicate payment made</li>
              <li>Order cancelled by Zipto for operational reasons</li>
            </ul>

            <p className="text-gray-600 font-semibold mt-6 mb-3">
              Refunds may not be provided if:
            </p>

            <ul className="list-disc ml-6 text-gray-600">
              <li>Incorrect address provided</li>
              <li>Package not ready at pickup</li>
              <li>Order cancelled after pickup</li>
            </ul>

            <p className="mt-4 text-gray-600">
              Approved refunds are processed within <strong>5–7 business days</strong>.
            </p>
          </div>

          {/* CANCELLATION POLICY */}
          <div className="bg-white shadow-xl rounded-2xl p-10 mb-10">
            <div className="flex items-center gap-3 mb-6">
              <FaTimesCircle className="text-red-600 text-xl"/>
              <h2 className="text-2xl font-bold">Cancellation Policy</h2>
            </div>

            <ul className="list-disc ml-6 text-gray-600">
              <li>Orders can be cancelled before delivery partner assignment without charges.</li>
              <li>A cancellation fee may apply after a delivery partner is assigned.</li>
              <li>Orders cannot be cancelled once the package is picked up.</li>
            </ul>

            <p className="mt-4 text-gray-600 font-semibold">
              Zipto may cancel orders if:
            </p>

            <ul className="list-disc ml-6 text-gray-600">
              <li>Prohibited items are detected</li>
              <li>Delivery conditions are unsafe</li>
              <li>Incorrect delivery details are provided</li>
            </ul>
          </div>

          {/* PROHIBITED ITEMS */}
          <div className="bg-white shadow-xl rounded-2xl p-10 mb-10">
            <div className="flex items-center gap-3 mb-6">
              <FaBan className="text-orange-600 text-xl"/>
              <h2 className="text-2xl font-bold">Prohibited Items Policy</h2>
            </div>

            <p className="font-semibold text-gray-700">Illegal Items</p>
            <ul className="list-disc ml-6 text-gray-600">
              <li>Drugs or narcotics</li>
              <li>Weapons or explosives</li>
              <li>Counterfeit products</li>
            </ul>

            <p className="font-semibold mt-4 text-gray-700">Hazardous Materials</p>
            <ul className="list-disc ml-6 text-gray-600">
              <li>Flammable chemicals</li>
              <li>Toxic substances</li>
              <li>Radioactive materials</li>
            </ul>

            <p className="font-semibold mt-4 text-gray-700">Restricted Items</p>
            <ul className="list-disc ml-6 text-gray-600">
              <li>Cash or currency</li>
              <li>Precious jewelry</li>
              <li>Alcohol or restricted products</li>
            </ul>
          </div>

          {/* RIDER POLICIES */}
          <div className="bg-white shadow-xl rounded-2xl p-10">
            <div className="flex items-center gap-3 mb-6">
              <FaMotorcycle className="text-blue-600 text-xl"/>
              <h2 className="text-2xl font-bold">Rider Application Policies</h2>
            </div>

            <p className="font-semibold">Rider Privacy</p>
            <p className="text-gray-600">
              Zipto Rider may collect rider name, phone number, address, vehicle details,
              driving license information, and real-time location data to assign deliveries
              and improve safety.
            </p>

            <p className="font-semibold mt-4">Rider Payment Policy</p>
            <p className="text-gray-600">
              Delivery partners earn through base delivery fees, distance-based
              earnings, and incentives. Platform commissions may apply.
            </p>

            <p className="font-semibold mt-4">Rider Conduct</p>
            <ul className="list-disc ml-6 text-gray-600">
              <li>No tampering with packages</li>
              <li>No misuse of customer information</li>
              <li>No illegal item transportation</li>
              <li>No fraudulent activities</li>
            </ul>
          </div>

          {/* CONTACT */}
          {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-2xl p-8 text-center">

          <FaEnvelope className="text-3xl mx-auto mb-4" />

          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>

          <p className="opacity-90 mb-4">
            If you have questions about this Privacy Policy, contact us.
          </p>

          <p>Email:  supportzipto@gmail.com</p>
          <p>Phone:91+ 9090029996</p>
          <p>Plot No-781, Maharishi College Rd, in front of DN Kingsland, Saheed Nagar, Bhubaneswar, Odisha 751007</p>

        </div>

        <p className="text-center text-gray-800 mt-10 text-sm">
          🛡️ By using Zipto, you acknowledge that you have read this Privacy Policy.
        </p>

      
    

        </div>
      </div>
    </>
  );
}

