const port = process.env.PORT || 4000  
const dev = process.env.NODE_ENV !== 'production'
const express = require('express')
const router = express.Router()
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const mobxReact = require('mobx-react')
const app = next({dev})
const handle = app.getRequestHandler()

mobxReact.useStaticRendering(true)

app.prepare().then(() => {
	const server = express();

// Additional middleware which will set headers that we need on each request.
// router.use(function(req, res, next) {
//     console.log(req.method, req.url);
//     // Set permissive CORS header - this allows this server to be used only as
//     // an API server in conjunction with something like webpack-dev-server.
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     // Disable caching so we'll always get the latest comments.
//     // res.setHeader('Cache-Control', 'no-cache');
//     next();
// });

  // server.get('/index', (req, res) => {
  //   return app.render(req, res)
  // })

  // server.get('/other', (req, res) => {
  //   return app.render(req, res)
  // })

	server.get('*', (req, res) => {
    return handle(req, res)
  });

  // server.use('/',router);
  // server.use(express.static('static'));

	server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })

})
