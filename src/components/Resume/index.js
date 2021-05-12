import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import don from "../../images/one_punch_man_ok.jpeg";
import Media from "react-bootstrap/Media";

var style = {
    fontSize: "3rem",
    padding: "3rem",
    textAlign: "center",
    
}

function Resume() {

    return (
        <Container id="resume">
            <Row style={style} className="justify-content-md-center" >
         resume coming soon~~~ please visit my github   <a href="https://github.com/carefree2706" className="link">  </a>
         <Media>
            <img
              src={don}
              className="my-2"
              style={style}
              alt="Donald Wu"
              
            />
          </Media>
            </Row>
            
        </Container>
    );

}

export default Resume;