var app = require('express')();
require('../adapter/UserRouting/UserRouting')(app);
app.listen(3000, function(){
console.log('Listining on port 3000......');

});
