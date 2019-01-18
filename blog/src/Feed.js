import React from 'react';
import Post from "./Post.js"


const Feed = (props) => {
  console.log(props.allPosts);
  let thePosts = props.allPosts.map(post => {
    return<Post title={post.title} body={post.body} />
  })
  return (
    <>
    {thePosts}
    </>
  )
}

export default Feed
