import CTAButtons from "./CTAButtons";
import MobileMockup from "./MobileMockup";
import HeroStats from "./HeroStats";
import heroVideo from "../../assets/zipto-hero-video.mp4";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-4 sm:px-6 md:px-16 py-16 md:py-20 overflow-hidden scroll-mt-28"
    >

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40 -z-10 pointer-events-none"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/20 -z-10"></div>

      {/* Animated Background Blobs */}
      <div className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-blue-300 opacity-20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 md:w-72 md:h-72 bg-orange-300 opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16 w-full">

        {/* LEFT CONTENT */}
        <div className="space-y-5 md:space-y-6 px-2 sm:px-4 text-center md:text-left">

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight overflow-hidden">

            <span className="block animate-textReveal bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
              Structured
            </span>

            <span className="block animate-textReveal delay-200 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Hyperlocal Logistics
            </span>

            <span className="block animate-textReveal delay-500 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Infrastructure
            </span>

            <span className="block animate-textReveal delay-700 text-gray-800">
              for Odisha
            </span>

          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl font-medium text-gray-1000 animate-fadeUp delay-200">
            "Delivery Aapki, Trust Humara"
          </p>

          {/* Description */}
          <p className="text-gray-900 max-w-lg text-base sm:text-lg animate-fadeUp delay-300 mx-auto md:mx-0">
            Book bike, auto, mini truck, or pickup deliveries instantly with
            transparent pricing, live tracking, and trusted riders.
          </p>

          {/* Buttons */}
          <div className="pt-2 md:pt-4 animate-fadeUp delay-500">
            <CTAButtons />
            <HeroStats />
          </div>

        </div>

        {/* RIGHT MOBILE UI */}
        <div className="relative flex justify-center animate-float">

          <div className="relative z-10 hover:scale-105 transition duration-500 scale-90 sm:scale-95 md:scale-100">
            <MobileMockup />
          </div>

          {/* Glow */}
          <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-blue-400 to-orange-400 opacity-20 blur-3xl rounded-full animate-pulse"></div>

        </div>

      </div>

      {/* Custom Animations */}
      <style>
        {`

        /* Floating phone animation */
        .animate-float{
          animation: float 5s ease-in-out infinite;
        }

        @keyframes float{
          0%{ transform: translateY(0px); }
          50%{ transform: translateY(-20px); }
          100%{ transform: translateY(0px); }
        }

        /* Fade up animation */
        .animate-fadeUp{
          animation: fadeUp 1s ease forwards;
        }

        @keyframes fadeUp{
          from{
            opacity:0;
            transform: translateY(40px);
          }
          to{
            opacity:1;
            transform: translateY(0);
          }
        }

        /* Blob animation */
        .animate-blob{
          animation: blob 8s infinite;
        }

        @keyframes blob{
          0%{ transform: translate(0px,0px) scale(1); }
          33%{ transform: translate(30px,-50px) scale(1.1); }
          66%{ transform: translate(-20px,20px) scale(0.9); }
          100%{ transform: translate(0px,0px) scale(1); }
        }

        .animation-delay-2000{
          animation-delay:2s;
        }

        /* Hero text animation */
        .animate-textReveal{
          opacity:0;
          transform: translateY(40px);
          filter: blur(5px);
          animation: textReveal 0.8s cubic-bezier(.17,.67,.83,.67) forwards;
        }

        @keyframes textReveal{
          to{
            opacity:1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        /* Delay utilities */
        .delay-200{
          animation-delay:0.2s;
        }

        .delay-500{
          animation-delay:0.5s;
        }

        .delay-700{
          animation-delay:0.7s;
        }

        `}
      </style>

    </section>
  );
}