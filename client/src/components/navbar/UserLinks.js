import React, { useState } from "react";
import { Link } from "react-router-dom";
import GuestLinks from "./GuestLinks";

function UserLinks() {
  return (
    <div>
      <div className="md:flex md:flex-row sm:grid justify-center md:text-center teft">
        <div className="text-xl mx-3 mt-1 md:my-1 md:p-2 p-1">
          <Link to="/subgroup/bharatvarsh">BharatVarsh</Link>
        </div>
        <div className="text-xl mx-3 mt-1 md:my-1 md:p-2 p-1">
          <Link to="/subgroup/datascopy">DataScopy</Link>
        </div>
        <div className="text-xl mx-3 mt-1 md:my-1 md:p-2 p-1">
          <Link to="/subgroup/today">Today</Link>
        </div>
        <div className="text-xl mx-3 mt-1 md:my-1 md:p-2 p-1">
          <Link to="/subgroup/elsewhere">ElseWhere</Link>
        </div>
        <div className="text-xl mx-3 mt-1 md:my-1 md:p-2 p-1">
          <Link to="/subgroup/refuge">Refuge</Link>
        </div>
        <div className="md:hidden sm:block">
          <GuestLinks />
        </div>
      </div>
    </div>
  );
}

export default UserLinks;
