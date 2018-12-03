import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import "react-mdl/extra/material.css"
import "react-mdl/extra/material.js"
import { BrowserRouter as Router, Route } from "react-router-dom"
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
import { StickyContainer, Sticky } from "react-sticky"
import Responsive from "react-responsive"
import Sidebar from "react-sidebar"
import { Navbar, Nav, NavItem } from "react-bootstrap"

const Mobile = props => <Responsive {...props} maxWidth={767} />
const Default = props => <Responsive {...props} minWidth={768} />

class App extends React.Component {
  defaultContent = () => {
    return (
      <StickyContainer>
        <Router>
          <div>
            <div style={{ height: "70px", position: "relative", zIndex: 3 }}>
              <Sticky>
                {({ style }) => (
                  <header style={style}>
                    <Navbar inverse collapseOnSelect>
                      <Navbar.Header>
                        <Navbar.Brand>
                          <a href="/">Lily Ren</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                      </Navbar.Header>
                      <Navbar.Collapse>
                        <Nav>
                          <NavItem
                            eventKey={1}
                            href="https://www.linkedin.com/in/lily-ren/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i
                              className="fa fa-linkedin-square"
                              style={{ color: "white", fontSize: 25 }}
                            />
                          </NavItem>
                          <NavItem
                            eventKey={2}
                            href="https://github.com/lilyren8"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-github" style={{ color: "white", fontSize: 25 }} />
                          </NavItem>
                        </Nav>
                        <Nav pullRight>
                          <NavItem eventKey={1} href="/">
                            Home
                          </NavItem>
                          <NavItem eventKey={2} href="/resume">
                            Resume
                          </NavItem>
                          <NavItem eventKey={3} href="/contact">
                            Contact
                          </NavItem>
                        </Nav>
                      </Navbar.Collapse>
                    </Navbar>
                  </header>
                )}
              </Sticky>
            </div>

            {/* main content */}
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
                <Navbar inverse collapseOnSelect>
                  <Navbar.Header>
                    <Navbar.Brand>
                      <a href="/">Lily Ren</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                  </Navbar.Header>
                  <Navbar.Collapse>
                    <Nav pullRight>
                      <NavItem eventKey={1} href="/">
                        Home
                      </NavItem>
                      <NavItem eventKey={2} href="/resume">
                        Resume
                      </NavItem>
                      <NavItem eventKey={3} href="/contact">
                        Contact
                      </NavItem>
                      <NavItem eventKey={4} href="/chatbot">
                        Chatbot
                      </NavItem>
                      <NavItem
                        eventKey={5}
                        href="https://www.linkedin.com/in/lily-ren/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i
                          className="fa fa-linkedin-square"
                          style={{ color: "white", fontSize: 25 }}
                        />
                      </NavItem>
                      <NavItem
                        eventKey={6}
                        href="https://github.com/lilyren8"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-github" style={{ color: "white", fontSize: 25 }} />
                      </NavItem>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
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
        <Mobile>{this.mobileContent()}</Mobile>
        <Default>{this.defaultContent()}</Default>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
