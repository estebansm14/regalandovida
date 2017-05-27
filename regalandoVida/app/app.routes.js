"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var estado_component_1 = require("./estadoR/estado.component");
var solicitudes_component_1 = require("./solicitudes/solicitudes.component");
var buscarBanco_component_1 = require("./buscarBanco/buscarBanco.component");
var buscarDonantes_component_1 = require("./buscarDonantes/buscarDonantes.component");
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var rutas = [
    {
        path: 'estado',
        component: estado_component_1.estadoReserva
    },
    {
        path: '',
        component: app_component_1.AppComponent
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
    }
];
exports.routing = router_1.RouterModule.forRoot(rutas);
//# sourceMappingURL=app.routes.js.map