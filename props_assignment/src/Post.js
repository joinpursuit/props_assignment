import React from "react";

const Post = props => {
  let { title, body, id } = props.eachPost;
  return (
    <section id={id}>
      <h1>Post {id}</h1>
      <h3>{title}</h3>
      <p>{body}</p>
    </section>
  );
};

export default Post;
