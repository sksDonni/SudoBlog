import React from "react";
import * as ActionTypes from "../actiontypes";

const postInitialState = {
  posts: [],
  selectedPost: null,
  postsLoading: true,
  postLoading: true,
  subgroups: [],
};

const postReducer = (state = postInitialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_POSTS:
      var posts = action.payload;
      return { ...state, posts: posts, postsLoading: false };

    case ActionTypes.FETCH_POST:
      const post = action.payload;
      return { ...state, selectedPost: post, postLoading: false };

    case ActionTypes.ADD_POST:
      var newpost = action.payload;
      console.log("from reducer", newpost);
      var updatedPosts = state.posts.concat(newpost);
      return { ...state, posts: updatedPosts, postsLoading: false };

    case ActionTypes.POSTS_LOADING:
      return { ...state, postsLoading: true };

    case ActionTypes.POST_LOADING:
      return { ...state, postLoading: true, selectedPost: null };

    case ActionTypes.ADD_SUBGROUP:
      var updatedSubgroups = state.subgroups.concat(action.payload);
      return { ...state, subgroups: updatedSubgroups };

    case ActionTypes.GET_SUBGROUPS:
      return { ...state, subgroups: action.payload };

    case ActionTypes.GET_POSTS_BY_GROUP_NAME:
      var updatedPosts = action.payload
      return {...state, posts:updatedPosts }

    default:
      return state;
  }
};

export default postReducer;
