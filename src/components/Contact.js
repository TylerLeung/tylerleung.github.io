import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function Contact() {
  return (
    <Container>
      <p>
        You can contact me here</p>
        
        <p>

        <Button variant="primary" href="mailto:leung.tyler008@gmail.com">Email </Button>
        <Button variant="primary" href="https://github.com/TylerLeung">GitHub </Button>
        <Button variant="primary" href=""> Resume </Button>
        <Button variant="primary" href="https://www.linkedin.com/in/tyler-leung-2376ba1a0/">LinkedIn</Button>
      </p>
        
    </Container>
  );
}
