import "./App.scss";
import NavBar from "./components/NavBar";
import Description from "./components/Description";
import Projects from "./components/ProjectsSection";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="home">
      <NavBar />
      <Description />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
