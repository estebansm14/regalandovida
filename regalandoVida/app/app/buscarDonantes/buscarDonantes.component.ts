/**
 * Created by Esteban on 13/05/17.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'buscarDonante',
    templateUrl: 'public/bancoDeSangre/buscarDonante.html'
})

export class buscarDonante{
   nombreBanco: String;

   constructor(){
       this.nombreBanco = "estee es el nombre";
   }
}
