const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

/* Create your schema */
const userSchema = new Schema({
	username: { type: String, required: true, index: {unique: true}},
	password: {type: String, required: true}
});

UserSchema.pre('save', function(next) {
    var user = this;

    // generate a salt
    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);

        // hash the password along with our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.compare = function(pass, ret){
	bcrypt.compare(pass, this.password function(err, match){
		if(err) return ret(err);
		ret(null, match);
	});
};

const User = mongoose.model('User', userSchema);
module.exports = User;