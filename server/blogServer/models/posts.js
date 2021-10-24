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

	createdBy:{
		type: Schema.Types.ObjectId,
		ref : 'User'
	}
}, {
	timeStamps: true
});

module.exports = mongoose.model('Post', postSchema);