var EventEmitter = require('events')

class Gym extends EventEmitter{
    constructor(){
        super()
        console.log('workout is starting..')
    }
    workout(){
        setInterval(()=> this.emit('boom', 'boom'), 1000)
    }
}

var gym = new Gym()
gym.on('boom', function(name){
    console.log(name)
})

gym.workout()