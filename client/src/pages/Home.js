import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";
import { IoIosMoon, IoMdSunny } from "react-icons/io";
import Resume from "../assets/docs/resume.pdf";
import { useTheme } from "../context/ThemeContext";
import { Fade } from "react-reveal";
const Home = () => {
  const [theme, setTheme] = useTheme();
  // handleTheme
  const handleTheme = () => {
    setTheme((previousState) => (previousState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <IoIosMoon size={30} />
          ) : (
            <IoMdSunny size={30} />
          )}
        </div>

        <div className="container home-content">
          <Fade right>
            <h2>Hi I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: ["Full Stack Developer!", "Mern Stack Developer!"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>

          <div className="home-buttons">
            <button className="btn btn-hire">Hire Me</button>
            {/* <button className="btn btn-cv">My Resume</button> */}
            <a className="btn btn-cv" href={Resume} download="your_name.pdf">
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
