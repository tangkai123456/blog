var mongoose = require("mongoose")
var firstSchema = require("./firstSchema.js")
var first = mongoose.model("first", firstSchema, "first")

module.exports = first