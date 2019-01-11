import React, { Component } from "react";
import "./App.css";
import posts from "./blog_posts.js";
import Feed from "./Feed";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allPosts: posts
    };
  }
  render() {
    return <Feed allPosts={this.state.allPosts} />;
  }
}

export default App;
