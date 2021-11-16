import React, { useState, useEffect } from "react";
import Editor from "rich-markdown-editor";
import { addPost } from "../../redux/actionCreators/posts";
import { useDispatch, useSelector } from "react-redux";
import { getSubgroups } from "../../redux/actionCreators/subgroup";

function AddPostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const [imageFiles, setImageFiles] = useState([]);
  const [subgroup, setSubgroup] = useState("");
  const dispatch = useDispatch();
  const subgroups = useSelector((state) => state.posts.subgroups);

  useEffect(() => {
    dispatch(getSubgroups());
  }, [subgroup]);

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
    console.log(subgroups);
    console.log(subgroup);
    const subgroupfilter = subgroups.filter((s) => s.name === subgroup)[0];
    console.log(subgroupfilter);
    const subgroupId = subgroupfilter._id;
    console.log(subgroupId);
    const values = {
      title,
      caption,
      body: content,
      subgroupId,
      imageFiles
    };
    console.log(values);
    dispatch(addPost(values));
  };

  if (subgroups.length !== 0) {
    return (
      <div className="w-1/2 m-auto mt-5">
        <h3 className="font-bold text-4xl text-center">Add Posts</h3>
        <form className="" onSubmit={handleSubmit}  enctype="multipart/form-data">
          <div className="mt-5">
            <label htmlFor="postTitle" className="text-2xl">
              Post Title
            </label>
            <input
              type="text"
              className="text-1xl p-1 border-2 font-bold text-red-500 block my-2 w-3/4"
              onChange={(e) => setTitle(e.target.value)}
              name="postTitle"
              id="postTitle"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="postCaption" className="text-2xl">
              Post Caption
            </label>
            <Editor
              onChange={(value) => setCaption(value)}
              className="h-30 border-2 w-3/4 text-1xl block my-2 font-semibold"
            />
          </div>

          <div className="mt-3">
            <label htmlFor="postContent" className="text-2xl">
              Post Content
            </label>
            <Editor
              onChange={(value) => setContent(value)}
              className="h-30 border-2 w-3/4 text-1xl block my-2 font-semibold"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="postImages" className="text-2xl">
              Image files
            </label>
            <input
              name="imageFiles"
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
    return <div className="text-center text-3xl text-red-600">Loading...</div>;
  }
}

export default AddPostForm;
