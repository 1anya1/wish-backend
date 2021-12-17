//Dependencies
const express = require('express');
const cors = require('cors');
require('dotenv').config();
//Environment
const app = express();
const port = process.env.PORT || 3003;


//middleware
app.use(cors({origin: '*'})); 
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//Routes
const wishController = require('./controllers/wish.js')
app.use('/list', wishController)


app.listen(port, ()=>{console.log(`Im listening on port ${port}`)})