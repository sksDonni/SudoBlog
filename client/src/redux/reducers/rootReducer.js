import { combineReducers, applyMiddleware, createStore } from "redux";
import comments from "./comments";
import posts from "./posts";
// import likes from './reducer/likes'
import errors from "./errors";
import users from "./users";
import React from "react";
import thunk from "redux-thunk";
import logger from "redux-logger";

function rootReducer() {
  const store = createStore(
    combineReducers({
      posts,
      users,
      comments,
      errors,
    }),
    applyMiddleware(thunk)
  );

  return store;
}

export default rootReducer;
