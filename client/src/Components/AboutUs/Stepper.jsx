import React from 'react';
import timelineElements from './timelineElements';
import { IoBagHandleOutline } from "react-icons/io5";
import { LuSchool } from "react-icons/lu";
import  './about.css';
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  
  import "react-vertical-timeline-component/style.min.css";
const Stepper = () => {
    let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#f9c74f" };
  return (
    <div style={{background:"#4b4c4d"}}>
    <h1 className="title" style={{color:"#ebedf0",display:"flex", alignItems:"center", justifyContent:"center", padding:"25px"}}>
    Our Journey to become
India's Biggest Student Revolution</h1>
    <VerticalTimeline>
      {timelineElements.map((element) => {
        let isWorkIcon = element.icon === "work";
        let showButton =
          element.buttonText !== undefined &&
          element.buttonText !== null &&
          element.buttonText !== "";

        return (
          <VerticalTimelineElement
            key={element.key}
            date={element.date}
            dateClassName="date"
            iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
            icon={isWorkIcon ? <IoBagHandleOutline />: <LuSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              {element.title}
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
              {element.location}
            </h5>
            <p id="description">{element.description}</p>
            {showButton && (
              <a
                className={`button ${
                  isWorkIcon ? "workButton" : "schoolButton"
                }`}
                href="/"
              >
                {element.buttonText}
              </a>
            )}
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  </div>
  )
}

export default Stepper