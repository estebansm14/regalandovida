import { Component } from '@angular/core';

@Component({
   selector: 'my-app',
   template:  `
      <a routerLink="/estado"> a estado </a>
      <a routerLink="/solicitudes">a solicitud</a>
      <a routerLink="/buscar"> a donantes</a>
      <a routerLink="/bancos"> a banco </a>
      <router-outlet></router-outlet>
   `
   })

export class AppComponent{
     public nombre():string{
         return "mete lo papi metelo";
     }
}
