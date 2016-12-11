var mongoose = require('mongoose')

var messageSchema = new mongoose.Schema({
	username: String,
	content: String,
	date: String,
	good: Array
})

messageSchema.statics = {
	fetch: function(cb) {
		return this
			.find()
			.exec(cb)
	},
	findById: function(id, cb) {
		return this
			.findOne({
				_id: id
			})
			.exec(cb)
	}
}

module.exports = messageSchema