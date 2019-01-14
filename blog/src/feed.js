import React from "react";
import { Post } from './post.js'

export const Feed = (props) => {
  let postArr = props.allPosts.map(p => {
    return <Post post={props.allPosts}/>
  })
  return (
    <div>
      {postArr}
    </div>
  )
}
