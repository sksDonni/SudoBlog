import React from 'react'
import Navbar from './navbar/NavbarComponent'
import Login from './auth/Login'
import {useEffect, useDispatch} from 'react-redux'
import {getPosts} from '../redux/actionCreators/posts'
import Posts from './layout/PostsLayout'

function MainComponent() {
	const dispatch = useDispatch()
	const posts = dispatch(getPosts())
	return (
		<div>
			<Navbar />
			<Posts />
		</div>
	)
}

export default MainComponent