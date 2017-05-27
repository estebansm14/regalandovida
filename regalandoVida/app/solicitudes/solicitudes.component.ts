import { Component } from '@angular/core';
const solicitudes:Solicitud[] = [
   { re:'cruzroja', men: 'hola papus dame los momos'},
   { re:'cruzroja', men: 'hola ke hace dame la droga men'},
   { re:'cruzroja', men: 'hola ke me cuenta mami dame la sangre'},
   { re:'palacio', men: 'hola ke hace dame la droga men'},
   { re:'bhubhu', men: 'hola ke hace dame la droga men'},
   { re:'cruzroja', men: 'hola ke hace dame la droga men'},
   { re:'cruzroja', men: 'hola ke hace dame la droga men'},
   { re:'cruzroja', men: 'hola ke hace dame la droga men'},
   { re:'cruzroja', men: 'hola ke hace dame la droga men'},
   { re:'cruzroja', men: 'hola ke hace dame la droga men'},
   { re:'cruzroja', men: 'hola ke hace dame la droga men'}
];
@Component({
   selector: 'solicitud',
   templateUrl: 'public/bancoDeSangre/solicitudes.html'
})


export class solicitud{
   solicitud = solicitudes;
   nombreBanco: String;
   constructor(){
       this.nombreBanco ="nombre del banco aqui";
   }
}

export class Solicitud{
     re: String;
     men: String;
}
