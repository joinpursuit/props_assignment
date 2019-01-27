import React, { Component } from 'react';
import Feed from "../src/feed.js"
import './App.css';
import PostForms from "../src/postForms.js"
let allPost = require('../src/blog_posts.json')


class App extends Component {
      constructor() {
          super()
          this.state = {
            allPost: allPost,
            postTitle : "",
            postBody : ""
          }
        }

// handleBodyChange = (event) => {
//  this.setState({
//     postBody: event.target.value
//   })
// }

handleButtonClick = (event) => {
event.preventDefault()
//if Statment here 
let newArray = this.state.allPost

newArray.push({
            id: this.state.allPost.length + 1,
            title: this.state.postTitle,
            body: this.state.postBody
})

this.setState({
  allPost: newArray
})
}

handleTitleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  })
}
    
render(){
    return (
      <>
      <Feed allPosts = {this.state.allPost} states = {this.state} handleButtonClick = {this.handleButtonClick} handleTitleChange = {this.handleTitleChange} />
      </>
    );
  }
}

export default App;
