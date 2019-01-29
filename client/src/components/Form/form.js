import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    eMail: "",
    Company: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(
      `Hello ${this.state.firstName} ${this.state.lastName}${this.state.eMail}`
    );
    this.setState({
      firstName: "",
      lastName: "",
      eMail: "",
      company: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p id="form-header">
          Developers: fill out this form to begin selling your game keys on
          blockGames{this.state.firstName} {this.state.lastName}
        </p>
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
            value={this.state.eMail}
            name="eMail"
            onChange={this.handleInputChange}
            type="text"
            placeholder="E-Mail or Preffered Contact Method"
          />
          <input
            value={this.state.Company}
            name="eMail"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Company or Name of Game"
          />

          <button
            onClick={this.handleFormSubmit}
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
            <i className="material-icons-right"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
