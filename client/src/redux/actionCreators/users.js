import * as ActionTypes from "../actiontypes";
import * as API from "../API";

export const registerUser = (values, router) => async (dispatch) => {
  try {
    console.log(values);
    const { data } = await API.registerUser(values);
    console.log(data);
    dispatch({
      type: ActionTypes.REGISTER_USER,
      payload: values,
    });
    router.push("/auth/login");
  } catch (err) {
    console.log(err);
  }
};

export const loginUser = (values, router) => async (dispatch) => {
  try {
    console.log(values);
    const { data } = await API.loginUser(values);
    console.log(data);
    dispatch({
      type: ActionTypes.LOGIN_USER,
      payload: data,
    });
    router.push("/posts");
  } catch (err) {
    console.log(err);
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({
      type: ActionTypes.LOGOUT_USER,
    });
  } catch (err) {
    console.log(err);
  }
};
