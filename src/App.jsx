import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Language from "./Components/Language/Language";
import Projects from "./Components/Projects/Projects";
import AboutMe from "./Components/About/AboutMe";
// import Contact from "./Components/About/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <br />
      <Home />
      <br />
      <AboutMe />
      <Language />
      <br />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
