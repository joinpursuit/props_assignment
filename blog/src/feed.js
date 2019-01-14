import React from "react";
import { Post } from './post.js'

export const Feed = (props) => {
  const { allPosts } = props;
  let postArr = allPosts.map(post => {
    return <Post id={post.id} title={post.title} body={post.body}/>
  })
  return (
    <div>
      {postArr}
    </div>
  )
}
