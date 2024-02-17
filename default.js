import { workdata } from './data/work.js';

import workmodel from './model/workSchema.js'
const DefaultData = async () => {
    try {
        await workmodel.insertMany(workdata)
    } catch (error) {
        console.log('error while importing work data', error)
    }
}


export default DefaultData


