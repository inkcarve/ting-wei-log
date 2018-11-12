var port = process.env.PORT || 4000;
var dev = process.env.NODE_ENV !== 'production';
var express = require('express');
var router = express.Router();
var createServer = require('http').createServer;
var parse = require('url').parse;
var next = require('next');
var mobxReact = require('mobx-react');
var app = next({ dev: dev });
var handle = app.getRequestHandler();
mobxReact.useStaticRendering(true);
app.prepare().then(function () {
    var server = express();
    server.get('*', function (req, res) {
        return handle(req, res);
    });
    server.listen(port, function (err) {
        if (err)
            throw err;
        console.log("> Ready on http://localhost:" + port);
    });
});
//# sourceMappingURL=server.js.map