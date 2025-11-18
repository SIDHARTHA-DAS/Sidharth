import { motion } from "framer-motion";

const Projects = ({ project }) => {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      className="block overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 
      backdrop-blur-xl shadow-lg hover:shadow-[0_0_30px_rgba(0,200,255,0.5)] 
      transition-all duration-300"
    >
      <div className="overflow-hidden rounded-xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover rounded-xl 
            hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold text-white tracking-wide">
          {project.title}
        </h3>
      </div>
    </motion.a>
  );
};

export default Projects;




// const Projects = ({ project }) => (
//   <div className="max-w-sm mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-lg">
//     <div className="relative h-48">
//       <img
//         src={project.image}
//         alt={project.title}
//         className="w-full h-full object-cover rounded-t-lg"
//       />
//     </div>
//     <div className="p-4">
//       <h3 className="text-xl text-white font-semibold mb-2">{project.title}</h3>
//       <p className="text-gray-400 mb-4">{project.description}</p>
//       <a
//         href={project.link}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-blue-400 hover:underline"
//       >
//         View Website
//       </a>
//     </div>
//   </div>
// );

// export default Projects;
