import { WishItem } from './lista-item.model';

export class Lista{

    id: number;
    titulo: string;
    creadaEn : Date;

    terminadaEn: Date;
    terminada: boolean; //bandera 
    items: WishItem[];

    constructor( titulo :string ){ //Sirve para cuando creamos una instancia de la clase
        this.titulo = titulo

        this.creadaEn = new Date();

        this.terminada = false;

        this.items = [];

        this.id = new Date().getTime();
    }

}