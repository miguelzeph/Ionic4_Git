import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-componente-toast',
  templateUrl: './componente-toast.page.html',
  styleUrls: ['./componente-toast.page.scss'],
})
export class ComponenteToastPage implements OnInit {

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async showToast(){
    let toast = await this.toastCtrl.create({
      message: "Enviada via Toast.",
      duration: 2000,
    });
    toast.present();
  }

  async showToastPosition(pos: any){
    let toast = await this.toastCtrl.create({
      message: "Enviada via Toast.",
      duration: 2000,
      position: pos,
    });
    toast.present();
  }

  async showToastButton(){
    let toast = await this.toastCtrl.create({
      message: "Enviada via Toast.",

      position: 'top',
      showCloseButton: true,
    });
    toast.present();
  }

  async showToastButtonText(){
    let toast = await this.toastCtrl.create({
      message: "Enviada via Toast.",
      position: 'top',
      showCloseButton: true,
      closeButtonText: "Fechar"
    });
    toast.present();
  }

  async showToastButtonTranslucent(){
    let toast = await this.toastCtrl.create({
      message: "Enviada via Toast, só que desta vez, é uma mensagem muito grande, vamos ver como irá se comportar o nosso toast...",
      position: 'top',
      showCloseButton: true,
      closeButtonText: "Fechar",
      translucent: true,
    });
    toast.present();
  }

}
