import React from "react";
import "./Menu.css";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GiRainbowStar } from "react-icons/gi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdOutlineCastForEducation } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { PiStackBold } from "react-icons/pi";
import { Link } from "react-scroll";
import { Zoom, Flip } from "react-reveal";

const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className="navbar-profile-pic">
              <img
                src="https://www.bing.com/th?id=OIP.8E92ZiqboR-GqhX-TRX93gHaHb&w=150&h=151&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                alt="profile-pic"
              />
            </div>
          </Zoom>
          <Flip left>
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}>
                    <FaHome size={30} />
                    Home
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}>
                    <FcAbout size={30} />
                    About
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="technology"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}>
                    <PiStackBold size={30} />
                    Technologies
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}>
                    <GiRainbowStar size={30} />
                    Experience
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="project-1"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}>
                    <AiOutlineFundProjectionScreen size={30} />
                    Projects
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="education-1"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}>
                    <MdOutlineCastForEducation size={30} />
                    Education
                  </Link>
                </div>
              </div>

              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="contractDetail"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}>
                    <IoMdContact size={30} />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Flip>
        </>
      ) : (
        // <h1>icons</h1>
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FaHome size={30} title="Home" />
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FcAbout size={30} title="About" />
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <PiStackBold size={30} title="Tech Stack" />
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <GiRainbowStar size={30} title="Experience" />
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <AiOutlineFundProjectionScreen size={30} title="Projects" />
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <MdOutlineCastForEducation size={30} title="Education" />
              </div>
            </div>

            <div className="nav-item">
              <div className="nav-link">
                <IoMdContact size={30} title="contact" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
