import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import Ed from '../../images/ED.png';
import theTechBlog from '../../images/theTechBlog.png';
import Fitness from '../../images/workoutdashboard.png';
import CSS from '../../images/CSS.jpg';


var style = {
  fontSize: "4rem",
  padding: "20px",
  textAlign: "center",
  fontWeight: 100,
};



function FullCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      interval={1000000000}
      className="flex-row"
    >
      <Carousel.Item>
        <img className="d-block w-100 photo" src={Ed} alt="Second Slide" />
        <Carousel.Caption>
          <h4 style={{ textAlign: "center" }}>Employee directory</h4>
          <p>A web application that lists all employees in one directory using React.</p>
          <h4>
            <a href="https://github.com/carefree2706/employee-directory-">
              Repository
            </a>
          </h4>
          <h4>
            <a href="https://evening-fjord-26315.herokuapp.com/">Site</a>
          </h4>
        </Carousel.Caption>
        .
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 photo" src={theTechBlog} alt="First Slide" />
        <Carousel.Caption>
          <h4 style={{ textAlign: "center" }}>theTechBlog</h4>
          <p>
          A mysql database and CMS-style Blog built using Model View Controller MVC paradigm.
          </p>
          <h4>
            <a href="https://github.com/carefree2706/theTechBlog">Repository</a>
          </h4>
          <h4>
            <a href='https://dry-cove-74526.herokuapp.com/'>Site</a>
          </h4>
        </Carousel.Caption>
        .
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 photo" src={Fitness} alt="Third Slide" />
        <Carousel.Caption>
          <h4 style={{ textAlign: "center" }}>Fitness Tracker</h4>
          <p>The tracker focus on providing the user datas so they are able to achieve their goals.</p>
          <h4>
            <a href="https://github.com/carefree2706/workOut-Tracker-">
              Repository
            </a>
          </h4>
          <h4>
            <a href="https://powerful-springs-80879.herokuapp.com/">Site</a>
          </h4>
        </Carousel.Caption>
        .
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 photo" src={CSS} alt="Fourth Slide" />
        <Carousel.Caption>
          <h4 style={{ textAlign: "center" }}>Catch-Source-Style</h4>
          <p>
          A color and font selection tool for web designers and developers.
          </p>
          <h4>
            <a href="https://github.com/carefree2706/Catch-Source-Style">Repository</a>
          </h4>
          <h4>
            <a href="https://github.com/carefree2706/Catch-Source-Style">Site</a>
          </h4>
        </Carousel.Caption>
        .
      </Carousel.Item>
    </Carousel>
  );
}

export default FullCarousel;
