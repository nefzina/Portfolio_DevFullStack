import { projects } from "../data/projectsData";
import Project from "./Project";
import "../sass/projectsSection.scss";
export default function ProjectsSection() {
  return (
    <div className="projectsBg">
      <div className="projectsContainer">
        <h2 className="section">Best work</h2>
        <div className="wrapper">
          {projects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
