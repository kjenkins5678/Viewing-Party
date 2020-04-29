var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
    usernameField: "user_id"
  },
  function(user_id, password, done) {
    // When a user tries to sign in this code runs
    console.log('trying to sign in');
    db.Club_Member.findOne({
      where: {
        user_id: user_id, 
        password: password
      }
    }).then(function(dbMember) {
      // If there's no user with the given email
      console.log('here');
      console.log(password);
      if (!dbMember) {
          console.log('failed');
        return done(null, false, {
          message: "Incorrect credentials."
        });
        }
      console.log('success');
      console.log(dbMember);
      // If none of the above, return the user
      return done(null, dbMember);
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;