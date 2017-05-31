"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//bancos de sangre
var estado_component_1 = require("./estadoR/estado.component");
var solicitudes_component_1 = require("./solicitudes/solicitudes.component");
var buscarBanco_component_1 = require("./buscarBanco/buscarBanco.component");
var buscarDonantes_component_1 = require("./buscarDonantes/buscarDonantes.component");
var menuBanco_component_1 = require("./menuBanco/menuBanco.component");
//hospitales
var menuHospital_component_1 = require("./menuHospital/menuHospital.component");
var buscarBancoH_component_1 = require("./buscarBancoH/buscarBancoH.component");
var buscarDonanteH_component_1 = require("./buscarDonanteH/buscarDonanteH.component");
var solicitudesHospital_component_1 = require("./solicitudesHospital/solicitudesHospital.component");
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var rutas = [
    //menu
    {
        path: '',
        component: app_component_1.AppComponent
    },
    //bancos
    {
        path: 'estado',
        component: estado_component_1.estadoReserva
    },
    {
        path: 'solicitudes',
        component: solicitudes_component_1.solicitud
    },
    {
        path: 'buscar',
        component: buscarDonantes_component_1.buscarDonante
    },
    {
        path: 'bancos',
        component: buscarBanco_component_1.buscarBanco
    },
    {
        path: 'menuBanco',
        component: menuBanco_component_1.menuBanco
    },
    // hospital
    {
        path: 'menuHospital',
        component: menuHospital_component_1.menuHospital
    },
    {
        path: 'buscarDonante',
        component: buscarDonanteH_component_1.buscarDonantesH
    },
    {
        path: 'solicitudes',
        component: solicitudesHospital_component_1.solicitudesH
    },
    {
        path: 'buscarBanco',
        component: buscarBancoH_component_1.buscarBancoH
    }
];
exports.routing = router_1.RouterModule.forRoot(rutas);
//# sourceMappingURL=app.routes.js.map