/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require("mongoose")
var app = express();
var user = require("./modules/userModule.js")
var message = require("./modules/messageModule.js")
mongoose.Promise = global.Promise //赋值一个全局的承诺？？？
mongoose.connect("mongodb://localhost:27017/message")

mongoose.connection.on('connected', function() {
	console.log('Connection success!');
});
mongoose.connection.on('error', function(err) {
	console.log('Connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
	console.log('Connection disconnected');
});

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
	// Set permissive CORS header - this allows this server to be used only as
	// an API server in conjunction with something like webpack-dev-server.
	res.setHeader('Access-Control-Allow-Origin', '*');

	// Disable caching so we'll always get the latest messages.
	res.setHeader('Cache-Control', 'no-cache');
	next();
});

app.get('/getAllMessage', function(req, res) {
	message.fetch(function(err, data) {
		res.end(JSON.stringify(data))
	})
});

app.post('/postMessage', function(req, res) {
	var newMes = new message({
		username: req.body.username,
		content: req.body.content,
		date: req.body.date,
		good: req.body.good
	});
	newMes.save(function(err, newMes) {
		if (err) {
			console.log(err)
		}
		message.fetch(function(err, data) {
			res.end(JSON.stringify(data))
		})
	})
})

app.get('/login', function(req, res) {
	user.findByName(req.query.username, function(err, data) {
		if (data) {
			if (req.query.password == data.password) {
				res.end(JSON.stringify({
					username: req.query.username,
					info: "success"
				}))
			}
		} else {
			res.end(JSON.stringify({
				info: "fail"
			}))
		}
	})
})

app.post('/register', function(req, res) {
	user.findByName(req.body.username, function(err, data) {
		if (err) {
			console.log(err)
		}
		if (data) {
			res.end(JSON.stringify({
				info: "repeat"
			}))
		} else {
			var newUser = new user({
				username: req.body.username,
				password: req.body.password
			});
			newUser.save(function(err, user) {

				if (err) {
					console.log(err)
				}
				res.end(JSON.stringify({
					info: "success",
					username: user.username
				}));
			})
		}
	})
})

app.get("/clickGood", function(req, res) {
	var username = req.query.username;
	message.findById(req.query.id, function(err, content) {
		var hasClick = 0;
		content.good.forEach(function(item, i) {
			if (item == username) {
				hasClick = 1;
				content.good.splice(i, 1);
			}
		})
		if (!hasClick) {
			content.good.push(username);
		}
		content.save(function(err) {
			if (err) {
				console.log(err)
			}
			message.fetch(function(err, data) {
				res.end(JSON.stringify(data))
			})
		})
	})
})

app.listen(app.get('port'), function() {
	console.log('Server started: http://localhost:' + app.get('port') + '/');
});