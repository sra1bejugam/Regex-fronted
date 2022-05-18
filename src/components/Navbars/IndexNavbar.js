import React from "react";
import {
  // Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";
import axios from 'axios';
import { Spinner } from 'reactstrap';
import { UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import Switch from "react-bootstrap-switch";

async function postLiked(updateLikesCount, loaderfun) {
  loaderfun(true);
  let like = 'true';
  let disLiked = '';
  let res = await axios.post(`https://regex-server.herokuapp.com/api/add`, { like, disLiked });
  if (res.status === 200) {
    await axios.get(`https://regex-server.herokuapp.com/api/get`)
      .then(res => {
        if (res && res.data) {
          loaderfun(false);
          updateLikesCount(res.data.length);
        }
      });
  }
}

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [likesCount, updateLikesCount] = React.useState('');
  const [loader, loaderfun] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="/index"
              id="navbar-brand"
            >
              <i className="now-ui-icons shopping_shop"></i>&nbsp;
              <p>HOME</p>
            </NavbarBrand>

            <NavbarBrand
              href="/patterns"
              target="_blank"
              id="examples-tooltip"
            >
              <i className="now-ui-icons files_paper"></i>
              <p>Patterns</p>
              <UncontrolledTooltip target="#examples-tooltip">
                Example regex patterns
                </UncontrolledTooltip>
            </NavbarBrand>

            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav style={{ alignItems: 'center' }} navbar>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("get-started")
                      .scrollIntoView();
                  }}
                >
                  <i className="now-ui-icons objects_spaceship"></i>
                  <p>Get Started</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("get-validate")
                      .scrollIntoView();
                  }}
                >
                  <i className="now-ui-icons business_bulb-63"></i>
                  <p>Validate</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://github.com/sra1bejugam/RegexGenerator/wiki"
                  target="_blank"
                  id="github-tooltip"
                >
                  <i className="now-ui-icons files_paper"></i>
                  <p>WIKI</p>
                </NavLink>
                <UncontrolledTooltip target="#github-tooltip">
                  Application Details
                </UncontrolledTooltip>
              </NavItem>

              <NavItem>
                <NavLink
                  href="https://github.com/sra1bejugam/RegexGenerator/issues"
                  target="_blank"
                  id="github-issues-tooltip"
                >
                  <i className="now-ui-icons ui-2_chat-round"></i>
                  <p>Bug/issues</p>
                </NavLink>
                <UncontrolledTooltip target="#github-issues-tooltip">
                  Report bug/issues/feedback
                </UncontrolledTooltip>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#pablo"
                  // disabled={likesCount}
                  onClick={(e) => {
                    e.preventDefault();
                    postLiked(updateLikesCount, loaderfun);
                  }}
                  id="like-tooltip"
                >
                  {likesCount ? <span style={{ fontSize: '1.5em' }} aria-labelledby="jsx-a11y/accessible-emoji" role="img">&#128151;</span> : <i className="now-ui-icons ui-2_favourite-28"></i>}
                </NavLink>
                <UncontrolledTooltip target="#like-tooltip">
                  Send us some like
                </UncontrolledTooltip>
              </NavItem>
              {/*
                   <span>{likesCount}</span>
                  */}
              {loader ? <div>
                <Spinner color="primary" />
              </div> : ''}

              <NavItem>
                <NavLink
                  href="https://www.facebook.com/CustomRegularExpressions/"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>

              <NavItem>
                <NavLink
                  href="https://www.instagram.com/"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#whatsNew"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  id="PopoverFocus"
                >
                  <p>What's New</p>
                  <UncontrolledPopover trigger="focus" placement="bottom" target="PopoverFocus">
                    <PopoverHeader>Whats New</PopoverHeader>
                    <PopoverBody>
                    <Typography>16-March :
                    Added likes feature, popover feature.</Typography>
                    <Typography>17-March : Added Footer Deatils.</Typography>
                    <Typography>19-March : Added examples page.</Typography>
                    </PopoverBody>
                  </UncontrolledPopover>
                </NavLink>
              </NavItem>

              <NavItem>
              <NavLink
                href="#Beta"
                onClick={(e) => {
                  e.preventDefault();
                }}
                id="beta-tooltip"
              >
                <i className="d-lg-none d-xl-none">Beta</i>
                <Switch defaultValue={false} offColor="" onColor="blue"></Switch>
              </NavLink>
              <UncontrolledTooltip target="#beta-tooltip">
                Enable beta version
              </UncontrolledTooltip>
            </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
