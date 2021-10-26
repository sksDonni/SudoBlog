import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {getPost} from '../../redux/actionCreators/posts'

function Post({post}) {
	const linkToPost = `posts/${post._id}`
	const dispatch = useDispatch();

	return (
		<div className="p-3 m-2 w-1/2" key={post._id}>
			<img src="" alt=""  className="w-5/6 mr-auto h-40" />
			<h1 className="text-red-600 text-2xl" onClick={() => dispatch(getPost(post._id))}><Link to={linkToPost}>{post.title}</Link></h1>
			<p className="text-md text-gray-700">{post.author}</p>
		</div>
	)
}

export default Post