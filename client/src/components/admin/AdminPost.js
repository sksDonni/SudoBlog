import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {useLocation, Link} from "react-router-dom"
import { getPost, deletePost } from "../../redux/actionCreators/posts";

function AdminPost({post}) {
	const location = useLocation()
	const dispatch = useDispatch()
	const linkToPost = `/posts/${post._id}`;
	const updatePostLink = `/admin/${post._id}/update`
	return (
    <div className="p-3 m-2" key={post._id}>
      <img src="" alt="" className="w-5/6 mr-auto h-40" />
      <div className="flex">
      	<div className="w-2/3 mr-auto text-left">
	      <h1
	        className="text-red-600 text-2xl"
	        onClick={() => dispatch(getPost(post._id))}
	      >
	        <Link to={linkToPost}>{post.title}</Link>
	      </h1>
      	</div>
      	<div className="flex">
      		<button className="mx-1 p-1 text-red-600 mb-auto" onClick={() => dispatch(deletePost(post._id))}>Delete</button>
      		<button className="mx-1 p-1 text-red-600 mb-auto" onClick={() => dispatch(getPost(post._id))} ><Link to={updatePostLink}>Modify</Link></button>
      	</div>
      </div>
      <p className="text-md text-gray-700">{post.caption}</p>
    </div>
	)
}

export default AdminPost