import React from 'react'
import {Link} from 'react-router-dom'

function Post({post}) {
	const linkToPost = post._id
	return (
		<div className="p-3 m-2 w-1/2" key={post._id}>
			<img src="" alt=""  className="w-5/6 mr-auto h-40" />
			<h1 className="text-red-600 text-3xl"><Link to={linkToPost}>{post.title}</Link></h1>
			<p className="text-lg">{post.body}</p>
		</div>
	)
}

export default Post