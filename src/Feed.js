import React from "react";
import Post from "./Post"

const Feed = props => {
  const userPosts = props.allPosts.map(post => {
    return (
      <Post
      id={post.id}
      title={post.title}
      body={post.body}
      />
    )
  });
  return (

    <ul>{userPosts}</ul>
  );
};

export default Feed;
