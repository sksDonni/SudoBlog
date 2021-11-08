import React from "react";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux"
import {logoutUser} from "../../redux/actionCreators/users"

function GuestLinks() {
  const token = useSelector(state => state.users.authData)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  if(token)
  {
    return(
      <div className="float-right text-center">
        <div className="text-xl mx-3 my-1 p-4">
          <Link to="/auth/login" onClick={handleLogout}>Logout</Link>
        </div>
      </div>
    )
  }
  else
  {
    return (
      <div className="flex flex-row float-right text-center">
        <div className="text-xl mx-3 my-1 p-4">
          <Link to="/auth/register">Register</Link>
        </div>
        <div className="text-xl mx-3 my-1 p-4">
          <Link to="/auth/login">Login</Link>
        </div>
      </div>
    );
  }
}

export default GuestLinks;
