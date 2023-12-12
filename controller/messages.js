const model = require("../model/massage")
const format = require('date-format-am-pm')

async function getAllMessages(req, res) {
    try {
        const messages = await model.find({});
        res.render('index', {title: "Mini MessageBoard", messages: messages})
    } catch (e) {
        console.log(e.message);
    }
}

async function getForm(req, res) {
    try {
        res.render('form', {title: 'form'})
    } catch (e) {
        console.log(e);
        res.status(500).send('an error occurred');
    }
}

async function postNewMessage(req, res) {
    try {
        const newMessage = await model.create({
            name: req.body.name,
            message: req.body.message,
            added: format(new Date())
        })
        console.log(newMessage);
        res.redirect('/');
    } catch (e) {
        console.log(e.message);
        res.status(500).send('Server Error');
    }
}

module.exports = {getAllMessages, postNewMessage, getForm};