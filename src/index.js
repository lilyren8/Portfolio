import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import "react-mdl/extra/material.css"
import "react-mdl/extra/material.js"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Resume from "./screens/resume"
import Contact from "./screens/contact"
import Home from "./screens/home"
import Chatbot from "./screens/chatbot"
import iClinic from "./screens/iClinic"
import GreenP from "./screens/GreenP"
import Notes from "./screens/Notes"
import JHI from "./screens/JHI"
import Inforum from "./screens/Inforum"
import ChatWindow from "./components/chatWindow"
import { Layout, Header, Navigation, Content } from "react-mdl"
import { StickyContainer, Sticky } from "react-sticky"
import Responsive from "react-responsive"
import Sidebar from "react-sidebar"
import { Navbar, Nav, NavItem } from "react-bootstrap"

const Mobile = props => <Responsive {...props} maxWidth={767} />
const Default = props => <Responsive {...props} minWidth={768} />

const styles = {
  link: {
    color: "black"
  }
}

class App extends React.Component {
  defaultContent = () => {
    return (
      <StickyContainer>
        <Router>
          <div>
            <div style={{ height: "70px", position: "relative" }}>
              <Layout
                style={{
                  fontFamily: "futura-lt-w01-book",
                  fontSize: 15,
                  userSelect: "text",
                  zIndex: 3
                }}
              >
                <Sticky>
                  {({ style }) => (
                    <header style={style}>
                      <Header
                        title={
                          <div style={{ width: 200 }}>
                            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                              Lily Ren
                            </Link>
                            <a
                              style={{ paddingLeft: 10 }}
                              href="https://www.linkedin.com/in/lily-ren/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i
                                className="fa fa-linkedin-square"
                                style={{ color: "white", fontSize: 25 }}
                              />
                            </a>
                            <a
                              style={{ paddingLeft: 10 }}
                              href="https://github.com/lilyren8"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i
                                className="fa fa-github"
                                style={{ color: "white", fontSize: 25 }}
                              />
                            </a>
                          </div>
                        }
                      >
                        <Navigation>
                          <Link style={styles.link} to="/">
                            Home
                          </Link>
                          <Link style={styles.link} to="/resume/">
                            Resume
                          </Link>
                          <Link style={styles.link} to="/contact/">
                            Contact
                          </Link>
                        </Navigation>
                      </Header>
                    </header>
                  )}
                </Sticky>
              </Layout>
            </div>

            {/* main content */}
            <Content>
              <ChatWindow />
              <Route path="/" exact component={Home} />
              <Route path="/resume/" component={Resume} />
              <Route path="/contact/" component={Contact} />
              <Route path="/chatbot/" component={Chatbot} />
              <Route path="/iclinic/" component={iClinic} />
              <Route path="/greenp/" component={GreenP} />
              <Route path="/notes/" component={Notes} />
              <Route path="/jhi/" component={JHI} />
              <Route path="/inforum/" component={Inforum} />
            </Content>
          </div>
        </Router>
      </StickyContainer>
    )
  }

  mobileContent = () => {
    return (
      <div>
        <StickyContainer>
          <Sticky>
            {({ style }) => (
              <header style={style}>
                <div
                  style={{
                    height: "40px",
                    backgroundColor: "#4153AF",
                    paddingTop: 10,
                    paddingLeft: 10
                  }}
                >
                  <i className="fa fa-bars" style={{ color: "white", fontSize: 25 }} />
                  <span style={{ paddingRight: 10 }}>Lily Ren</span>
                  <a href="https://www.linkedin.com/in/lily-ren/">
                    <i className="fa fa-linkedin-square" style={{ color: "white", fontSize: 25 }} />
                  </a>
                </div>
              </header>
            )}
          </Sticky>
          <div style={{ height: 1200 }} />
        </StickyContainer>
      </div>
    )
  }

  render() {
    return (
      <div>
        {/* <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                Link
              </NavItem>
              <NavItem eventKey={2} href="#">
                Link
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Link Right
              </NavItem>
              <NavItem eventKey={2} href="#">
                Link Right
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar> */}
        <Mobile>{this.mobileContent()}</Mobile>
        <Default>{this.defaultContent()}</Default>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
