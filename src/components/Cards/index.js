import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Ed from "../../images/ED.png";
import theTechBlog from "../../images/theTechBlog.png";
import Fitness from "../../images/workoutdashboard.png";
import CSS from "../../images/CSS.jpg";
import noteTaker from "../../images/noteTaker.png";
import codeNoob from "../../images/codeNoob.jpg";

function Cards() {
  return (
    <Container className="projectsCards">
      <Row>
        <Card >
          <Card.Img variant="top" src={Ed} />
          <Card.Body>
            <Card.Title>Random Employee Directory</Card.Title>
            <Card.Text>
            A web application that lists all employees in one directory using React.
            </Card.Text>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://evening-fjord-26315.herokuapp.com/"
            >
              <Button variant="primary">Live Site</Button>
            </a>
            <a href="https://github.com/carefree2706/employee-directory-">Repository</a>

          </Card.Body>
        </Card>
        <Card >
          <Card.Img variant="top" src={Fitness} />
          <Card.Body>
            <Card.Title>Fitness Tracker</Card.Title>
            <Card.Text>The tracker focus on providing the user datas so they are able to achieve their goals.</Card.Text>
            <a rel="noreferrer" target="_blank" href="https://powerful-springs-80879.herokuapp.com/">
              <Button variant="primary">Live Site</Button>
            </a>
            <a href="https://github.com/carefree2706/workOut-Tracker-">Repository</a>
          </Card.Body>
        </Card>
        <Card >
          <Card.Img variant="top" src={noteTaker} />
          <Card.Body>
            <Card.Title>noteTaker</Card.Title>
            <Card.Text>This application allows you the users to save notes with a title and text.</Card.Text>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/carefree2706/note_taker-"
            >
              <Button variant="primary">Live Site</Button>
            </a>
            <a href="https://github.com/carefree2706/note_taker-">Repository</a>
          </Card.Body>
        </Card>
      </Row>
      <Row>
        
        <Card >
          <Card.Img variant="top" src={CSS} />
          <Card.Body>
            <Card.Title>Catch-Source-Style</Card.Title>
            <Card.Text>A color and font selection tool for web designers and developers.</Card.Text>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/carefree2706/Catch-Source-Style"
            >
              <Button variant="primary">Live Site</Button>
            </a>
            <a href="https://github.com/carefree2706/Catch-Source-Style">Repository</a>
          </Card.Body>
        </Card>
        <Card >
          <Card.Img variant="top" src={theTechBlog} />
          <Card.Body>
            <Card.Title>theTechBlog</Card.Title>
            <Card.Text>
            A mysql database and CMS-style Blog built using Model View Controller MVC paradigm.{" "}
            </Card.Text>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://dry-cove-74526.herokuapp.com/"
            >
              <Button variant="primary">Live Site</Button>
            </a>
            <a href="https://github.com/carefree2706/theTechBlog">Repository</a>{" "}
          </Card.Body>
        </Card>
        <Card >
          <Card.Img variant="top" src={codeNoob} />
          <Card.Body>
            <Card.Title>codeNoob</Card.Title>
            <Card.Text>
            Code Noob, is a online forum designed for novice coders as they begin their journey through web development.{" "}
            </Card.Text>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/bencyna/codeNoob"
            >
              <Button variant="primary">Live Site</Button>
            </a>
            <a href="https://github.com/bencyna/codeNoob">Repository</a>{" "}
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default Cards;
