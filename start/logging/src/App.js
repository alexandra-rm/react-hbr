import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("I'm working!");
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn,
      }
    })
  }

  render() {
    return (
        <div>
          <button onClick={this.handleClick}>LOG {this.state.isLoggedIn ? 'OUT' : 'IN'}</button>
          <h1>Logged {this.state.isLoggedIn ? 'in' : 'out'}</h1>
        </div>
    );
  }
}

export default App;
