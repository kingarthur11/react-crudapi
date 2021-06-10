import React, { Component } from "react";
import AuthoDataService from "../comment.service";


export default class Tutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeBody = this.onChangeBody.bind(this);
    this.getComment = this.getComment.bind(this);
    this.updateComment = this.updateComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);

    this.state = {
      currentComment: {
        id: null,
        name: "",
        email: "",
      },
    };
  }

  componentDidMount() {
    this.getComment(this.props.match.params.id);
  }

  onChangeName(e) {
    const title = e.target.value;

    this.setState(function(prevState) {
      return {
        currentComment: {
          ...prevState.currentComment,
          title: title
        }
      };
    });
  }

  onChangeBody(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentComment: {
        ...prevState.currentComment,
        description: description
      }
    }));
  }

  getComment(id) {
    AuthoDataService.get(id)
      .then(response => {
        this.setState({
            currentComment: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentComment.id,
      name: this.state.currentComment.name,
      email: this.state.currentComment.email,
    };

    AuthoDataService.update(this.state.currentComment.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentComment: {
            ...prevState.currentComment,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateComment() {
    AuthoDataService.update(
      this.state.currentComment.id,
      this.state.currentComment
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

  deleteComment() {    
    AuthoDataService.delete(this.state.currentComment.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/author')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentComment } = this.state;

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
                  value={currentComment.name}
                  onChange={this.onChangeName}
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="text"
                  id="email"
                  value={currentComment.email}
                  onChange={this.onChangeBody}
                />
              </div>
            </form>


            <button
              onClick={this.deleteComment}
            >
              Delete
            </button>

            <button
              type="submit"
              onClick={this.updateComment}
            >
              Update
            </button>
          </div>
      </div>
    );
  }
}
