import {
  Headphones,
  TrendingUp,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";
export default function ForBusinessSection() {
  const [showPopup, setShowPopup] = useState(false);
  const features = [
    {
      title: "Dedicated Support",
      desc: "Priority customer service for your business needs",
      icon: Headphones,
    },
    {
      title: "Scalable Solutions",
      desc: "Grow your delivery capacity as your business expands",
      icon: TrendingUp,
    },
    {
      title: "Same-Day Delivery",
      desc: "Fast turnaround times to keep your customers happy",
      icon: Clock,
    },
    {
      title: "24/7 Availability",
      desc: "Round-the-clock service for your urgent deliveries",
      icon: ShieldCheck,
    },
  ];

  return (
    <>
    <section
      id="for-business"
      className="relative py-20 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden scroll-mt-28"
    >

      {/* Floating Background Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div className="animate-slideLeft">

          <span className="inline-block px-4 py-2 rounded-full bg-blue-200 text-blue-600 font-medium mb-6 animate-fadeIn">
            For Businesses
          </span>

          <h2 className="text-5xl font-bold leading-tight mb-6">
            Reliable Logistics for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Local Businesses
            </span>
          </h2>

          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Power your business with our efficient delivery network. From small
            shops to large enterprises, we provide customized logistics
            solutions that help you serve your customers better.
          </p>

          {/* Features */}
          <div className="space-y-6">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex items-start gap-4 group animate-slideUp"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-orange-500 text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition duration-300">
                    <Icon size={20} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <button
             onClick={() => setShowPopup(true)}
            className="mt-10 px-8 py-4 rounded-full text-white font-semibold bg-gradient-to-r from-blue-600 to-orange-500 shadow-lg hover:scale-105 hover:shadow-xl transition duration-300 animate-pulseSlow">
            Partner With Zipto
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative animate-slideRight">

          {/* Floating Card */}
          <div className="bg-white/60 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/40 animate-floatCard">

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-md hover:scale-105 transition">
                <h3 className="text-3xl font-bold text-blue-600">500+</h3>
                <p className="text-gray-600">Business Partners</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md hover:scale-105 transition">
                <h3 className="text-3xl font-bold text-orange-500">98%</h3>
                <p className="text-gray-600">On-Time Delivery</p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 text-white flex items-center justify-center font-bold">
                  R
                </div>

                <div>
                  <h4 className="font-semibold">Rajesh Kumar</h4>
                  <p className="text-sm text-gray-500">Local Store Owner</p>
                </div>
              </div>

              <p className="text-gray-600 italic">
                "Zipto has transformed how we serve our customers. Fast,
                reliable, and always professional!"
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* Animations */}
      <style>
        {`

        /* Blob animation */
        .animate-blob{
          animation: blob 8s infinite;
        }

        @keyframes blob{
          0%{transform: translate(0px,0px) scale(1);}
          33%{transform: translate(30px,-40px) scale(1.1);}
          66%{transform: translate(-20px,20px) scale(0.9);}
          100%{transform: translate(0px,0px) scale(1);}
        }

        .animation-delay-2000{
          animation-delay:2s;
        }

        /* Slide animations */

        .animate-slideLeft{
          animation: slideLeft 1s ease forwards;
        }

        .animate-slideRight{
          animation: slideRight 1s ease forwards;
        }

        @keyframes slideLeft{
          from{opacity:0; transform:translateX(-60px);}
          to{opacity:1; transform:translateX(0);}
        }

        @keyframes slideRight{
          from{opacity:0; transform:translateX(60px);}
          to{opacity:1; transform:translateX(0);}
        }

        /* Feature animation */
        .animate-slideUp{
          opacity:0;
          animation: slideUp 0.8s ease forwards;
        }

        @keyframes slideUp{
          from{opacity:0; transform:translateY(30px);}
          to{opacity:1; transform:translateY(0);}
        }

        /* Floating card */

        .animate-floatCard{
          animation: floatCard 5s ease-in-out infinite;
        }

        @keyframes floatCard{
          0%{transform:translateY(0);}
          50%{transform:translateY(-12px);}
          100%{transform:translateY(0);}
        }

        /* Button pulse */

        .animate-pulseSlow{
          animation:pulseSlow 3s infinite;
        }

        @keyframes pulseSlow{
          0%{box-shadow:0 0 0 0 rgba(59,130,246,0.5);}
          70%{box-shadow:0 0 0 12px rgba(59,130,246,0);}
          100%{box-shadow:0 0 0 0 rgba(59,130,246,0);}
        }

        `}
      </style>

    </section>
            {/* PARTNER POPUP */}
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
