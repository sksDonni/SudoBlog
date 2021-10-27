import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSubgroup } from "../../redux/actionCreators/subgroup";

function AddSubgroup() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const values = {
      name,
    };
    dispatch(addSubgroup(values));
  };
  return (
    <div className="w-1/2 m-auto flex">
      <form action="post" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="group" className="text-md text-2xl text-red-500">
            Subgroup name
          </label>
          <input
            type="text"
            id="SubgroupName"
            onChange={(e) => setName(e.target.value)}
            className="text-1xl border-2 mx-5 p-1 border-black text-md font-medium"
          />
        </div>
        <div>
          <button
            type="submit"
            className="text-md border-red-500 border-2 p-1 font-medium"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddSubgroup;
