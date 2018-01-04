var app = require('express')();
var userJSON = require('../../common/model/UserJSON');
var UserOperation = function(){

};
console.log('userJSON'+JSON.stringify(userJSON));
UserOperation.getUsers = function(req,cb){
var data = {};
var userId = req.params.id;
if(typeof userJSON != 'undefined' && userJSON.length > 0){
console.log('userId'+userId);
  for(var i in userJSON ){
    if(userId === userJSON[i].id){
      var userData = {};
      userData.id = userJSON[i].id;
      data.userData = userData;
    }
  }
}
console.log('data in operation '+JSON.stringify(data));
cb(null,data);


};

exports.UserOperation = UserOperation;
