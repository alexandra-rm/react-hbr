import React, {Component} from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      about: "",
      isFriendly: true,
      gender: "",
      favColor: "blue",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target

    console.log('name: ', name);
    console.log('value: ', value);
    console.log('type: ', type);
    console.log('checked: ', checked);

    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value });
  }

  handleSubmit(event) {
      event.preventDefault();
      console.log('Submit: ', event);
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <input
              type="text"
              value={this.state.firstName}
              name="firstName"
              placeholder="First Name"
              onChange={this.handleChange}
          />
          <br />
          <input
              type="text"
              value={this.state.lastName}
              name="lastName"
              placeholder="Last Name"
              onChange={this.handleChange}
          />
            <br />
            <textarea
                name="about"
                value={this.state.about}
                placeholder="Some default value"
                onChange={this.handleChange}
            />
            <br />
            <label>
                <input
                    type="checkbox"
                    name="isFriendly"
                    checked={this.state.isFriendly}
                    onChange={this.handleChange}
                /> Is friendly?
            </label>
            <br />
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={this.state.gender === "male"}
                    onChange={this.handleChange}
                /> Male
            </label>
            <br />
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={this.state.gender === "female"}
                    onChange={this.handleChange}
                /> Female
            </label>
            <br />
            <label>Favorite Color:</label>
            <select
                value={this.state.favColor}
                onChange={this.handleChange}
                name="favColor"
            >
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
            </select>
          <h1>{this.state.firstName} {this.state.lastName}</h1>
          {this.state.gender !== '' && <h2><font color="#3AC1EF">You are a {this.state.gender}</font></h2>}
          <h2><font color="#3AC1EF">Your favorite color is {this.state.favColor}</font></h2>
          <button>Submit</button>
        </form>
    );
  }
}

export default App;
