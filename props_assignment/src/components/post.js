import React from 'react';

const Post = props => {
  const { id, title, body } = props;
  return (
    <section id={id}>
      <h3>Title: {title}</h3>
      <p>Body: {body}</p>
    </section>
  );
};

export default Post;