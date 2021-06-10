import React, { Component } from "react";
import AuthoDataService from "../comment.service";

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeBody = this.onChangeBody.bind(this);
    this.saveComment = this.saveComment.bind(this);
    this.newComment = this.newComment.bind(this);

    this.state = {
      id: null,
      name: "",
      body: "",
    };
  }

  onChangeName(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeBody(e) {
    this.setState({
      description: e.target.value
    });
  }

  saveComment() {
    var data = {
      name: this.state.name,
      body: this.state.body
    };

    AuthoDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          body: response.data.body,
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newComment() {
    this.setState({
      id: null,
      name: "",
      body: "",
    });
  }

  render() {
    return (
      <div>
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button onClick={this.newComment}>
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
              <label>body</label>
              <input
                type="text"
                id="body"
                required
                value={this.state.body}
                onChange={this.onChangeBody}
                name="body"
              />
            </div>

            <button onClick={this.saveComment} >
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}