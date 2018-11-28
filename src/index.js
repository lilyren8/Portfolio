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

const Mobile = props => <Responsive {...props} maxWidth={767} />
const Default = props => <Responsive {...props} minWidth={768} />

const styles = {
  link: {
    color: "black"
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Mobile>Mobile</Mobile>
        <Default>
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
        </Default>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
