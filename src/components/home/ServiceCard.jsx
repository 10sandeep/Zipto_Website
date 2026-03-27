import { ArrowRight } from "lucide-react";

export default function ServiceCard({
  title,
  subtitle,
  price,
  capacity,
  color,
  icon,
  onClick
}) {

  return (

    // Gradient Border Wrapper
    <div className="group p-[1.5px] rounded-3xl bg-gradient-to-r from-blue-600 to-orange-500 hover:scale-[1.02] transition duration-500">

      {/* Card */}
      <div className="relative bg-white rounded-3xl p-7 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

        {/* Icon */}
        <div
          className={`w-20 h-20 flex items-center justify-center rounded-2xl mb-5 ${color}`}
        >
          <img
            src={icon}
            alt={title}
            className="w-14 h-14 object-contain"
          />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-1">
          {title}
        </h3>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm mb-4">
          {subtitle}
        </p>

        {/* Capacity */}
        <p className="text-sm text-gray-500 mb-4">
          Capacity: <span className="font-medium">{capacity}</span>
        </p>

        {/* Bottom */}
        <div className="flex justify-between items-center">

          <p className="font-semibold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
            Starting at {price}
          </p>

          <button
            onClick={onClick}
            className="flex items-center gap-1 text-sm text-blue-600 hover:translate-x-1 transition"
          >
            View More <ArrowRight size={16} />
          </button>

        </div>

      </div>
    </div>
  );
}