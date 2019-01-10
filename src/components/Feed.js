import React from "react";
import Post from "./Post";

const Feed = props => {
  //console.log(props.allPosts);
  const { allPosts } = props;
  const posts = allPosts.map(post => {
    return <Post key={post.id} id={post.id} title={post.title} body={post.body} />;
  });
  return <>{posts}</>;
};

export default Feed;
