const mongoose = require('mongoose')
const Schema = mongoose.Schema

const subgroupSchema = new Schema({
	name:{
		type: String,
		required: true,
		default: 'today'
	}
})

module.exports = mongoose.model('subgroup', subgroupSchema);