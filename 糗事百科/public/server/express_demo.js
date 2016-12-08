var express = require('express')
var app = express()
var mongoose = require("mongoose")
var user = require("user.js")

mongoose.connect("mongodb://localhost/qiu")

app.get('/getAll', function(req, res) {
	user.fetch(function(err, data) {
		if (err) {
			console.log(err)
		}
		res.render("index", {})
	})
})

app.listen(8001)