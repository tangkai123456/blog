var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
	username: String,
	password: String,
})

userSchema.statics = {
	fetch: function(cb) {
		return this
			.find()
			.exec(cb)
	},
	findByName: function(username, cb) {
		return this
			.findOne({
				username: username
			})
			.exec(cb)
	}
}

module.exports = userSchema