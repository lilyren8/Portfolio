import React from "react"
import "./home.css"
import { Grid, Cell } from "react-mdl"
import ProjectCard from "../components/projectCard"

export default class Resume extends React.Component {
  render() {
    return (
      <div className="pageContainer">
        <div className="introTitle">
          Hi! I am <span style={{ color: "#66cccc" }}>Lily Ren.</span>
        </div>
        <div className="introBody">
          User research, interface design and wireframing are what I do. I recently completed my
          master's degree in User Experience Design at University of Toronto, Faculty of
          Information.
          <br />
          Scroll down and click to see my work!
        </div>
        <div style={{ margin: "auto" }}>
          <Grid className="demo-grid-1">
            <Cell col={4}>
              <ProjectCard
                title={"Chatbot"}
                content={"Ask anything!"}
                route="/chatbot/"
                image={require("../assets/chatbot.png")}
              />
            </Cell>
            <Cell col={4}>
              <ProjectCard
                title={"iClinic"}
                content={"Manage appointments on your mobile device"}
                route="/iclinic/"
                image={require("../assets/Asset 1.png")}
              />
            </Cell>
            <Cell col={4}>
              <ProjectCard
                title={"Green P"}
                content={"Parking with CarPlay"}
                route="/greenp/"
                image={require("../assets/3.png")}
              />
            </Cell>
          </Grid>
          <Grid className="demo-grid-1">
            <Cell col={4}>
              <ProjectCard
                title={"Notes App"}
                content={"Support varied needs across the day"}
                route="/notes/"
                image={require("../assets/4.png")}
              />
            </Cell>
            <Cell col={4}>
              <ProjectCard
                title={"JHI"}
                content={"Website redesign"}
                route="/jhi/"
                image={require("../assets/5.png")}
              />
            </Cell>
            <Cell col={4}>
              <ProjectCard
                title={"Inforum Room Booking"}
                content={"transparent self-room- booking system"}
                route="/inforum/"
                image={require("../assets/6.png")}
              />
            </Cell>
          </Grid>
        </div>
      </div>
    )
  }
}
