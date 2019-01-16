import React, {Component} from "react"

class PostForms extends Component{
  constructor(props) {
    super(props);
  }
  


 render(){
   let {props} = this.props
   console.log("PostForms")
   console.log(props)
  return(
    <div className= "postAform"> 
    <form  onSubmit= {props.handleButtonClick}>
    <h1>Post a Post</h1>
    <input required name = "postTitle" onChange = {props.handleTitleChange} className = "title" type="input" placeholder="Title"/>
    <textarea required name= "postBody" onChange = {props.handleTitleChange} className="body" placeholder = "Post"></textarea>
    <input className= "button" type="submit" />
    </form>
    <hr></hr>
    </div>
    
  )
} 

}



export default PostForms