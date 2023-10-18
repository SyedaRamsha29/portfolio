import "./App.css";
import React from "react";
import About from "./components/about/about.js";
import Skill from "./components/skills/Skill.js";
import Projects from "./components/Projects/Projects.js";
import Contact from "./components/Contact/Contact.js";

const observer = new IntersectionObserver((entries) => {
  console.log("Observer callback:", entries);
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
function App() {
  return (
    <div className="App">
      <About />
      <Skill />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
