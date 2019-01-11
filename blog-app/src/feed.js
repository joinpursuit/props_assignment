import React, { Component } from 'react';
import Post from "../src/post.js"

class Feed extends Component {
  constructor(props){
    super(props)
  }

  listings = (props) => {
    const {allPosts} = this.props
    //  console.log(this.props.allPosts)
     let data = allPosts.map((el) => {
       return <Post title = {
         el.title
       }
       body = {
         el.body
       }
       />
     })
    return data
   
  }
  
  render() {
    return (
      <div>{this.listings()}</div>
    );
  }
}

export default Feed;
