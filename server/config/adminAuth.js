const pass = require("passport");
const LocalStrategy = require("passport-local").Strategy;
var bcrypt = require("bcryptjs");//crypto library

app.use(pass.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done){
	done(null, user._id);
});

passport.deserializeUser(function(userId, done){
	User.findById(userId, (err, user) => done(err, user));
});

const local = new LocalStrategy((username, password, done) => {//password/username verification
	User.findOne({ username })
		.then(user =>{
			if(!user) {
				done(null, false, {message: "Oops! That username does not exist!"});
			} 
			else{
				bcrypt.compare(password, user.password, function(err, response){
					if(err) return done(err);
					if(res==false){
						return done(null, false);
					}
					else{
						return done(null, user);
					}
				})
			}
		})
	.catch(e => done(e));
});

passport.use("local", local);
