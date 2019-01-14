import React from "react";

export const Post = (props) => {
console.log(props)
  let {id, title, body} = props.post.allPosts
  return (
    <section id={id}>
    <h3>{title}</h3>
    <p>{body}</p>
    </section>
  )
}
