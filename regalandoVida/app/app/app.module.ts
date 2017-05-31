import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';

//bancos
import {estadoReserva} from "./estadoR/estado.component";
import {buscarBanco} from "./buscarBanco/buscarBanco.component";
import {solicitud} from "./solicitudes/solicitudes.component";
import {buscarDonante} from "./buscarDonantes/buscarDonantes.component";
import { menuBanco } from './menuBanco/menuBanco.component';

//hospitales
import { menuHospital } from './menuHospital/menuHospital.component';
import { buscarBancoH } from './buscarBancoH/buscarBancoH.component';
import { buscarDonantesH } from './buscarDonanteH/buscarDonanteH.component';
import { solicitudesH } from './solicitudesHospital/solicitudesHospital.component';


import {routing} from "./app.routes";


@NgModule({
    imports: [BrowserModule, routing],
    declarations: [ AppComponent, estadoReserva,solicitud, buscarDonante,buscarBanco, menuBanco, menuHospital, buscarDonantesH,solicitudesH, buscarBancoH ],
    bootstrap:[ AppComponent ]
})

export class AppModule{}
