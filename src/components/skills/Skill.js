import React from "react";
import "./Skill.css";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import php from "../../assets/php.png";
import cplus from "../../assets/c++.png";
import mysql from "../../assets/mysql.png";

import { useEffect, useRef, useState } from "react";

const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onWindScroll = () => {
      const element = ref.current;
      if (element) {
        const { top } = element.getBoundingClientRect();
        const isVisible = top < window.innerHeight;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", onWindScroll);
    return () => {
      window.removeEventListener("scroll", onWindScroll);
    };
  }, []);

  const classes = `transition-opacity duration-4000 
        ${isVisible ? "opacity-100" : "opacity-0"}`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

const Skill = () => {
  return (
    <div>
      <section className="sec2 sec" id="skills-sec sec2">
        <h1 className="heading">
          My Skills
          <hr />
        </h1>
        <br />
        <div className="sec2-container hidden">
          <div className="lang">
            <img src={html} /> <span>HTML</span>
          </div>
          <div className="lang">
            <img src={css} /> <span>CSS</span>
          </div>
          <div className="lang">
            <img src={js} /> <span>JAVASCRIPT</span>
          </div>
          <div className="lang">
            <img src={react} />
            <span>REACT</span>
          </div>
          <div className="lang">
            <img src={php} />
            <span>PHP</span>
          </div>
          <div className="lang">
            <img src={cplus} />
            <span>C++</span>
          </div>
          <div className="lang">
            <img src={mysql} />
            <span>MYSQL</span>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Skill;
