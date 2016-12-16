var userRouter = require('express').Router();
var app = express();
var users = [];
var id = 0;
// setup boilerplate route jsut to satisfy a request
// for building

//route() will allow you to use same path for different HTTP operation.
//So if you have same URL but with different HTTP OP such as POST,GET etc
//Then use route() to remove redundant code.
userRouter.route('/')
  .get(function(req, res){
    console.log('Hey from user!!');
    res.send({ok: true});
  });

app.use(function(err, req, res, next){
	if(err){
		res.status(500).send(err);

	}
	
});

userRouter.route('/:user_id')
	.get(function(req, res){
		var user = req.user;
		res.json(user || {});
	})
	.delete(function(req, res){
		var user = _.findIndex(users, {id:req.params.id});
		users.splice(user,1);
		res.json(req.user);
	})
	.put(function(req,res){
		var update = req.body;
		if(update.id){
			delete update.id;
		}
		var user = _.findIndex(user, {id: req.param.id});
		if(!users[user]){
			res.send();
		}
		else{
			var updatedUser = _.assign(users[user], update);
			res.json(updatedUser);
		}


	});
module.exports = userRouter;
