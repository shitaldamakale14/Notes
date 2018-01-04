var app = require('express')();
require('../common/adapter/routing/UserRouting')(app);
app.listen(3000,function(){
console.log('listining on port 3000 .....');
});
