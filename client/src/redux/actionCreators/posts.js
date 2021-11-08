import { useDispatch } from "react-redux";
import * as API from "../API";
import * as ActionTypes from "../actiontypes";

export const getPost = (postId) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.POST_LOADING });
    const { data } = await API.getPost(postId);
    console.log(data);
    dispatch({
      type: ActionTypes.FETCH_POST,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.POSTS_LOADING });
    const { data } = await API.getPosts();
    console.log(data);
    dispatch({
      type: ActionTypes.GET_POSTS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addPost = (post) => async (dispatch) => {
  try {
    const { data } = await API.addPost(post);
    console.log(data);
    dispatch({
      type: ActionTypes.ADD_POST,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getPostsByGroupName = (name) => async (dispatch) => {
  try{
    const {data} = await API.getPostsByGroupName(name);
    console.log(data);
    dispatch({
      type: ActionTypes.GET_POSTS_BY_GROUP_NAME,
      payload: data
    })
  }catch(err){
    console.log(err);
  }
}

export const deletePost = (postId) => async (dispatch) => {
  try{
    const {data} = await API.deletePost(postId);
    console.log(data);
    dispatch({
      type: ActionTypes.DELETE_POST,
      payload: data
    })
  }
    catch(err)
    {
      console.log(err);
    }
}

export const updatePost = (postId, post) => async (dispatch) => {
  try{
    const {data} = await API.updatePost(postId, post)
    console.log(data);
    dispatch({
      type: ActionTypes.UPDATE_POST,
      payload: data
    })
  }
    catch(err)
    {
      console.log(err);
    }
}