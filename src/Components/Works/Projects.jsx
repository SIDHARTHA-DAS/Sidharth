const Projects = ({ project }) => (
  <div className="max-w-sm mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-lg">
    <div className="relative h-48">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover rounded-t-lg"
      />
    </div>
    <div className="p-4">
      <h3 className="text-xl text-white font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
      >
        View Website
      </a>
    </div>
  </div>
);

export default Projects;
