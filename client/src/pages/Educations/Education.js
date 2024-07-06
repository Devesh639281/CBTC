import React from "react";
import "./Education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdCastForEducation } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa6";
import { GiDiploma } from "react-icons/gi";
const Education = () => {
  return (
    <>
      <div className="education" id="education-1">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2024"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdCastForEducation />}>
            <h3 className="vertical-timeline-element-title">M.TECH</h3>
            <h4 className="vertical-timeline-element-subtitle">GITM Luknow</h4>
            <p>COMPLETE POST GRADUTION WITH 75%</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - 2022"
            iconStyle={{ background: "blue", color: "#fff" }}
            icon={<FaUserGraduate />}>
            <h3 className="vertical-timeline-element-title">B.TECH</h3>
            <h4 className="vertical-timeline-element-subtitle">
              BIT Gorakhpur
            </h4>
            <p>COMPLETE GRADUTION WITH 74.5%</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016 - 2019"
            iconStyle={{ background: "orange", color: "#fff" }}
            icon={<GiDiploma />}>
            <h3 className="vertical-timeline-element-title">DIPLOMA</h3>
            <h4 className="vertical-timeline-element-subtitle">
              MMIT Siddharth Nagar
            </h4>
            <p>COMPLETE DIPLOMA WITH 75.51%</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
