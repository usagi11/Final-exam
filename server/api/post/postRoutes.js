var router = require('express').Router();
var mongodb = require('mongodb');

// setup boilerplate route jsut to satisfy a request
// for building
router.route('/')
  .get(function(req, res){
    console.log('Hey from post!!');
    res.send({ok: true});
  });

module.exports = router;
