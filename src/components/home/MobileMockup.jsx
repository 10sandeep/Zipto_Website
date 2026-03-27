import {
  FaMapMarkerAlt,
  FaSignal,
  FaBatteryFull,
  FaArrowRight,
} from "react-icons/fa";

import bikeIcon from "../../assets/bike.png";
import autoIcon from "../../assets/auto.png";

export default function MobileMockup() {
  return (
    <div className="flex justify-center relative">

      {/* Soft Glow */}
      <div className="absolute w-[420px] h-[420px] bg-gradient-to-r from-blue-400 to-orange-400 opacity-20 blur-3xl rounded-full"></div>

      {/* iPhone Frame */}
      <div className="relative w-[320px] h-[600px] bg-black rounded-[55px] shadow-2xl p-[6px]">

        {/* Screen */}
        <div className="relative w-full h-full bg-white rounded-[45px] overflow-hidden">

          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-full"></div>

          {/* Status Bar */}
          <div className="flex justify-between items-center px-6 pt-4 text-xs font-medium text-black">
            <span>9:41</span>
            <div className="flex items-center gap-2 text-sm">
              <FaSignal />
              <FaBatteryFull />
            </div>
          </div>

          {/* App Content */}
          <div className="px-6 pt-10 pb-6">

            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Book Delivery
            </h2>

            {/* Pickup */}
            <div className="backdrop-blur-md bg-gray-100/70 p-4 rounded-2xl shadow-sm mb-4">
              <p className="text-xs text-gray-500 mb-1">Pickup Location</p>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-500" />
                <span className="text-sm text-gray-800">
                  Nearby Railway Station
                </span>
              </div>
            </div>

            {/* Drop */}
            <div className="backdrop-blur-md bg-gray-100/70 p-4 rounded-2xl shadow-sm">
              <p className="text-xs text-gray-500 mb-1">Drop Location</p>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-orange-500" />
                <span className="text-sm text-gray-800">
                  Cuttack Market
                </span>
              </div>
            </div>

            {/* Vehicle Options */}
            <div className="flex gap-4 mt-6">

              {/* Selected */}
              <div className="flex-1 bg-blue-600 text-white p-4 rounded-2xl text-center shadow-md transition-all duration-300 cursor-pointer">
                <img src={bikeIcon} alt="Bike" className="mx-auto mb-2 w-6 h-6" />
                <p className="font-medium">Bike</p>
                <p className="text-xs opacity-80">₹40</p>
              </div>

              {/* Normal */}
              <div className="flex-1 bg-gray-100 p-4 rounded-2xl text-center transition-all duration-300 cursor-pointer">
               <img src={autoIcon} alt="Auto" className="mx-auto mb-2 w-6 h-6" />
                <p className="font-medium text-gray-800">Auto</p>
                <p className="text-xs text-gray-500">₹80</p>
              </div>
            </div>

            {/* Book Button with Arrow Above */}
            <div className="relative mt-8 flex flex-col items-center">

              {/* Arrow Above Button */}
              {/* More Vehicles Box Above Button */}
<div className="w-full bg-white border border-gray-200 rounded-xl shadow flex items-center justify-between px-4 py-2 mb-2 cursor-pointer hover:bg-gray-100 transition">
  <span className="text-gray-600 text-sm font-medium">More Vehicles</span>
  <FaArrowRight className="text-gray-600 text-lg" />
</div>

              {/* Book Now Button */}
              <button className="w-full bg-black text-white py-3 rounded-2xl font-semibold shadow-md active:scale-95 transition-transform duration-150">
                Book Now
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
