const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/User');

// Login route
router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true // Enable flash messages on failure
}));

// Registration route
router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const userExists = await User.findOne({ username });
  if (userExists) {
    req.flash('error_msg', 'Username already exists');
    return res.redirect('/register');
  }

  const newUser = new User({ username, password });
  await newUser.save();
  req.flash('success_msg', 'You are registered and can log in');
  res.redirect('/login');
});

// Logout route
router.get('/logout', (req, res, next) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    req.flash('success_msg', 'You are logged out');
    res.redirect('/login');
  });
});


module.exports = router;
