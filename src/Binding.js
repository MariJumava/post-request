import React from "react";

class Input extends React.Component {
  state = {
    value: "",
  };

  onChange = (event) => {
    this.setState({ value: event.target.value });
  };

  onClear = () => {
    this.setState({ value: "" });
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.onChange} value={this.state.value} />
        <p>{this.state.value}</p>
        <button onClick={this.onClear}>CLEAR</button>
      </div>
    );
  }
}

export default Input;
