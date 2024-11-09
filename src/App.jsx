import "./App.scss";
import NavBar from "./components/NavBar";
import Description from "./components/Description";
import Projects from "./components/ProjectsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="home">
      <NavBar />
      <Description />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
