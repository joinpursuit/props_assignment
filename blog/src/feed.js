import React from "react";
import { Post } from './post.js'
import { PostForm } from './PostForm.js'

export const Feed = (props) => { //this.state.allPosts is in the props, now stored in the posts property
  console.log("in Feed ",props, typeof props) //Props {posts: Array(5)}
  const { posts, postTitle, postBody, handleSubmit, handleTextChange } = props
  let postArr = posts.map(post => { //post is going to be the next props
    //mapping out each post and storing in the postArr variable.
    //making new prop names: id2, title2, body2 and passing them in from posts.
    return <Post id2={post.id} title2={post.title} body2={post.body} date2={post.date}/>
  })
  return (
    <div>
      {postArr}
      <h3>Create a new post:</h3>
      <PostForm
        postTitle={postTitle}
        postBody={postBody}
        handleSubmit={handleSubmit}
        handleTextChange={handleTextChange}
        />
    </div>
  )
}
