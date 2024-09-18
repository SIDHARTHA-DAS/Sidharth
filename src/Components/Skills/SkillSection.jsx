import { useContext } from "react";
import { ThemeContext } from "../ThemesContext/DarkTheme";
import Skills from "./Skills";

const SkillSection = () => {
  const { theme } = useContext(ThemeContext);

  const skills = [
    { name: 'HTML', image: 'html-1.svg' },
    { name: 'CSS', image: 'css-3.svg' },
    { name: 'JavaScript', image: 'logo-javascript.svg' },
    { name: 'React.js', image: 'react-2.svg' },
    { name: 'Tailwind CSS', image: 'Tailwind_CSS_Logo.svg' },
    { name: 'Git', image: 'git-icon.svg' },
    { name: 'GitHub', image: 'icons8-github (1).svg' },
    { name: 'Figma', image: 'figma-1.svg' },
    { name: 'Sketch', image: 'sketch-2.svg' },
    { name: 'Adobe XD', image: 'adobe-xd-1.svg' },
    { name: 'Photoshop', image: 'adobe-photoshop-2.svg' },
    { name: 'Canva', image: 'Canva_icon_2021.svg' },
    // Add more skills as needed
  ];

  return (
    <section className={`py-28 ${theme === "dark" ? "bg-gray-800" : "bg-gray-400"}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center mb-28 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
          Skills👨‍💻
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 h-[30%] w-[60%] m-auto">
          {skills.map((skill) => (
            <Skills key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;


// import Skills from "./Skills";

// const SkillSection = () => {
//   const skills = [
//     { name: 'HTML', image: './public/img/html-1.svg' },
//     { name: 'CSS', image: './public/img/css-3.svg' },
//     { name: 'JavaScript', image: './public/img/logo-javascript.svg' },
//     { name: 'React.js', image: './public/img/react-2.svg' },
//     { name: 'Tailwind CSS', image: './public/img/Tailwind_CSS_Logo.svg' },
//     { name: 'Git', image: './public/img/git-icon.svg' },
//     { name: 'GitHub', image: './public/img/icons8-github (1).svg' },
//     { name: 'Figma', image: './public/img/figma-1.svg' },
//     { name: 'Sketch', image: './public/img/sketch-2.svg' },
//     { name: 'Adobe XD', image: './public/img/adobe-xd-1.svg' },
//     { name: 'Photoshope', image: './public/img/adobe-photoshop-2.svg' },
//     { name: 'Canva', image: './public/img/Canva_icon_2021.svg' },
//     // Add more skills as needed
//   ];
//   return (
//     <section className="py-28 bg-gray-800">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-28 text-white">Skills👨‍💻</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 h-[30%] w-[60%] m-auto">
//           {skills.map((skill) => (
//             <Skills key={skill.name} skill={skill} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SkillSection;