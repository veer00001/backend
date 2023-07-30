const mongoose = require('mongoose');

let loginSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

module.exports = mongoose.model('loginContect', loginSchema)