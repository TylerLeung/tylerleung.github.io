import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ProjectCardsGroup from "./components/ProjectCards";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
      <main>
        <NavBar />
        <p>
          Hi there! My name is Tyler Leung and I recently graduated from
          Carleton University with a Bachelor's Degree in Software Engineering.
          I am currently looking for employment as a Software Engineer with a
          preference in Back-End Development. I have previously worked at{" "}
          <a
            href="https://www.leonardodrs.com/locations/drs-technologies-canada-ottawa-ontario/"
          >
            Leonardo DRS
          </a>{" "}
          for a year as a Software Engineer during my co-op term.
        </p>
        <ProjectCardsGroup />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;

