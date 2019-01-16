import React from 'react'
import Posts from './posts.js'


const Feed = ({allPosts}) => {

let thePosts = allPosts.map(posts => {
  return <Posts key={posts.id} eachpost={posts} />
  })

  return(
    <>
    <p>{thePosts}</p>
    </>
  )

}


export default Feed;
// let postList = allPosts.map(posts => {
//   return <posts key={posts.id} eachPost={posts} />;
//   })
//
//   return (
//      <>
//        <ul>{postList}</ul>
//      </>
//  )
