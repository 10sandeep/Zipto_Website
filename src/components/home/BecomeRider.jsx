import riderImg from "../../assets/Rider.png";
import { useState } from "react";
import { FaMoneyBillWave, FaClock, FaMotorcycle, FaUsers } from "react-icons/fa";

export default function BecomeRider() {
  const [showPopup, setShowPopup] = useState(false);

  const benefits = [
    {
      icon: <FaMoneyBillWave className="text-blue-600 text-xl" />,
      title: "High Earnings",
      desc: "Earn upto ₹60k/month",
    },
    {
      icon: <FaClock className="text-orange-600 text-xl" />,
      title: "Flexible Hours",
      desc: "Work anytime",
    },
    {
      icon: <FaMotorcycle className="text-blue-600 text-xl" />,
      title: "Easy Delivery",
      desc: "Short distance orders",
    },
    {
      icon: <FaUsers className="text-orange-600 text-xl" />,
      title: "Growing Community",
      desc: "500+ riders",
    },
  ];

  return (
    <section
      id="rider"
      className="relative py-14 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden scroll-mt-28"
    >
      {/* Background Blobs */}
      <div className="absolute -top-32 -left-32 w-64 h-64 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-orange-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">

        {/* LEFT IMAGE */}
        <div className="relative animate-slideLeft">
          <img
            src={riderImg}
            alt="Zipto Rider"
            className="rounded-3xl shadow-2xl animate-float w-full object-cover"
          />

          {/* Floating Card */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white shadow-xl rounded-2xl px-4 py-3 sm:px-6 sm:py-4 flex items-center gap-3 sm:gap-4 animate-floatCard">
            <div className="bg-gradient-to-r from-blue-600 to-orange-600 text-white p-2 sm:p-3 rounded-xl">
              <FaMoneyBillWave size={18} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold">₹60,000</h3>
              <p className="text-gray-500 text-xs sm:text-sm">Avg Monthly Earning</p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="animate-slideRight text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-orange-600 text-transparent bg-clip-text">
            Become a Zipto Rider
          </h2>

          <p className="text-gray-600 text-base sm:text-lg mb-6 md:mb-8">
            Become part of our growing delivery network and earn more with flexible hours and exciting weekly bonuses.
          </p>

          {/* BENEFITS */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8 md:mb-10">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-4 sm:p-5 flex gap-3 sm:gap-4 items-center hover:scale-110 hover:shadow-xl transition duration-300 animate-slideUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {item.icon}
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <button
            onClick={() => setShowPopup(true)}
            className="bg-gradient-to-r from-blue-600 to-orange-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:scale-105 transition animate-pulseSlow"
          >
            Join as Rider
          </button>

          <p className="text-sm text-gray-500 mt-4">
            *Terms & conditions apply
          </p>
        </div>
      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="w-full max-w-[320px] rounded-2xl p-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 shadow-2xl">
            <div className="bg-white rounded-2xl p-6 text-center">
              <h2 className="text-xl font-bold bg-gradient-to-r from-blue-700 to-orange-600 text-transparent bg-clip-text mb-2">
                Coming Soon 🚀
              </h2>
              <p className="text-gray-600 mb-5">
                Our app is not available yet. Stay tuned!
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="w-full py-2 rounded-lg text-white font-medium bg-gradient-to-r from-blue-700 to-orange-600 hover:opacity-90 transition"
              >
                Got it 👍
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>
        {`
        .animate-float{ animation: float 5s ease-in-out infinite; }
        @keyframes float{
          0%{transform:translateY(0)}
          50%{transform:translateY(-20px)}
          100%{transform:translateY(0)}
        }

        .animate-floatCard{ animation: floatCard 4s ease-in-out infinite; }
        @keyframes floatCard{
          0%{transform:translateY(0)}
          50%{transform:translateY(-10px)}
          100%{transform:translateY(0)}
        }

        .animate-blob{ animation: blob 8s infinite; }
        @keyframes blob{
          0%{transform:translate(0,0) scale(1)}
          33%{transform:translate(30px,-40px) scale(1.1)}
          66%{transform:translate(-20px,20px) scale(0.9)}
          100%{transform:translate(0,0) scale(1)}
        }

        .animation-delay-2000{ animation-delay:2s; }

        .animate-slideLeft{ animation: slideLeft 1s ease forwards; }
        .animate-slideRight{ animation: slideRight 1s ease forwards; }

        @keyframes slideLeft{
          from{opacity:0; transform:translateX(-60px)}
          to{opacity:1; transform:translateX(0)}
        }

        @keyframes slideRight{
          from{opacity:0; transform:translateX(60px)}
          to{opacity:1; transform:translateX(0)}
        }

        .animate-slideUp{
          opacity:0;
          animation: slideUp 0.8s ease forwards;
        }

        @keyframes slideUp{
          from{opacity:0; transform:translateY(30px)}
          to{opacity:1; transform:translateY(0)}
        }

        .animate-pulseSlow{
          animation:pulseSlow 3s infinite;
        }

        @keyframes pulseSlow{
          0%{box-shadow:0 0 0 0 rgba(59,130,246,0.6)}
          70%{box-shadow:0 0 0 12px rgba(59,130,246,0)}
          100%{box-shadow:0 0 0 0 rgba(59,130,246,0)}
        }
        `}
      </style>
    </section>
  );
}