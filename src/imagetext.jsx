import React from "react";

export default function AboutWithImage() {
  return (
    <section id="about" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        
        {/* Left Side - Image */}
        <div className="md:w-1/2">
          <img
            src="/girl.jpg"
            alt="About"
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </div>

        {/* Right Side - Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">About Our Company</h2>
          <p className="text-gray-600 mb-6">
            We are dedicated to delivering top-quality services to our clients,
            ensuring satisfaction and building trust through every project we take on.
          </p>
          <button className="bg-red-400 hover:bg-red-600 text-white px-6 py-2 rounded-lg cursor-pointer transition duration-300">
            Read More
          </button>
        </div>

      </div>
    </section>
  );
}
