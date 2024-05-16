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
  failureFlash: true
}));

// Registration route
router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const newUser = new User({ username, password });
  await newUser.save();
  res.redirect('/login');
});

// Logout route
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

module.exports = router;
