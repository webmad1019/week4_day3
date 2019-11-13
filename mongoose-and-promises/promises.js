const mongoose = require('mongoose')
const Cat = require('./models/Cat')

mongoose
    .connect('mongodb://localhost/exampleApp-webmad1019', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err))

/*
Cat.collection.drop()       // Vacía la colección
Cat.create({ name: 'Michifú' })
    .then(theCat => {
        console.log('El método .create() retorna el objeto de la BBDD:', theCat, 'El gato se llama', theCat.name)
        Cat.find({})
            .then(allTheCats => {
                console.log("El método .find() retorna un Array", allTheCats)
                allTheCats.forEach(cat => console.log("Hay un gato llamaod", cat.name))
                Cat.insertMany([{ name: 'Belcebú' }, { name: 'Garfield' }])
                    .then(allNewCats => {
                        console.log("Los gatos nuevos son:", allNewCats)
                    })
                    .catch(err => console.log("Hubo un error!", err))
            })
            .catch(err => console.log("Hubo un error!", err))
    })
    .catch(err => console.log("Hubo un error!", err))
*/












Cat.collection.drop()
Cat.create({ name: 'Michifú' })
    .then(theCat => console.log('El método .create() retorna el objeto de la BBDD:', theCat, 'El gato se llama', theCat.name))
    .then(x => Cat.find({}))
    .then(allTheCats => console.log("El método .find() retorna un Array", allTheCats))
    .then(x => Cat.insertMany([{ name: 'Belcebú' }, { name: 'Garfield' }]))
    .then(allNewCats => console.log("Los gatos nuevos son:", allNewCats))
    .catch(err => console.log("Hubo un error!", err))














/*
Cat.collection.drop()
Cat.create({ name: 'Michifú' })
    .then(theCat => {
        console.log('El método .create() retorna el objeto de la BBDD:', theCat, 'El gato se llama', theCat.name)
        return Cat.find({})
    })
    .then(allTheCats => {
        console.log("El método .find() retorna un Array", allTheCats)
        allTheCats.forEach(cat => console.log("Hay un gato llamado", cat.name))
        return Cat.insertMany([{ name: 'Belcebú' }, { name: 'Garfield' }])
    })
    .then(allNewCats => console.log("Los gatos nuevos son:", allNewCats))
    .catch(err => console.log("Hubo un error!", err))
*/






// Eventos de Mongoose
mongoose.connection.on('connected', () => console.log('Mongoose default connection open'));
mongoose.connection.on('error', (err) => console.log(`Mongoose default connection error: ${err}`));
mongoose.connection.on('disconnected', () => console.log('Mongoose default connection disconnected'));
process.on('SIGINT', () => { mongoose.connection.close(() => { console.log('Mongoose default connection disconnected through app termination'); process.exit(0); }); });