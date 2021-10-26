import { useDispatch } from "react-redux";
import * as API from "../API";
import * as ActionTypes from "../actiontypes";

export const addSubgroup = (name) => async (dispatch) => {
  try {
    const { data } = await API.addSubgroup(name);
    console.log(data);
    dispatch({
      type: ActionTypes.ADD_SUBGROUP,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getSubgroups = () => async (dispatch) => {
  try{
    const {data} = await API.getSubgroups();
    console.log(data);
    dispatch({
      type: ActionTypes.GET_SUBGROUPS,
      payload: data
    })
  }
  catch(err){
    console.log(err);
  }
}