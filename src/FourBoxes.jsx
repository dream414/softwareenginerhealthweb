import React, { useState } from "react";
import { FaStar, FaHeart, FaLightbulb, FaRocket } from "react-icons/fa";

export default function FourBoxes() {
  const [activeBox, setActiveBox] = useState(null);
  

  const boxes = [
    { id: 1, title: "Quality Service", icon: <FaStar size={40} />, content: "We provide services to meet your needs." },
    { id: 2, title: "Customer Care", icon: <FaHeart size={40} />, content: "Our clients are at the heart of everything we do." },
    { id: 3, title: "Innovative Ideas", icon: <FaLightbulb size={40} />, content: "We bring fresh and creative solutions to the table." },
    { id: 4, title: "Fast Delivery", icon: <FaRocket size={40} />, content: "Quick turnaround time without compromising quality." }
  ];

  return (
    <section className="p-9 bg-gray-100  ">
      <div className="flex flex-wrap gap-6 justify-center items-center  max-w-6xl">
        {boxes.map((box) => (
          <div
            key={box.id}
            onClick={() => setActiveBox(box.id)}
            className={`cursor-pointer p-8 rounded-xl shadow-lg text-center w-64 transition-colors duration-300 ${
              activeBox === box.id ? "bg-blue-500 text-white" : "bg-white text-gray-800"
            }`}
          >
            <div className="mb-4 flex justify-center">{box.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{box.title}</h3>
            <p className="text-sm leading-relaxed">{box.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
