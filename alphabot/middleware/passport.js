const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const APIUserModel = require('../models/APIUser');

passport.use('login', new LocalStrategy({
  usernameField : 'email',
  passwordField : 'password'
}, async (email, password, done) => {
  try {
    // search if user exists with this email
    const user = await APIUserModel.findOne({ email });
    if( !user ){
      // if user not found in db
      return done(null, false, { message : 'User not found'});
    }

    const validate = await user.isValidPassword(password);
    if( !validate ){
      return done(null, false, { message : 'Wrong Password'});
    }

    // send user information to next middleware
    return done(null, user, { message : 'Logged in Successfully'});
  } catch (error) {
    return done(error);
  }
}));

passport.use('signup', new LocalStrategy({
  usernameField : 'email',
  passwordField : 'password'
}, async (email, password, done) => {
  try {
    const user = await APIUserModel.create({ email, password });
    return done(null, user);
  } catch (error) {
    return done(error);
  }
}));
