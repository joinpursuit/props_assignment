import React, { Component } from 'react';
import Feed from './Feed.js';
import Post from './Post.js'
const allPosts = require('./blog_posts.json');


class App extends Component {
  constructor() {
    super();
      this.state = {
        allPosts: allPosts
    }
  }

  render() {
    return (
      <>
      <div className="posts">
        < Feed allPosts={this.state.allPosts} />
        <Post />
      </div>
      </>
    );
  }
}
export default App;
