import React from "react"

export default class ChatWindow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  handleClick = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <div>
        <div style={{ right: 100, position: "absolute", bottom: 100, zIndex: 2 }}>
          <div col={20} style={{ backgroundColor: "white" }} onClick={this.handleClick}>
            {this.state.show ? "Minimize" : "Talk to my personal chatbot."}
          </div>
          <div style={{ display: this.state.show ? "inline" : "none" }}>
            <iframe
              title="chat"
              allow="microphone;"
              width="350"
              height="430"
              src="https://console.dialogflow.com/api-client/demo/embedded/8485ccec-7599-4fbd-b324-5e217bfcbbad"
            />
          </div>
        </div>
      </div>
    )
  }
}
