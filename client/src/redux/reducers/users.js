import * as ActionTypes from "../actiontypes";

const profileLocalStorage = localStorage.getItem("profile");
const initialState = {
  authData: profileLocalStorage,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER:
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      return { ...state, authData: action.payload };

    case ActionTypes.LOGOUT_USER:
      localStorage.clear();
      console.log("cleared");
      return { ...state, authData: null };

    default:
      return state;
  }
};

export default userReducer;
