import React from "react";

const Post = ({ id, title, body }) => {
  return (
    <section id={id}>
      <h3>{title}</h3>
      <p>{body}</p>
    </section>
  );
};

export default Post;
