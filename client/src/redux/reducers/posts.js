import React from 'react'
import * as ActionTypes from '../actiontypes'

const postInitialState = {
	posts: [],
	selectedPost: null,
	postsLoading: true,
	postLoading: true
}

const postReducer = (state=postInitialState, action) => {
	switch(action.type)
	{
		case ActionTypes.GET_POSTS:
			let posts = action.payload;
			return {...state, posts: posts, postsLoading: false}

		case ActionTypes.FETCH_POST:
			const post = action.payload;
			return {...state, selectedPost : post, postLoading: false}

		case ActionTypes.ADD_POST:
			const newpost = action.payload
			console.log('from reducer', newpost);
			let updatedPosts = state.posts.concat(newpost)
			return {...state, posts: updatedPosts, postsLoading: false}

		case ActionTypes.POSTS_LOADING:
			return {...state, postsLoading: true}

		case ActionTypes.POST_LOADING:
			return {...state, postLoading: true}

		default:
			return state
	}
}


export default postReducer