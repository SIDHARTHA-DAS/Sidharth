import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemesContext/DarkTheme";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className={`${
        theme === "dark" ? "bg-gray-900 text-gray-300" : "bg-gray-200 text-gray-700 drop-shadow-2xl"
      } py-12`}
    >
      <div className="container mx-auto px-4">
        {/* Footer Top */}
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo / Name */}
          <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
            <Link
              to="/"
              className={`text-3xl font-bold ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              Sidharth Das
            </Link>
            <p
              className={`mt-2 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Sidharth Das | Web Developer
            </p>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
            <div className="flex space-x-4">
              <a
                href="https://github.com/SIDHARTHA-DAS"
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {/* GitHub Icon */}
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12c0 4.418 2.865 8.166 6.839 9.491.5.092.683-.217.683-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.344-3.369-1.344-.454-1.157-1.109-1.466-1.109-1.466-.906-.619.069-.607.069-.607 1.002.07 1.53 1.03 1.53 1.03.89 1.525 2.34 1.085 2.91.83.091-.646.349-1.085.635-1.334-2.22-.254-4.555-1.112-4.555-4.947 0-1.092.39-1.986 1.03-2.685-.104-.253-.446-1.273.098-2.654 0 0 .84-.27 2.75 1.026a9.588 9.588 0 012.5-.337c.849.004 1.703.115 2.5.337 1.91-1.297 2.75-1.026 2.75-1.026.545 1.381.203 2.401.1 2.654.64.699 1.03 1.593 1.03 2.685 0 3.843-2.339 4.69-4.565 4.937.358.309.678.919.678 1.852 0 1.338-.012 2.418-.012 2.745 0 .268.18.579.688.48C19.138 20.163 22 16.418 22 12c0-5.516-4.477-10-10-10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/sidharth-das-70ba1828b/"
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:${
                  theme === "dark" ? "text-blue-700" : "text-blue-600"
                }`}
              >
                {/* LinkedIn Icon */}
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0H5C2.238 0 0 2.238 0 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.762-2.238-5-5-5zM8.46 19H5.497V9h2.963v10zm-1.48-11.255c-.953 0-1.723-.784-1.723-1.75 0-.967.77-1.75 1.724-1.75.952 0 1.722.783 1.722 1.75 0 .966-.77 1.75-1.723 1.75zM20 19h-3.008v-5.155c0-1.242-.023-2.843-1.729-2.843-1.73 0-1.995 1.353-1.995 2.753V19h-3V9h2.88v1.363h.04c.4-.759 1.379-1.56 2.837-1.56 3.032 0 3.592 1.994 3.592 4.586V19z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:${
                  theme === "dark" ? "text-white" : "text-blue-500"
                }`}
              >
                {/* Twitter Icon */}
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M23.643 4.937c-.835.371-1.732.622-2.675.733.962-.576 1.7-1.49 2.048-2.578-.899.533-1.897.922-2.958 1.131-.848-.904-2.053-1.469-3.39-1.469-2.603 0-4.71 2.107-4.71 4.71 0 .37.041.73.121 1.074-3.914-.197-7.387-2.07-9.715-4.917-.406.699-.64 1.51-.64 2.376 0 1.64.835 3.089 2.107 3.94-.775-.025-1.505-.238-2.144-.594v.06c0 2.29 1.627 4.199 3.788 4.633-.396.108-.813.166-1.243.166-.304 0-.6-.03-.89-.085.6 1.87 2.336 3.236 4.397 3.273-1.61 1.262-3.646 2.014-5.856 2.014-.38 0-.755-.022-1.124-.066 2.087 1.34 4.564 2.123 7.229 2.123 8.675 0 13.42-7.186 13.42-13.42 0-.204-.005-.408-.014-.61.92-.663 1.72-1.49 2.35-2.437z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Email, Phone, WhatsApp */}
          <div className="w-full md:w-1/3 text-center md:text-right">
            <p className="mb-2">
              <a
                href="mailto:sidharthadas2849@gmail.com"
                className={`hover:${theme === "dark" ? "text-white" : "text-gray-900"}`}
              >
                sidharthadas2849@gmail.com
              </a>
            </p>
            <p className="mb-2">
              <a
                href="tel:+91 7077091042"
                className={`hover:${theme === "dark" ? "text-white" : "text-gray-900"}`}
              >
                +91 7077091042
              </a>
            </p>
            <p className="mb-2">
              <a
                href="https://wa.me/1234567890"
                className={`hover:${theme === "dark" ? "text-white" : "text-gray-900"}`}
              >
                WhatsApp: +91 7077091042
              </a>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <p className="text-center text-gray-500 text-xl">
          <a href="https://sidhartha-das.github.io/404page/">Try 404 page?</a>
        </p>
        <div
          className={`mt-11 p-11 border-t ${
            theme === "dark" ? "border-gray-700" : "border-gray-300"
          } pt-11 text-center md:text-left`}
        >
          <p
            className={`text-sm ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            } text-center`}
          >
            © {new Date().getFullYear()} Sidharth Das❤️. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-300 py-12">
//       <div className="container mx-auto px-4">
//         {/* Footer Top */}
//         <div className="flex flex-wrap justify-between items-center">
//           {/* Logo / Name */}
//           <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
//             <Link to="/" className="text-3xl font-bold text-white">
//               Sidharth Das
//             </Link>
//             <p className="mt-2 text-gray-400">Sidharth Das | Web Developer</p>
//           </div>

//           {/* Social Media Links */}
//           <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
//             <div className="flex space-x-4">
//               <a
//                 href="https://github.com/SIDHARTHA-DAS"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-white"
//               >
//                 <svg
//                   className="w-6 h-6"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M12 2C6.477 2 2 6.484 2 12c0 4.418 2.865 8.166 6.839 9.491.5.092.683-.217.683-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.344-3.369-1.344-.454-1.157-1.109-1.466-1.109-1.466-.906-.619.069-.607.069-.607 1.002.07 1.53 1.03 1.53 1.03.89 1.525 2.34 1.085 2.91.83.091-.646.349-1.085.635-1.334-2.22-.254-4.555-1.112-4.555-4.947 0-1.092.39-1.986 1.03-2.685-.104-.253-.446-1.273.098-2.654 0 0 .84-.27 2.75 1.026a9.588 9.588 0 012.5-.337c.849.004 1.703.115 2.5.337 1.91-1.297 2.75-1.026 2.75-1.026.545 1.381.203 2.401.1 2.654.64.699 1.03 1.593 1.03 2.685 0 3.843-2.339 4.69-4.565 4.937.358.309.678.919.678 1.852 0 1.338-.012 2.418-.012 2.745 0 .268.18.579.688.48C19.138 20.163 22 16.418 22 12c0-5.516-4.477-10-10-10z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/sidharth-das-70ba1828b/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-blue-700"
//               >
//                 <svg
//                   className="w-6 h-6"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M19 0H5C2.238 0 0 2.238 0 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.762-2.238-5-5-5zM8.46 19H5.497V9h2.963v10zm-1.48-11.255c-.953 0-1.723-.784-1.723-1.75 0-.967.77-1.75 1.724-1.75.952 0 1.722.783 1.722 1.75 0 .966-.77 1.75-1.723 1.75zM20 19h-3.008v-5.155c0-1.242-.023-2.843-1.729-2.843-1.73 0-1.995 1.353-1.995 2.753V19h-3V9h2.88v1.363h.04c.4-.759 1.379-1.56 2.837-1.56 3.032 0 3.592 1.994 3.592 4.586V19z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </a>
//               <a
//                 href="https://twitter.com/yourusername"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-white"
//               >
//                 <svg
//                   className="w-6 h-6"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M23.643 4.937c-.835.371-1.732.622-2.675.733.962-.576 1.7-1.49 2.048-2.578-.899.533-1.897.922-2.958 1.131-.848-.904-2.053-1.469-3.39-1.469-2.603 0-4.71 2.107-4.71 4.71 0 .37.041.73.121 1.074-3.914-.197-7.387-2.07-9.715-4.917-.406.699-.64 1.51-.64 2.376 0 1.64.835 3.089 2.107 3.94-.775-.025-1.505-.238-2.144-.594v.06c0 2.29 1.627 4.199 3.788 4.633-.396.108-.813.166-1.243.166-.304 0-.6-.03-.89-.085.6 1.87 2.336 3.236 4.397 3.273-1.61 1.262-3.646 2.014-5.856 2.014-.38 0-.755-.022-1.124-.066 2.087 1.34 4.564 2.123 7.229 2.123 8.675 0 13.42-7.186 13.42-13.42 0-.204-.005-.408-.014-.61.92-.663 1.72-1.49 2.35-2.437z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </a>
//             </div>
//           </div>

//           {/* Email, Phone, WhatsApp */}
//           <div className="w-full md:w-1/3 text-center md:text-right">
//             <p className="mb-2">
//               <a
//                 href="mailto:sidharthadas2849@gmail.com"
//                 className="hover:text-white"
//               >
//                 sidharthadas2849@gmail.com
//               </a>
//             </p>
//             <p className="mb-2">
//               <a href="tel:+91 7077091042" className="hover:text-white">
//                 +91 7077091042
//               </a>
//             </p>
//             <p className="mb-2">
//               <a href="https://wa.me/1234567890" className="hover:text-white">
//                 WhatsApp: +91 7077091042
//               </a>
//             </p>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <p  className="text-center text-gray-500 text-xl">

//           <a href="https://sidhartha-das.github.io/">Try 404 page?</a>
//         </p>
//         <div className="mt-11 p-11 border-t border-gray-700 pt-11 text-center md:text-left">
//           <p className="text-sm text-gray-400 text-center">
//             © {new Date().getFullYear()} Sidharth Das❤️. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// // https://sidhartha-das.github.io/404page/