import React from "react";
import { motion } from "framer-motion";

export default function ResponsiveHomeHero() {
  return (
    <section id="home"
      className="relative w-vw h-auto flex items-center bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/home.jpg')" }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="
z-10 container mx-auto px-6 py-24 leading-tight text-center">
        <motion.h1
          initial={{ opacity: 0, y: 380 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white font-extrabold text-3xl sm:text-4xl md:text-6xl"
        >
   Building the Future, One Line of Code at a Time.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 , y: 380}}
          animate={{ opacity: 1 , y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-white/90 sm:text-lg md:text-xl"
        >
        Crafting Scalable, Smart, and Seamless Software,Engineering Ideas into Reality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 380}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 flex gap-3 justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#get-started"
            className="inline-block rounded-2xl px-6 py-3 text-sm font-semibold bg-white text-gray-900 shadow-md   hover:shadow-lg transition"

          >
            Get Started
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#learn-more"
            className="inline-block rounded-2xl px-6 py-3 text-sm font-semibold border border-white/40 text-white bg-white/10 hover:bg-white/20 transition"
          >
            Learn More
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 680 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-white text-sm sm:text-base"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga placeat alias perspiciatis autem ducimus, explicabo, necessitatibus minus, ut ullam nihil exercitationem iusto! Quos quibusdam ipsa accusantium, dolorem ducimus placeat maxime praesentium amet rem atque, provident labore incidunt ullam possimus rerum nemo molestias adipisci pariatur...
        </motion.div>
      </div>
    </section>
  );
}
