import React from "react";
import "./About.css";
import Navbar from "../Navbar/Navbar";
import pic from "../../assets/ram6edit.png";
import resume from "../../assets/Syeda_Ramsha_resume.pdf";
import { Typewriter } from "react-simple-typewriter";
const About = () => {
  return (
    <div>
      <div className="sec1-big sec" id="home">
        <section className="sec1">
          <Navbar sticky="top" />
          <div className="main">
            <div className="left">
              <h1 className="sec1-text" id="developer">
                Iam{" "}
                <span className="typewriter">
                  <Typewriter
                    style={{ color: "red", fontWeight: "bold" }}
                    words={["Syeda Ramsha", "a Web Developer."]}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    className="auto-type"
                  />
                </span>
              </h1>
              <h3 className="sec1-text">
                I create impressive websites, focusing on exceptional quality
                and exceeding expectations every time
              </h3>
              <a href={resume} download={resume}>
                <button className="sec1-text sec1-btn">
                  <span>Resume</span>
                  <i className="fas fa-arrow-down download"></i>
                </button>
              </a>
            </div>
            <div className="right">
              <div className="circular">
                <img src={pic} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
