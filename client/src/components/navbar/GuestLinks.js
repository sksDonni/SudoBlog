import React from "react";
import { Link } from "react-router-dom";

function GuestLinks() {
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

export default GuestLinks;
