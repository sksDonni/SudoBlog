import React from "react";
import UserLinks from "./UserLinks";
import GuestLinks from "./GuestLinks";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <div className="">
      <div className="flex text-center">
        <div className="text-red-600 font-sans font-medium text-6xl w-2/5 pl-20 text-right ml-auto">
          <Link to="/posts"> SUDO WRITES </Link>
        </div>
        <div className="ml-auto">
          <GuestLinks />
        </div>
      </div>
      <div className="flex justify-center">
        <UserLinks />
      </div>
    </div>
  );
}

export default NavbarComponent;
