/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Button, Col } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/R-logo.png")}
        ></img> 
        <div style ={{paddingTop:'10px', alignItems: 'center' }}>
        <h3><strong>Regex Generator</strong></h3>
        <h5 className="h5-seo" style={{color:'white'}}><strong>Regex Generator is an application where it takes string or array of strings and converts that to regex pattern.And also test the patterns with the user inputs</strong></h5>
        </div>
            {/*<h1 className="h1-seo">A Regex Generator.</h1>*/}
            {/*<h3>By Shravan</h3>*/}
            <Row className="justify-content-md-center">
              <Col lg="12" sm="2">
                <Button onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("get-started")
                    .scrollIntoView();
                }} className="btn-round" type="button" color="info">
                  Get Started
              </Button>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
