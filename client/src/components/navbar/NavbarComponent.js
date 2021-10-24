import React from 'react'
import UserLinks from './UserLinks'

function NavbarComponent() {
	return (
		<div className="w-3/4 m-auto">
			<div className="text-red-600 font-sans font-medium text-6xl text-center">
				SUDO WRITES
			</div>
			<UserLinks />
		</div>
	)
}

export default NavbarComponent