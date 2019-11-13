const mongoose = require('mongoose')
const Dog = require('./models/Dog')

mongoose
    .connect('mongodb://localhost/exampleApp-webmad1019', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err))




// .deleteMany() elimina los objetos que hagan match con la query
Dog.deleteMany({ name: 'Perro número 0' })
    .then(allDogs => console.log(`Perros eliminados: ${allDogs}`))
    .catch(err => `Error al actualizar perros: ${err}`)


// .deleteOne elimina el primer objeto que haga match con la query
// Dog.deleteOne({query})


// .findByIdAndRemove recibe un string con un ID y elimina el objeto con ese ID
// Dog.findByIdAndRemove('id')




// Eventos de Mongoose
mongoose.connection.on('connected', () => console.log('Mongoose default connection open'));
mongoose.connection.on('error', (err) => console.log(`Mongoose default connection error: ${err}`));
mongoose.connection.on('disconnected', () => console.log('Mongoose default connection disconnected'));
process.on('SIGINT', () => { mongoose.connection.close(() => { console.log('Mongoose default connection disconnected through app termination'); process.exit(0); }); });