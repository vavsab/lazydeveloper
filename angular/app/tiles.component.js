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
var router_1 = require("@angular/router");
var script_service_1 = require("./script.service");
var spawn = require('child_process').spawn;
var TilesComponent = (function () {
    function TilesComponent(router, scriptService) {
        this.router = router;
        this.scriptService = scriptService;
        this.scripts = this.scriptService.scripts;
    }
    TilesComponent.prototype.switchToEditMode = function () {
        this.router.navigate(['edit']);
    };
    TilesComponent.prototype.run = function (script) {
        var bat = spawn("\"generatedScripts\\" + script.title + ".bat\"", { shell: true });
        bat.stdout.on('data', function (data) {
            console.log(data.toString());
        });
        bat.stderr.on('data', function (data) {
            console.log(data.toString());
        });
        bat.on('exit', function (code) {
            console.log("Child exited with code " + code);
        });
    };
    return TilesComponent;
}());
TilesComponent = __decorate([
    core_1.Component({
        templateUrl: 'views/tiles.html',
    }),
    __metadata("design:paramtypes", [router_1.Router,
        script_service_1.ScriptService])
], TilesComponent);
exports.TilesComponent = TilesComponent;
