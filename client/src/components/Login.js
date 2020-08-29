import React from "react";
import { auth, firestore, timestamp } from "../config/firebase";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      email: "",
      password: "",
      message: "",
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ isAuthenticated: true });
      } else {
        this.setState({ isAuthenticated: false });
      }
    });
  }

  login = async () => {
    console.log(this.state.email, this.state.password);
    await auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch((err) => this.setState({ message: err.message }));
    document.querySelector("#add-news #text-first").value = "";
  };

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
    if (this.state.isAuthenticated) {
      return (
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
      );
    } else {
      return (
        <div>
          <form id="login-form">
            <input
              type="text"
              name="email"
              onChange={this.changeState}
              placeholder="Email"
            ></input>
            <input
              type="password"
              name="password"
              onChange={this.changeState}
              placeholder="Password"
            ></input>
            <div id="login-error-message">{this.state.message}</div>
            <button type="button" onClick={this.login}>
              Submit
            </button>
          </form>
        </div>
      );
    }
  }
}

export default Login;
