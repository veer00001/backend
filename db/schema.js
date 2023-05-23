const mongoose = require('mongoose');

const contact = new mongoose.Schema({
    name:String,
    email:String,
    message:String,
})
 

module.exports = mongoose.model('message',contact)
