"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fs_1 = require("fs");
var ScriptService = (function () {
    function ScriptService() {
        this._scripts = [
            { title: 'Evidence', shortcut: 'CTRL+NUM1', color: 'lighterBlue', content: 'A' },
            { title: 'Evidence2', shortcut: 'CTRL+NUM2', color: 'darkRed', content: 'B' },
            { title: 'Evidence3', shortcut: 'CTRL+NUM3', color: 'green', content: 'C' },
            { title: 'Evidence4', shortcut: 'CTRL+NUM4', color: 'brown', content: 'D' }
        ];
    }
    Object.defineProperty(ScriptService.prototype, "scripts", {
        get: function () {
            return this._scripts;
        },
        set: function (value) {
            this._scripts = value;
        },
        enumerable: true,
        configurable: true
    });
    ScriptService.prototype.save = function () {
        console.log(fs_1.default);
        //electron.remote.require('dialog').showErrorBox('My message', 'hi.');
    };
    return ScriptService;
}());
ScriptService = __decorate([
    core_1.Injectable()
], ScriptService);
exports.ScriptService = ScriptService;
