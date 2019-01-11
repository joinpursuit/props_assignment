import React, { Component } from 'react'
import Post from './post.js'

class Feed extends Component {
  render() {
    const { displayPosts } = this.props;

      const feeding = displayPosts.map(post => {
        return (
          <Post
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          />
      )
  })
  console.log(feeding);
    return (
      <div>
      {feeding}
      </div>
    );
  }
}



export default Feed
