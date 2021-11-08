import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useLocation} from "react-router-dom"
import {getComments} from "../../redux/actionCreators/comments"
import Comment from "./Comment"

function CommentsLayout() {
	const post = useSelector(state => state.posts.selectedPost)
	const location = useLocation()
	const comments = useSelector(state => state.comments)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getComments(post._id))
	}, [])

	const HeadingPortion = () => {
		return(
		<div>
          <h1 className="text-red-600 text-4xl font-semibold">
            {post.title}
          </h1>
          <h3 className="text-2xl">Comments</h3>
		</div>
	)}

	if(comments.length === 0)
	{
		return(
		<div className="w-1/1 m-auto">
			<HeadingPortion />
			<h3 className="text-2xl">Be the first one to comment!</h3>
		</div>)
	}
	else{
		const mapComments = comments.map((c) => <div key={c._id}><Comment comment={c}/></div>)
		return(
		<div>
			<HeadingPortion />
			{mapComments}
		</div>)
	}

	return (
		<div> 
		</div>
	)
}

export default CommentsLayout