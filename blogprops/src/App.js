import React, { Component } from 'react';
import Feed from './feed.js'
// import Posts from './posts.js'

import './App.css';
// import AllPosts from './posts.js'
let allPosts = require('./blog_posts.json');




class App extends Component {
  constructor(){
     super()
     this.state = {
       posts: allPosts
     }
  }

  // loopPosts(){
  //   let postArr;
  //   postArr = allPosts.map(posts => {
  //     return posts
  //   })
  //   console.log(postArr[2].title)
  //   return postArr;
  // }

  render() {
    console.log(this.state.posts,"this")

    return (
      <>
      <h2>Blog Posts</h2>

    <Feed allPosts={this.state.posts} />




      </>
    );
  }
}

export default App;

// <button onClick={this.loopPosts}>draw</button>
// <Feed posts={this.state.posts} />
