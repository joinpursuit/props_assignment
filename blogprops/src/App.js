import React, { Component } from 'react';
import Feed from './feed.js'
import './App.css';
let allPosts = require('./blog_posts.json');




class App extends Component {
  constructor(){
     super()
     this.state = {
       posts: allPosts,
       postTitle: "",
       postBody: "",

     }
     this.handleChange = this.handleChange.bind(this)
     this.handleSubmit = this.handleSubmit.bind(this)
  }

handleChange(event){

  this.setState({
[event.target.name]: event.target.value
  })
}

// {id: 1, title: "hello", body: "hi there"}

handleSubmit(event){
  event.preventDefault();
  if(this.state.postTitle && this.state.postBody){
    let tempState = [...this.state.posts]

    let newPost = {
      title: this.state.postTitle,
      body: this.state.postBody,
      id: tempState[tempState.length - 1].id + 1
    }

    tempState.push(newPost)
    this.setState({
      posts: tempState,
      postTitle: "",
      postBody: ""
    })
  }else if(!this.state.postTitle || !this.state.postBody){
    return(
      <>
    <p>"please enter for both inputs please"</p>
    </>
    )
  }

}
  render() {
// console.log(this.state)

    return (
      <>
      <h2>Blog Posts</h2>

    <Feed allPosts={this.state.posts}
      handleChange={this.handleChange}
      postTitle={this.state.postTitle}
      postBody={this.state.postBody}
      handleSubmit={this.handleSubmit}/>




      </>
    );
  }
}

export default App;
