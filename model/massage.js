const mongoose = require('mongoose');
const format = require('date-format-am-pm');
const schema=mongoose.Schema;
const model=new schema({
    name: String,
    message: String,
    added: String
})
module.exports=mongoose.model('message',model);