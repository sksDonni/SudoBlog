import * as ActionTypes from "../actiontypes"
import * as API from '../API'

export const getComments = (postId) => async (dispatch) => {
	const {data}  = await API.getComments(postId)
	console.log(data);
	dispatch({
		type: ActionTypes.GET_COMMENTS,
		payload: data
	})
	
}

export const addComment = (comment, postId) => async (dispatch) => {
	console.log(comment, postId);
	const {data} = await API.addComment(postId, comment)
	console.log(data);
	dispatch({
		type: ActionTypes.ADD_COMMENT,
		payload: data
	})
}