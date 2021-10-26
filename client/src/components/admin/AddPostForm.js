import React, {useState} from 'react'
import Editor from 'rich-markdown-editor'
import {addPost} from '../../redux/actionCreators/posts'
import {useDispatch} from 'react-redux'

function AddPostForm() {

	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')
	const [caption, setCaption] = useState('')
	const [author, setAuthor] = useState('')
	const [image, setImage] = useState('')
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault()
		const values = {
			title,
			caption,
			author,
			body: content
		}
		console.log(values);
		dispatch(addPost(values));
	}

	return (
		<div className="w-1/2 m-auto mt-5">
			<h3 className="font-bold text-4xl text-center">Add Posts</h3>
			<form className="" onSubmit={handleSubmit}>
				<div className="mt-5">
					<label htmlFor="postTitle" className="text-2xl">Post Title</label>
					<input type="text" className="text-1xl p-1 border-2 font-bold text-red-500 block my-2 w-3/4" onChange={(e) => setTitle(e.target.value)} name="postTitle" id="postTitle"/>
				</div>
				<div className="mt-3">
					<label htmlFor="author" className="text-2xl">Post Author</label>
					<input type="text" className="text-1xl p-1 border-2 font-bold text-red-500 block my-2 w-3/4" onChange={(e) => setAuthor(e.target.value)} name="author" id="author"/>
				</div>
				<div className="mt-3">
					<label htmlFor="postContent" className="text-2xl">Post Caption</label>
					<Editor onChange={(value) => setCaption(value)} className="h-30 border-2 w-3/4 text-1xl block my-2 font-semibold"/>
				</div>

				<div className="mt-3">
					<label htmlFor="postContent" className="text-2xl">Post Content</label>
					<Editor onChange={(value) => setContent(value)} className="h-30 border-2 w-3/4 text-1xl block my-2 font-semibold"/>
				</div>

				<div className="mt-3">
					<label htmlFor="postContent" className="text-2xl">Image files</label>
					<input type="file" onChange={(value) => setContent(value)} className="h-30 border-2 w-3/4 text-1xl block my-1 font-semibold"/>
				</div>
				<div className="mt-5 p-1 font-3xl font-bolder text-white text-center w-1/5 border-2 border-red-100 bg-red-600">
					<button type="submit">Publish</button>
				</div>
			</form>
		</div>
	)
}

export default AddPostForm