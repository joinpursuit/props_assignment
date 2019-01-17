import React from "react";

const Post = ({ eachPost: { title, body, id }, deletePost }) => {
  // let { title, body, id } = props.eachPost;
  return (
    <div className="single-post" id={id}>
      <h3>{title}</h3>
      <p>{body}</p>
      <span id="hidden">
        <p id="post-id">Post ID: {id}</p>
        <button id="delete-button" onClick={() => deletePost(id)}>
          Delete Post
        </button>
      </span>
    </div>
  );
};

export default Post;
