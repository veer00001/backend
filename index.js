
require('dotenv').config();
const contact = require('./db/schema');
require('./db/mongoose')

// signup

const signup = require('./db/schemas/signUpSchema');
const ProductSchema = require('./db/schemas/addProject');

const express = require('express');
const app = express();
const cors = require('cors');
const PORT =  process.env.PORT || 8000;


const jwt = require('jsonwebtoken');

const jwtKey = 'mango27';

app.use(cors());
app.use(express.json());


// insert ContectData

app.post('/insert', async (req, res) => {
    const data = new contact(req.body);
    let ans = await data.save();
    res.send(ans);

})


// signup

app.post('/signup', async (req, res) => {
    const data = new signup(req.body);
    let ans = await data.save();
    delete ans.password;

    if (ans) {
        jwt.sign({ data }, jwtKey, (err, token) => {
            if (err) {
                res.send("something went wrong please try sometime")
            }
            res.send({ ans, auth: token })
        })
    }
    else {
        res.send('error')
    }

})


// login 

app.post('/login', async (req, res) => {
    if (req.body.email && req.body.password) {
        let data = await signup.findOne(req.body).select('-password');
        if (data) {
            jwt.sign({ data }, jwtKey, (err, token) => {
                if (err) {
                    res.send("something went wrong please try sometime")
                }
                res.send({ data, auth: token })
            })
        }
        else {
            res.send("no data")
        }
    }
    else {
        res.send('no data')
    }
})

// messageReponse

app.get('/messageResponse', async (req, res) => {
    let data = await contact.find();
    res.send(data);
})



// ProductSchema

app.post('/addProjects', async (req, res) => {
    let data = new ProductSchema(req.body);
    let result = await data.save();
    res.send(result)
})


app.get('/getProjects', async (req, res) => {
    let data = await ProductSchema.find();
    res.send(data)
})



app.delete('/deleteProjects/:id', async (req, res) => {
    let data = await ProductSchema.deleteOne({ _id: req.params.id })
    res.send(data);
});



function verifyToken(req, res, next) {
    let token = req.headers['authorization']
    if (token) {
        token = token.split(' ')[4];
        jwt.verify(token, jwtKey, (err, valid) => {
            if (err) {

                res.status(401).send({ result: "please provied valid token   " })
            }
            else {

                next()
            }
        })
    }
    else {
        res.status(403).send({ result: "please send token with result" })
    }
}

app.listen(PORT, ()=>{
    console.log(`Server runing at port no ${PORT}`);
});

