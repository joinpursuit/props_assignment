import React from "react";
import Post from "./Post";

const Feed = props => {
  let posts = props.allPosts;
  const postList = posts.map(post => {
    return <Post key={post.id} eachPost={post} />;
  });
  return (
    <>
      <ul>{postList}</ul>
    </>
  );
};

export default Feed;
