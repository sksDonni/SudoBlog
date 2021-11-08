import * as ActionTypes from "../actiontypes"
import * as API from "../API"

export const loginUser = (values, router) => async (dispatch) => {
	console.log(values);
	const {data} = await API.loginUser(values);
	console.log(data);
	dispatch({
		type: ActionTypes.LOGIN_USER,
		payload: data
	})
	router.push("/posts");
}

export const logoutUser = () => async (dispatch) => {
	dispatch({
		type: ActionTypes.LOGOUT_USER
	})
}