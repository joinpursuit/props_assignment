import React from 'react';
import Post from './Post.js';
import PostForm from './PostForm.js';

const Feed = ({ allPosts, handleTextChange, handleSubmit, postTitle, postBody }) => {
  let myPosts = allPosts.map(post => {
    return (
      < Post
      id={post.id}
      title={post.title}
      body={post.body}
      />
    );
  });
  return (
    <div>
      <PostForm
        handleTextChange={handleTextChange}
        handleSubmit={handleSubmit}
        postTitle={postTitle}
        postBody={postBody}/>
      {myPosts}
    </div>
  );
};

export default Feed;
