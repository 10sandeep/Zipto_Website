import { Star } from "lucide-react";

export default function HeroStats() {
  return (
    <div className="mt-12">
      {/* Divider Line */}
      <div className="border-t border-gray-200 mb-8"></div>

      <div className="flex flex-wrap gap-16">
        
        {/* Deliveries */}
        <div>
          <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-purple-700 bg-clip-text text-transparent">
            10K+
          </h3>
          <p className="text-gray-900 mt-2">Deliveries</p>
        </div>

        {/* Riders */}
        <div>
          <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-purple-700 bg-clip-text text-transparent">
            500+
          </h3>
          <p className="text-gray-900 mt-2">Riders</p>
        </div>

        {/* Rating */}
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-purple-700 bg-clip-text text-transparent">
              4.8
            </h3>
            <Star className="text-purple-700 fill-purple-700 w-8 h-8" />
          </div>
          <p className="text-gray-900 mt-2">Rating</p>
        </div>

      </div>
    </div>
  );
}
