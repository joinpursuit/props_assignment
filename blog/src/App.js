import React, { Component } from "react";
import "./App.css";
import Feed from "./Feed.js";
import allposts from "./blog_posts.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allposts: allposts
    };
  }
  render() {
    return (
      <>
        <h1>My Blog</h1>
        <Feed allposts={this.state.allposts} />
      </>
    );
  }
}

export default App;
