import React from "react";
import {Posts} from "./Post.js"


export const Feeds = (props) => {
  console.log(props.allPosts);
  let thePosts = props.allPosts.map(post => {
    return <Posts key={post.id} title={post.title} body={post.body} />
  })
  return (
    <>
      {thePosts}
    </>
  )
}
