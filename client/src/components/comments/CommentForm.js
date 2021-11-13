import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../redux/actionCreators/comments";
import CommentsLayout from "./CommentsLayout";

function CommentForm() {
  const [commentBody, setCommentBody] = useState("");
  const dispatch = useDispatch();
  const postId = useSelector((state) => state.posts.selectedPost._id);
  const handleSubmit = (e) => {
    e.preventDefault();
    const values = {
      body: commentBody,
    };
    dispatch(addComment(postId, values));
  };

  return (
    <div className="w-1/2 m-auto">
      <CommentsLayout />
      <form action="" onSubmit={handleSubmit} className="">
        <div className="grid">
          <div>
            <label
              htmlFor="commentBody"
              className="text-1xl my-3 text-red-500 font-semibold"
            >
              Do share what you feel!!
            </label>
          </div>
          <div>
            <textarea
              name="commentBody"
              id="commentBody"
              className="text-1xl my-3 p-1 border-2 border-black"
              onChange={(e) => setCommentBody(e.target.value)}
              cols="60"
              rows="3"
              placeholder="Enter your comments here"
            ></textarea>
          </div>
        </div>
        <button
          className="border-2 border-red-400 text-red-500 text-1xl font-semibold p-1"
          type="submit"
        >
          Submit!
        </button>
      </form>
    </div>
  );
}

export default CommentForm;
