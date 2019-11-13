const mongoose = require('mongoose')
const Dog = require('./models/Dog')

mongoose
    .connect('mongodb://localhost/exampleApp-webmad1019', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err))



// .find() tiene un único argumento opcional: objeto con la query a buscar, y retorna un array de objetos que hagan match on la query
Dog.find({ name: 'Perro número 0' })
    .then(allDogs => console.log(`Hay ${allDogs.length} perros!: ${allDogs}`))
    .catch(err => `Error al encontrar perros: ${err}`)


// .findoOne retorna el primer objeto que haga match con la query
// Dog.findOne({ query }) 


// .findById recibe un string con un ID y retorna el objeto con ese ID
// Dog.findById( 'id' ) 








// Eventos de Mongoose
mongoose.connection.on('connected', () => console.log('Mongoose default connection open'));
mongoose.connection.on('error', (err) => console.log(`Mongoose default connection error: ${err}`));
mongoose.connection.on('disconnected', () => console.log('Mongoose default connection disconnected'));
process.on('SIGINT', () => { mongoose.connection.close(() => { console.log('Mongoose default connection disconnected through app termination'); process.exit(0); }); });