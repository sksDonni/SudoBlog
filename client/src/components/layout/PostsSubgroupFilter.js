import React, { useState, useEffect } from "react";
import { useParams, withRouter, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostsByGroupName } from "../../redux/actionCreators/posts";
import PostDisplay from "./PostDisplay";

function PostsSubgroupFilter() {
  const { subgroupName } = useParams();
  console.log(subgroupName);
  const location = useLocation();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  useEffect(() => {
    dispatch(getPostsByGroupName(subgroupName));
  }, [location, subgroupName]);

  if (posts !== null) {
    const Postlist = posts.map((post) => (
      <PostDisplay post={post} key={post._id} />
    ));

    return (
      <div className="w-1/2 m-auto">
        <h1 className="text-2xl font-semibold text-center border-b-2 border-black">
          {subgroupName.toUpperCase()}
        </h1>
        {Postlist}
      </div>
    );
  } else {
    return (
      <div className="text-2xl font-semibold text-center border-b-2 border-black">
        Loading...
      </div>
    );
  }
}

export default withRouter(PostsSubgroupFilter);
