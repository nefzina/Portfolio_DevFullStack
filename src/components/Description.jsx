import Pdf from "../assets/AmaniNEFZI_Dev_FullStack_2024.pdf";
import "../sass/description.scss";
import CV from "../assets/cv-icon.png";

export default function Description() {
  const tools = {
    frontend: ["React js", "Angular"],
    backend: [
      "Node js",
      "Expressjs",
      "Java",
      "Spring",
      "Spring boot",
      "Hibernate",
      "Prisma",
    ],
    "data base": ["Mysql"],
    devOps: ["Docker", "CI/CD"],
    test: ["JUnit"],
    versionning: ["Git", "Github"],
    other: ["Python"],
  };

  return (
    <div className="descriptionBg">
      <div className="description">
        <div className="titleWrapper">
          <p className="firstLine">Hi, my name is</p>
          <p className="myName">Amani NEFZI</p>
          <h1 className="title">a Full Stack Web Developer</h1>
        </div>

        {/* 
      status 
      button my work
      contact me
      about me (description + what i know)
      see my resume
*/}
        <p className="myDescription">
          I recently finished my apprenticeship training and i'm looking forward
          to start my next project.
        </p>

        <img
          src={CV}
          alt="curriculum vitae icon"
          onClick={() => window.open(Pdf, "_blank")}
        />
      </div>
    </div>
  );
}
