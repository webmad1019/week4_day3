const mongoose = require('mongoose')
const Dog = require('./models/Dog')

mongoose
    .connect('mongodb://localhost/exampleApp-webmad1019', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err))




// .countDocuments() retorna el sumatorio de elementos que hacen match con la query
Dog.countDocuments({ name: 'Perro número 1' })
    .then(totalDogs => console.log(`Hay un total de ${totalDogs} perros`))
    .catch(err => `Error al actualizar perros: ${err}`)





// Eventos de Mongoose
mongoose.connection.on('connected', () => console.log('Mongoose default connection open'));
mongoose.connection.on('error', (err) => console.log(`Mongoose default connection error: ${err}`));
mongoose.connection.on('disconnected', () => console.log('Mongoose default connection disconnected'));
process.on('SIGINT', () => { mongoose.connection.close(() => { console.log('Mongoose default connection disconnected through app termination'); process.exit(0); }); });