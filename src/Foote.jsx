import {
  FaHome,
  FaServicestack,
  FaInfoCircle,
  FaEnvelope,
  FaDumbbell,
  FaRunning,
  FaAppleAlt,
  FaHeartbeat
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="address" className="bg-gray-900 text-white pt-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        
        {/* About Section */}
        <div>
          <h2 className="text-lg font-bold mb-3">About Our Website</h2>
          <p className="text-gray-400 text-sm">
            We provide high-quality services and resources to help you grow your
            business and skills. Our mission is to deliver excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2 hover:text-white">
              <FaHome /> Home
            </li>
            <li className="flex items-center gap-2 hover:text-white">
              <FaServicestack /> Services
            </li>
            <li className="flex items-center gap-2 hover:text-white">
              <FaInfoCircle /> About
            </li>
            <li className="flex items-center gap-2 hover:text-white">
              <FaEnvelope /> Contact
            </li>
          </ul>
        </div>

        {/* Fitness Links */}
        <div>
          <h2 className="text-lg font-bold mb-3">Fitness</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2 hover:text-white">
              <FaDumbbell /> Strength Training
            </li>
            <li className="flex items-center gap-2 hover:text-white">
              <FaRunning /> Cardio Workouts
            </li>
            <li className="flex items-center gap-2 hover:text-white">
              <FaAppleAlt /> Healthy Diet
            </li>
            <li className="flex items-center gap-2 hover:text-white">
              <FaHeartbeat /> Wellness Tips
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h2 className="text-lg font-bold mb-3">Subscribe</h2>
          <p className="text-gray-400 text-sm mb-3">
            Get the latest news and updates right in your inbox.
          </p>
          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
            />
            <button className="bg-blue-600 py-2 rounded hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-gray-700 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} Your Website. All rights reserved.
      </div>
    </footer>
  );
}
