
import mongoose from 'mongoose';


let workSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true, 
        trime: true,

    },
    description: {
        type: String,
        require: true,
        trime: true,

    },
    link: {
        type: String,
        require: true,
        trime: true,
        unique: true
    }
})

const workmodel = new mongoose.model('work', workSchema)
export default workmodel; 