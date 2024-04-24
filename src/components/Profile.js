import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function ProjectCardGroup() {
  return (
    <div>
      <Row>
        <Col sm={4}>
          <Image
            src={require("../media/Tyler_ProfilePic.JPG")}
            width={250}
            rounded
          />
        </Col>
        <Col sm={8}>
            <h1>Tyler Leung</h1>
          <p>
            Hi there! My name is Tyler Leung and I recently graduated from
            Carleton University with a Bachelor's Degree in Software
            Engineering. I am currently looking for employment as a Software
            Engineer with a preference in Back-End Development. I have
            previously worked at{" "}
            <a href="https://www.leonardodrs.com/locations/drs-technologies-canada-ottawa-ontario/">
              Leonardo DRS
            </a>{" "}
            for a year as a Software Engineer during my co-op term.{" "}
          </p>
        </Col>
      </Row>
    </div>
  );
}
