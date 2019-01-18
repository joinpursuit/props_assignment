import React from "react";


export const Posts = ({ id, title, body }) => {
  return (
    <>
      <section id={id}>
        <h3>{title}</h3>
        <p>{body}</p>
      </section>
    </>
  )
}
