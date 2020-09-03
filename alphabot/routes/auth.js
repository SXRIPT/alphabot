require('dotenv').config();
const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const logger = require('../config/logger');
const { signupValidation } = require('../helpers/validation');

const router = express.Router();

router.post('/signup', passport.authenticate('signup', { session: false }), async (req, res) => {

  const { error } = signupValidation(req.body);
  if (error) {
    return res.status(400).json(error.details[0].message);
  }

  res.json({
    message: 'Signup successful',
    user: req.user,
  });
});
router.post('/login', async (req, res, next) => {
  passport.authenticate('login', { session: false }, async (err, user, info) => {
    try {
      if (err || !user) {
        logger.error(info.message);
        const error = new Error('An Error occurred!');
        return next(error);
      }
      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);
        // Not storing sensitive information in the token such as password
        const body = {
          _id: user._id,
          email: user.email,
        };

        const token = jwt.sign({ user: body }, process.env.TOKEN_SECRET);
        return res.json({ token });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

passport.use(new JWTStrategy({
  secretOrKey: process.env.TOKEN_SECRET,
  jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token'),
}, async (token, done) => {
  try {
    return done(null, token.user);
  } catch (error) {
    done(error);
  }
}));

module.exports = router;
