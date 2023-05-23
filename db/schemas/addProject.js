const mongoose = require('mongoose');

let ProductSchema = new mongoose.Schema({
    imgUrl: {
        type: String,
        require: true,
        trime: true

    },
    imgHeading: {
        type: String,
        require: true,
        trime: true

    },
    imgSourceCOde: {
        type: String,
        require: true,
        trime: true

    }
});
module.exports = new mongoose.model('newProject', ProductSchema);