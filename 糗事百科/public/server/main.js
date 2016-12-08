var fs = require('fs')

var data = fs.readFileSync('input.txt')

console.log(data.toString())
console.log(1)

fs.readFile('input.txt', function(err, res) {
	console.log(res.toString())
})
console.log(1)