const port = process.env.PORT || 4000;
const dev = process.env.NODE_ENV !== "production";
const express = require("express");
const router = express.Router();
const { createServer } = require("http");
const { parse } = require("url");
const cluster = require('cluster');
const next = require("next");
const mobxReact = require("mobx-react");
const nextI18NextMiddleware = require("next-i18next/middleware");
const nextI18next = require("../i18n/i18n");
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = app.getRequestHandler();
const helmet = require("helmet");
const contentSecurityPolicy = require("./csp");
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker:any, code:any, signal:any) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {

mobxReact.useStaticRendering(true);

app.prepare().then(async () => {
  const server = express();
  server.use(helmet());
  server.use(
    helmet({
      contentSecurityPolicy
    })
  );
  nextI18NextMiddleware(nextI18next, app, server);
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

  server.get("*", (req: any, res: any) => {
    return handle(req, res);
  });

  // server.use('/',router);
  // server.use(express.static('static'));

  server.listen(port, (err: any) => {
    if (err) {
      throw err;
    }
    console.log(`> Ready on http://localhost:${port}`);
  });
});
}