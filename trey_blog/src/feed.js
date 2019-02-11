import React from 'react';
import Post from './post.js'

const Feed = (props) => {
  return (

    <>
     {props.allPosts.map(post => {
       return(
        <div>
         <Post id={post.id} title={post.title} body={post.body} />
        </div>
       )
     })}
    </>
  )
}

export default Feed
