import inProgress from "../assets/work-in-progress.png";
import "../sass/project.scss";

export default function Project({project}) {
  return (
    <div className="project">
      <div className="details">
        <h2 className="projectTitle">{project.title}</h2>
        <p className="projectDescription">{project.description}</p>
        <h4 className="toolsList">Tools</h4>
        <ul>
          {project.tools?.map((x) => <li key={x}>{x}</li>)}
        </ul>
      </div>

      <div className="overview">
        {!project.image ? (
          <img src={inProgress} alt="work in progress" />
        ) : (
          <img src={project.image} alt={project.title} />
        )}
      </div>
    </div>
  );
}
