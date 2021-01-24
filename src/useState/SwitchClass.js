import React from 'react';

class SwitchClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false
    }
  }

  render() {
    return (
      <React.Fragment>
      <h1>{this.state.isOn ? "ON" : "OFF"}</h1>
      <button onClick={() => this.setState(state: {isOn: !this.state.isOn})}>Switch</button>
      </React.Fragment>
      )
  }
}

export default SwitchClass;
