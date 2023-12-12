let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/',  function(req, res, next) {
  try {
    res.send('respond with a resource');
  }
  catch (e){
    console.log(e);
    res.status(500).send('an error occurred');
  }
});

module.exports = router;
