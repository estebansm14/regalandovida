import { Component } from '@angular/core';

@Component({
   selector: 'estadoReserva',
   templateUrl: 'public/bancoDeSangre/estadoReservas.html'
})

export class estadoReserva{
    nombreBanco: String;
    cAmas: any;
    cAmen: any;
    cOmas: any;
    cOmen: any;
    cABmas: any;
    cABmen: any;
    constructor(){
       this.nombreBanco = "hola papus mmm";
    }

    public cambiar(ama:String){
      this.cAmas = ama;
    }

}
