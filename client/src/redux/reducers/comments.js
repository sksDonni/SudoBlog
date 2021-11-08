import * as ActionTypes from "../actiontypes"

const initState = []

const commentsReducer = (state=initState, action) => {
	switch(action.type)
	{
		case ActionTypes.GET_COMMENTS:
			console.log(action.payload);
			return action.payload

		case ActionTypes.ADD_COMMENT:
			var updatedState = state.concat(action.payload)
			return state

		default:
			return state
	}
}


export default commentsReducer