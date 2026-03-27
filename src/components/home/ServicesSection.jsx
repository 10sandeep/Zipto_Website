import ServiceCard from "./ServiceCard";

import { useState } from "react";
import VehiclePopup from "./VehiclePopup";
import bikeIcon from "../../assets/bike.png";
import scootyIcon from "../../assets/scooty.png";
import autoIcon from "../../assets/auto.png";
import pickupIcon from "../../assets/car.png";
import truckIcon from "../../assets/truck.png";
export default function ServicesSection() {

  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const vehicles = [
    {
      title: "Bike Delivery",
      subtitle: "Best for small urgent deliveries",
      capacity: "Up to 20 kg",
      price: "₹35",
      icon: bikeIcon,
      color: "bg-blue-100",
      details: {
        uses: ["Documents", "Food delivery", "Medicines", "Small parcels"],
        benefits: [
          "Fastest delivery option",
          "Easy navigation in traffic",
          "Affordable for short distance"
        ]
      }
    },
    {
      title: "Scooty Delivery",
      subtitle: "Lightweight parcel deliveries",
      capacity: "Up to 20 kg",
      price: "₹40",
      icon: scootyIcon,
      color: "bg-orange-100",
      details: {
        uses: ["Groceries", "E-commerce parcels", "Gift delivery"],
        benefits: [
          "Cost efficient",
          "Reliable for daily deliveries",
          "Quick pickup and drop"
        ]
      }
    },
    {
      title: "Auto Delivery",
      subtitle: "Medium size shipments",
      capacity: "500 –800 kg",
      price: "₹80",
      icon: autoIcon,
      color: "bg-blue-100",
      details: {
        uses: ["Restaurant bulk orders", "Shop deliveries", "Business parcels"],
        benefits: [
          "Higher capacity",
          "Perfect for business logistics",
          "Affordable city transport"
        ]
      }
    },
    {
      title: "Pickup Delivery",
      subtitle: "Bulky goods transport",
      capacity: "1 – 1.5 tonnes",
      price: "₹150",
      icon: pickupIcon,
      color: "bg-orange-100",
      details: {
        uses: ["Furniture", "Electronics", "Marketplace deliveries"],
        benefits: [
          "Large loading space",
          "Ideal for bulky items",
          "Reliable logistics"
        ]
      }
    },
    {
      title: "Mini Truck",
      subtitle: "Heavy bulk shipments",
      capacity: "2 – 2.5 tonnes",
      price: "₹250",
      icon: truckIcon,
      color: "bg-blue-100",
      details: {
        uses: ["Warehouse supply", "Construction materials", "Bulk groceries"],
        benefits: [
          "High load capacity",
          "Perfect for large shipments",
          "Best for B2B logistics"
        ]
      }
    }
  ];

  return (
    <section
      id="Our Delivery Vehicles"
      className="relative py-20 px-6 bg-gradient-to-b from-white to-gray-100 scroll-mt-28"
    >

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          Our{" "}
          <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
            Delivery Vehicles
          </span>
        </h2>

        <p className="text-gray-600 mt-4 text-lg">
          Choose the right vehicle for every delivery — from small parcels to bulk shipments.
        </p>
      </div>

      {/* Cards */}
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8">
        {vehicles.map((vehicle) => (
          <ServiceCard
           key={vehicle.title} 
            {...vehicle}
            onClick={() => setSelectedVehicle(vehicle)}
          />
        ))}
      </div>

      {/* Popup */}
      {selectedVehicle && (
        <VehiclePopup
          vehicle={selectedVehicle}
          close={() => setSelectedVehicle(null)}
        />
      )}

      {/* Bottom Line */}
      <p className="text-center mt-16 text-gray-600 text-lg">
        Zipto’s multi-vehicle network ensures every delivery is matched with the
        right vehicle for speed, efficiency, and affordability.
      </p>

    </section>
  );
}
