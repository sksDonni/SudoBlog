import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams, useLocation } from "react-router-dom";
import { getPost, updatePost } from "../../redux/actionCreators/posts";
import Editor from "rich-markdown-editor";
import { getSubgroups } from "../../redux/actionCreators/subgroup";

function EditPost() {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const location = useLocation();

  const post = useSelector((state) => state.posts.selectedPost);
  const subgroups = useSelector((state) => state.posts.subgroups);
  const [title, setTitle] = useState("");
  const content = useRef("gibberish");
  const caption = useRef("gibberish");
  const [author, setAuthor] = useState("");
  const [imageFiles, setImageFiles] = useState([]);
  const [subgroup, setSubgroup] = useState("");

  useEffect(() => {
    dispatch(getPost(id));
    console.log(post);
  }, [id]);

  if (post !== null && subgroups.length !== 0) {
    const selectSubgroup = subgroups.map((s) => (
      <>
        {" "}
        <option key={s._id} value={s.name}>
          {s.name}
        </option>{" "}
      </>
    ));

    const handleSubmit = (e) => {
      e.preventDefault();
      const subgroupfilter = subgroups.filter((s) => s.name === subgroup)[0];
      console.log(subgroupfilter);
      const subgroupId = subgroupfilter._id;
      let captionValue = caption.current();
      let contentValue = content.current();
      console.log(subgroupId);
      const values = {
        title,
        caption: captionValue,
        author,
        body: contentValue,
        subgroupId,
      };
      console.log(values);
      dispatch(updatePost(id, values));
    };

    const populateDetails = () => {
      setTitle(post.title);
      content.current = post.body;
      caption.current = post.caption;
      setAuthor(post.author);
      setImageFiles(post.imageFiles);
      const subgroupId = post.subgroupId;
      setSubgroup(subgroups.filter((s) => s._id === subgroupId)[0].name);
      console.log(title, "clicked");
    };
    return (
      <div className="w-1/2 m-auto mt-5">
        <button
          onClick={() => populateDetails()}
          className="border-2 p-1 text-2xl font-bold border-black"
        >
          Populate Details
        </button>
        <h3 className="font-bold text-4xl text-center">Add Posts</h3>
        <form className="" onSubmit={handleSubmit}>
          <div className="mt-5">
            <label htmlFor="postTitle" className="text-2xl">
              Post Title
            </label>
            <input
              type="text"
              className="text-1xl p-1 border-2 font-bold text-red-500 block my-2 w-3/4"
              onChange={(e) => setTitle(e.target.value)}
              name="postTitle"
              value={title}
              id="postTitle"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="author" className="text-2xl">
              Post Author
            </label>
            <input
              type="text"
              className="text-1xl p-1 border-2 font-bold text-red-500 block my-2 w-3/4"
              onChange={(e) => setAuthor(e.target.value)}
              name="author"
              value={author}
              id="author"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="postCaption" className="text-2xl">
              Post Caption
            </label>
            <Editor
              onChange={(value) => (caption.current = value)}
              value={caption.current}
              className="h-30 border-2 w-3/4 text-1xl block my-2 font-semibold"
            />
          </div>

          <div className="mt-3">
            <label htmlFor="postContent" className="text-2xl">
              Post Content
            </label>
            <Editor
              onChange={(value) => (content.current = value)}
              value={content.current}
              className="h-30 border-2 w-3/4 text-1xl block my-2 font-semibold"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="postImages" className="text-2xl">
              Image files
            </label>
            <input
              type="file"
              onChange={(e) => setImageFiles(e.target.value)}
              className="h-30 border-2 w-3/4 text-1xl block my-1 font-semibold"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="postSubgroup" className="text-2xl">
              Sub Group
            </label>
            <select
              type="select"
              onChange={(e) => setSubgroup(e.target.value)}
              className="h-30 border-2 w-3/4 text-1xl block my-1 font-semibold"
            >
              {selectSubgroup}
            </select>
          </div>
          <div className="mt-5 p-1 font-3xl font-bolder text-white text-center w-1/5 border-2 border-red-100 bg-red-600">
            <button type="submit">Publish</button>
          </div>
        </form>
      </div>
    );
  } else {
    return <div>loading...</div>;
  }
}
export default EditPost;
