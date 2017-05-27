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
var solicitudes = [
    { re: 'cruzroja', men: 'hola papus dame los momos' },
    { re: 'cruzroja', men: 'hola ke hace dame la droga men' },
    { re: 'cruzroja', men: 'hola ke me cuenta mami dame la sangre' },
    { re: 'palacio', men: 'hola ke hace dame la droga men' },
    { re: 'bhubhu', men: 'hola ke hace dame la droga men' },
    { re: 'cruzroja', men: 'hola ke hace dame la droga men' },
    { re: 'cruzroja', men: 'hola ke hace dame la droga men' },
    { re: 'cruzroja', men: 'hola ke hace dame la droga men' },
    { re: 'cruzroja', men: 'hola ke hace dame la droga men' },
    { re: 'cruzroja', men: 'hola ke hace dame la droga men' },
    { re: 'cruzroja', men: 'hola ke hace dame la droga men' }
];
var solicitud = (function () {
    function solicitud() {
        this.solicitud = solicitudes;
        this.nombreBanco = "nombre del banco aqui";
    }
    return solicitud;
}());
solicitud = __decorate([
    core_1.Component({
        selector: 'solicitud',
        templateUrl: 'bancoDeSangre/solicitudes.html'
    }),
    __metadata("design:paramtypes", [])
], solicitud);
exports.solicitud = solicitud;
var Solicitud = (function () {
    function Solicitud() {
    }
    return Solicitud;
}());
exports.Solicitud = Solicitud;
//# sourceMappingURL=solicitudes.component.js.map