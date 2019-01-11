import React from 'react';
import './App.css';
import Feed from './components/feed';
import allPosts from './blog_posts.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allPosts: allPosts
    }
  }


  render() {
    const {allPosts} = this.state;
    return (
      <>
        <h1>My First Blog</h1>
        <Feed allPosts = {allPosts} /> 
      </>
    );
  }
}

export default App;
