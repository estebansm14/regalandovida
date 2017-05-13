import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  templateUrl: 'regalandoVida/public/bancoDeSangre/menuBanco.html',
})


export class menu_banco{
  public nombre: String;

  constructor (){
    this.nombre = 'hola parce';
  }
}
