import React from "react";
import Posts from "./posts.js";

const Feed = props => {
  return (
    <div>
      <p>post</p>
      {props.allPosts.map(post => (
        <Posts post={post} />
      ))}
    </div>
  );
};

export default Feed;
