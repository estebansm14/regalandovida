"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
//bancos
var estado_component_1 = require("./estadoR/estado.component");
var buscarBanco_component_1 = require("./buscarBanco/buscarBanco.component");
var solicitudes_component_1 = require("./solicitudes/solicitudes.component");
var buscarDonantes_component_1 = require("./buscarDonantes/buscarDonantes.component");
var menuBanco_component_1 = require("./menuBanco/menuBanco.component");
//hospitales
var menuHospital_component_1 = require("./menuHospital/menuHospital.component");
var buscarBancoH_component_1 = require("./buscarBancoH/buscarBancoH.component");
var buscarDonanteH_component_1 = require("./buscarDonanteH/buscarDonanteH.component");
var solicitudesHospital_component_1 = require("./solicitudesHospital/solicitudesHospital.component");
var app_routes_1 = require("./app.routes");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routes_1.routing],
        declarations: [app_component_1.AppComponent, estado_component_1.estadoReserva, solicitudes_component_1.solicitud, buscarDonantes_component_1.buscarDonante, buscarBanco_component_1.buscarBanco, menuBanco_component_1.menuBanco, menuHospital_component_1.menuHospital, buscarDonanteH_component_1.buscarDonantesH, solicitudesHospital_component_1.solicitudesH, buscarBancoH_component_1.buscarBancoH],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map