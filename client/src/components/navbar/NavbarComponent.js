import React, { useState } from "react";
import UserLinks from "./UserLinks";
import GuestLinks from "./GuestLinks";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function NavbarComponent() {
  const [nav, setNav] = useState(false);
  const openOrClose = nav ? "hidden" : "";
  return (
    <div className="mb-4">
      <div className="flex text-center">
        <div className="text-red-600 font-sans font-medium md:text-6xl md:w-2/5 pl-20 md:text-right md:ml-auto text-3xl w-4/5 float-left">
          <Link to="/posts"> SUDO WRITES </Link>
        </div>
        <div className="md:ml-auto md:block hidden">
          <GuestLinks />
        </div>
        <div className="md:hidden block text-3xl text-red-600">
          <button className="" onClick={() => setNav(!nav)}>
            <GiHamburgerMenu />{" "}
          </button>
        </div>
      </div>
      <div
        className="flex justify-center bg-red-600 text-white"
        id={openOrClose}
      >
        <UserLinks />
      </div>
    </div>
  );
}

export default NavbarComponent;
