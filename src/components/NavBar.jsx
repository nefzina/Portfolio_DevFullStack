import { Link } from "react-scroll";
import "../sass/navBar.scss";
import MenuMobile from "./MenuMobile";

export default function NavBar() {
  return (
    <header>
      <div className="navBarContainer">
        <Link id="logo" to="description" spy smooth duration={500}>
          <span>AMANI</span>NFZ
        </Link>
        <nav>
          <Link
            className="navLink"
            to="projectsContainer"
            spy
            smooth
            duration={500}
          >
            Projects
          </Link>
          <Link className="navLink" to="footer" spy smooth duration={1000}>
            Contact
          </Link>
        </nav>
        <MenuMobile/>
        
      </div>
    </header>
  );
}
