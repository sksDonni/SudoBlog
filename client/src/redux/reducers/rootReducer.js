import { combineReducers, applyMiddleware, createStore } from "redux";
import comments from './comments'
import posts from "./posts";
// import likes from './reducer/likes'
import users from "./users"
import React from "react";
import thunk from "redux-thunk";
import logger from "redux-logger";

function rootReducer() {
  const store = createStore(
    combineReducers({
      posts,
      users,
      comments
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
}

export default rootReducer;
