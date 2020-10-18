import React, {Component} from "react";
import Conditional from "./Conditional";

class App extends Component {
  constructor() {
    super();
    console.log('App constructor this.state: ', this.state);

    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    console.log('App componentDidMount this.state: ', this.state);

    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1500)
  }

  render() {
    console.log('App render this.state: ', this.state);

    return (
        <div>
          <Conditional isLoading={this.state.isLoading}/>
        </div>
    )
  }
}

export default App;
