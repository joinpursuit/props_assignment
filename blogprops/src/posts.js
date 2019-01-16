
import React from 'react';

//this is going to be a functional component

const Posts = ({eachpost: {id,title,body}}) => {
  // let {id,title,body} = props.eachpost
  console.log(body, "this is the props")

return(
  <>
  <div>
  <h3>Title: {title}</h3>
  <br />
  <p>Body:
    <br />
    {body}</p>
</div>
  </>
)

}


export default Posts;

// In the return, place the post's title in an h3 tag, the body in a p tag, and wrap the whole thing in a section tag with an id attribute corresponding to the id prop.
