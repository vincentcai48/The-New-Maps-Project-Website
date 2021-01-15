import React from "react";
import { auth, firestore, timestamp } from "../config/firebase";
import Login from "./Login";

class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: Boolean(auth.currentUser),
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged((a) => {
      if (a.uid) {
        this.setState({ isLoggedIn: true });
      } else {
        this.setState({ isLoggedIn: false });
      }
    });
  }

  changeState = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value, message: "" });
  };

  addNews = () => {
    firestore
      .collection("news")
      .add({
        title: this.state.newsTitle,
        text: this.state.newsText,
        timestamp: timestamp.serverTimestamp(),
      })
      .then((doc) =>
        this.setState({
          message: 'Added "' + this.state.newsTitle + '" successfully!',
        })
      );
  };

  logout = () => {
    auth.signOut();
  };

  render() {
    if (!this.state.isLoggedIn) {
      return <Login />;
    }
    return (
      <div id="dev-console-container">
        <h2>Developer Console</h2>
        <div>
          <form id="add-news">
            <h3>Add News</h3>
            <input
              id="text-first"
              type="text"
              name="newsTitle"
              onChange={this.changeState}
              placeholder="Title"
            ></input>
            <textarea
              name="newsText"
              onChange={this.changeState}
              placeholder="Text"
            ></textarea>
            <div id="login-error-message">{this.state.message}</div>
            <button
              type="button"
              onClick={this.addNews}
              style={{ marginRight: "10px" }}
            >
              Add News
            </button>
            <button type="button" onClick={this.logout}>
              Logout
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Admin;
