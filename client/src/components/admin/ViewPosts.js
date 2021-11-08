import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import AdminPost from "./AdminPost"


function ViewPosts() {
	const posts = useSelector(state => state.posts.posts)

	if(posts.length != 0)
	{
		const postsLayout = posts.map((p) => <div className="flex"><AdminPost post={p}/></div>)
		return (
			<div className="w-1/2 m-auto">
				{postsLayout}
			</div>
		)
	}
	else
	{
		return(
			<div>No posts here</div>
		)
	}
}

export default ViewPosts