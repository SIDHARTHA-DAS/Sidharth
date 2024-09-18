// components/Loader.js

import { useEffect, useState } from "react";

const Loader = () => {
  const [showMessage, setShowMessage] = useState(true);
  const [showSecondLine, setShowSecondLine] = useState(true);

  // Show welcome message after 2 seconds
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowMessage(true);
    }, 2000);

    // Show the second line after 1 more second
    const timer2 = setTimeout(() => {
      setShowSecondLine(true);
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-700 dark:to-gray-900">
      {/* Animated multi-layer loader */}
      <div className="relative mb-8">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-t-blue-500 border-b-transparent h-32 w-32 animate-spin"></div>
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-t-white border-b-transparent h-24 w-24 animate-spin-slow absolute top-4 left-4"></div>
        <div className="loader ease-linear rounded-full border-2 border-t-2 border-t-pink-500 border-b-transparent h-16 w-16 animate-spin-reverse absolute top-8 left-8"></div>
      </div>

      {/* Welcome message with staggered fade-in */}
      {showMessage && (
        <div className="text-center opacity-0 animate-fadeIn text-2xl font-bold text-white dark:text-gray-300">
          Hi, and Welcome!
        </div>
      )}

      {showSecondLine && (
        <div className="text-center opacity-0 animate-fadeIn text-lg font-medium text-white dark:text-gray-400 mt-2">
          We are preparing something special for you...
        </div>
      )}
    </div>
  );
};

export default Loader;

