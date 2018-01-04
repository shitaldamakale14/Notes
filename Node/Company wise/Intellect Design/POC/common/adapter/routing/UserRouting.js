var app = require('express')();
var bodyParser = require('body-parser');
var UserOperation = require('../BussinessLogic/UserOperation').UserOperation;
var User = require('../../model/user');

module.exports = function(app){
	// 1  get users and toDo data wrt user id paased in url
	//to get userDetails with associated ToDos
		app.get('/getUser/:id',function(req,res){
		console.log('inside getUser...1');
		UserOperation.getUser(req,function(err,data){
			if(err){
			console.log('error'+err);
			}
			else{
			console.log('success in route..');
			res.send(JSON.stringify(data));
			}
			});
		});

		// 2 to get Specific todos
			app.get('/getToDos/:id',function(req,res){
			UserOperation.getToDos(req,function(err,data){
				if(err){
				console.log('error'+err);
				}
				else{
				console.log('success in route..');
				res.send(JSON.stringify(data));
				}
				});
			});

			// 3 to get all active users
				app.get('/getActiveUsers',function(req,res){
				UserOperation.getActiveUsers(req,function(err,data){
					if(err){
					console.log('error'+err);
					}
					else{
					console.log('success in route..');
					res.send(JSON.stringify(data));
					}
					});
				});

}
