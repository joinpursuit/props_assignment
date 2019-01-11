import React, { Component } from 'react';
import Feed from "../src/feed.js"
import './App.css';
let allPost = require('../src/blog_posts.json')

class App extends Component {
      constructor() {
          super()
          this.state = {
            allPost
          }
        }

    render(){
    return (
      <Feed allPosts = {this.state.allPost} />
    );
  }
}

export default App;
