import React from "react";

export const Post = (props) => {
  console.log("in Post ",props, typeof props) // Props: {id2: .., title2: .., body2: ..}
  let {id2, title2, body2, date2} = props
  let firstSpaceIdx = body2.indexOf(" ");
  let firstWord = body2.slice(0,firstSpaceIdx);
  let restOfBody = body2.slice(firstSpaceIdx);

  return (
    <section id={id2}> {/*creating the html tags to be rendered*/}
    <h3 id="title">{date2 ? date2+": " : ""}{title2}</h3>
    <p><span>{firstWord}</span>{restOfBody}</p>
    </section>
  )
}
