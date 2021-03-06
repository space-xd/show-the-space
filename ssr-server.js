const router = require('./api');
const express = require('express')
const next = require('next')
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production'
const APP_PORT = process.env.PORT || 3000;
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
	.then(() => {
		const server = express()
		server.use(bodyParser.json())
		server.use(bodyParser.urlencoded({ extended: true }))
		server.use('/api', router)

		server.get('*', (req, res) => {
			return handle(req, res)
		})

		server.listen(APP_PORT, (err) => {
			if (err) throw err
			console.log(`Starting the app on port:${APP_PORT}`);
		})
	})
	.catch((ex) => {
		console.error(ex.stack)
		process.exit(1)
	})