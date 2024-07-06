import "./App.css";
import Layout from "./component/Layout/Layout";
import { useTheme } from "./context/ThemeContext";
import About from "./pages/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import TechStack from "./pages/TechStack/TechStack";
import WorkExp from "./pages/WorkExperience/WorkExp";
import ScrollToTop from "react-scroll-to-top";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <Layout />
        <div className="container">
          <About />
          <TechStack />
          <WorkExp />
          <Projects />
          <Education />
          <Contact />
        </div>
        <div className="footer">
          <h4 className="text-center">Made With : © Devesh Singh</h4>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#fff"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
