import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-slides',
  templateUrl: './componente-slides.page.html',
  styleUrls: ['./componente-slides.page.scss'],
})
export class ComponenteSlidesPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  comecar(){
    this.navCtrl.navigateForward('home')

  }

}
