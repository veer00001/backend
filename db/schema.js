// const mongoose = require('mongoose');
import mongoose from "mongoose"

const contact = new mongoose.Schema({
    name:String,
    email:String,
    message:String,
})
 

module.exports = mongoose.model('message',contact)
