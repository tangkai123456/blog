var mongoose = require("mongoose")
var commentSchema = require("./commentSchema.js")
var comment = mongoose.model("comment", commentSchema, "comments")

module.exports = comment