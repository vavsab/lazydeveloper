"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var script_1 = require("./script");
var fs = require('fs');
var filePath = 'settings.json';
var scriptsFolderPath = 'generatedScripts';
var ScriptService = (function () {
    function ScriptService() {
        this._scripts = [
            new script_1.Script({ title: 'Evidence', shortcut: 'CTRL+NUM1', color: 'lighterBlue', content: 'A' }),
            new script_1.Script({ title: 'Evidence2', shortcut: 'CTRL+NUM1', color: 'darkRed', content: 'B' }),
            new script_1.Script({ title: 'Evidence3', shortcut: 'CTRL+NUM1', color: 'green', content: 'C' }),
            new script_1.Script({ title: 'Evidence4', shortcut: 'CTRL+NUM1', color: 'brown', content: 'D' }),
            new script_1.Script({ title: 'Evidence5', shortcut: 'CTRL+NUM1', color: 'darkGreen', content: 'E' })
        ];
        try {
            if (fs.existsSync(filePath)) {
                this._scripts = JSON.parse(fs.readFileSync(filePath));
            }
        }
        catch (e) {
            alert('Could not parse settings. Error: ' + e.toString());
        }
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
    ScriptService.prototype.save = function (scripts) {
        this._scripts = scripts;
        fs.writeFileSync('settings.json', JSON.stringify(this._scripts));
        if (!fs.existsSync(scriptsFolderPath)) {
            fs.mkdirSync(scriptsFolderPath);
        }
        scripts.forEach(function (script) {
            fs.writeFileSync(scriptsFolderPath + "/" + script.title + ".bat", script.content);
        });
    };
    return ScriptService;
}());
ScriptService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ScriptService);
exports.ScriptService = ScriptService;
