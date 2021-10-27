import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../redux/actionCreators/posts";
import PostDisplay from "./PostDisplay";
import {Route, Switch} from 'react-router-dom'

function PostLayout() {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  const dispatch = useDispatch();
  if (posts.postsLoading === false) {
    console.log(posts.posts);
    const Postlist = posts.posts.map((post) => (
      <PostDisplay post={post} key={post._id} />
    ));
    return <div className="w-1/2 m-auto">{Postlist}</div>;
  } else {
    return <div className="text-center text-3xl text-red-600a">Loading..</div>;
  }
}

export default PostLayout;
