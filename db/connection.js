const mongoose = require('mongoose')

const db = mongoose.connection;
const mongoURI = process.env.MONGOB_URI;

mongoose.connect(mongoURI, {useNewUrlParser: true}), () => console.log('connected');

//Status
db.on('error', (err) => console.log(err.message));
db.on('disconnected', () => console.log('disconnected'));


// mongoose.Promise = Promise;
module.exports = mongoose; 

