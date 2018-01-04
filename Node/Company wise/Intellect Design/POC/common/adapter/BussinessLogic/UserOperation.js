var app = require('express')();
var bodyParser = require('body-parser');
var User = require('../../model/user');
var UserOperation = function(){
};
exports.UserOperation = UserOperation;
// 1
UserOperation.getUser = function(req,cb){
var userId = req.params.id;
if(typeof User != 'undefined' && User.length > 0){
  for(var i in User){
    if(User[i].id === userId){
    var userData = {};
    var toDoData = {};
    var data = {};
    userData.id = User[i].id;
    userData.fName = User[i].fName;
    userData.lName = User[i].lName;
    userData.email = User[i].email;
    userData.pincode = User[i].pincode;
    userData.birtdate = User[i].birtdate;
    userData.isActive = User[i].isActive;

    toDoData.id = User[i].toDos.id;
    toDoData.text = User[i].toDos.text;
    toDoData.done = User[i].toDos.done;
    toDoData.targetDate = User[i].toDos.targetDate;
    console.log(JSON.stringify(User[i]));
}
}
}
data.userData = userData;
data.toDoData = toDoData;
console.log('data is ....'+JSON.stringify(data));
cb(null,data);
}

//  2 get specific ToDos
UserOperation.getToDos = function(req,cb){
var toDoId = req.params.id;
if(typeof User != 'undefined' && User.length > 0){
  for(var i in User){
    if(User[i].toDos.id === toDoId){
    var userData = {};
    var toDoData = {};
    var data = {};
    toDoData.id = User[i].toDos.id;
    toDoData.text = User[i].toDos.text;
    toDoData.done = User[i].toDos.done;
    toDoData.targetDate = User[i].toDos.targetDate;
    data.toDoData = toDoData;
}
}
}

console.log('data is ....'+JSON.stringify(data));
cb(null,data);
}

// 3 get all active users
UserOperation.getActiveUsers = function(req,cb){
  var dataActiveArray =[];
var userId = req.params.id;
if(typeof User != 'undefined' && User.length > 0){
  for(var i in User){
    if(User[i].isActive === true){
    var userData = {};
    var toDoData = {};
    var data = {};
    userData.id = User[i].id;
    userData.fName = User[i].fName;
    userData.lName = User[i].lName;
    userData.email = User[i].email;
    userData.pincode = User[i].pincode;
    userData.birtdate = User[i].birtdate;
    userData.isActive = User[i].isActive;

    toDoData.id = User[i].toDos.id;
    toDoData.text = User[i].toDos.text;
    toDoData.done = User[i].toDos.done;
    toDoData.targetDate = User[i].toDos.targetDate;
    data.userData = userData;
    data.toDoData = toDoData;
    dataActiveArray.push(data);
}
}
}

cb(null,dataActiveArray);
}
