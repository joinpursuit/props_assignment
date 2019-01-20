import React from 'react'
import Posts from './posts.js'
import PostForm from './postForm.js'

const Feed = ({allPosts, handleChange, postTitle, postBody, handleSubmit}) => {

let thePosts = allPosts.map(posts => {
  return <Posts key={posts.id} eachpost={posts} />
  })

  return(
    <>
    <PostForm posts={allPosts}
       handleChange={handleChange}
      postTitle={postTitle}
       postBody={postBody}
      handleSubmit={handleSubmit}/>
    <p>{thePosts}</p>
    </>
  )

}


export default Feed;
