"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Esteban on 13/05/17.
 */
var core_1 = require("@angular/core");
var menuBanco = (function () {
    function menuBanco() {
        this.encargado = String;
        this.telefono = String;
        this.direccion = String;
        this.nombre = String;
    }
    return menuBanco;
}());
menuBanco = __decorate([
    core_1.Component({
        selector: 'menuBanco',
        templateUrl: 'public/bancoDeSangre/menuBanco.html'
    })
], menuBanco);
exports.menuBanco = menuBanco;
//# sourceMappingURL=menuBanco.component.js.map