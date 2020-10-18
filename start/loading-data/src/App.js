import React, {Component} from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      repository: {},
      loading: true,
    };
  }

  componentDidMount() {
    console.log("Hi!");

    // https://swapi.dev/api/people/1/
    fetch("https://api.github.com/repos/alexandra-rm/react-hbr")
        .then(response => response.json())
        .then(data => {
          this.setState({
            repository: data,
            loading: false,
          })
        })
        .catch((error) => {
          console.log("error: ", error);
        });
  }

  render() {
    return (
        <div>
          full name of this repository: {this.state.loading ? "loading..." : this.state.repository.full_name}
        </div>
    );
  }
}

export default App;
