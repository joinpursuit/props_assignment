import React, { Component } from "react";
import "./App.css";
import Feed from "./Feed.js";
import allPosts from "./blog_posts.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allPosts: allPosts,
      newPost: {
        title: "",
        body: ""
      }
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextChange = event => {
    let newPost = { ...this.state.newPost };
    newPost[event.target.name] = event.target.value;
    this.setState({ newPost });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { allPosts, newPost } = this.state;

    if (newPost.title && newPost.body) {
      const oldPosts = [...this.state.allPosts];
      oldPosts.push({ id: allPosts.length + 1, ...newPost });
      // console.log("this is old", oldPosts);
      this.setState({
        allPosts: oldPosts,
        newPost: {
          title: "",
          body: ""
        }
      });
    } else if (!newPost.title || !newPost.body) {
      return <p>please enter valid input</p>;
    }
  };

  render() {
    console.log(this.state);
    const { allPosts } = this.state;
    const { title, body } = this.state.newPost;
    return (
      <>
        <h1>My Blog</h1>
        <Feed
          allPosts={allPosts}
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
