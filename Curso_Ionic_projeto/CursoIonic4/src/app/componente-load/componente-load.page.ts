import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-componente-load',
  templateUrl: './componente-load.page.html',
  styleUrls: ['./componente-load.page.scss'],
})
export class ComponenteLoadPage implements OnInit {

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  async showLoading(){
    let loading = await this.loadingCtrl.create({
      message : 'Processando...',
      duration : 2000
    });
    return await loading.present();
  }

  async showLoadingCustomizado(nameSpinner:any){
    let loading = await this.loadingCtrl.create({
      spinner : nameSpinner, //"bubbles" | "circles" | "crescent" | "dots" | "lines" | "lines-small" | null | undefined 
      message : 'Processando...',
      duration : 2000, //milisegundos
      translucent : true,
    });
    return await loading.present();
  }
}