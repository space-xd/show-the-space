const router = require('express').Router();
const post = require('./post');

router.use((req, res, next) => {
	// TODO: Auth	
	next();
});

router.use('/post', post)

module.exports = router;