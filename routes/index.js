const express = require('express');
const messages = require('../controller/messages');

const formatAmPm = require('date-format-am-pm')

let router = express.Router();

router.get('/',messages.getAllMessages);
router.get('/new',messages.getForm)
router.post('/new' , messages.postNewMessage);

module.exports = router;
