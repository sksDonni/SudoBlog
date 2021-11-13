import * as ActionTypes from "../actiontypes";

const initialState = {
  postError: null,
  commentsError: null,
  authError: null,
  registerError: null,
};
const errors = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REGISTER_ERROR:
      console.log(action.payload);
      return { ...state, registerError: action.payload };

    case ActionTypes.AUTH_ERROR:
      console.log(action.payload);
      return { ...state, authError: action.payload };

    case ActionTypes.CLEAR_ALL_ERRORS:
      return initialState;

    default:
      return state;
  }
};

export default errors;
