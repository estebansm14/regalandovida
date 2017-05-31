import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';
// Permitimos que este objeto se pueda inyectar con la DI
@Injectable()
export class PeliculasService {

  // Definimos un método que recibe un parámetro y devuelve un string
  constructor(private http:Http){
  }
  getNombres(){
    return this.http.get('/api/bancos')
      .map(res => res.json());
  }


}

export class Bancos{
   _id :String;
   nombre:String
}
