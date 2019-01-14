///-------------
app.js:
//-------------
import React from 'react'
import './blog_posts.json'
import { Feed } from './feed.js'

class Apps extends React.Component {
  constructor () {
    super()
    this.state = {
      allPosts: [],

    }
    console.log(this.state.allPosts);
    // debugger
  }


  getBlogPosts = () => {
    fetch('./blog_posts.json')
    .then (response => {
      console.log(response);
      return response
    })
    .then(res => {
      this.setState({ allPosts: res })

      // debugger
    })
  }

  render() {
    let posts = this.state.allPosts.map(post => {
      return (
        <Feed id={post.id} title={post.title} body={post.body} />
      )
    })


    return (
      <>
        <button onClick={this.getBlogPosts}> Get Posts </button>
        {posts}
      </>

    )
    // debugger
  }

}

export default Apps


// <Feed
// allPosts={this.state.allPosts} />

///--------------------
end of apps.js
///-------------------

import React from 'react'
import './blog_posts.json'
import { Feed } from './feed.js'
// import blog from './blog_posts.json'

class Apps extends React.Component {
  constructor () {
    super()
    this.state = {
      allPosts: [],

    }
    console.log(this.state.allPosts);
    // debugger
  }


  getBlogPosts = () => {
    fetch('./blog_posts.json')
    .then (response => {
      return response.json()
    })
    .then(res => {
      debugger
      this.setState({ allPosts: res })

      // debugger
    })
  }

  render() {
    debugger
    let posts = this.state.allPosts.map(post => {
      return (
        <Feed id={post.id} title={post.title} body={post.body} />
      )
    })


    return (
      <>
        <button onClick={this.getBlogPosts}> Get Posts </button>
        {posts}
      </>

    )
    // debugger
  }

}

export default Apps


// <Feed
// allPosts={this.state.allPosts} />
//-------------
apps.js again
///--------------
