import React, { useState } from "react";
import { Link } from "react-router-dom";

function UserLinks() {
  return (
    <div>
      <div className="flex flex-row justify-center text-center">
        <div className="text-xl mx-3 my-1 p-4">
          <Link to="/posts/subgroup/bharatvarsh">BharatVarsh</Link>
        </div>
        <div className="text-xl mx-3 my-1 p-4">
          <Link to="/posts/subgroup/datascopy">DataScopy</Link>
        </div>
        <div className="text-xl mx-3 my-1 p-4">
          <Link to="/posts/subgroup/today">Today</Link>
        </div>
        <div className="text-xl mx-3 my-1 p-4">
          <Link to="/posts/subgroup/elsewhere">ElseWhere</Link>
        </div>
        <div className="text-xl mx-3 my-1 p-4">
          <Link to="/posts/subgroup/refuge">Refuge</Link>
        </div>
      </div>
    </div>
  );
}

export default UserLinks;
