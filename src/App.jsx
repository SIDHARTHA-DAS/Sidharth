import AchievementList from "./Components/Achievement/AchievementList";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/Navbar/NavBar";
import QualificationSection from "./Components/Qualifications/QualificationSection";
import SkillSection from "./Components/Skills/SkillSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectsSection from "./Components/Works/ProjectsSection";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader/Loader";
import { ThemeProvider } from "./Components/ThemesContext/DarkTheme";



function App() {
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Adjust this delay as per your need
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <ThemeProvider>
          <Router>
            <NavBar />
            <Routes>
              <Route exact path="/" element={<Hero />} />
              <Route path="/skills" element={<SkillSection />} />
              <Route path="/qualification" element={<QualificationSection />} />
              <Route path="/achievement" element={<AchievementList />} />
              <Route path="/projects" element={<ProjectsSection />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </Router>
        </ThemeProvider>
      )}
    </div>
  );
}


export default App;


