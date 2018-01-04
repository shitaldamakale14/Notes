var app = require('express')();
var UserOperation = require('../UserOperation/UserOperation').UserOperation;
module.exports = function(app){
  app.get('/getUsers/:id',function(req,res){
  UserOperation.getUsers(req,function(err,data){
    if(err){
      console.log('This is error '+err);
    }
    else{
      console.log('Success in routing');
      res.send(data);
    }
  });

  });

console.log('inside routing');
}
