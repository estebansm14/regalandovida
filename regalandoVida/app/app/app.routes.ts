//bancos de sangre
import { estadoReserva } from './estadoR/estado.component';
import {solicitud} from './solicitudes/solicitudes.component';
import {buscarBanco} from './buscarBanco/buscarBanco.component';
import {buscarDonante} from './buscarDonantes/buscarDonantes.component';
import { menuBanco } from './menuBanco/menuBanco.component';

//hospitales
import { menuHospital } from './menuHospital/menuHospital.component';
import { buscarBancoH } from './buscarBancoH/buscarBancoH.component';
import { buscarDonantesH } from './buscarDonanteH/buscarDonanteH.component';
import { solicitudesH } from './solicitudesHospital/solicitudesHospital.component';

import {AppComponent} from './app.component';
import {ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const rutas: Routes = [
     //menu
     {
      path:'',
      component: AppComponent
     },

     //bancos
     {
      path:'estado',
      component: estadoReserva
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
    },
    {
      path: 'menuBanco',
      component: menuBanco
    },
    // hospital
    {
      path: 'menuHospital',
      component: menuHospital
    },
    {
      path: 'buscarDonante',
      component: buscarDonantesH
    },
    {
      path: 'solicitudes',
      component:solicitudesH
    },
    {
      path: 'buscarBanco',
      component:buscarBancoH
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(rutas);
