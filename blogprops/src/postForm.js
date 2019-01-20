import React from 'react'


const PostForm = (props) => {

  // console.log(props , "this")


  return(
    <>
    <form onSubmit={props.handleSubmit}>

      <label Htmlfor="postTitle">Title</label>
        <input name="postTitle" type="text" value={props.postTitle} onChange={props.handleChange} />
        <br />
      <label Htmlfor="postBody">Body</label>
        <input name="postBody" type="text" value={props.postBody} onChange={props.handleChange} />
        <br />

      <input type="submit" value="Submit" />


    </form>
    </>
  )

}

export default PostForm;
