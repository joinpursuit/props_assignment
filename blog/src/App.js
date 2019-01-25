import React, { Component } from 'react';
import './App.css';
import Feed from './Feed.js';
import posts from './posts_list.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allPosts: posts,
      newPost: {
        title: "",
        body: ""
      }

    };
  }

  handleTextChange = (e) => {
    let newPost = {...this.state.newPost}
    newPost[e.target.name] = e.target.value;
    this.setState({newPost})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { allPosts, newPost } = this.state;
    if (newPost.title="" && newPost.body=""){
      
    }
    const newPosts = [...allPosts];
    const newerPost = {id: allPosts.length +1, ...newPost}
    newPosts.unshift(newerPost);

    this.setState({newPost: {
      title: "",
      body: ""
    },
    allPosts: newPosts
    })
  }

  render() {
    const { allPosts } = this.state;
    const { title, body } = this.state.newPost

    return (
      <>
        <Feed
        allPosts = {allPosts}
        handleTextChange={this.handleTextChange}
        handleSubmit={this.handleSubmit}
        postTitle={title}
        postBody={body}
        />
      </>
    );
  }
}

export default App;
