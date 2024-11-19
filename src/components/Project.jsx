import inProgress from "../../public/assets/work-in-progress.png";
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
        {!project.imgName ? (
          <img src={inProgress} alt="work in progress" className="inProgress"/>
        ) : (
          <img src={`/assets/${project.imgName}`} alt={project.title} />
        )}
      </div>
    </div>
  );
}
