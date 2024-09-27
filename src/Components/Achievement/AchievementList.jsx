import { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAward, FaTrophy, FaMedal } from 'react-icons/fa'; // Using react-icons for icons
import { ThemeContext } from '../ThemesContext/DarkTheme'; // Import ThemeContext

const achievements = [
  {
    id: '1', // Add unique IDs for layoutId
    title: 'Best Developer Award',
    description: 'Student Ambassador @LetsUpgrade EdTech Pvt. Ltd.',
    icon: <FaAward />,
    click: "click Me",
  },
  {
    id: '2',
    title: 'Top Performer',
    description: 'Intern @Cognifyz.com Web development.',
    icon: <FaTrophy />,
    click: "click Me",
  },
  {
    id: '3',
    title: 'Certified React Developer',
    description: 'Intern @Gulcian Html, Css, Js.',
    icon: <FaMedal />,
    click: "click Me",
  },
  {
    id: '4',
    title: 'Certified React Developer',
    description: 'Intern @IIG VARSITY Bhubaneswar Core Java',
    icon: <FaMedal />,
    click: "click Me",
  },
  {
    id: '5',
    title: 'Certified React Developer',
    description: 'Intern @Protrainy Pvt.Ltd Bhubaneswar Product Management',
    icon: <FaMedal />,
    click: "click Me",
  },
  {
    id: '6',
    title: 'Asia AI Odyssey Challenge',
    description: 'Challenge From Microsoft',
    icon: <FaMedal />,
    click: "click Me"
  },
];

const AchievementList = () => {
  const { theme } = useContext(ThemeContext); // Access theme from ThemeContext
  const [selectedId, setSelectedId] = useState(null); // State for selected achievement
  
  return (
    <div
    className={`min-h-screen py-28 ${
      theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-400 text-black'
      } transition-colors duration-500`}
      >
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl font-bold text-center mb-12 ${
            theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}
          >
          Achievements🏆
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <motion.div
            key={achievement.id}
              layoutId={achievement.id}
              onClick={() => setSelectedId(achievement.id)}
              className="flex flex-col items-center cursor-pointer p-4 h-[300px] bg-gray-900 text-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="text-3xl mb-2">{achievement.icon}</div>
              <h3 className="text-lg font-semibold">{achievement.title}</h3>
              <p className="text-sm text-gray-600">{achievement.description}</p>
              <button className="text-sm text-gray-200 m-11 p-1 border rounded-lg">{achievement.click}</button>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedId && (
          <motion.div
          layoutId={selectedId}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg text-center"
              onClick={(e) => e.stopPropagation()} // Prevent click on inner content from closing
              >
              {achievements.find(item => item.id === selectedId) && (
                <>
                  <h5 className="text-xl font-bold">
                    {achievements.find(item => item.id === selectedId).title}
                  </h5>
                  <p className="text-md text-gray-700">
                    {achievements.find(item => item.id === selectedId).description}
                  </p>
                  <motion.button
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                    onClick={() => setSelectedId(null)}
                  >
                    Close
                  </motion.button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AchievementList;

// import { useContext } from 'react';
              // // import Achievement from './Achievement';
              // import { FaAward, FaTrophy, FaMedal } from 'react-icons/fa'; // Using react-icons for icons
              // import { ThemeContext } from '../ThemesContext/DarkTheme'; // Import ThemeContext
              
              // const achievements = [
              //   {
              //     title: 'Best Developer Award',
              //     description: 'Student Ambassador @LetsUpgrade EdTech Pvt. Ltd.',
              //     icon: <FaAward />,
              //   },
              //   {
                //     title: 'Top Performer',
              //     description: 'Intern @Cognifyz.com Web development.',
              //     icon: <FaTrophy />,
              //   },
              //   {
              //     title: 'Certified React Developer',
              //     description: 'Intern @Gulcian Html, Css, Js.',
              //     icon: <FaMedal />,
              //   },
              //   {
              //     title: 'Certified React Developer',
              //     description: 'Intern @IIG VARSITY Bhubaneswar Core Java',
              //     icon: <FaMedal />,
              //   },
              //   {
              //     title: 'Certified React Developer',
              //     description: 'Intern @Protrainy Pvt.Ltd Bhubaneswar Product Management',
              //     icon: <FaMedal />,
              //   },
              //   {
                //     title: 'Asia AI Odyssey Challenge',
              //     description: 'Challenge From Microsoft',
              //     icon: <FaMedal />,
              //   },
              // ];
              
              // const AchievementList = () => {
              //   const { theme } = useContext(ThemeContext); // Access theme from ThemeContext
              
              //   return (
              //     <div
              //       className={`min-h-screen py-28 ${
              //         theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-400 text-black'
              //       } transition-colors duration-500`}
              //     >
              //       <div className="container mx-auto px-4">
              //         <h2
              //           className={`text-4xl font-bold text-center mb-12 ${
              //             theme === 'dark' ? 'text-white' : 'text-gray-800'
              //           }`}
              //         >
              //           Achievements🏆
              //         </h2>
              //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              //           {achievements.map((achievement, index) => (
              //             <Achievement
              //               key={index}
              //               title={achievement.title}
              //               description={achievement.description}
              //               icon={achievement.icon}
              //               theme={theme} // Pass the theme to each Achievement component if necessary
              //             />
              //           ))}
              //         </div>
              //       </div>
              //     </div>
              //   );
              // };
              
              // export default AchievementList;
              
              
              // // import Achievement from './Achievement';
              // // import { FaAward, FaTrophy, FaMedal } from 'react-icons/fa'; // Using react-icons for icons
              
              // // const achievements = [
              // //   {
              // //     title: 'Best Developer Award',
              // //     description: 'Student Ambassador @LetsUpgrade EdTech Pvt. Ltd.  ',
              // //     icon: <FaAward />,
              // //   },
              // //   {
              // //     title: 'Top Performer',
              // //     description: 'Intern @Cognifyz.com Web development.',
              // //     icon: <FaTrophy />,
              // //   },
              // //   {
              // //     title: 'Certified React Developer',
              // //     description: ' Intern @Gulcian Html,Css,Js .',
              // //     icon: <FaMedal />,
              // //   },
              // //   {
              // //     title: 'Certified React Developer',
              // //     description: 'Intern @IIG  VARSITY Bhubaneswar Core Java',
              // //     icon: <FaMedal />,
              // //   },
              // //   {
              // //     title: 'Certified React Developer',
              // //     description: 'Intern @Protrainy Pvt.Ltd Bhubaneswar Product Management',
              // //     icon: <FaMedal />,
              // //   },
              // //   {
              // //     title: 'Certified React Developer',
              // //     description: 'Asia AI Odyssey Challenge From Microsoft',
              // //     icon: <FaMedal />,
              // //   },
              // // ];
              
              // // const AchievementList = () => {
                // //   return (
              // //     <div className="bg-gray-900 dark:bg-gray-800 min-h-screen py-28">
              // //       <div className="container mx-auto px-4">
              // //         <h2 className="text-4xl font-bold text-center text-white mb-12">
              // //           Achievements🏆
              // //         </h2>
              // //         <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
              // //           {achievements.map((achievement, index) => (
                // //             <Achievement
                // //               key={index}
                // //               title={achievement.title}
                // //               description={achievement.description}
                // //               icon={achievement.icon}
              // //             />
              // //           ))}
              // //         </div>
              // //       </div>
              // //     </div>
              // //   );
              // // };
              
              // // export default AchievementList;