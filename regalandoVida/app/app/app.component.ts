import { Component } from '@angular/core';
import { PeliculasService } from './buscarBanco/buscarBanco.service';
@Component({
  selector: 'my-app',
  template: `
  <a routerLink="/menuHospital"> a Hospital </a>
  <a routerLink="/menuBanco">a banco</a>
  <router-outlet></router-outlet>
  `
   })

export class AppComponent{
}
