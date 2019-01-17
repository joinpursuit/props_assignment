import React from "react";

export const PostForm = (props) => {
  console.log(props)
  // Props: { postTitle: .., postBody: .., handleTextChange: .., handleSubmit: ..}
  return (
    <div id="form">
      <form onChange={props.handleTextChange}>
        <input
          id="title"
          type="text"
          name="titleInput"
          value={props.postTitle}
          placeholder="title"
          />
        <input
        id="body"
        type="text"
        name="bodyInput"
        value={props.postBody}
        placeholder="body"
        />
      </form>
      <button onClick={props.handleSubmit}>SUBMIT</button>
    </div>
  )
}
