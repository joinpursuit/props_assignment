import React from "react";
import Post from "./post.js";

const Feed = props => {
  let post = props.allPosts.map(data => {
    return (
      // <div>
      <Post title={data.title} body={data.body} id={data.id} />
      // <p>{data.id}</p>
      // <p>{data.title}</p>
      // <p>{data.body}</p>
      // </div>
    );
  });
  return <>{post}</>;
};

export default Feed;
