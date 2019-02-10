var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var port = process.env.PORT || 4000;
var dev = process.env.NODE_ENV !== "production";
var express = require("express");
var router = express.Router();
var createServer = require("http").createServer;
var parse = require("url").parse;
var cluster = require('cluster');
var next = require("next");
var mobxReact = require("mobx-react");
var nextI18NextMiddleware = require("next-i18next/middleware");
var nextI18next = require("../i18n/i18n");
var app = next({ dev: process.env.NODE_ENV !== "production" });
var handle = app.getRequestHandler();
var helmet = require("helmet");
var numCPUs = require('os').cpus().length;
if (cluster.isMaster && typeof numCPUs !== 'undefined') {
    console.log("Master " + process.pid + " is running");
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    cluster.on('exit', function (worker, code, signal) {
        console.log("worker " + worker.process.pid + " died");
    });
}
else {
    mobxReact.useStaticRendering(true);
    app.prepare().then(function () { return __awaiter(_this, void 0, void 0, function () {
        var server;
        return __generator(this, function (_a) {
            server = express();
            server.use(helmet());
            server.use(helmet({
                contentSecurityPolicy: {
                    directives: {
                        defaultSrc: ["'self'", "data:", "cdn.aframe.io", "https://cdn.rawgit.com", "https://raw.githubusercontent.com"],
                        styleSrc: ["'self'", "'unsafe-inline'"],
                        scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
                    }
                }
            }));
            nextI18NextMiddleware(nextI18next, app, server);
            server.get("*", function (req, res) {
                return handle(req, res);
            });
            server.listen(port, function (err) {
                if (err) {
                    throw err;
                }
                console.log("> Ready on http://localhost:" + port);
            });
            return [2];
        });
    }); });
}
//# sourceMappingURL=server.js.map