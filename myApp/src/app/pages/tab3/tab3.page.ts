import { Component } from '@angular/core';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(  public deseosServices: WishesService ) {
    
  }


}
