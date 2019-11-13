const mongoose = require('mongoose')
const Schema = mongoose.Schema


const dogSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: 'DESCONOCIDO',
        maxlength: 30,
        trim: true,             // Corta automáticamente los espacios antes/después del texto
        set: name => {          // Aplica la función al valor preciuo a introducirlo en la BBDD
            const fisrtLetter = name.charAt(0).toUpperCase()
            const rest = name.substring(1)
            return fisrtLetter + rest
        }
    },
    age: {
        type: Number,
        required: true,
        min: 0,
        max: 99
    },
    colors: {
        type: [String],
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'unknown']
    },
    phone: {
        type: String,
        validate: {
            validator: phone => phone.startsWith('0034'),
            message: 'Sólo teléfonos nacionales'
        }
    }
}, {
    timestamps: true
})


// .model('nombre del modelo', schema)
const Dog = mongoose.model('Dog', dogSchema)

module.exports = Dog