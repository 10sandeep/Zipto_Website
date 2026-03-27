import { Download } from "lucide-react";
import { useState } from "react";
export default function CTASection() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-500 to-orange-600"></div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] [background-size:22px_22px]"></div>

      {/* Glow Effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        
        {/* Icon Circle */}
        <div className="mx-auto mb-8 w-20 h-20 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center shadow-xl">
          <Download size={36} />
        </div>

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Building Odisha's Most Trusted Logistics Network
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12">
  Join thousands of businesses and individuals who trust Zipto for seamless delivery services.
</p>

        {/* CTA Button */}
        <button
           onClick={() => setShowPopup(true)}
          className="px-10 py-5 rounded-full bg-white text-blue-600 font-semibold text-lg shadow-2xl hover:scale-105 transition duration-300">
          Partner With Zipto
        </button>

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

      </div>
    </section>
  );
}
