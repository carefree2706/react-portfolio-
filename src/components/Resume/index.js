import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

var style = {
    fontSize: "3rem",
    padding: "3rem",
    textAlign: "center",
    fontWeight: 1
}

function Resume() {

    return (
        <Container id="resume">
            <Row style={style} className="justify-content-md-center" >
            download my full  <a href="https://github.com/carefree2706" className="link">  resume</a>
            </Row>
        </Container>
    );

}

export default Resume;