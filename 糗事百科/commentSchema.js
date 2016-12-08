var mongoose = require('mongoose')

var commentSchema = new mongoose.Schema()

commentSchema.statics = {
	findById: function(index, cb) {
		return this
			.findOne({
				id: index
			})
			.exec(cb)
	}
}

module.exports = commentSchema