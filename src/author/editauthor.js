import React, { Component } from "react";
import AuthoDataService from "../author.service";

export default class EditAuthor extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.getAuthor = this.getAuthor.bind(this);
    this.updateAuthor = this.updateAuthor.bind(this);
    this.deleteAuthor = this.deleteAuthor.bind(this);

    this.state = {
      currentAuthor: {
        id: null,
        name: "",
        email: "",
      },
    };
  }

  componentDidMount() {
    this.getAuthor(this.props.match.params.id);
  }

  onChangeName(e) {
    const name = e.target.value;

    this.setState(function(prevState) {
      return {
        currentAuthor: {
          ...prevState.currentAuthor,
          name: name
        }
      };
    });
  }

  onChangeEmail(e) {
    const email = e.target.value;
    
    this.setState(prevState => ({
      currentAuthor: {
        ...prevState.currentAuthor,
        email: email
      }
    }));
  }

  getAuthor(id) {
    AuthoDataService.get(id)
      .then(response => {
        this.setState({
            currentAuthor: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentAuthor.id,
      name: this.state.currentAuthor.name,
      email: this.state.currentAuthor.email,
    };

    AuthoDataService.update(this.state.currentAuthor.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentAuthor: {
            ...prevState.currentAuthor,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateAuthor() {
    AuthoDataService.update(
      this.state.currentAuthor.id,
      this.state.currentAuthor
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The author was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteAuthor() {    
    AuthoDataService.delete(this.state.currentAuthor.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/author')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentAuthor } = this.state;

    return (
      <div>
          <div>
            <h4>Author</h4>
            <form>
              <div>
                <label>Author</label>
                <input
                  type="text"
                  id="name"
                  value={currentAuthor.name}
                  onChange={this.onChangeName}
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="text"
                  id="email"
                  value={currentAuthor.email}
                  onChange={this.onChangeEmail}
                />
              </div>
            </form>


            <button
              onClick={this.deleteAuthor}
            >
              Delete
            </button>

            <button
              type="submit"
              onClick={this.updateAuthor}
            >
              Update
            </button>
          </div>
      </div>
    );
  }
}
