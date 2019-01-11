import React, { Component } from 'react';
import './App.css';
import Feed from './feed.js'

let displayPosts = require('./blog_posts.json')

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayPosts: displayPosts
    }
  }

  render() {
    return (
      <div>
        <h1>My App</h1>
        <Feed displayPosts={this.state.displayPosts} />
      </div>
    );
  }
}

export default App;
