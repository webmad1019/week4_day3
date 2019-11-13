const mongoose = require('mongoose')
const Dog = require('./models/Dog')

mongoose
    .connect('mongodb://localhost/exampleApp-webmad1019', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err))



// .create() recibe como argumento un objeto con lasm propiedades y valores del objeto a crear 
Dog.create({ name: 'minusuclo', age: 88, colors: ['red'], gender: 'female', phone: '003498984639' })
    .then(newDog => console.log(`El perro ${newDog.name} ha sido creado!: ${newDog}`))
    .catch(err => `Error al crear el perro: ${err}`)


// .insertMany() recibe un array con tantos  objetos con las propiedades y valores se deseen crear
/*
Dog.insertMany([
    { name: 'minusuclo 1', age: 88, colors: ['red'], gender: 'female', phone: '003498984639' },
    { name: 'minusuclo 2', age: 44, colors: ['blue'], gender: 'female', phone: '003498984639' },
    { name: 'minusuclo 3', age: 35, colors: ['red'], gender: 'unknown', phone: '0034887238567' }
])
    .then(...)
*/


// Eventos de Mongoose
mongoose.connection.on('connected', () => console.log('Mongoose default connection open'));
mongoose.connection.on('error', (err) => console.log(`Mongoose default connection error: ${err}`));
mongoose.connection.on('disconnected', () => console.log('Mongoose default connection disconnected'));
process.on('SIGINT', () => { mongoose.connection.close(() => { console.log('Mongoose default connection disconnected through app termination'); process.exit(0); }); });