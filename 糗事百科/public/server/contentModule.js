var mongoose = require("mongoose")
var contentSchema = require("./contentSchema.js")
var content = mongoose.model("content", contentsSchema)

module.exports = content