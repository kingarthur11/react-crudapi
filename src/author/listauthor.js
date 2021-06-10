import React, { Component } from "react";
import AuthoDataService from "../service";

export default class TutorialsList extends Component {
  constructor(props) {
    super(props);
    this.getallAllAuthors = this.getallAllAuthors.bind(this);

    this.state = {
      authors: [],
    };
  }

  componentDidMount() {
    this.getallAllAuthors();
  }

  getallAllAuthors() {
    AuthoDataService.getAll()
      .then(response => {
        this.setState({
            authors: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { authors } = this.state;

    return (
      <div>
        <div>
          <h4>Tutorials List</h4>
            {authors &&
              authors.map((author, index) => (
                <ul>
                    <li>
                        {author.name}
                    </li>
                    <li>
                        {author.name}
                    </li>
                </ul>
              ))}
        </div>
      </div>
    );
  }
}