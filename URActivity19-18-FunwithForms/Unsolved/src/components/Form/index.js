import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // If the user hasn't provided a first and last name, throw an alert saying: "Fill out your first and last name please!"
    if (this.state.firstName === "" || this.state.lastName === "") {
      return alert(`Fill out your first and last name please!`);
    }

    //If the user has provided a first and last name, but their password is less than 6 characters, throw an alert saying, "Choose a more secure password," followed by the full name.
    if (this.state.password.length < 6) {
      return alert(
        `Choose a more secure password, ${this.state.firstName} ${this.state.lastName}`
      );
    }

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(
      `Hello ${this.state.firstName} ${this.state.lastName}\nYour password is: ${this.state.password}`
    );
    this.setState({
      firstName: "",
      lastName: "",
      password: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello {this.state.firstName} {this.state.lastName}
        </p>
        <p>Your password is: {this.state.password}</p>
        <form className="form">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Password"
            maxlength="15"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
