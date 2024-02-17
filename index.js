
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import('./db/mongoose.js')

import login from './db/loginSchema.js'
import DefaultData from './default.js'


import router from './router/router.js'

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());


const PORT = process.env.BASE_URL || 8000;




// login in  

app.post('/login', async (req, res) => {

    let data = new login(req.body);
    let ans = await data.save();
    res.send(ans);
})

// signup




app.use('/', router)




app.listen(PORT, () => {
    console.log(`Server runing at port no ${PORT}`);
});


DefaultData();   