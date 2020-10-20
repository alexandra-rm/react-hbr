import React, {Component} from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      dietaryDestrictions: {
        isVegan: false,
        isKosher: false,
        isLactoseFree: false,
      },
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target;

    type === "checkbox" ?
        // this.setState({
        //   [name]: checked
        // })
        this.setState({
          dietaryDestrictions: {
            ...this.state.dietaryDestrictions,
            [name]: checked
          }
        })
        :
        this.setState({
          [name]: value
        });
  }

  render() {
    return (
        <main>
          <form>
            <input
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                placeholder="First Name"
            />
            <br />

            <input
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                placeholder="Last Name"
            />
            <br />

            <input
                name="age"
                value={this.state.age}
                onChange={this.handleChange}
                placeholder="Age"
            />

            {/* Здесь создайте переключатели для выбора пола */}
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
            {/* Здесь создайте поле со списком для выбора пункта назначения */}
            <br />
            <select
                value={this.state.destination}
                name="destination"
                onChange={this.handleChange}
            >
              <option value="">-- Please Choose a destination --</option>
              <option value="germany">Germany</option>
              <option value="norway">Norway</option>
              <option value="north pole">North Pole</option>
              <option value="south pole">South Pole</option>
            </select>
            {/* Здесь создайте флажки для указания диетологических ограничений */}
            <br />
            <label>
              <input
                  type="checkbox"
                  name="isVegan"
                  onChange={this.handleChange}
                  checked={this.state.dietaryDestrictions.isVegan}
              /> Vegan?
            </label>
            <br />

            <label>
              <input
                  type="checkbox"
                  name="isKosher"
                  onChange={this.handleChange}
                  checked={this.state.dietaryDestrictions.isKosher}
              /> Kosher?
            </label>
            <br />

            <label>
              <input
                  type="checkbox"
                  name="isLactoseFree"
                  onChange={this.handleChange}
                  checked={this.state.dietaryDestrictions.isLactoseFree}
              /> Lactose Free?
            </label>
            <br />

            <button>Submit</button>
          </form>
          <hr />
          <h2><font color="#3AC1EF">Entered information:</font></h2>
          <p>Your name: {this.state.firstName} {this.state.lastName}</p>
          <p>Your age: {this.state.age}</p>
          <p>Your gender: {this.state.gender}</p>
          <p>Your destination: {this.state.destination}</p>
          <p>Your dietary restrictions:</p>
          <p>Vegan: {this.state.dietaryDestrictions.isVegan ? "Yes" : "No"}</p>
          <p>Kosher: {this.state.dietaryDestrictions.isKosher ? "Yes" : "No"}</p>
          <p>Lactose Free: {this.state.dietaryDestrictions.isLactoseFree ? "Yes" : "No"}</p>
        </main>
    )
  }
}

export default App;
