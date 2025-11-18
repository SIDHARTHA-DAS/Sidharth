import { useContext } from "react";
import { ThemeContext } from "../ThemesContext/DarkTheme";
import Qualification from "./Qualification";

const QualificationSection = () => {
  const { theme } = useContext(ThemeContext);

  const education = [
    { degree: "Bachelor of Science in Computer Science", institution: "GIFT - Bhubaneswar", year: "2021 - 2025" },
    { degree: "Mangala +2 Higher Secondary School (CHSE)", institution: "MRC - Nimapada, Puri", year: "2019 - 2021" },
    { degree: "Saraswati Shishu Vidya Mandir (BSE)", institution: "SSVM - Nimapada, Puri", year: "2007 - 2019" },
  ];

  const professionalExperience = [
    { role: "Frontend Developer", company: "GIFT - Bhubaneswar", duration: "2021 - 2025", description:"Built responsive, modern frontend UI with React & Tailwind." },
    { role: "Product Management Engineer", company: "Protrainy Pvt. Ltd", duration: "May 2024 - Aug 2024", description:"Worked on PM workflows, research & UI improvements." },
    { role: "Web Designer", company: "GIFT - Bhubaneswar", duration: "2021 - 2025", description:"Designed clean modern UIs & improved site performance." },
  ];

  return (
    <section
      className={`py-28 transition-all duration-500 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-200 text-black"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl font-extrabold text-center mb-12 ${
            theme === "dark" ? "text-white" : "text-gray-800"
          }`}
        >
          Qualifications 📖
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Qualification title="Education" details={education} />
          <Qualification title="Professional Experience" details={professionalExperience} />
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;
