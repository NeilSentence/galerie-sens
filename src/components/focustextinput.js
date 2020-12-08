
import React, { Component, createRef } from "react";

class CustomTextInput extends Component {
  
  textInput = createRef();

  focusTextInput = () => {
    this.textInput.current.focus()
  }

  render() {
    return (
      <>
        <input style={{position:"absolute",top:"600px"}} type="text" ref={this.textInput} />
        <button style={{position:"absolute",top:"650px"}} onClick={this.focusTextInput}>Focus the text input</button>
      </>
    )
  }
}
export default CustomTextInput