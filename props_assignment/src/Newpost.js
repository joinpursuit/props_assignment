import React from "react";

const Newpost = ({ currentPost, changeHandler, id, handleClick }) => {
  return (
    <>
      <div className="input-area">
        <input
          name="currentPost"
          id="title"
          type="text"
          placeholder="Rant Title"
          value={currentPost.title}
          onChange={changeHandler}
        />
        <textarea
          name="currentPost"
          id="body"
          placeholder="Your Rant Goes Here. Remember, NO ONE CARES!"
          type="text"
          value={currentPost.body}
          onChange={changeHandler}
        />
        <input
          id="add-post"
          type="submit"
          value="Add New Post"
          onClick={handleClick}
        />
      </div>
    </>
  );
};

export default Newpost;
