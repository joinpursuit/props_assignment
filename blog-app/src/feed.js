import React, { Component } from 'react';
import PostForms from "../src/postForms.js"
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
   console.log("Feed:" + this.props)
    return (
      <div>
      <PostForms props = {this.props}/>
      {this.listings()}
      </div>
    );
  }
}

export default Feed;
