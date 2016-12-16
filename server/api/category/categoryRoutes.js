var categoryRouter = require('express').Router();
var app = express();
var categories = [];
var id = 0;


categoryRouter.route('/')
  .get(function(req, res){
    console.log('Hey from category!!');
    res.send({ok: true});
  });

app.use(function(err, req, res, next){
	res.status(err.status || 500);
	res.render('error',{
		message: err.message, error:{}
	});
});

categoryRouter.route('/:category_id')
	.get(function(req, res){
		var category = req.category;
		res.json(category || {});
	})
	.delete(function(req, res){
		var user = _.findIndex(categories, {id:req.params.id});
		users.splice(user,1);
		res.json(req.user);
	})
	.put(function(req,res){
		var update = req.body;
		if(update.id){
			delete update.id;
		}
		var category = _.findIndex(category, {id: req.param.id});
		if(!categories[category]){
			res.send();
		}
		else{
			var updatedCategory = _.assign(categories[category], update);
			res.json(updatedCategory);
		}


	});
module.exports = categoryRouter;