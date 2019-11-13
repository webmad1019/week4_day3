const mongoose = require('mongoose')
const Dog = require('./models/Dog')

mongoose
    .connect('mongodb://localhost/exampleApp-webmad1019', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err))




// .updateMany() recibe dos argumentos: objeto con la query de alcace y objeto con la query de actualizacion
Dog.updateMany({ name: 'Perro número 0' }, { gender: 'unknown' })
    .then(allDogs => console.log(`Perros actualizados`))
    .catch(err => `Error al actualizar perros: ${err}`)


// .updateOne actualiza el primer objeto que haga match con la query
// Dog.updateOne({query de alcance}, {query de actualizacion})


// .findByIdAndUpdate recibe un string con un ID y actualiza el objeto con ese ID
// Dog.findByIdAndUpdate('id', {query})




// Eventos de Mongoose
mongoose.connection.on('connected', () => console.log('Mongoose default connection open'));
mongoose.connection.on('error', (err) => console.log(`Mongoose default connection error: ${err}`));
mongoose.connection.on('disconnected', () => console.log('Mongoose default connection disconnected'));
process.on('SIGINT', () => { mongoose.connection.close(() => { console.log('Mongoose default connection disconnected through app termination'); process.exit(0); }); });