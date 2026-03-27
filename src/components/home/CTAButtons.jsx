import { useState } from "react";
import { FaDownload, FaUser } from "react-icons/fa";

export default function CTAButtons() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        
        {/* Download App Button */}
        <button
          onClick={() => setShowPopup(true)}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-700 to-orange-700 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          <FaDownload />
          Download App
        </button>

        {/* Become a Rider Button */}
        <button
           onClick={() => setShowPopup(true)}
          className="flex items-center justify-center gap-2 border-2 border-blue-800 text-blue-900 px-6 py-3 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer">
          <FaUser />
          Become a Rider
        </button>
      </div>

      {/* 🌈 Gradient Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          
          <div className="w-[320px] rounded-2xl p-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 shadow-2xl">
            
            {/* Inner Card */}
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
    </>
  );
}
