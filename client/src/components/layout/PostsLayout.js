import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getPosts} from '../../redux/actionCreators/posts'
import Post from './Post'

function PostLayout() {
	const posts = useSelector(state => state.posts);
	console.log(posts);
	const dispatch = useDispatch();
	if(posts.postsLoading === false)
	{
		console.log(posts.posts);
		const Postlist = posts.posts.map((post) => <Post post={post} />	)
		return (
			<div className="w-1/2 m-auto">
				{Postlist}
			</div>
		)
	}else{
		return(
			<div className="text-center text-3xl text-red-600a">Loading..</div>
		)
	}
}

export default PostLayout