import React from "react"
import Slider from "react-slick"
import Arrow from "../components/arrow"

export default class JHI extends React.Component {
  render() {
    return (
      <div style={{ height: 300, width: 800 }}>
        <div style={{ width: 200 }} className="pageContainer">
          <Slider dots nextArrow={<Arrow />}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      </div>
    )
  }
}
