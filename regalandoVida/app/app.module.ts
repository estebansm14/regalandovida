import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {estadoReserva} from "./estadoR/estado.component";
import {buscarBanco} from "./buscarBanco/buscarBanco.component";
import {solicitud} from "./solicitudes/solicitudes.component";
import {buscarDonante} from "./buscarDonantes/buscarDonantes.component";
import {routing} from "./app.routes";


@NgModule({
    imports: [BrowserModule, routing],
    declarations: [ AppComponent, estadoReserva,solicitud, buscarDonante,buscarBanco],
    bootstrap:[ AppComponent ]
})

export class AppModule{}
