import { Component } from '@angular/core';


@Component({
  templateUrl: 'regalandoVida/public/bancoDeSangre/menuBanco.html',
})


export class menu_banco{
  private nombre: String;


  public mostarNombre(){
     this.nombre = 'banco';
  }

}
