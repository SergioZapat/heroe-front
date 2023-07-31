import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()
export class HeroesService {

  constructor(private http:HttpClient) {
    console.log('Servicio listo para usar!!!');
   }


   getHeroes():Observable<Heroe[]>{


    return this.http.get<Heroe[]>('https://localhost:7234/heroe/listar');
   }

   getHeroe( idx: number) {
    return this.http.get<Heroe>('https://localhost:7234/heroe/obtener/'+ idx);
   }

   buscarHeroes( termino:string) {
    return this.http.get<Heroe[]>('https://localhost:7234/heroe/obtener-por-nombre/'+ termino);
   }
    buscarPorCasa( casa:string) {
      return this.http.post<Heroe[]>('https://localhost:7234/heroe/obtener-por-casa/'+ casa, {});

    }
}
export interface Heroe {
  id:number;
  nombre:string;
  bio:string;
  img:string;
  aparicion:string;
  casa:string;
}
function buscarPorCasa(casa: any, string: any) {
  throw new Error('Function not implemented.');
}

