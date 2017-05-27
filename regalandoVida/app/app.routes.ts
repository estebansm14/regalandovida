import { estadoReserva } from './estadoR/estado.component';
import {solicitud} from './solicitudes/solicitudes.component';
import {buscarBanco} from './buscarBanco/buscarBanco.component';
import {buscarDonante} from './buscarDonantes/buscarDonantes.component';
import {AppComponent} from './app.component';
import {ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const rutas: Routes = [
     {
      path:'estado',
      component: estadoReserva
     },
     {
      path:'',
      component: AppComponent
     },
     {
      path:'solicitudes',
      component: solicitud
     },
     {
      path:'buscar',
      component: buscarDonante
     },
     {
      path: 'bancos',
      component: buscarBanco
     }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(rutas);
