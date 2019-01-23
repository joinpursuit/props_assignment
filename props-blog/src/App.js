import React, { Component } from "react";

import Feed from "./components/feed.js";

import "./App.css";

const postList = require("./blog_posts.json");

class App extends Component {
  constructor() {
    super();
    this.state = {
      allPosts: postList
    };
  }

  render() {
    console.log(this.state.allPosts);

    return (
      <div className="App">
        <h1> Posts on Posts</h1>
        <Feed allPosts={this.state.allPosts} />
      </div>
    );
  }
}

export default App;
