import React, {useEffect} from "react";
import Navbar from "./navbar/NavbarComponent";
import Login from "./auth/Login";
import { useDispatch } from "react-redux";
import { getPosts } from "../redux/actionCreators/posts";
import Posts from "./layout/PostsLayout";
import AddPostComponent from "./admin/AddPostForm";
import { Switch, Route } from "react-router-dom";
import Post from "./layout/Post";
import Register from "./auth/Register";
import AdminHome from "./admin/AdminHome"
import AddSubgroup from "./admin/AddSubgroup"
import {getSubgroups} from '../redux/actionCreators/subgroup'
import PostsSubgroupComponent from './layout/PostsSubgroupFilter'

function MainComponent() {
  const dispatch = useDispatch();
  const posts = dispatch(getPosts());
  useEffect(() => {
    dispatch(getSubgroups())
  }, [])

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/posts">
          <Posts />
        </Route>
        <Route path="posts/subgroup/:subgroup">
          <PostsSubgroupComponent />
        </Route>
        <Route path="/posts/:id">
          <Post />
        </Route>
        <Route exact path="/auth/login">
          <Login />
        </Route>
        <Route exact path="/auth/register">
          <Register />
        </Route>
        <Route exact path="/admin">
          <AdminHome />
        </Route>
        <Route path="/admin/addsubgroup">
          <AddSubgroup />
        </Route>
        <Route path="/admin/addpost">
          <AddPostComponent />
        </Route>
      </Switch>
    </div>
  );
}

export default MainComponent;
