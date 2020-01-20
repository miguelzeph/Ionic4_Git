import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-componente-modal-interno',
  templateUrl: './componente-modal-interno.page.html',
  styleUrls: ['./componente-modal-interno.page.scss'],
})
export class ComponenteModalInternoPage implements OnInit {

  constructor(private navPara : NavParams, private alertCtrl: AlertController, private modalCtrl: ModalController) { }

  async ngOnInit() {
    let idade = this.navPara.get('idade')
    let nome = this.navPara.get('nome')
    
    console.log(nome+' tem '+idade+' anos.')

    let alert = await this.alertCtrl.create({
      header: "Curso de Ionic 4",
      message: "Bem vindo "+nome+", temos benefícios para quem possui "+idade,

    })
    return await alert.present()
  }

  async closeModal(){
    let resposta = {nome:"Priscila", idade: 27 }
    this.modalCtrl.dismiss(resposta)
  }

}
