const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./users')

const postSchema = new Schema({
	title: {
		type: String,
		required: true,
		unique: true
	},

	body:{
		type: String, 
		required: true,
	},

	author:{
		type: String,
		ref : 'User'
	},

	caption:{
		type: String,
		required: true
	},

	category:{
		type: String,
		default: 'today'
	}
}, {
	timestamps: true
});

module.exports = mongoose.model('Post', postSchema);