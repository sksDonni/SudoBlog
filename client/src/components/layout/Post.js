import React from "react";
import { useSelector, useEffect } from "react-redux";
import { Link } from "react-router-dom";
import marked from "marked";

function Post() {
  const selectedPost = useSelector((state) => state.posts.selectedPost);
  console.log("postcalled", selectedPost);
  if (selectedPost == null) {
    return <div className="text-2xl text-center">Loading...</div>;
  } else {
    const commentLink = `/posts/${selectedPost._id}/comments`;
    const authorLink = `/posts/${selectedPost.author}`;
    const postContentHtml = () => {
      const parsedHtml = marked(selectedPost.body);
      return { __html: parsedHtml };
    };
    return (
      <div>
        <div className="w-1/2 m-auto">
          <h1 className="text-red-600 text-4xl font-semibold">
            {selectedPost.title}
          </h1>
          <h4>
            {
              new Date(selectedPost.createdAt)
                .toLocaleString("en-IN")
                .split(",")[0]
            }
          </h4>
          <p className="text-lxl my-1 text-gray-800 font-medium">
            <Link to={authorLink}>{selectedPost.author}</Link>
          </p>
          <p className="text-2xl my-2 font-medium">
            <div dangerouslySetInnerHTML={postContentHtml()}></div>
          </p>
          <div className="w-1/4 m-auto my-5">
            <Link
              to={commentLink}
              className="text-center p-2 align-center border-red-200 border-2 text-md text-red-600 font-medium"
            >
              View Comments
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
