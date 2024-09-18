import { useContext } from 'react';
import Achievement from './Achievement';
import { FaAward, FaTrophy, FaMedal } from 'react-icons/fa'; // Using react-icons for icons
import { ThemeContext } from '../ThemesContext/DarkTheme'; // Import ThemeContext

const achievements = [
  {
    title: 'Best Developer Award',
    description: 'Student Ambassador @LetsUpgrade EdTech Pvt. Ltd.',
    icon: <FaAward />,
  },
  {
    title: 'Top Performer',
    description: 'Intern @Cognifyz.com Web development.',
    icon: <FaTrophy />,
  },
  {
    title: 'Certified React Developer',
    description: 'Intern @Gulcian Html, Css, Js.',
    icon: <FaMedal />,
  },
  {
    title: 'Certified React Developer',
    description: 'Intern @IIG VARSITY Bhubaneswar Core Java',
    icon: <FaMedal />,
  },
  {
    title: 'Certified React Developer',
    description: 'Intern @Protrainy Pvt.Ltd Bhubaneswar Product Management',
    icon: <FaMedal />,
  },
  {
    title: 'Asia AI Odyssey Challenge',
    description: 'Challenge From Microsoft',
    icon: <FaMedal />,
  },
];

const AchievementList = () => {
  const { theme } = useContext(ThemeContext); // Access theme from ThemeContext

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
          {achievements.map((achievement, index) => (
            <Achievement
              key={index}
              title={achievement.title}
              description={achievement.description}
              icon={achievement.icon}
              theme={theme} // Pass the theme to each Achievement component if necessary
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementList;


// import Achievement from './Achievement';
// import { FaAward, FaTrophy, FaMedal } from 'react-icons/fa'; // Using react-icons for icons

// const achievements = [
//   {
//     title: 'Best Developer Award',
//     description: 'Student Ambassador @LetsUpgrade EdTech Pvt. Ltd.  ',
//     icon: <FaAward />,
//   },
//   {
//     title: 'Top Performer',
//     description: 'Intern @Cognifyz.com Web development.',
//     icon: <FaTrophy />,
//   },
//   {
//     title: 'Certified React Developer',
//     description: ' Intern @Gulcian Html,Css,Js .',
//     icon: <FaMedal />,
//   },
//   {
//     title: 'Certified React Developer',
//     description: 'Intern @IIG  VARSITY Bhubaneswar Core Java',
//     icon: <FaMedal />,
//   },
//   {
//     title: 'Certified React Developer',
//     description: 'Intern @Protrainy Pvt.Ltd Bhubaneswar Product Management',
//     icon: <FaMedal />,
//   },
//   {
//     title: 'Certified React Developer',
//     description: 'Asia AI Odyssey Challenge From Microsoft',
//     icon: <FaMedal />,
//   },
// ];

// const AchievementList = () => {
//   return (
//     <div className="bg-gray-900 dark:bg-gray-800 min-h-screen py-28">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center text-white mb-12">
//           Achievements🏆
//         </h2>
//         <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {achievements.map((achievement, index) => (
//             <Achievement
//               key={index}
//               title={achievement.title}
//               description={achievement.description}
//               icon={achievement.icon}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AchievementList;
