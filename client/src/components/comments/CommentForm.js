import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function CommentForm() {
  const [commentBody, setCommentBody] = useState("");

  return (
    <div className="">
      <form action="" onSubmit={HandleSubmit} className="">
        <div className="">
          <label htmlFor="commentBody">Do share what you feel!!</label>
          <textarea
            name="commentBody"
            id="commentBody"
            onChange={(e) => setCommentBody(e.target.value)}
            cols="30"
            rows="10"
            placeholder="Enter your comments here"
          ></textarea>
        </div>
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
}

export default CommentForm;
