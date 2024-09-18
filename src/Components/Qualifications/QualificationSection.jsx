import { useContext } from "react";
import { ThemeContext } from "../ThemesContext/DarkTheme";
import Qualification from "./Qualification";

const QualificationSection = () => {
  const { theme } = useContext(ThemeContext);

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "GIFT - Bhubaneswar",
      year: "2021 - 2025",
    },
    {
      degree: "Mangala +2 Higher Secondary School (CHSE)",
      institution: "MRC - Nimapada, Puri",
      year: "2019 - 2021",
    },
    {
      degree: "Saraswati Shishu Vidya Mandir (BSE)",
      institution: "SSVM - Nimapada, Puri",
      year: "2007 - 2019",
    },
    // Add more education items as needed
  ];

  const professionalExperience = [
    {
      role: "Frontend Developer",
      company: "GIFT - Bhubaneswar",
      duration: "2021 - 2025",
      description:
        "Worked on various frontend projects using React.js and Tailwind CSS, enhancing user interfaces and user experiences.",
    },
    {
      role: "Product Management Engineer",
      company: "Protrainy Pvt. Ltd - Bhubaneswar",
      duration: "May 2024 - Aug 2024",
      description:
        "Worked on various frontend projects using React.js and Tailwind CSS, enhancing user interfaces and user experiences.",
    },
    {
      role: "Web Designer",
      company: "GIFT - Bhubaneswar",
      duration: "2021 - 2025",
      description:
        "Worked on various frontend projects using React.js and Tailwind CSS, enhancing user interfaces and user experiences.",
    },
    // Add more experience items as needed
  ];

  return (
    <section
      className={`py-28 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-400 text-black"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl font-bold text-center mb-8 ${
            theme === "dark" ? "text-white" : "text-gray-800"
          }`}
        >
          Qualifications 📖
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Qualification title="Education" details={education} />
          <Qualification
            title="Professional Experience"
            details={professionalExperience}
          />
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;


// import Qualification from "./Qualification";

// const QualificationSection = () => {
//   const education = [
//     {
//       degree: "Bachelor of Science in Computer Science",
//       institution: "GIFT - Bhubaneswar",
//       year: "2021 - 2025",
//     },
//     {
//       degree: "Mangala +2 heigher secondary school (CHSE)",
//       institution: "MRC - Nimapada , puri",
//       year: "2019 - 2021",
//     },
//     {
//       degree: "Saraswati shishu vidya mandir (BSE)",
//       institution: "SSVM - Nimapada ,puri",
//       year: "2007 - 2019",
//     },
//     // Add more education items as needed
//   ];

//   const professionalExperience = [
//     {
//       role: "Frontend Developer",
//       company: "GIFT - Bhubaneswar",
//       duration: "2021 - 2025",
//       description:
//         "Worked on various frontend projects using React.js and Tailwind CSS, enhancing user interfaces and user experiences.",
//     },
//     {
//       role: "Product Management Engineer",
//       company: "Protrainy Pvt.Ltd - Bhubaneswa",
//       duration: "May 2024 - Aug 2024",
//       description:
//         "Worked on various frontend projects using React.js and Tailwind CSS, enhancing user interfaces and user experiences.",
//     },
//     {
//       role: " Web Designer",
//       company: "GIFT - Bhubaneswar",
//       duration: "2021 - 2025",
//       description:
//         "Worked on various frontend projects using React.js and Tailwind CSS, enhancing user interfaces and user experiences.",
//     },
//     // Add more experience items as needed
//   ];
//   return (
//     <section className="py-28 bg-gray-800">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8 text-white ">Qualifications 📖</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <Qualification title="Education" details={education} />
//           <Qualification
//             title="Professional Experience"
//             details={professionalExperience}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default QualificationSection;
