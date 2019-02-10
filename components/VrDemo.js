var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
import * as React from "react";
import { observer, inject } from "mobx-react";
import { Modal, ModalBody } from 'reactstrap';
import { withNamespaces } from "../i18n/i18n";
import { observable, action } from "mobx";
var AframeReact;
var VrDemo = (function (_super) {
    __extends(VrDemo, _super);
    function VrDemo(props) {
        var _this = _super.call(this, props) || this;
        _this.loadendCallback = function () {
            setTimeout(function () {
                _this.modalToggle();
            }, 500);
        };
        _this.modalShow = true;
        _this.modalToggle = function () {
            _this.modalShow = !_this.modalShow;
        };
        _this.props.store.applyLanguage();
        return _this;
    }
    VrDemo.prototype.UNSAFE_componentWillMount = function () {
        if (typeof window === 'undefined') {
            return;
        }
        if (window.aframe) {
            delete window.aframe;
        }
        require("aframe");
        require("aframe-particle-system-component");
        if (!AFRAME.components["change-box"]) {
            AFRAME.registerComponent("change-box", {
                init: function () {
                    var lastIndex = 2;
                    var styles = [
                        {
                            color: "#ff1100",
                            scale: "3.0 3.0 3.0"
                        },
                        {
                            color: "#f5f200",
                            scale: "0.5 0.5 0.5"
                        },
                        {
                            color: "#ff00f8",
                            scale: "1.0 1.0 1.0"
                        }
                    ];
                    this.el.addEventListener("click", function (evt) {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log(styles);
                                        return [4, ((lastIndex + 1) % styles.length)];
                                    case 1:
                                        lastIndex = _a.sent();
                                        this.setAttribute("material", "color", styles[lastIndex].color);
                                        this.emit("box_scale" + lastIndex);
                                        console.log("I was clicked at: ", evt.detail.intersection.point);
                                        return [2];
                                }
                            });
                        });
                    });
                }
            });
        }
        console.log(AFRAME);
    };
    VrDemo.prototype.componentDidMount = function () {
        var envGltfImg = document.createElement('img');
        envGltfImg.src = 'static/gltf/fantasy_sky_background/textures/Material__25__background_JPG_002_emissive.jpg';
        envGltfImg.onload = this.loadendCallback;
        console.log(envGltfImg);
    };
    VrDemo.prototype.render = function () {
        if (typeof window === 'undefined') {
            return null;
        }
        return (React.createElement("div", { className: "ar-demo pt-4" },
            React.createElement("a-scene", { "data-aframe-inspector": "true" },
                React.createElement("a-assets", null,
                    React.createElement("a-asset-item", { "env-gltf": "", id: "envGltf", src: "static/gltf/fantasy_sky_background/scene.gltf" })),
                React.createElement("a-gltf-model", { src: "#envGltf", position: "0 0 0" },
                    React.createElement("a-animation", { attribute: "rotation", begin: "500", easing: "linear", dur: "22000", from: "0 0 0", to: "0 360 0", repeat: "indefinite" })),
                React.createElement("a-text", { position: "-1.46653 2 -2.40167", "welcome-text": "", value: "Look The Box", side: "double", align: "center", geometry: "primitive:plane;width:1.7;height:0.5", material: "color:#FFFFFF;side:double;emissive:#ffffff;opacity:0.2", text: "", scale: "1.000000140492798 1.000000140492798 1.000000140492798", rotation: "-54.86471958834224 -64.32425278595214 89.29661828672906" },
                    React.createElement("a-animation", { begin: "0", dur: "2000", direction: "alternate", attribute: "scale", from: "1 1 1", to: "1.2 1.2 1.2", repeat: "indefinite", end: "" }),
                    React.createElement("a-animation", { begin: "0", dur: "2000", direction: "alternate", attribute: "rotation", from: "-54.86471958834224 -64.32425278595214 89.29661828672906", to: "-4.172851621937786 11.256328843140153 -20.21223213883005", repeat: "indefinite" })),
                React.createElement("a-entity", { id: "cameraWrapper", position: "0 1 5" },
                    React.createElement("a-entity", { camera: "active: true", "look-controls": "true", "wasd-controls": "true", "mouse-cursor": "true" },
                        React.createElement("a-entity", { cursor: "fuse: true; fuseTimeout: 500; rayOrigin: entity;", position: "0 0 -1", geometry: "primitive: ring; radiusInner: 0.02; radiusOuter: 0.03", material: "color: black; shader: flat" }))),
                React.createElement("a-entity", { id: "box", "change-box": "", geometry: "", material: "color:#ff00f8", position: "1.62512 0 -7.72419", rotation: "0 -73.42282257262961 0" },
                    React.createElement("a-animation", { id: "box_scale0", begin: "box_scale0", dur: "1000", direction: "normal", attribute: "scale", from: "1 1 1", to: "3 3 3", repeat: "0" }),
                    React.createElement("a-animation", { id: "box_scale1", begin: "box_scale1", dur: "1000", direction: "normal", attribute: "scale", from: "3 3 3", to: "0.5 0.5 0.5", repeat: "0" }),
                    React.createElement("a-animation", { id: "box_scale2", begin: "box_scale2", dur: "1000", direction: "normal", attribute: "scale", from: "0.5 0.5 0.5", to: "1 1 1 ", repeat: "0" })),
                React.createElement("a-entity", { light: "type: ambient; intensity: 0.1;" },
                    React.createElement("a-animation", { begin: "0", dur: "2000", direction: "alternate", attribute: "light.intensity", from: "0.1", to: "0.4", repeat: "indefinite", end: "" })),
                React.createElement("a-entity", { light: "type:spot;color:#96f7ff;intensity:0.6;penumbra:1;castShadow:true", position: "7.30778 4.66448 -1.34723", rotation: "-27.079704271268103 0 0" })),
            React.createElement("div", null,
                React.createElement(Modal, { isOpen: this.modalShow, className: "modal-dialog-centered" },
                    React.createElement(ModalBody, null,
                        React.createElement("div", { className: "d-flex justify-content-center" },
                            React.createElement("div", { className: "spinner-border text-primary", role: "status" },
                                React.createElement("span", { className: "sr-only" }, "Loading..."))),
                        React.createElement("h6", { className: "text-center mt-3" }, "Loading"))))));
    };
    __decorate([
        observable
    ], VrDemo.prototype, "modalShow", void 0);
    __decorate([
        action
    ], VrDemo.prototype, "modalToggle", void 0);
    VrDemo = __decorate([
        inject("store"),
        observer
    ], VrDemo);
    return VrDemo;
}(React.Component));
export default withNamespaces("common")(VrDemo);
//# sourceMappingURL=VrDemo.js.map