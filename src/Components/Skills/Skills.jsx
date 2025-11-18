import { motion } from "framer-motion";

const Skills = ({ skill }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.08, y: -8 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="p-6 rounded-2xl backdrop-blur-xl bg-white/10 dark:bg-white/5 
      shadow-lg border border-white/20 hover:border-purple-500/40 
      hover:shadow-purple-500/30 transition-all cursor-pointer
      flex flex-col items-center gap-4 z-0"
    >
      <img
        src={skill.image}
        alt={skill.name}
        className="w-16 h-16 object-contain drop-shadow-xl"
      />

      <h3 className="text-lg font-semibold text-white tracking-wide">
        {skill.name}
      </h3>
    </motion.div>
  );
};

export default Skills;



// import { motion } from 'framer-motion';

// const Skills = ({ skill }) => {
//   return (
//     <motion.div
//     className="relative z-0 p-4 text-center flex flex-col items-center cursor-pointer bg-gradient-to-br from-gray-500 to-blue-500 rounded-lg overflow-hidden shadow-lg"
//       initial={{ y: 0 }}
//       animate={{ y: [0, -10, 0, -5, 0] }} // Bounce effect
//       transition={{
//         duration: 0.5,
//         ease: "easeInOut",
//         loop: Infinity, // Continues bouncing
//         repeatDelay: 1, // Delay before the next bounce starts
//       }}
//       whileHover={{ scale: 1.1 }} // Scale on hover
//     >
//       <div className="absolute inset-0 bg-opacity-30 bg-no-repeat bg-cover" />
//       <div className="relative z-10 flex flex-col items-center">
//         <motion.img
//           src={skill.image}
//           alt={skill.name}
//           className="w-16 h-16 mb-2"
//           initial={{ rotate: 0 }}
//           animate={{ rotate: [0, 10, -10, 0] }} // Slight rotation
//           transition={{
//             duration: 0.5,
//             ease: "easeInOut",
//             repeat: Infinity,
//             repeatDelay: 1, // Delay before the next rotation starts
//           }}
//         />
//         <h3 className="text-lg font-semibold">{skill.name}</h3>
//       </div>
//       <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/10 to-transparent" />
//     </motion.div>
//   );
// };

// export default Skills;


// const Skills = ({ skill }) => {
//   return (
//     <div className="relative z-0 p-4 text-center flex flex-col items-center cursor-pointer bg-gradient-to-br from-gray-500 to-blue-500 rounded-lg overflow-hidden shadow-lg">
//       <div className="absolute inset-0 bg-opacity-30 bg-no-repeat bg-cover" />
//       <div className="relative z-10 flex flex-col items-center">
//         <img
//           src={skill.image}
//           alt={skill.name}
//           className="w-16 h-16 mb-2 transform transition-transform duration-300 hover:scale-110"
//         />
//         <h3 className="text-lg font-semibold">{skill.name}</h3>
//       </div>
//       <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/10 to-transparent" />
//     </div>
//   );
// };

// export default Skills;