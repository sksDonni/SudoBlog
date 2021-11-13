import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/actionCreators/users";

function GuestLinks() {
  const token = useSelector((state) => state.users.authData);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  if (token) {
    return (
      <div className="flex md:float-right text-center">
        <div className="text-xl md:mx-3 mt-1 md:p-4 p-1 text-left md:text-center">
          <Link to="/auth/login" onClick={handleLogout}>
            Logout
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex md:flex-row md:float-right">
        <div className="text-xl md:mx-3 mt-1 md:p-4 p-1 text-center mx-3">
          <Link to="/auth/register">Register</Link>
        </div>
        <div className="text-xl md:mx-3 mt-1 md:p-4 p-1 text-center mx-3">
          <Link to="/auth/login">Login</Link>
        </div>
      </div>
    );
  }
}

export default GuestLinks;
