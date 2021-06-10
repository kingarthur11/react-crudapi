import React, { Component } from "react";
import AuthoDataService from "../author.service";

export default class AddAuthor extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.saveAuthor = this.saveAuthor.bind(this);
    this.newAuthor = this.newAuthor.bind(this);

    this.state = {
      id: null,
      name: "",
      email: "",
    };
  }

  onChangeName(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      description: e.target.value
    });
  }

  saveAuthor() {
    var data = {
      name: this.state.name,
      email: this.state.email
    };

    AuthoDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newAuthor() {
    this.setState({
      id: null,
      name: "",
      email: "",
      submitted: false
    });
  }

  render() {
    return (
      <div>
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button onClick={this.newAuthor}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div>
              <label>Name</label>
              <input
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
              />
            </div>

            <div>
              <label>Email</label>
              <input
                type="text"
                id="email"
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
                name="email"
              />
            </div>

            <button onClick={this.saveAuthor} >
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}