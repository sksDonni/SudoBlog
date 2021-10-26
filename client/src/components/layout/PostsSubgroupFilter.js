import React, {useState} from 'react'
import {useParams} from 'react-router-dom'

function PostsSubgroupFilter() {
	const subgroup = useParams()
	console.log(subgroup);
	console.log("asdfasdf");
	return (
		<div>
			loading... jhhkhjhk
		</div>
	)
}

export default PostsSubgroupFilter