const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Users = require('./users')

const commentSchema = new Schema({
	body:{
		type: String,
		required: true
	},
	user:{
		type: mongoose.Types.ObjectId,
		ref: 'User'
	},
	userName:{
		type: String,
		default: 'anonymous'
	}
	likes:{
		type: Number,
		default: 0
	},
	dislikes:{
		type: Number,
		default: 0
	}

}, {
	timestamps: true
})

exports.module = mongoose.model('comment', commentSchema)