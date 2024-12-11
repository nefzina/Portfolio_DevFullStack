import inProgress from "/assets/work-in-progress.png?url";
import "../sass/project.scss";

export default function Project({ project }) {
  return (
    <div className="project">
      <div className="details">
        <h2 className="projectTitle">{project.title}</h2>
        <p className="projectDescription">{project.description}</p>
        <h4 className="toolsList">Tools</h4>
        <ul>
          {project.tools?.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>

        <button className="projectCode" type="button" disabled={!project.link}>
          <a
            className={!project.link ? "disabled" : ""}
            href={project.link}
            // href={project.link ? project.link : "javascript:void(0)"}
            target="_blank"
          >
            Discover
            <svg
              width="25px"
              height="30px"
              viewBox="0 0 24 24"
              id="right-arrow"
              xmlns="http://www.w3.org/2000/svg"
              class="icon line"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  id="primary"
                  d="M3,12H21m-3,3,3-3L18,9"
                  fill="none"
                  // stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                ></path>
              </g>
            </svg>
          </a>
        </button>
      </div>

      <div className="overview">
        {!project.imgName ? (
          <img src={inProgress} alt="work in progress" className="inProgress" />
        ) : (
          <img src={`/assets/${project.imgName}`} alt={project.title} />
        )}
      </div>
    </div>
  );
}
