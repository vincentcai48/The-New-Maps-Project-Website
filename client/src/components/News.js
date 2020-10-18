import React from "react";
import { firestore } from "../config/firebase";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    firestore
      .collection("news")
      .get()
      .then((docs) => {
        var tempArr = [];
        docs.forEach((doc) => {
          tempArr.push({
            title: doc.data().title,
            text: doc.data().text,
            timestamp: doc.data().timestamp,
          });
        });
        this.setState({ posts: tempArr });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h2 id="news-text">NEWS</h2>
        {this.state.posts.map((e) => {
          return (
            <div className="post" key={e.title}>
              <div class="news fas fa-newspaper">NEWS</div>
              <h5>{e.title}</h5>
              <p>{e.text}</p>
              <div
                style={{ opacity: "0.7", color: "#faffe4", marginLeft: "20px" }}
              >
                {e.timestamp.toDate().toString()}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default News;
