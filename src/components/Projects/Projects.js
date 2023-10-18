import React from "react";
import "./Projects.css";
import { projectData } from "../Data/projectData";

const Projects = () => {
  return (
    <div className="sec3">
      <div>
        <h1 className="heading">
          My Projects
          <hr />
        </h1>
      </div>
      <div className="sec3-container hidden">
        {projectData.map((project, index) => (
          <div className="items" key={index}>
            <img src={project.pic} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div>
              <button>
                View
                <a
                  href={project.weblink}
                  target="_blank"
                  className="fa fa-eye"
                ></a>
              </button>
              <button>
                Code
                <a
                  href={project.gitlink}
                  target="_blank"
                  className="fa fa-github"
                ></a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
