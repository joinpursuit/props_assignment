import React, { Component } from 'react';
import './App.css';
import Feed from './feed.js'

let allPosts = require('./blog_posts.json')

class App extends Component {
  constructor(){
    super()
    this.state = {
      allPosts: allPosts
    }
  }
  render() {

    // console.log(this.state.allPosts)
    return (
      <div className="App">
      <Feed allPosts={this.state.allPosts}/>

      </div>
    );
  }
}

export default App;
