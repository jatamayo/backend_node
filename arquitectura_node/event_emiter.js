const EventEmitter = require('events');

class Logger extends EventEmitter{
    execute(callBack){
        console.log('Before');
        this.emit('Start');
        callBack();
        this.emit('Finish');
        console.log('After');
    }
}

const logger = new Logger();

logger.on('Start', () => {
    console.log('Starting');
})
logger.on('Finish', () => {
    console.log('Finishing');
})
logger.on('Finish', () => {
    console.log('its done');
})

logger.execute(()=>{
    setTimeout(()=>{
        console.log('Hello World');
    },1000)
})