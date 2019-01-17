import React, { Component } from 'react';
import './App.css';
import { Feed } from './feed.js';


const blogPosts = require('./blog_posts.json')

class App extends Component {
  constructor() {
    super();
    this.state = {
      allPosts: blogPosts, //array, assigned as props later on
      titleInput: "",
      bodyInput: "",
      invalidInput: false
    }
  }

  handleTextChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = () => {
    let { titleInput, bodyInput, invalidInput } = this.state;
    if (!titleInput || !bodyInput) {
      this.setState({invalidInput: true})
    } else {
      let posts = [...this.state.allPosts];
      let newBody = bodyInput;
      let newTitle = titleInput;
      let newId = posts.length;
      let date = new Date();
      let dateStr = date.toDateString()
      let newPost = { id: newId,
                      title: newTitle,
                      body: newBody,
                      date: dateStr }
      posts.push(newPost);
      this.setState({
        allPosts: posts,
        titleInput: "",
        bodyInput: "",
        invalidInput: false
      })
    }
  }

  render() {
    console.log("In App", this.state.allPosts, typeof this.state.allPosts) //returns "object", since json is an object no matter what
    let { allPosts, titleInput, bodyInput, invalidInput} = this.state;
    return (
      <div className="App">
        <h1>A Pirate's Blog</h1>
        <Feed
          posts={allPosts}
          postTitle={titleInput}
          postBody={bodyInput}
          handleSubmit={this.handleSubmit}
          handleTextChange={this.handleTextChange}
          /> {/*creates a new object called props which contains the posts property, which contains the array, passing it in as the props into Feed component.*/}
        {invalidInput ? <em>*Please fill in both title and body</em> : ""}
      </div>
    );
  }
}

export default App;

// bonus: add date
