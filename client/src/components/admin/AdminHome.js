import React from 'react'
import AddPostComponent from './AddPostForm'
import {Link} from "react-router-dom"
import AdminLinks from './AdminLinks'

function AdminHome() {
	return (
		<div className="w-1/2 m-auto">
			<AdminLinks />
		</div>
	)
}

export default AdminHome