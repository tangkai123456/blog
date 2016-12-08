var events = require('events')

var eventEmitter = new events.EventEmitter()

eventEmitter.on('login', function() {
	console.log('login success')
})

eventEmitter.emit('login')