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
import { Layout, Header, Navigation, Drawer } from "react-mdl"

const styles = {
  link: {
    color: "black"
  }
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <div style={{ height: "1200px", position: "relative" }}>
          <Layout
            style={{
              background: "#FAFAFA",
              fontFamily: "futura-lt-w01-book",
              fontSize: 15,
              userSelect: "text"
            }}
          >
            <Header
              transparent
              title={
                <div style={{ width: 200 }}>
                  <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                    Lily Ren
                  </Link>
                  <a style={{ paddingLeft: 10 }} href="https://www.linkedin.com/in/lily-ren/">
                    <i className="fa fa-linkedin-square" style={{ color: "white", fontSize: 25 }} />
                  </a>
                  <a style={{ paddingLeft: 10 }} href="https://github.com/lilyren8">
                    <i className="fa fa-github" style={{ color: "white", fontSize: 25 }} />
                  </a>
                </div>
              }
              style={{ backgroundColor: "#ffffff", color: "yellow" }}
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

            {/* side menu */}
            <Drawer title="Title">
              <Navigation>
                <Link style={styles.link} to="/resume/">
                  Resume
                </Link>
                <Link style={styles.link} to="/contact/">
                  Contact
                </Link>
              </Navigation>
            </Drawer>

            {/* main content */}
            <Route path="/" exact component={Home} />
            <Route path="/resume/" component={Resume} />
            <Route path="/contact/" component={Contact} />
            <Route path="/chatbot/" component={Chatbot} />
            <Route path="/iclinic/" component={iClinic} />
            <Route path="/greenp/" component={GreenP} />
            <Route path="/notes/" component={Notes} />
            <Route path="/jhi/" component={JHI} />
            <Route path="/inforum/" component={Inforum} />

            <ChatWindow />
          </Layout>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
