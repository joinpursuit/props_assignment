import React from 'react'

export const Feed = ({id, title, body}) => {
  return (
    <div>
      Id: {id}
      <br/>
      Title: {title}
      <br/>
      Body: {body}
    </div>
  )
}
