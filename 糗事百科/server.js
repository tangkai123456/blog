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
var first = require("./firstModule.js")
var comment = require("./commentModule.js")
mongoose.Promise = global.Promise //赋值一个全局的承诺？？？
mongoose.connect("mongodb://localhost:27017/qiu")

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

  // Disable caching so we'll always get the latest comments.
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.get('/getAll', function(req, res) {
  first.fetch(function(err, data) {
    res.end(JSON.stringify(data))
  })
});

app.get('/comment', function(req, res) {
  comment.findById(+req.query.index, function(err, data) {
    res.end(JSON.stringify(data))
  })
})

app.get('/getOne', function(req, res) {
  first.findById(req.query.userid, function(err, data) {
    res.end(JSON.stringify(data))
  })
})



app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});