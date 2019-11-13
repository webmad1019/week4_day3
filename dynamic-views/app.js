const express = require('express')
const app = express()
const port = 3000


// Middlewares
app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')
app.use(express.static('public'))


// Routing
app.get('/', (req, res) => {

    const data = {
        name: 'Sandra',
        course: 'Web Dev @ Ironhack Madrid',
        debt: '3.200€ (<em>límite de pago: 30 de octubre</em>)',
        availableCampus: ['Madrid', 'Barcelona', 'Lisboa', 'Berlin'],
        competences: {
            programming: 'high',
            logic: 'high',
            softskills: 'high'
        },
        address: {
            street: 'García Luna',
            number: '81',
            postalcode: '863673'
        }
    }

    res.render('index', data)
})

// Listen
app.listen(port, () => console.log('App escuchando en el puerto', port))