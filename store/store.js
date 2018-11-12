var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { action, observable } from 'mobx';
var store;
var Store = (function () {
    function Store(isServer, lastUpdate) {
        var _this = this;
        this.lastUpdate = 0;
        this.light = false;
        this.start = function () {
            _this.timer = setInterval(function () {
                _this.lastUpdate = Date.now();
                _this.light = true;
            });
        };
        this.stop = function () { return clearInterval(_this.timer); };
        this.lastUpdate = lastUpdate;
    }
    __decorate([
        observable
    ], Store.prototype, "lastUpdate", void 0);
    __decorate([
        observable
    ], Store.prototype, "light", void 0);
    __decorate([
        action
    ], Store.prototype, "start", void 0);
    return Store;
}());
export function initStore(isServer, lastUpdate) {
    if (lastUpdate === void 0) { lastUpdate = Date.now(); }
    if (isServer) {
        return new Store(isServer, lastUpdate);
    }
    else {
        if (!store) {
            store = new Store(isServer, lastUpdate);
        }
        return store;
    }
}
//# sourceMappingURL=store.js.map