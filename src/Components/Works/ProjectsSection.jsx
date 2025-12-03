import Projects from "./Projects";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { useContext } from "react";
import { ThemeContext } from "../ThemesContext/DarkTheme";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const { theme } = useContext(ThemeContext);

  const projects = [
    { title: "Amazon Clone", image: "firstproject1 .webp", link: "https://amazon-clone-sidharth-das-projects.vercel.app/" },
    { title: "Gym Web", image: "project2.webp", link: "https://gymwebsitesid.netlify.app/" },
    { title: "Portfolio", image: "project3 (2).webp", link: "https://sidharth-das.vercel.app/" },
    { title: "Simple Web", image: "projects4.webp", link: "https://simplexweb.netlify.app/" },
    { title: "Basic Web", image: "projects5.webp", link: "https://example.com" },
    { title: "Congnify Web", image: "projects6.webp", link: "https://example.com" },
    { title: "Resturant Web", image: "projects7.webp", link: "https://star-grilli-sidharth-das-projects.vercel.app/" },
    { title: "Parallax Web", image: "projects8.webp", link: "https://paralex3.netlify.app/" },
    { title: "Travel Web", image: "project9.webp", link: "https://traveler-website-sidharth-das-projects.vercel.app/" },
    { title: "Ice Cream Web", image: "project10.webp", link: "https://cool-ice.vercel.app/" },
    { title: "CodeHub Web", image: "project11.webp", link: "https://codehub-sidharth-das-projects.vercel.app/" },
    { title: "Todo Web", image: "project12.webp", link: "https://todo-react-js-sidharth-das-projects.vercel.app/" },
    { title: "Password Generator", image: "project13.webp", link: "https://passwordgenerator-sidharth-das-projects.vercel.app/" },
    { title: "ShopOne Web", image: "project14.webp", link: "https://shope-one.vercel.app/" },
    { title: "PokeWorld", image: "project15.webp", link: "https://poke-world-sooty.vercel.app/" },
    { title: "BookStore", image: "project16.webp", link: "https://book-buy.vercel.app/" },
    { title: "WorldFlag Web", image: "project17.webp", link: "https://world-flag-mocha.vercel.app/" },
    { title: "CarBuy", image: "Project18.webp", link: "https://car-buy1.vercel.app/" },
    { title: "quickShow", image: "Project19.webp", link: "https://movieshow-sooty.vercel.app/" },
  ];

  return (
    <section className={`py-28 ${theme === "dark" ? "bg-[#0b0f19]" : "bg-gray-200"}`}>
      <div className="container mx-auto px-4">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-5xl font-bold text-center mb-16 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          🚀 My  Projects
        </motion.h2>

        {/* Swiper */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 180,
            modifier: 2.5,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title} className="w-[300px] sm:w-[350px]">

              {/* Project Card with Glass Effect */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className={`backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-xl
                hover:scale-105 hover:shadow-[0_0_20px_rgba(0,200,255,0.5)] 
                transition-all duration-300 cursor-pointer 
                ${theme === "dark" ? "bg-white/5" : "bg-white/40"}`}
              >
                <Projects project={project} />
              </motion.div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectsSection;




// import Projects from "./Projects";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Autoplay } from "swiper/modules";
// import { useContext } from "react";
// import { ThemeContext } from "../ThemesContext/DarkTheme"; // Import ThemeContext

// const ProjectsSection = () => {
//   const { theme } = useContext(ThemeContext); // Access theme from context

//   const projects = [
//     {
//       title: "Amazon Clone",
//       image: "firstproject1 .webp",
//       description: "A brief description of Project Two.",
//       link: "https://amazon-clone-sidharth-das-projects.vercel.app/",
//     },
//     {
//       title: "Gym Web",
//       image: "project2.webp",
//       description: "A brief description of Project One.",
//       link: "https://gymwebsitesid.netlify.app/",
//     },
//     {
//       title: "Portfolio",
//       image: "project3 (2).webp",
//       description: "A brief description of Project Two.",
//       link: "https://sidharth-das.vercel.app/",
//     },
//     {
//       title: "Simple Web",
//       image: "projects4.webp",
//       description: "A brief description of Project Two.",
//       link: "https://simplexweb.netlify.app/",
//     },
//     {
//       title: "Basic Web",
//       image: "projects5.webp",
//       description: "A brief description of Project Two.",
//       link: "https://example.com/project-two",
//     },
//     {
//       title: "Congnify Web",
//       image: "projects6.webp",
//       description: "A brief description of Project Two.",
//       link: "https://example.com/project-two",
//     },
//     {
//       title: "Resturant Web",
//       image: "projects7.webp",
//       description: "A brief description of Project Two.",
//       link: "https://star-grilli-sidharth-das-projects.vercel.app/",
//     },
//     {
//       title: "Parallax Web",
//       image: "projects8.webp",
//       description: "A brief description of Project Two.",
//       link: "https://paralex3.netlify.app/",
//     },
//     {
//       title: "Travel Web",
//       image: "project9.webp",
//       description: "A brief description of Project Two.",
//       link: "https://traveler-website-sidharth-das-projects.vercel.app/",
//     },
//     {
//       title: "Ice Cream Web",
//       image: "project10.webp",
//       description: "A brief description of Project Two.",
//       link: "https://cool-ice.vercel.app/",
//     },
//     {
//       title: "CodeHub web",
//       image: "project11.webp",
//       description: "A brief description of Project Two.",
//       link: "https://codehub-sidharth-das-projects.vercel.app/",
//     },
//     {
//       title: "Todo web",
//       image: "project12.webp",
//       description: "A brief description of Project Two.",
//       link: "https://todo-react-js-sidharth-das-projects.vercel.app/",
//     },
//     {
//       title: "Password Generator web",
//       image: "project13.webp",
//       description: "A brief description of Project Two.",
//       link: "https://passwordgenerator-sidharth-das-projects.vercel.app/",
//     },
//     {
//       title: "ShopOne Web",
//       image: "project14.webp",
//       description: "A brief description of Project Two.",
//       link: "https://shope-one.vercel.app/",
//     },
//     {
//       title: "PokeWorld Web",
//       image: "project15.webp",
//       description: "A brief description of Project Two.",
//       link: "https://poke-world-sooty.vercel.app/",
//     },
//     {
//       title: "BookStore Web",
//       image: "project16.webp",
//       description: "A brief description of Project Two.",
//       link: "https://book-buy.vercel.app//",
//     },
//     {
//       title: "WorldFlag Web",
//       image: "project17.webp",
//       description: "A brief description of Project Two.",
//       link: "https://world-flag-mocha.vercel.app/",
//     },
//   ];

//   return (
//     <section className={`py-28 ${theme === "dark" ? "bg-gray-800" : "bg-gray-400"}`}>
//       <div className="container mx-auto px-4">
//         <h2
//           className={`text-4xl font-bold text-center mb-16 ${
//             theme === "dark" ? "text-white" : "text-gray-800"
//           }`}
//         >
//           Projects💻
//         </h2>

//         <Swiper
//           loop={true}
//           grabCursor={true}
//           spaceBetween={30}
//           centeredSlides={true}
//           autoplay={{
//             delay: 3500,
//             disableOnInteraction: false,
//           }}
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
