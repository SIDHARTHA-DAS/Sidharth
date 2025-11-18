import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function AchievementsSection() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#0c0f1a] to-[#1a1f2e] text-white py-20 px-4 md:px-10 overflow-hidden">
      {/* Gradient Liquid Blob Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-purple-600 opacity-30 blur-3xl rounded-full"
          animate={{ x: [0, 50, -50, 0], y: [0, -40, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-72 h-72 bg-blue-600 opacity-30 blur-3xl rounded-full"
          animate={{ x: [0, -60, 60, 0], y: [0, 40, -40, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
        />
      </div>

      <h1 className="text-center text-4xl md:text-6xl font-extrabold mb-16 drop-shadow-xl">
        🚀 Achievements
      </h1>

      {/* 3D Flip Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
        {[
          { title: "100+ Projects", desc: "Completed with Passion" },
          { title: "5+ Internships", desc: "Worked with top companies" },
          { title: "3 Years Experience", desc: "Frontend Excellence" },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative group bg-white/10 backdrop-blur-2xl border border-white/20 
                 rounded-3xl shadow-2xl p-8 text-center cursor-pointer 
                 hover:bg-white/20 hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]
                 transition-all duration-500"
          >
            {/* Front Content */}
            <div>
              <h2 className="text-3xl font-bold">{item.title}</h2>
              <p className="mt-3 text-gray-300">{item.desc}</p>
            </div>

            {/* Slide Reveal Content */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              whileHover={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
              className="absolute inset-0 bg-black/100 backdrop-blur-3xl 
                   rounded-3xl p-8 flex flex-col items-center justify-center 
                   text-center border border-white/30 shadow-xl"
            >
              <h2 className="text-2xl font-bold">🔥 Achievement</h2>
              <p className="mt-3 text-gray-100">Well Deserved!</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Apple Vision Pro Style Vertical Timeline */}
      <div className="mt-28 relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-blue-500 -translate-x-1/2" />
        {[
          { year: "2021", text: "Started Web Development Journey" },
          { year: "2022", text: "Mastered React & Tailwind" },
          { year: "2023", text: "Worked with Multiple Companies" },
          { year: "2024", text: "Built Full Stack Projects" },
        ].map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`relative w-full flex ${
              i % 2 === 0 ? "justify-start" : "justify-end"
            } mb-16`}
          >
            <div className="bg-white/10 backdrop-blur-xl px-6 py-4 rounded-xl shadow-lg w-72">
              <h3 className="text-xl font-bold mb-1">{step.year}</h3>
              <p className="text-gray-200">{step.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Rotating Cube Style Projects */}
      <h2 className="text-center text-4xl font-bold mt-24 mb-10">
        🎯 Project Showcase
      </h2>
      <div className="flex justify-center">
        <motion.div
          animate={{ rotateY: [0, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-48 h-48 bg-white/10 backdrop-blur-xl rounded-xl shadow-2xl flex items-center justify-center text-xl font-bold"
        >
          <NavLink to={"/projects"}>Click here</NavLink>
        </motion.div>
      </div>

      {/* Hologram Effect */}
      <h2 className="text-center text-4xl font-bold mt-24 mb-6">
        🛸 Hologram Achievement
      </h2>
      <div className="flex justify-center">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-72 h-40 bg-white/20 backdrop-blur-xl border border-cyan-300/30 shadow-[0_0_30px_#00eaff] text-center p-6 rounded-xl"
        >
          <h3 className="text-2xl font-bold drop-shadow-md">Web Developer</h3>
          <p className="mt-2 text-gray-100">Glowing Achievement Badge</p>
        </motion.div>
      </div>
    </div>
  );
}
