import React from "react";
import contactMe from "../../images/contactMe.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Media from "react-bootstrap/Media";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitterSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

function About() {
  const style = {
    fontSize: "2.5rem",
    // padding: "20px",
    textAlign: "center",
    fontWeight: 100,
  };

  // const style2 = {
  //   fontSize: "1rem",
  //   height: "50%"
  // };
  const iconStyle = {
    fontSize: "1.9rem",
  };
  const linkedIn = <FontAwesomeIcon icon={faLinkedin} />;
  const github = <FontAwesomeIcon icon={faGithub} />;
  const email = <FontAwesomeIcon icon={faPaperPlane} />;
  const twitter = <FontAwesomeIcon icon={faTwitterSquare} />;
  const instagram = <FontAwesomeIcon icon={faInstagramSquare} />;
  const phone = <FontAwesomeIcon icon={faMobileAlt} />;

  return (
    <Container>
      <Row className="" id="contact">
        <Col style={style}>Connection</Col>
      </Row>
      <Row className="contactPage">
        <Col>
          <Media>
            <img
              src={contactMe}
              className="my-3"
              style={{ width: "100%" }}
              alt="DW"
            />
          </Media>
        </Col>
        <Col md={8} xs={1}  className="socialList">
          <p>
            <i style={iconStyle}>{email} </i>
            <a href="mailto: carefree2706@gmail.com">
              carefree2706@gmail.com
            </a>
          </p>
          {/* <br></br> */}
          <p>
            <i style={iconStyle}>{github} </i>
            <a
              href="https://github.com/carefree2706"
              rel="noreferrer"
              target="_blank"
            >
              github.com/carefree2706
            </a>
          </p>
          {/* <br></br> */}
          <p>
            <i style={iconStyle}>{linkedIn} </i>
            <a
              href="https://www.linkedin.com/in/donald-wu-a48a92155/"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </p>
          {/* <br></br> */}
          <p>
            <i style={iconStyle}>{twitter} </i>
            <a
              href="https://twitter.com/carefree2706"
              rel="noreferrer"
              target="_blank"
            >
              Twitter
            </a>
          </p>
          {/* <br></br> */}
          <p>
            <i style={iconStyle}>{instagram} </i>
            <a
              href="https://www.instagram.com/donaldwucoffee/"
              rel="noreferrer"
              target="_blank"
            >
              Instagram
            </a>
          </p>
          {/* <br></br> */}
          <p>
            <i style={iconStyle}>{phone} </i>
            <a
              href="https://www.instagram.com/donaldwucoffee/"
              rel="noreferrer"
              target="_blank"
            >
              +61406339999
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
