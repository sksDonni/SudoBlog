const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Post = require('./posts')

const userSchema = new Schema({
	fistName:{
		type: String,
		required: true,
	},

	lastName: {
		type: String,
		required: true,
	},

	password: {
		type: String,
		required: true,
	},

	posts: [{type: Schema.Types.ObjectId, ref:'Post'}]
}, {
	timestamps: true
})

module.exports = mongoose.model('User', userSchema);