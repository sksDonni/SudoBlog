import {combineReducers, applyMiddleware, createStore } from 'redux'
// import comments from './reducers/comments'
import posts from './posts'
// import likes from './reducer/likes'
import React from 'react'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

function rootReducer() {
	const store = createStore(
		combineReducers({
			posts,
		})
		,applyMiddleware(thunk, logger))

	return store;
}

export default rootReducer
