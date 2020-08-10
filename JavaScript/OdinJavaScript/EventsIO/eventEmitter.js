const events = require('events');
const EventEmitter = new events.EventEmitter();

EventEmitter.on('Selamla', (object) => {
  console.log(`Merhaba ${object.name} ${object.surname}`);
});
// EventEmitter.emit('Selamla');
/* 
setTimeout(() => {
  EventEmitter.emit('Selamla');
}, 2000) */
const isim = "Cihat";
EventEmitter.emit('Selamla', { name: 'Cihat', surname: 'Salik' })

//on mantığı bir kere tanımla istediğin kadar kullan 
//ama once ise bir kere tanımla ve bir kere kullanılır daha fazla olmaz.

EventEmitter.once('merhabaDe', () => {
  console.log('Merhaba');
});

EventEmitter.emit('merhabaDe');
EventEmitter.emit('merhabaDe');//dikkat 2. si olmadı...


console.log(__dirname);
console.log(__filename);