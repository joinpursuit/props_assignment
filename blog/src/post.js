import React from "react";

export const Post = (props) => {
// console.log(props)
  let {id, title, body} = props
  let firstSpaceIdx = body.indexOf(" ");
  let firstWord = body.slice(0,firstSpaceIdx);
  let restOfBody = body.slice(firstSpaceIdx);

  return (
    <section id={id}>
    <h3 id="title">{title}</h3>
    <p><span>{firstWord}</span>{restOfBody}</p>
    </section>
  )
}
