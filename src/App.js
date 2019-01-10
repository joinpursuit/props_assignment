import React, { Component } from "react";
import "./App.css";
import allPosts from "./blog_posts.json";
import Feed from "./components/Feed";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allPosts: allPosts
    };
  }
  render() {
    const { allPosts } = this.state;
    return (
      <>
        <h1>myApp</h1>
        <Feed allPosts={allPosts} />
      </>
    );
  }
}

export default App;
