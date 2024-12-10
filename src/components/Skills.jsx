import "../sass/skills.scss";
import { tools } from "../data/projectsData";

export default function Skills() {
  return (
    <div className="skills-bg">
      <div className="skills-container">
        <h2>Technologies i know</h2>

        <div className="cards">
          <div class="flip-card" key={"1"}>
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <p class="title">Frontend</p>
                <ul>
                  {tools?.frontend.map((element) => (
                    <li>{element}</li>
                  ))}
                </ul>
                <div className="flip">Flip</div>
              </div>
              <div class="flip-card-back">
                <p class="title">Backend</p>
                <ul>
                  {tools?.backend.map((element) => (
                    <li>{element}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div class="flip-card" key={"2"}>
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <p class="title">Database</p>
                <ul>
                  {tools?.database.map((element) => (
                    <li>{element}</li>
                  ))}
                </ul>

                <p class="title">ORM</p>
                <ul>
                  {tools?.ORM.map((element) => (
                    <li>{element}</li>
                  ))}
                </ul>
                <div className="flip">Flip</div>
              </div>
              <div class="flip-card-back">
                <p class="title">DevOps</p>
                <ul>
                  {tools?.devOps.map((element) => (
                    <li>{element}</li>
                  ))}
                </ul>
                <p class="title">Test</p>
                <ul>
                  {tools?.test.map((element) => (
                    <li>{element}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div class="flip-card" key={"3"}>
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <p class="title">Versioning</p>
                <ul>
                  {tools?.versionning.map((element) => (
                    <li>{element}</li>
                  ))}
                </ul>
                <p class="title">Other</p>
                <ul>
                  {tools?.other.map((element) => (
                    <li>{element}</li>
                  ))}
                </ul>
                <div className="flip">Flip</div>

              </div>
              <div class="flip-card-back">
                <p class="title">Want to know more</p>
                <button className="send">
                  <a
                    className="email-link"
                    href="mailto:amani.nefzip@gmail.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <p>Let's talk</p>
                    <svg
                      width="25px"
                      viewBox="0 -4 32 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                    >
                      <title>mail</title>
                      <desc>Created with Sketch Beta.</desc>
                      <defs></defs>
                      <g
                        id="Page-1"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                        sketch:type="MSPage"
                      >
                        <g
                          id="Icon-Set"
                          sketch:type="MSLayerGroup"
                          transform="translate(-412.000000, -259.000000)"
                          fill="#001520"
                        >
                          <path
                            d="M442,279 C442,279.203 441.961,279.395 441.905,279.578 L433,270 L442,263 L442,279 L442,279 Z M415.556,280.946 L424.58,271.33 L428,273.915 L431.272,271.314 L440.444,280.946 C440.301,280.979 415.699,280.979 415.556,280.946 L415.556,280.946 Z M414,279 L414,263 L423,270 L414.095,279.578 C414.039,279.395 414,279.203 414,279 L414,279 Z M441,261 L428,271 L415,261 L441,261 L441,261 Z M440,259 L416,259 C413.791,259 412,260.791 412,263 L412,279 C412,281.209 413.791,283 416,283 L440,283 C442.209,283 444,281.209 444,279 L444,263 C444,260.791 442.209,259 440,259 L440,259 Z"
                            id="mail"
                            sketch:type="MSShapeGroup"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
