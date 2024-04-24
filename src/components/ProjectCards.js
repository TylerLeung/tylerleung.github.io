import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default function ProjectCardGroup() {
  return (
    <Container fluid="lg">
      <h2>Projects</h2>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Col style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "30rem",
            }}>
          <Card
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "30rem",
            }}
          >
            <Card.Body>
              <Card.Title>Discord Bot</Card.Title>
              <Card.Text>
                This program is a discord bot that I created using Python. The
                program is planning to be hosted on Google Cloud for maximum
                uptime. The bot allows users to track stats for the NBA and NHL
                currently.
              </Card.Text>
              <Button
                variant="primary"
                href="https://github.com/TylerLeung/TuulerBot"
              >
                GitHub Repository
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "30rem",
            }}>
          <Card
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "30rem",
            }}
          >
            <Card.Body>
              <Card.Title>Personal Website</Card.Title>
              <Card.Text>
                This is the website that you are currently browsing! This was
                made using React and React Bootstrap. This website allows me to
                show you some of my projects as well as some information for you
                to get to know me.
              </Card.Text>
              <Button
                variant="primary"
                href="https://github.com/TylerLeung/tylerleung.github.io/tree/master"
              >
                GitHub Repository
              </Button>
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
        <Col style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "30rem",
            }}>
          <Card
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "30rem",
            }}
          >
            <Card.Body>
              <Card.Title>AI Web Scraper</Card.Title>
              <Card.Text>
                This was my undergraduate capstone project. Our team had made a
                AI Web Crawler using Python and MongoDB. The purpose of this
                tool was to enhance the users search results by getting common
                words for their initial search and adding them to a new
                personalized and specified search.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "30rem",
            }}>
          <Card
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "30rem",
            }}
          >
            <Card.Body>
              <Card.Title>NHL Data Visualizer</Card.Title>
              <Card.Text>
                This is project that I am planning to begin soon. The project will likely
                be made using React, MongoDB and Recharts. This project will be used to visualize
                data from the latest hocket season. The primary focus will be on the Ottawa Senators.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
