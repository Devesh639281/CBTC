import React from "react";
import "./WorkExp.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaReact, FaCircleNodes } from "react-icons/fa6";
import { DiJavascript1 } from "react-icons/di";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="experience">
        <div className="work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience Detail
          </h2>
          <hr />

          <VerticalTimeline lineColor="#138781">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2022 - 2023"
              iconStyle={{ background: "red", color: "#1e1e1e" }}
              contentStyle={{ background: "#138781", color: "#fff" }}
              icon={<FaReact />}>
              <h3 className="vertical-timeline-element-title">
                CETPA Infotech Pvt Ltd.
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Noida Sector-15
              </h4>
              <p>6 Month Internship Complete. </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2022 - 2023"
              iconStyle={{ background: "blue", color: "#fff" }}
              contentStyle={{ background: "#138781", color: "#fff" }}
              icon={<FaCircleNodes />}>
              <h3 className="vertical-timeline-element-title">IBE .net</h3>
              <h4 className="vertical-timeline-element-subtitle">Noida-132</h4>
              <p>2 Month Work Exp.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2016 - 2019"
              iconStyle={{ background: "orange", color: "#fff" }}
              contentStyle={{ background: "#138781", color: "#fff" }}
              icon={<DiJavascript1 />}>
              <h3 className="vertical-timeline-element-title">
                Currently Job Seraching on MERN
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Noida</h4>
              <p>Full Stack Developer With Mern</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
