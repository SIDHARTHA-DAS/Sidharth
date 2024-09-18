import { useContext, useState } from "react";
import { Squash as Hamburger } from "hamburger-react"; // Animated hamburger menu
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { DarkLight, ThemeContext } from "../ThemesContext/DarkTheme";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  // Menu links
  const links = [
    { name: "Home", href: "/" },
    { name: "Skills", href: "/skills" },
    { name: "Qualification", href: "/qualification" },
    { name: "Achievement", href: "/achievement" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      } drop-shadow-2xl fixed w-full z-10 transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className={`text-sm lg:text-l font-bold ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              <button
                className={`button ${
                  theme === "dark"
                    ? "text-white hover:text-gray-400"
                    : "text-gray-800 hover:text-gray-600"
                }`}
                data-text="Awesome"
              >
                <span
                  className={`actual-text ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  }`}
                >
                  &nbsp;Sidharth&nbsp;
                </span>
                <span
                  aria-hidden="true"
                  className={`hover-text ${
                    theme === "dark" ? "text-gray-500" : "text-gray-600"
                  }`}
                >
                  &nbsp;Sidharth&nbsp;
                </span>
              </button>
            </Link>
            {/* Dark/Light Toggle */}
            <div className="flex mx-5">
              <DarkLight />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:ml-[400px]">
            {links.map((link) => (
              <Link
                to={link.href}
                key={link.name}
                className={`px-3 py-2 rounded-md text-xl font-medium transition-all duration-300 ${
                  theme === "dark"
                    ? "text-gray-300 hover:text-gray-500"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <Hamburger
              toggled={isMenuOpen}
              toggle={setIsMenuOpen}
              color={theme === "dark" ? "#ffffff" : "#000000"} // Dynamically change color
              size={24}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={isMenuOpen}
        enter="transition ease-out duration-700 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in duration-500 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div
          className={`${
            theme === "dark" ? "bg-gray-900" : "bg-gray-100"
          } lg:hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                to={link.href}
                key={link.name}
                onClick={toggleMenu} // Close menu after clicking a link
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all ${
                  theme === "dark"
                    ? "text-gray-300 hover:bg-gray-800"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default NavBar;

// import { useContext, useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi"; // Icons from react-icons
// import { Transition } from "@headlessui/react";
// import { Link } from "react-router-dom";
// import { DarkLight, ThemeContext } from "../ThemesContext/DarkTheme";

// const NavBar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { theme } = useContext(ThemeContext);

//   // Menu links
//   const links = [
//     { name: "Home", href: "/" },
//     { name: "Skills", href: "/skills" },
//     { name: "Qualification", href: "/qualification" },
//     { name: "Achievement", href: "/achievement" },
//     { name: "Projects", href: "/projects" },
//     { name: "Contact", href: "/contact" },
//   ];

//   // Toggle mobile menu
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav
//       className={`${
//         theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
//       } drop-shadow-2xl fixed w-full z-10 transition-colors duration-500`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex-shrink-0 flex items-center">
//             <Link
//               to="/"
//               className={`text-sm lg:text-l font-bold ${
//                 theme === "dark" ? "text-white" : "text-gray-800"
//               }`}
//             >
//               <button
//                 className={`button ${
//                   theme === "dark"
//                     ? "text-white hover:text-gray-400"
//                     : "text-gray-800 hover:text-gray-600"
//                 }`}
//                 data-text="Awesome"
//               >
//                 <span
//                   className={`actual-text ${
//                     theme === "dark" ? "text-white" : "text-gray-800"
//                   }`}
//                 >
//                   &nbsp;Sidharth&nbsp;
//                 </span>
//                 <span
//                   aria-hidden="true"
//                   className={`hover-text ${
//                     theme === "dark" ? "text-gray-400" : "text-gray-600"
//                   }`}
//                 >
//                   &nbsp;Sidharth&nbsp;
//                 </span>
//               </button>
//             </Link>
//           </div>

//           {/* Dark/Light Toggle */}
//           <div className="mr-4">
//             <DarkLight />
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex lg:ml-[400px]">
//             {links.map((link) => (
//               <Link
//                 to={link.href}
//                 key={link.name}
//                 className={`px-3 py-2 rounded-md text-xl font-medium transition-all duration-300 ${
//                   theme === "dark"
//                     ? "text-gray-300 hover:text-gray-500"
//                     : "text-gray-700 hover:text-gray-900"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="flex items-center lg:hidden">
//             <button
//               onClick={toggleMenu}
//               className={`p-2 rounded-md ${
//                 theme === "dark" ? "text-gray-300" : "text-gray-700"
//               }`}
//             >
//               {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <Transition
//         show={isMenuOpen}
//         enter="transition ease-out duration-700 transform"
//         enterFrom="-translate-y-full"
//         enterTo="translate-y-0"
//         leave="transition ease-in duration-500 transform"
//         leaveFrom="translate-x-0"
//         leaveTo="-translate-x-full"
//       >
//         <div
//           className={`${
//             theme === "dark" ? "bg-gray-900" : "bg-gray-100"
//           } lg:hidden`}
//         >
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {links.map((link) => (
//               <Link
//                 to={link.href}
//                 key={link.name}
//                 onClick={toggleMenu} // Close menu after clicking a link
//                 className={`block px-3 py-2 rounded-md text-base font-medium transition-all ${
//                   theme === "dark"
//                     ? "text-gray-300 hover:bg-gray-800"
//                     : "text-gray-700 hover:bg-gray-200"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </Transition>
//     </nav>
//   );
// };

// export default NavBar;

// import { useContext, useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi"; // Icons from react-icons
// import { Transition } from "@headlessui/react";
// import { Link } from "react-router-dom";
// import { DarkLight, ThemeContext } from "../ThemesContext/DarkTheme";

// const NavBar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { theme } = useContext(ThemeContext);

//   // Menu links
//   const links = [
//     { name: "Home", href: "/" },
//     { name: "Skills", href: "/skills" },
//     { name: "Qualification", href: "/qualification" },
//     { name: "Achievement", href: "/achievement" },
//     { name: "Projects", href: "/projects" },
//     { name: "Contact", href: "/contact" },
//   ];

//   // Toggle mobile menu
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className={`${theme === "dark" ? "bg-gray-900" : "bg-gray-100"} drop-shadow-2xl fixed w-full z-10`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex-shrink-0 flex items-center">
//             <Link
//               to="/"
//               href="/"
//               className="text-sm  lg:text-l font-bold text-gray-800 dark:text-white"
//             >
//               {/* From Uiverse.io by rraushan1205 */}
//               <button className="button" data-text="Awesome">
//                 <span className="actual-text">&nbsp;Sidharth&nbsp;</span>
//                 <span aria-hidden="true" className="hover-text">
//                   &nbsp;Sidharth&nbsp;
//                 </span>
//               </button>
//             </Link>
//           </div>
//           <div>
//           <DarkLight/>
//           </div>
//           <div className="hidden lg:flex lg:ml-[400px]">
//             {links.map((link) => (
//               <Link
//                 to={link.href}
//                 key={link.name}
//                 href={link.href}
//                 className="dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-500 px-3 py-2 rounded-md text-xl font-medium transition-all duration-300"
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>
//           <div className="flex items-center">
//             {/* Hamburger menu for mobile */}
//             <div className="block lg:hidden ml-4">
//               <button
//                 onClick={toggleMenu}
//                 className="p-2 rounded-md text-gray-700 dark:text-gray-300 "
//               >
//                 {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <Transition
//         show={isMenuOpen}
//         enter="transition ease-out duration-700 transform"
//         enterFrom="-translate-y-full"
//         enterTo="translate-y-0"
//         leave="transition ease-in duration-500 transform"
//         leaveFrom="translate-x-0"
//         leaveTo="-translate-x-full"
//       >
//         <div className="lg:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {links.map((link) => (
//               <Link
//                 to={link.href}
//                 key={link.name}
//                 href={link.href}
//                 onClick={isMenuOpen}
//                 className="block text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:text-gray-800 px-3 py-2 rounded-md text-base font-medium"
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </Transition>
//     </nav>
//   );
// };

// export default NavBar;
