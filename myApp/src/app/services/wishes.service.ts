import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {
  //si quieres privada tienes que especificar, siempre saldra publica
  listas : Lista[] = [];

  constructor() 
  { 
    this.cargarStorage();
    // const Lista1 = new Lista('Recolectar Gemas');
    // const Lista2 = new Lista('Matar a mi Hija');

    // this.listas.push(Lista1, Lista2);
    

  }

  crearLista(titulo:string){
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();
  }

  guardarStorage(){
    localStorage.setItem('data',JSON.stringify(this.listas))
  }

  cargarStorage(){
    if(localStorage.getItem('data')){
      this.listas = JSON.parse(localStorage.getItem('data'));
    }
    else{
      this.listas = [];
    }

   
  }


}
