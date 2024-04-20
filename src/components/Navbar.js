import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Tyler Leung</Navbar.Brand>
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact Me</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
