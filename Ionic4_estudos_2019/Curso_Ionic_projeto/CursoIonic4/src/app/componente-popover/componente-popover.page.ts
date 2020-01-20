import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

//NÃO ESQUECER DE ADICIONAR A PÁGINA QUE VOCÊ CRIOUUUUUUUUU
import { ComponentePopoverInternoComponent } from '../componente-popover-interno/componente-popover-interno.component';

@Component({
  selector: 'app-componente-popover',
  templateUrl: './componente-popover.page.html',
  styleUrls: ['./componente-popover.page.scss'],
})
export class ComponentePopoverPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  //faça um componente => "ionic generate COMPONENT componentePopoverInterno"
  async showPopover(event: any){
    let popover = await this.popoverCtrl.create({
      component: ComponentePopoverInternoComponent,
      event: event,
      translucent: true
    });
    return await popover.present();

  }

}
