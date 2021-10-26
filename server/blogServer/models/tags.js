const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tagsSchema = new Schema({
	name:{
		type: String,
		required: true,
		default: 'today'
	}
})

module.exports = mongoose.model('tag', tagsSchema)