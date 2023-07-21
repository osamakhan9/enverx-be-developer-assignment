require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connection = require('./config/db');

const app = express();


app.use(cors());

app.use(express.json());


app.get('/', async(req , res)=>{
    res.send('Welcome to Server')
})


app.listen(8080 , async()=>{
    try {
        await connection();
        console.log('listening on http://localhost:8080')
    } catch (error) {
        console.log(error)
    }
})