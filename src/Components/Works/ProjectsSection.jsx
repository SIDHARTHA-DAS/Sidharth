import Projects from "./Projects";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { useContext } from "react";
import { ThemeContext } from "../ThemesContext/DarkTheme"; // Import ThemeContext

const ProjectsSection = () => {
  const { theme } = useContext(ThemeContext); // Access theme from context

  const projects = [
    {
      title: "Amazon Clone",
      image: "firstproject1 .webp",
      description: "A brief description of Project Two.",
      link: "https://amazon-clone-sidharth-das-projects.vercel.app/",
    },
    {
      title: "Gym Web",
      image: "project2.webp",
      description: "A brief description of Project One.",
      link: "https://gymwebsitesid.netlify.app/",
    },
    {
      title: "Portfolio",
      image: "project3 (2).webp",
      description: "A brief description of Project Two.",
      link: "https://sidharth-das.vercel.app/",
    },
    {
      title: "Simple Web",
      image: "projects4.webp",
      description: "A brief description of Project Two.",
      link: "https://simplexweb.netlify.app/",
    },
    {
      title: "Basic Web",
      image: "projects5.webp",
      description: "A brief description of Project Two.",
      link: "https://example.com/project-two",
    },
    {
      title: "Congnify Web",
      image: "projects6.webp",
      description: "A brief description of Project Two.",
      link: "https://example.com/project-two",
    },
    {
      title: "Resturant Web",
      image: "projects7.webp",
      description: "A brief description of Project Two.",
      link: "https://star-grilli-sidharth-das-projects.vercel.app/",
    },
    {
      title: "Parallax Web",
      image: "projects8.webp",
      description: "A brief description of Project Two.",
      link: "https://paralex3.netlify.app/",
    },
    {
      title: "Travel Web",
      image: "project9.webp",
      description: "A brief description of Project Two.",
      link: "https://traveler-website-sidharth-das-projects.vercel.app/",
    },
    {
      title: "Ice Cream Web",
      image: "project10.webp",
      description: "A brief description of Project Two.",
      link: "https://cool-ice.vercel.app/",
    },
    {
      title: "CodeHub web",
      image: "project11.webp",
      description: "A brief description of Project Two.",
      link: "https://codehub-sidharth-das-projects.vercel.app/",
    },
    {
      title: "Todo web",
      image: "project12.webp",
      description: "A brief description of Project Two.",
      link: "https://todo-react-js-sidharth-das-projects.vercel.app/",
    },
    {
      title: "Password Generator web",
      image: "project13.webp",
      description: "A brief description of Project Two.",
      link: "https://passwordgenerator-sidharth-das-projects.vercel.app/",
    },
    {
      title: "ShopOne Web",
      image: "project14.webp",
      description: "A brief description of Project Two.",
      link: "https://shope-one.vercel.app/",
    },
  ];

  return (
    <section className={`py-28 ${theme === "dark" ? "bg-gray-800" : "bg-gray-400"}`}>
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl font-bold text-center mb-16 ${
            theme === "dark" ? "text-white" : "text-gray-800"
          }`}
        >
          Projects💻
        </h2>

        <Swiper
          loop={true}
          grabCursor={true}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title}>
              <Projects project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectsSection;



// import Projects from "./Projects";

// const ProjectsSection = () => {
//   const projects = [
//     {
//       title: "Amazon Clone",
//       image: "./public/img/firstproject1 .webp",
//       description: "A brief description of Project Two.",
//       link: "https://amazon-clone-sidharth-das-projects.vercel.app/",
//     },
//     {
//       title: "Gym Web",
//       image: "./public/img/project2.webp",
//       description: "A brief description of Project One.",
//       link: "https://gymwebsitesid.netlify.app/",
//     },
//     {
//       title: "Portfolio",
//       image: "./public/img/project3 (2).webp",
//       description: "A brief description of Project Two.",
//       link: "https://sidharth-das.vercel.app/",
//     },
//     {
//       title: "Simple Web",
//       image: "./public/img/projects4.webp",
//       description: "A brief description of Project Two.",
//       link: "https://simplexweb.netlify.app/",
//     },
//     {
//       title: "Basic  Web",
//       image: "./public/img/projects5.webp",
//       description: "A brief description of Project Two.",
//       link: "https://example.com/project-two",
//     },
//     {
//       title: "Congnify Web",
//       image: "./public/img/projects6.webp",
//       description: "A brief description of Project Two.",
//       link: "https://example.com/project-two",
//     },
//     {
//       title: "Resturant Web",
//       image: "./public/img/projects7.webp",
//       description: "A brief description of Project Two.",
//       link: "https://star-grilli-sidharth-das-projects.vercel.app/",
//     },
//     {
//       title: "Parallax Web",
//       image: "./public/img/projects8.webp",
//       description: "A brief description of Project Two.",
//       link: "https://paralex3.netlify.app/",
//     },
//     {
//       title: "Travel Web",
//       image: "./public/img/project9.webp",
//       description: "A brief description of Project Two.",
//       link: "https://traveler-website-sidharth-das-projects.vercel.app/",
//     },
//     {
//       title: "Ice Cream Web",
//       image: "./public/img/project10.webp",
//       description: "A brief description of Project Two.",
//       link: "https://cool-ice.vercel.app/",
//     },
//     {
//       title: "CodeHub web",
//       image: "./public/img/project11.webp",
//       description: "A brief description of Project Two.",
//       link: "https://codehub-sidharth-das-projects.vercel.app/",
//     },
//     {
//       title: "Todo web",
//       image: "./public/img/project12.webp",
//       description: "A brief description of Project Two.",
//       link: "https://todo-react-js-sidharth-das-projects.vercel.app/",
//     },
//     {
//       title: "Password Generator web",
//       image: "./public/img/project13.webp",
//       description: "A brief description of Project Two.",
//       link: "https://passwordgenerator-sidharth-das-projects.vercel.app/",
//     },
//     {
//       title: "ShopOne Web",
//       image: "./public/img/project14.webp",
//       description: "A brief description of Project Two.",
//       link: "https://shope-one.vercel.app/",
//     },
//     // Add more projects as needed
//   ];
//   return (
//     <section className="py-28 bg-gray-800">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl text-white font-bold text-center mb-16">Projects💻</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {projects.map((project) => (
//             <Projects key={project.title} project={project} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;

// import Projects from "./Projects";

// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // Import Swiper modules
// import { Autoplay } from "swiper/modules";

// const ProjectsSection = () => {
//   const projects = [
//     {
//       title: "Amazon Clone",
//       image: "./public/img/firstproject1 .webp",
//       description: "A brief description of Project Two.",
//       link: "https://amazon-clone-sidharth-das-projects.vercel.app/",
//     },
//     {
//       title: "Gym Web",
//       image: "./public/img/project2.webp",
//       description: "A brief description of Project One.",
//       link: "https://gymwebsitesid.netlify.app/",
//     },
//     {
//       title: "Portfolio",
//       image: "./public/img/project3 (2).webp",
//       description: "A brief description of Project Two.",
//       link: "https://sidharth-das.vercel.app/",
//     },
//     {
//       title: "Simple Web",
//       image: "./public/img/projects4.webp",
//       description: "A brief description of Project Two.",
//       link: "https://simplexweb.netlify.app/",
//     },
//     {
//       title: "Basic Web",
//       image: "./public/img/projects5.webp",
//       description: "A brief description of Project Two.",
//       link: "https://example.com/project-two",
//     },
//     {
//       title: "Congnify Web",
//       image: "./public/img/projects6.webp",
//       description: "A brief description of Project Two.",
//       link: "https://example.com/project-two",
//     },
//     {
//       title: "Resturant Web",
//       image: "./public/img/projects7.webp",
//       description: "A brief description of Project Two.",
//       link: "https://star-grilli-sidharth-das-projects.vercel.app/",
//     },
//     {
//       title: "Parallax Web",
//       image: "./public/img/projects8.webp",
//       description: "A brief description of Project Two.",
//       link: "https://paralex3.netlify.app/",
//     },
//     {
//       title: "Travel Web",
//       image: "./public/img/project9.webp",
//       description: "A brief description of Project Two.",
//       link: "https://traveler-website-sidharth-das-projects.vercel.app/",
//     },
//     {
//       title: "Ice Cream Web",
//       image: "./public/img/project10.webp",
//       description: "A brief description of Project Two.",
//       link: "https://cool-ice.vercel.app/",
//     },
//     {
//       title: "CodeHub web",
//       image: "./public/img/project11.webp",
//       description: "A brief description of Project Two.",
//       link: "https://codehub-sidharth-das-projects.vercel.app/",
//     },
//     {
//       title: "Todo web",
//       image: "./public/img/project12.webp",
//       description: "A brief description of Project Two.",
//       link: "https://todo-react-js-sidharth-das-projects.vercel.app/",
//     },
//     {
//       title: "Password Generator web",
//       image: "./public/img/project13.webp",
//       description: "A brief description of Project Two.",
//       link: "https://passwordgenerator-sidharth-das-projects.vercel.app/",
//     },
//     {
//       title: "ShopOne Web",
//       image: "./public/img/project14.webp",
//       description: "A brief description of Project Two.",
//       link: "https://shope-one.vercel.app/",
//     },
//   ];

//   return (
//     <section className="py-28 bg-gray-800">
//       <div className="container  mx-auto px-4">
//         <h2 className="text-4xl text-white font-bold text-center mb-16">
//           Projects💻
//         </h2>

//         <Swiper
//           loop={true}
//           grabCursor={true}
//           spaceBetween={30}
//           centeredSlides={true}
//           autoplay={{
//             delay: 1500,
//             disableOnInteraction: false,
//           }}
//           // navigation={true}
//           modules={[Autoplay]}
//           className="mySwiper"
//         >
//           {projects.map((project) => (
//             <SwiperSlide key={project.title}>
//               <Projects project={project} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;
