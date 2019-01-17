import React from "react";
import Post from "./Post";

const Feed = ({ allPosts, deletePost }) => {
  let posts = allPosts;
  const postList = posts.map(post => {
    return <Post key={post.id} deletePost={deletePost} eachPost={post} />;
  });
  return (
    <>
      <ul>{postList}</ul>
    </>
  );
};

export default Feed;
