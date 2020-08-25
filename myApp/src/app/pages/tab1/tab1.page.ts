import { Component } from '@angular/core';
import { WishesService } from 'src/app/services/wishes.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  constructor(  public deseosService: WishesService,
                private router : Router,
                private alertCtrl : AlertController ) {

    
  }

  async agregarLista() {
      const alert = await this.alertCtrl.create({
        cssClass: 'my-custom-class',
        header: 'Nueva Lista',
        inputs: [
          {
            name:'titulo',
            type:'text',
            placeholder:'Nombre de la lista'
          }
        ],
        buttons: [
          {
            text:'Cancelar',
            role: 'cancel',
            handler: () =>{
              console.log('Cancelar')
            }
          },
          {
            text:'Crear',
            handler: (data) =>{
              console.log(data)
              if(data.titulo.length === 0)
              {
                return;
              }
              this.deseosService.crearLista(data.titulo);
          }
        }
      ]
      });
  
      await alert.present();

    //this.router.navigateByUrl('/tabs/tab1/agregar');
  }


}
