import React, { Component } from 'react';


  const Post = (props) => {
    return (
    <>
    <h1>{props.title}</h1>
    <p>{props.body}</p>
    </>
    )
  }

export default Post;
