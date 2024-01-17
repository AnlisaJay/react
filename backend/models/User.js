const { Schema, model } = require('mongoose')

const User = new Schema({
    login: {
        type: String,
        uniqued: true,
        required: true
    },
    password: {
        type: String,
        uniqued: true
    },
    email: {
        type: String,
        uniqued: true
    }
})

module.exports = model('User', User)