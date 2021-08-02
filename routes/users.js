const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');

router.get(
	'/register',
	catchAsync(async (req, res) => {
		res.render('users/register');
	})
);

router.post(
	'/register',
	catchAsync(async (req, res) => {
		try {
			const { email, username, password } = req.body;
			const user = new User({ email, username });
			const registeredUser = await User.register(user, password);
			req.flash('success', 'Welcome to BeachCamp!');
			res.redirect('/campgrounds');
		} catch (e) {
			req.flash('error', e.message);
			res.redirect('/register');
		}
	})
);

router.get(
	'/login',
	catchAsync(async (req, res) => {
		res.render('users/login');
	})
);

router.post(
	'/login',
	passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }),
	catchAsync(async (req, res) => {
		req.flash('success', 'Welcome back!');
		res.redirect('/campgrounds');
	})
);

module.exports = router;
