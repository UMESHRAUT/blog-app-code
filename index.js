const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 5000
const serialiser = require('node-serialize')
const mongodb = require('mongodb');
const mongoose=require('mongoose')

app.use(express.urlencoded());


// Parse JSON bodies (as sent by API clients)
const mongoURI = "mongodb://localhost:27017"+"/blog"
console.log(mongoURI);


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-with, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods","Origin, X-Requested-with, Content-Type, Accept")
    next();
  });


app.use(express.json());
mongoose.connect(mongoURI,{ useNewUrlParser: true,useUnifiedTopology: true })    
.then(()=>console.log("mongo db connected"))
.catch((err)=>console.log(err))

// app.get('/', (req, res) => res.send('Hello World!'))
app.use('/',require('./route/api'))
// your code goes here

// here

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;