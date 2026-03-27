import { IndianRupee, MapPin, Languages, ShieldCheck } from "lucide-react";

export default function WhyChooseSection() {
  const features = [
    {
      title: "Transparent Pricing",
      description:
        "Know the exact cost upfront. No hidden charges, no surprises.",
      icon: IndianRupee,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Real-Time Tracking",
      description:
        "Track your delivery live on the map from pickup to drop-off.",
      icon: MapPin,
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Odia, Hindi & English Support",
      description:
        "Communicate in your preferred language with our local team.",
      icon: Languages,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Verified Delivery Partners",
      description:
        "All our riders are background-verified and trained professionals.",
      icon: ShieldCheck,
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-white to-gray-100 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Zipto?
            </span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            Fast, reliable, and trustworthy delivery service built for
             everyone
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-2xl text-white mb-6 bg-gradient-to-br ${feature.color} shadow-md`}
                >
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Badge */}
        <div className="mt-20 flex justify-center">
          <div className="flex items-center gap-3 bg-white shadow-md border border-gray-200 px-6 py-3 rounded-full">
            <ShieldCheck className="text-blue-600" size={20} />
            <p className="text-gray-700 font-medium">
              Trusted by 10,000+ users
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
