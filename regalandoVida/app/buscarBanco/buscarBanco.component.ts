/**
 * Created by Esteban on 13/05/17.
 */

import { Component } from '@angular/core';

const Bancos:BANCOS[] = [
  { nom:'cruz Roja' },
  { nom:'americas' },
  { nom:'poblado' },
  { nom:'esteban'}
];

@Component({
    selector: 'buscarBanco',
    templateUrl: 'public/bancoDeSangre/buscarBanco.html'
    })
export class buscarBanco{
     banco = Bancos;
     nombreBanco: String = "alcaraz aqui va el nombre del banco";
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

     public limpiar(){

     }
}

export class BANCOS{
    nom:String;
}
