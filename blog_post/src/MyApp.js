import React from 'react'
import './blog_posts.json'
import { Feed } from './Feed.js'
import blog_posts from './blog_posts.json'

class MyApp extends React.Component {
  constructor () {
    super()
    this.state = {
      allPosts: [],
    }
    // debugger
  }


  getBlogPosts = () => {
      this.setState({ allPosts: blog_posts })
      // debugger
  }

  render() {
// debugger
    let posts = this.state.allPosts.map(post => {
      return (
        <Feed key={post.id} id={post.id} title={post.title} body={post.body} />
      )
    })

    return (
      <>
        <button onClick={this.getBlogPosts}> Get Posts </button>
        {posts}
      </>
    )
  }
}

export default MyApp


// <Feed
// allPosts={this.state.allPosts} />
