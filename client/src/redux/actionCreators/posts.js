import {useDispatch} from 'react-redux'
import * as API from '../API'
import  * as ActionTypes from '../actiontypes'


export const getPost = (postId) => async (dispatch) => {
	try{
		dispatch({type: ActionTypes.POST_LOADING})
		const post = await API.getPost(postId)
		console.log(post);
		dispatch({
			type: ActionTypes.FETCH_POST,
			payload: post
		});
	}
	catch(err){
		console.log(err);
	}

}

export const getPosts = () => async (dispatch) => {
	try{
		dispatch({type: ActionTypes.POSTS_LOADING})
		const {data} = await API.getPosts()
		console.log(data);
		dispatch({
			type: ActionTypes.GET_POSTS,
			payload: data
		})
	}
	catch(err)
	{
		console.log(err);
	}
}

export const ADD_POST = (post) => async (dispatch) => {
	try{
		const newpost = await API.addPost(post);
		console.log(newpost);
		dispatch({
			type: ActionTypes.ADD_POST,
			payload: newpost
		})
	}
	catch(err)
	{
		console.log(err);
	}
}

