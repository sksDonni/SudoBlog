import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function UserLinks() {
	return (
		<div>
			<div className="flex flex-row justify-center text-center">
					<div className="text-xl mx-3 my-1 p-4">
						<Link to="/">BharatVarsh</Link>
					</div>
					<div className="text-xl mx-3 my-1 p-4">
						<Link to="/">DataScopy</Link>
					</div>
					<div className="text-xl mx-3 my-1 p-4">
						<Link to="/">Today</Link>
					</div>
					<div className="text-xl mx-3 my-1 p-4">
						<Link to="/">ElseWhere</Link>
					</div>
					<div className="text-xl mx-3 my-1 p-4">
						<Link to="/">Refuge</Link>
					</div>
			</div>
		</div>
	)
}

export default UserLinks