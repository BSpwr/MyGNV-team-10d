const mongoose = require('mongoose');
const user = require(./models/user.model.js);

var newUser = new user({
	username: //some input,
	password: //some other input (hashing/salting is taken care of by pre function in schema)
});

newUser.save(function(err){
	if(err) throw err;
})

user.compare(somepassword, function(err, match){
	if (err) throw err;
	if(match){
		//do the thing
	}
	else{
		//access denied.
	}
})