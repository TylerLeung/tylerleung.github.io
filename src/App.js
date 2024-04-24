import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ProjectCardsGroup from "./components/ProjectCards";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Card from "react-bootstrap/Card";

function App() {
  return (
    <div className="App">
      <main>
        <Card
          className="mainCard"
          bg="secondary"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "75rem",
          }}
        >
          <Profile />
          <ProjectCardsGroup />
          <Contact />
        </Card>
        <Footer />
      </main>
    </div>
  );
}

export default App;
