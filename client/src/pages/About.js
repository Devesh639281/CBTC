import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="container about" id="about">
      <div className="row">
        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
          <img
            src="https://www.bing.com/th?id=OIP.8E92ZiqboR-GqhX-TRX93gHaHb&w=150&h=151&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt="about-section-pic"
          />
        </div>
        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12  about-content">
          <h1>About Me</h1>
          <p>
            I have worked on various MERN Stack projects during 2023-24. My
            first organization-level project was an E-commerce website using
            Context API, where I focused on both backend and frontend
            development but did not work on the design aspect to improve my
            coding and debugging skills. Following this, I developed a Hotel
            Room Booking Website and a Doctor Appointment Booking system, both
            based on the MERN stack. Additionally, I created a portfolio project
            using HTML, CSS, and React. Currently, I am learning the Next.js
            framework to enhance my websites' SEO capabilities, as writing
            SEO-friendly code in React alone can be challenging. You can view my
            projects on my GitHub page. https://github.com/Devesh639281.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
