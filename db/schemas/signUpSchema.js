const mongoose = require('mongoose');
const validator = require('validator');
const signup = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trime: true

    },
    lastname: {
        type: String,
        require: true,
        trime: true

    },

    email: {
        type: String,
        require: true,
        trime: true,
        unique: true,
        validator(value) {
            if (!validator.setEmail(value)) {
                throw Error("not valid Email")
            }
        }
    },
    password: {
        type: String,
        require: true,  
        trime: true
    },
    datecreated: Date,
    dateUpdated: Date
})


module.exports = new mongoose.model('signUp', signup)