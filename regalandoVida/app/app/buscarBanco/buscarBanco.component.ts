import { Component } from '@angular/core';


@Component({
    selector: 'buscarBanco',
    templateUrl: 'public/bancoDeSangre/buscarBanco.html'
    })
export class buscarBanco{
     banco: Bancos[];
     nombreBanco: String = "alcaraz ";
     bancos: any;
     cAmas: any;
     cAmen: any;
     cOmas: any;
     cOmen: any;
     cABmas: any;
     cABmen: any;
     nombre: String;
     texto: String = "mensaje...";
     constructor(){
     }
}

export class Bancos{
  _id:string;
  nombre:string
}
