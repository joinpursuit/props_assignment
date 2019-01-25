import React from "react";

const PostForm = ({ postTitle, postBody, handleTextChange, handleSubmit }) => {
  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        <label> Title </label>
        <input
          type="text"
          name="title"
          value={postTitle}
          onChange={handleTextChange}
          placeholder="Title goes here"
        />
        <label> Body </label>
        <input
          type="text"
          name="body"
          value={postBody}
          onChange={handleTextChange}
          placeholder="Type your life away"
        />
        <input type="submit" value="submit" />
      </form>
    </>
  );
};

export default PostForm;

//onChange={this.handleTextChange}
