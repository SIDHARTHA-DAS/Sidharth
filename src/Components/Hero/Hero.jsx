import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Particles } from "react-tsparticles";
// import { loadFull } from "tsparticles";

const Hero = () => {
  const [showToast, setShowToast] = useState(true);

  const triggerToast = () => {
    toast("Hey Buddy's👋🏻", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setShowToast(false); // Hide the toast after it is triggered
  };

  // Trigger the toast when the component mounts (for demonstration)
  useEffect(() => {
    if (showToast) {
      triggerToast();
    }
  }, [showToast]);

  const particlesInit = async () => {
    // await loadFull(main);
  };

  return (
    <>
      <section className="relative z-0 flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-slate-800 via-teal-900 to-gray-800 dark:text-gray-100 overflow-hidden">
        {/* Particles Background */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: "transparent" },
            fpsLimit: 60,
            particles: {
              number: { value: 100 },
              size: { value: 3 },
              move: { speed: 2, direction: "none", outMode: "bounce" },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              links: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
              },
            },
          }}
          className="absolute inset-0 z-0"
        />

        {/* Floating Shapes */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-indigo-500 opacity-50 rounded-full animate-float" />
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-pink-400 opacity-50 rounded-full animate-float2" />
        <div className="absolute top-20 right-20 w-20 h-20 bg-indigo-400 opacity-50 rounded-full animate-float2" />
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-red-500 opacity-50 rounded-full animate-float2" />
        <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-yellow-300 opacity-50 rounded-full animate-float3" />
        <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-blue-300 opacity-50 rounded-full animate-float3" />

        <div className="container mx-auto px-4 py-28 text-center relative z-10">
          <div className="mb-8">
            <img
              src="pro2.jpg"
              alt="Biography"
              className="w-52 h-62 rounded-xl mx-auto shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hey <span className="animated-hand text-blue-300">👋🏻</span> {`I'm`} <span className="text-blue-300"> Sidharth Das </span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            A passionate developer with expertise in React.js and Tailwind CSS.
          </p>
          <a
            href="https://drive.google.com/file/d/1f-lCWthWmyvpu9cGCJt2gaYewr567fM9/view?usp=drive_link"
            target="_blank"
          >
            <button className="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group">
              Hire me!
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
              <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                Resume
              </span>
            </button>
          </a>

          <div className="mt-12 space-y-8">
            <div className="flex flex-col items-center gap-7 md:flex-row md:gap-4 justify-center m-auto">
              <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold">Years of Experience</h3>
                <p className="text-4xl font-bold mt-2">1+</p>
              </div>
              <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold">Completed Projects</h3>
                <p className="text-4xl font-bold mt-2">15+</p>
              </div>
              <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold">Company Works</h3>
                <p className="text-4xl font-bold mt-2">1+</p>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
              <a
                href="mailto:sidharthdas2898@gmail.com"
                className="text-blue-500 hover:underline"
              >
                sidharthdas2898@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

// import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Hero = () => {
//   const [showToast, setShowToast] = useState(true);

//   const triggerToast = () => {
//     toast("Hey Buddy's👋🏻", {
//       position: "top-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",
//     });
//     setShowToast(false); // Hide the toast after it is triggered
//   };

//   // Trigger the toast when the component mounts (for demonstration)
//   useEffect(() => {
//     if (showToast) {
//       triggerToast();
//     }
//   }, [showToast]);

//   return (
//     <>
//       <section className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-slate-800 via-teal-900 to-gray-800 dark:text-gray-100">
//         <div className="container mx-auto px-4 py-28 text-center">
//           <div className="mb-8">
//             <img
//               src="./public/img/pro2.jpg"
//               alt="Biography"
//               className="w-52 h-62 rounded-xl mx-auto shadow-lg"
//             />
//           </div>
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Hey👋🏻 Im Sidharth Das
//           </h1>
//           <p className="text-lg md:text-xl mb-6">
//             A passionate developer with expertise in React.js and Tailwind CSS.
//           </p>
//           <a
//             href="https://drive.google.com/file/d/1f-lCWthWmyvpu9cGCJt2gaYewr567fM9/view?usp=drive_link"
//             target="_blank"
//           >
//             {/* /* From Uiverse.io by Javierrocadev */}
//             <button className="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer  z-10 group">
//               Hire me !
//               <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
//               <span className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
//               <span className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
//               <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
//                 Resume
//               </span>
//             </button>
//           </a>
//           <div className="mt-12 space-y-8">
//             <div className="flex flex-col items-center gap-7 md:flex-row md:gap-4 justify-center m-auto">
//               <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 text-center">
//                 <h3 className="text-xl font-semibold">Years of Experience</h3>
//                 <p className="text-4xl font-bold mt-2">1+</p>
//               </div>
//               <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 text-center">
//                 <h3 className="text-xl font-semibold">Completed Projects</h3>
//                 <p className="text-4xl font-bold mt-2">15+</p>
//               </div>
//               <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 text-center">
//                 <h3 className="text-xl font-semibold">Company Works</h3>
//                 <p className="text-4xl font-bold mt-2">1+</p>
//               </div>
//             </div>
//             <div className="mt-12">
//               <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
//               <a
//                 href="mailto:sidharthdas2898@gmail.com"
//                 className="text-blue-500 hover:underline"
//               >
//                 sidharthdas2898@gmail.com
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Hero;
