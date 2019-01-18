import React, { Component } from 'react';
import {Feeds} from "./Feed.js";
const allPosts = require("./blog_posts.json");

class App extends Component {
  constructor() {
    super()
    this.state = {
      allPosts: allPosts
    }
  }
  render() {
    return (
      <div>
        <Feeds allPosts={this.state.allPosts} />
      </div>
    );
  }
}

export default App;
