import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default function ProjectCardGroup() {
  return (
    <Container fluid="lg">
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Col>
          <Card style={{ width: "35rem" }}>
            <Card.Body>
              <Card.Title>Discord Bot</Card.Title>
              <Card.Text>
              This program is a discord bot that I created using Python. The
              program is currently hosted on Google Cloud.
              </Card.Text>
              <Button variant="primary">GitHub Repository</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "35rem" }}>
            <Card.Body>
              <Card.Title>Personal Website</Card.Title>
              <Card.Text>
                This is the website that you are currently browsing! This was made using React and
                React Bootstrap. 
              </Card.Text>
              <Button variant="primary">GitHub Repository</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Col>
          <Card style={{ width: "35rem" }}>
            <Card.Body>
              <Card.Title>Discord Bot</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "35rem" }}>
            <Card.Body>
              <Card.Title>Personal Website</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
