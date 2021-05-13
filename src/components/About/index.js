import React from "react";
import don from "../../images/don profile pic.jpg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Media from "react-bootstrap/Media";

function About() {
  const style = {
    fontSize: "5rem",
    textAlign: "center",
    fontWeight: 10,
    fontFamily:'pegasus',
  };

  return (
    <Container>
      <Row className="" id="about">
        <Col style={style}>The Don</Col>
      </Row>
      <Row className='aboutPage'>
        <Col md={6} s={2}>
          <Media>
            <img
              src={don}
              className="my-2"
              style={style}
              alt="Donald Wu"
            />
          </Media>
        </Col>
       
        <Col md={6} s={2} className="aboutText">
          <p >
          Donald Wu is my name and I am learning to become a full-stack developer or data analyst in the future. I am working toward the heaviest pull-up record.
          </p>
          <p>
            My Instagram page<span><a href="https://www.instagram.com/donaldwucoffee/">donaldwucoffee</a></span>, Toward the Guinness world record route
          </p>
          <p>
            You can observe my pull ups progression here<span><a href="https://www.instagram.com/stories/highlights/17856252224148923/">pull up progression</a></span>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
