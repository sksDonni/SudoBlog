import React from 'react'
function Comment({comment}) {
	return (
		<div className="my-3 border-2 border-red-100 p-2">
			<h5 className="text-sm text-red-400">{comment.lastName} {comment.firstName}</h5>
			<h4 className="text-2xl font-md">{comment.body}</h4>
			<button className="border-red-100 border-2 p-2 mx-2 w-25 text-center">Like</button>
			<button className="border-red-100 border-2 p-2 w-25 text-center">Dislike</button>
		</div>
	)
}

export default Comment