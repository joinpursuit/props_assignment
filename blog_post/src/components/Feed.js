import React from 'react'
import { Post } from './Post'

export const Feed = (props) => {
  console.log(props.allPosts);

  let allPosts = props.allPosts.map(eachPost => {
    return <Post key={eachPost.id} post={eachPost}/>
  })

  return (
    <div>
      {allPosts}
    </div>
  )
}


// <div>
// {props.id}  <br/>
// {props.allPosts.id} {' - '}
// {props.allPosts.title} {' - '}
// {props.allPosts.body}
// {/* {props.allPosts} */}
// </div>
