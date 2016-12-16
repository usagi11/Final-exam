var router = require('express').Router();
var app = express();
// setup boilerplate route jsut to satisfy a request
// for building

//route() will allow you to use same path for different HTTP operation.
//So if you have same URL but with different HTTP OP such as POST,GET etc
//Then use route() to remove redundant code.
router.route('/')
  .get(function(req, res){
    console.log('Hey from user!!');
    res.send({ok: true});
  });

app.use(function(err, req, res, next){
	res.status(err.status || 500);
	res.render('error',{
		message: err.message, error:{}
	});
});

module.exports = router;
