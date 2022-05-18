import React, { Component } from 'react';
import axios from 'axios';
import { Spinner } from 'reactstrap';
import {
  // Button,
  Container,
  Row,
  Col
} from "reactstrap";
export class DarkFooter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      likesCount: null,
      loader: false
    };
    this.postLiked = this.postLiked.bind(this);
    this.getLikesCount();
  }

  getLikesCount = async () => {
    axios.get(`https://regex-server.herokuapp.com/api/get`)
      .then(res => {
        if (res && res.data) {
          const likesCount = res.data.length;
          this.setState({ likesCount });
        }
      });
  };

  postLiked = async () => {
    this.setState({ loader: true });
    let like = 'true';
    let disLiked = '';
    let res = await axios.post(`https://regex-server.herokuapp.com/api/add`, { like, disLiked });
    if (res.status === 200) {
      await axios.get(`https://regex-server.herokuapp.com/api/get`)
        .then(res => {
          if (res && res.data) {
            this.setState({ loader: false });
            let likesCount = res.data.length;
            this.setState({ likesCount });

          }
        });
    }
  }

  render() {
    return (
      <>
        <footer className="footer" data-background-color="black">
          <Container>
            <Row className="justify-content-md-center sharing-area text-center">
              <Col className="text-center" lg="8" md="12">
                <h3><span> Thank you for supporting us! <span aria-labelledby="jsx-a11y/accessible-emoji" role="img">&#128512;</span> <span aria-labelledby="jsx-a11y/accessible-emoji" role="img">&#128151;</span>
                </span></h3>
              </Col>
            </Row>
            {/*<Row style={{ alignItems: 'center' }}>
              If you like this page, Please click on
              <Button onClick={this.postLiked}><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">&#128151;</span></Button>
              <span style={{ paddingLeft: '5px' }}>{this.state.likesCount} Likes &#128525; till now!!!</span>
              {this.state.loader ?
                <div>
                  <Spinner className="now-ui-icons ui-2_favourite-28" />
                </div> : ''}
              </Row> 
            */}
            <br></br>
            <Row>
              <Col lg="3" sm="12">
                <span class="title">About</span>
                {/*<ul class="nav-footer">*/}
                <div style={{ paddingTop: "5px" }}>
                <ol style = {{listStyleType:"none",paddingLeft:'2px'}}>
                  <li style={{ paddingTop: "3px"}}>
                    <a href="https://github.com/sra1bejugam/RegexGenerator/wiki" target="_blank" rel="noopener noreferrer">Application</a>
                  </li>
                  <li style={{ paddingTop: "3px" }}>
                    <a href="https://github.com/sra1bejugam/RegexGenerator/issues" target="_blank" rel="noopener noreferrer">Issues</a>
                  </li>
                  <li style={{ paddingTop: "3px" }}>
                    <a href="https://www.npmjs.com/package/regex-nlp" target="_blank" rel="noopener noreferrer">Usage</a>
                  </li>
                  <li style={{ paddingTop: "3px" }}>
                    <a href="https://www.npmjs.com/package/regex-nlp" target="_blank" rel="noopener noreferrer">NPM package</a>
                  </li>
                  </ol>
                </div>
              </Col>
              <Col lg="3" sm="12">
                <span class="title">Support</span>
                <div style={{ paddingTop: "5px" }}>
                <ol style = {{listStyleType:"none",paddingLeft:'2px'}}>
                  <li style={{ paddingTop: "3px" }}>
                    <a href="https://github.com/sra1bejugam/RegexGenerator/issues" target="_blank" rel="noopener noreferrer">Help</a>
                  </li>
                  <li style={{ paddingTop: "3px" }}>
                    <a href="https://github.com/sra1bejugam/RegexGenerator/issues" target="_blank" rel="noopener noreferrer">Report</a>
                  </li>
                  <li style={{ paddingTop: "3px" }}>
                    <a href="http://googlepay.com" target="_blank" rel="noopener noreferrer">Payment</a>
                  </li>
                  <li style={{ paddingTop: "3px" }}>
                    <a href="https://github.com/sra1bejugam" target="_blank" rel="noopener noreferrer">Contact</a>
                  </li>
                  </ol>
                </div>
              </Col>
              <Col lg="3" sm="12">
                <span class="title">Socials</span>
                <div>
                <ol style = {{listStyleType:"none",paddingLeft:'2px'}}>
                  <li style={{ paddingTop: "3px" }}>
                    <a href="https://www.facebook.com/CustomRegularExpressions/" target="_blank" rel="noopener noreferrer">Facebook</a>
                  </li>
                  <li style={{ paddingTop: "3px" }}>
                    <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                  </li>
                  <li style={{ paddingTop: "3px" }}>
                    <a href="https://github.com/sra1bejugam/RegexGenerator" target="_blank" rel="noopener noreferrer">Github</a>
                  </li>
                  <li style={{ paddingTop: "3px" }}>
                    <a href="https://www.linkedin.com/in/shravan-kumar-020530a7/" target="_blank" rel="noopener noreferrer">linkedin</a>
                  </li>
                  </ol>
                </div>
              </Col>
              <Col lg="3" sm="12">
                <span class="title">Likes</span>
                <div onClick={this.getLikesCount} style ={{paddingTop:'5px'}}>{this.state.likesCount} <span aria-labelledby="jsx-a11y/accessible-emoji" role="img">&#128151;</span></div>
                   { /*<div style ={{paddingTop:'5px'}} onClick={this.postLiked}>  {this.state.likesCount} <span aria-labelledby="jsx-a11y/accessible-emoji" role="img">&#128151;</span></div>*/}
                  {/*<Button onClick={this.postLiked}><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">&#128151;</span></Button>
          <span style={{ paddingLeft: '3px' }} aria-labelledby="jsx-a11y/accessible-emoji" role="img">&#128151;</span>*/}
              </Col>
            </Row>
            <br></br>
            <div style={{ textAlign: 'center' }} class="company">
              <span class="name">
                © 2021 regex-generator. All rights reserved
              </span>
              {this.state.loader ?
                <div>
                  <Spinner className="now-ui-icons ui-2_favourite-28" />
                </div> : ''}
            </div>
          </Container>
        </footer>
      </>
    )
  }
}

export default DarkFooter;
