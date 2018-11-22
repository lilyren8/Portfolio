import React from "react"
import { Card, CardTitle, CardText } from "react-mdl"
import { Link } from "react-router-dom"

export default class ProjectCard extends React.Component {
  render() {
    return (
      <Link to={this.props.route || "/"} style={{ textDecoration: "none" }}>
        <Card shadow={0} style={{ width: "320px", height: "320px", margin: "auto" }}>
          <CardTitle
            expand
            style={{
              color: "#fff",
              background: `url(${this.props.image}) center center no-repeat`
            }}
          >
            {this.props.title}
          </CardTitle>
          <CardText>{this.props.content}</CardText>
        </Card>
      </Link>
    )
  }
}
