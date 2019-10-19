const router = require('express').Router();
const uuid = require('uuid');
const posts = [];

router.post('/', (req, res) => {
	posts.push({
		...req.body,
		id: uuid.v4(),
	})
	res.end('success')
});

router.get('/', (req, res) => {
	return res.send(posts).end();
})

module.exports = router;