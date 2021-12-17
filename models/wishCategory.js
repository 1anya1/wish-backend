const mongoose = require('../db/connection.js');
const listSchema = new mongoose.Schema({
    users:[String],
    title: String,
    items: [{name: String, image: String, url: String,  crossed: Boolean}]
}, {timestamps: true})
const Lists = mongoose.model('List', listSchema)

module.exports = Lists;