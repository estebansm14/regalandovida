"use strict";
/**
 * Created by Esteban on 13/05/17.
 */
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
var Bancos = [
    { nom: 'cruz Roja' },
    { nom: 'americas' },
    { nom: 'poblado' },
    { nom: 'esteban' }
];
var buscarBanco = (function () {
    function buscarBanco() {
        this.banco = Bancos;
        this.nombreBanco = "alcaraz aqui va el nombre del banco";
        this.texto = "mensaje...";
    }
    buscarBanco.prototype.limpiar = function () {
    };
    return buscarBanco;
}());
buscarBanco = __decorate([
    core_1.Component({
        selector: 'buscarBanco',
        templateUrl: 'public/bancoDeSangre/buscarBanco.html'
    }),
    __metadata("design:paramtypes", [])
], buscarBanco);
exports.buscarBanco = buscarBanco;
var BANCOS = (function () {
    function BANCOS() {
    }
    return BANCOS;
}());
exports.BANCOS = BANCOS;
//# sourceMappingURL=buscarBanco.component.js.map