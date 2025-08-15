import React from "react";

export default function AboutSection() {
  const items = [
    { id: 1,title: "250",  content: "We have years of experience delivering high-quality services to our clients." },
    { id: 2, title: "365", content: "Our team is dedicated to ensuring customer satisfaction at every step." },
    { id: 3,title: "500",  content: "We continuously innovate to provide the best possible solutions." },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">About Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-white shadow-lg rounded-xl text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <h1 className="text-5xl font-extrabold text-red-500 mb-4">
                {item.title}+
              </h1>
              <p className="text-gray-600">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
