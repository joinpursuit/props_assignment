import React from "react";

const PostForm = ({ handleTextChange, postBody, postTitle, handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>{" "}
        <input
          type="text"
          name="title"
          value={postTitle}
          placeholder="enter you title"
          onChange={handleTextChange}
        />{" "}
        <br />
        <label htmlFor="body">Your Post</label>
        <br />{" "}
        <textarea
          rows="5"
          cols="25"
          wrap="soft"
          overflow="scroll"
          type="text"
          name="body"
          value={postBody}
          onChange={handleTextChange}
          placeholder="enter you comment"
        />
        <br />
        <input type="submit" value="Submit your post" />
      </form>
    </>
  );
};

export default PostForm;
