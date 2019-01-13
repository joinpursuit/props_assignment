import React from "react";
import Post from "./Post";

const Feed = props => {
  console.log(props.allposts);
  const { allposts } = props;
  const posts = allposts.map(post => {
    return <Post id={post.id} title={post.title} body={post.body} />;
  });
  return <>{posts}</>;
};

export default Feed;
