var postRouter = require('express').Router();
var mongodb = require('mongodb');
var id = 0;
var posts = [];
// setup boilerplate route jsut to satisfy a request
// for building
postRouter.route('/')
  .get(function(req, res){
    console.log('Hey from post!!');
    res.send({ok: true});
  })
  .post(function(req,res,next){
  	var post = req.body;
  	id ++;
  	post.id = id +'';
  	posts.push(post);
  });

 postRouter.route('/:post_id')
 	.get(function(req, res){
 		var post = req.post;
 		res.json(post || {});
 	})
 	.delete(function(req, res){
 		var post = _.findIndex(posts, {id: req.params.id});
 		posts.slice(post,1);
 		res.json(req.post);
 	})
 	.put(function(req,res){
 		var update = req.body;
 		if(update.id){
 			delete update.id;
 		}
 		var post = _.findIndex(posts, {id: req.params.id});
 		if(!posts[post]){
 			res.send();
 		}
 		else{
 			var updatedPost = _.assign(posts[post], update);
 			res.json(updatedPost);
 		}
 	});

module.exports = postRouter;
