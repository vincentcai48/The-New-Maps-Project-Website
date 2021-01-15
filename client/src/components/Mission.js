import React from "react";
import { firestore } from "../config/firebase";

class Mission extends React.Component {
  constructor() {
    super();
    this.state = {
      mainText: "",
      secondaryText: "",
    };
  }

  componentDidMount() {
    firestore
      .collection("settings")
      .doc("mission")
      .get()
      .then((doc) => {
        this.setState({
          mainText: doc.data().main,
          secondaryText: doc.data().secondary,
        });
      });
  }

  render() {
    return (
      <div id="mission-container">
        <h2>Mission</h2>
        <section id="mission-main">{this.state.mainText}</section>

        <section id="mission-secondary">{this.state.secondaryText}</section>
      </div>
    );
  }
}

export default Mission;
