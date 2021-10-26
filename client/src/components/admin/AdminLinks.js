import React from 'react'
import {Link} from "react-router-dom"
import AddPostComponent from './AddPostForm'

function AdminLinks() {
	return (
		<div>
			<div className="flex">
				<div>
					<button className="text-center mx-2 text-2xl text-red-500 font-semibold border-2 border-red-400 p-2">
						<Link to="/admin/addpost" >
							Add new posts
						</Link>
					</button>
				</div>
				<div>
					<button className="text-center mx-2 text-2xl text-red-500 font-semibold border-2 border-red-400 p-2">
						<Link to="/admin/addsubgroup" >
							Add Sub-Groups
						</Link>
					</button>
				</div>
				<div>
					<button className="text-center mx-2 text-2xl text-red-500 font-semibold border-2 border-red-400 p-2">
						<Link to="/admin/viewposts" >
							View Posts
						</Link>
					</button>
				</div>
				<div>
					<button className="text-center mx-2 text-2xl text-red-500 font-semibold border-2 border-red-400 p-2">
						<Link to="/admin/viewusers" >
							View users
						</Link>
					</button>
				</div>
			</div>
		</div>
	)
}

export default AdminLinks