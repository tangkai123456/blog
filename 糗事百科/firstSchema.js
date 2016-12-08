var mongoose = require('mongoose')

var firstSchema = new mongoose.Schema({
	userid: String,
	userhead: String,
	username: String,
	usersex: String,
	userage: String,
	content: {
		contentid: Number,
		contentuserid: String,
		content: String,
		contentfuny: String,
		contentcomment: String,
		comment: {
			userid: String,
			userhead: String,
			username: String,
			usersex: String,
			userage: String,
			comment: String,
			hotsum: String
		}
	}
}, {
	collection: "frist"
})

firstSchema.statics = {
	fetch: function(cb) {
		return this
			.find()
			.exec(cb)
	},
	findById: function(id, cb) {
		return this
			.findOne({
				userid: id
			})
			.exec(cb)
	}
}

module.exports = firstSchema