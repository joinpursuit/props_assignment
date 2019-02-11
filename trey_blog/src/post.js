import React from 'react'

const Post = ({id, body, title}) => {

  return(
    <section className='section' id={id}>
      <h3>{title}</h3>
      <p>{body}</p>
    </section>
  )
}

export default Post
