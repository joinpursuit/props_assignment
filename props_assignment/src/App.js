import React, { Component } from "react";
import "./App.css";
import jsonPosts from "./posts.json";
import Feed from "./Feed";
import Newpost from "./Newpost";

class App extends Component {
  constructor() {
    super();
    this.posts = jsonPosts;
    this.state = {
      allPosts: this.posts,
      currentPost: { title: "", body: "" },
      err: false
    };
  }

  changeHandler = e => {
    if (e.target.id) {
      let newState = this.state[e.target.name];
      newState[e.target.id] = e.target.value;
      this.setState({
        [e.target.name]: newState
      });
    }
  };

  deletePost = id => {
    const tempArr = this.state.allPosts.slice(0);
    const index = this.state.allPosts.findIndex(post => post.id === id);
    tempArr.splice(index, 1);
    this.setState({
      allPosts: tempArr
    });
  };

  handleClick = e => {
    e.preventDefault();
    const { allPosts, currentPost } = this.state;
    const newArr = allPosts.slice(0);
    if (currentPost.title && currentPost.body) {
      let id = 0;
      newArr.length ? (id = newArr[0]["id"] + 1) : (id = 1);
      newArr.unshift({ ...currentPost, id: id });
      this.setState({
        allPosts: newArr,
        currentPost: { title: "", body: "" },
        err: false
      });
    } else {
      this.setState({
        err: true
      });
    }
  };

  render() {
    console.log(this.state);
    return (
      <div className="main">
        <h1>Welcome To Blog Post</h1>
        <Newpost
          handleClick={this.handleClick}
          changeHandler={this.changeHandler}
          currentPost={this.state.currentPost}
          id={this.state}
        />
        {this.state.err ? (
          <p id="alert">Please Enter a valid intput for both fields</p>
        ) : null}
        <Feed allPosts={this.state.allPosts} deletePost={this.deletePost} />
      </div>
    );
  }
}

export default App;
