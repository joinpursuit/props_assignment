import React from "react";
import Post from "./Post";
import PostForm from "./PostForm";

const Feed = ({
  allPosts,
  handleTextChange,
  handleSubmit,
  postTitle,
  postBody
}) => {
  // console.log(props.allposts);

  const posts = allPosts.map(post => {
    return (
      <Post key={post.id} id={post.id} title={post.title} body={post.body} />
    );
  });
  return (
    <>
      {posts}
      <br />
      <PostForm
        postTitle={postTitle}
        postBody={postBody}
        handleTextChange={handleTextChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Feed;
