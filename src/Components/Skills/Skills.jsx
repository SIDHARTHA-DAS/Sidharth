const Skills = ({ skill }) => {
  return (
    <div className="relative z-0 p-4 text-center flex flex-col items-center cursor-pointer bg-gradient-to-br from-gray-500 to-blue-500 rounded-lg overflow-hidden shadow-lg">
      <div className="absolute inset-0 bg-opacity-30 bg-no-repeat bg-cover" />
      <div className="relative z-10 flex flex-col items-center">
        <img
          src={skill.image}
          alt={skill.name}
          className="w-16 h-16 mb-2 transform transition-transform duration-300 hover:scale-110"
        />
        <h3 className="text-lg font-semibold">{skill.name}</h3>
      </div>
      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
};

export default Skills;
