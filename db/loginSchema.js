// const mongoose = require('mongoose');

import mongoose from 'mongoose'

let loginSchema = new mongoose.Schema({
    name: String,
    email: String,
    company: String,
    textmessage: String

})

let login = mongoose.model('loginContect', loginSchema)
export default login



// if (values.name === '' || values.email === '' || values.company === '' || values.message === '' || error) {
//     alert('Please fill in all fields and provide a valid email address');
// } else {